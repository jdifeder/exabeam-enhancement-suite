/*global chrome*/
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { TreeTable } from 'primereact/treetable';
import { ProgressBar } from 'primereact/progressbar';
import { Divider } from 'primereact/divider';
import { TabView,TabPanel } from 'primereact/tabview';
import { Badge } from 'primereact/badge';
import { Toast } from 'primereact/toast';
import { observer } from "mobx-react-lite";
import ReactJson from 'react-json-view';
import NumberFormat from 'react-number-format';
import axios from 'axios';

import * as Sentry from "@sentry/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { configure } from "mobx"



import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './dataTable.css';

import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';

configure({
  enforceActions: "never",
})

Sentry.init({ 
  dsn: "https://2bb4d42f4f9e450faa2c83c91b87876e@o187074.ingest.sentry.io/5699993",
  release: "exabeam-enhancement-suite@0.400",
 });

var versionNumber = '';

const tablePercentFormat = (rowData, props) => {
  let percentField = '';
  percentField = percentField.concat(props.field,'Percent')
  return (
    <>
    <NumberFormat value={rowData[props.field]} displayType={'text'} thousandSeparator={true} />
    {/* <span>{rowData[props.field]} </span> */}
    <span style={{ color: 'green' }}> ({rowData[percentField]}%) </span>
  </>)
}

const numberFormatter = (value) => {
  return (
    <NumberFormat value={value} displayType={'text'} thousandSeparator={true} />
  )
}

const eventValueFormat = (rowData, props) => {
  let formattedValue = rowData[props.field];
  if(typeof formattedValue === 'object' && formattedValue !== null) formattedValue = JSON.stringify(rowData[props.field]);
  return (
    <>
      <span>{formattedValue} </span>
    </>
  )
}

const prettyJson = (data, depth) => {
  let theTruth = false;
  let theDepth = 2;
  if(typeof depth !== 'undefined') theDepth = depth
  return <ReactJson src={data} name={false} collapsed={theDepth} sortKeys={true} iconStyle='triangle' displayObjectSize={false} displayDataTypes={theTruth} quotesOnKeys={theTruth} displayArrayKey={theTruth} />;
}

const parsingIssueBadge = (header, value) => {
  return (
    <>
    {value > 0 ? 
      <>
      <span>{header} </span>
      <Badge value={value} severity="danger" className="p-mr-2"></Badge>
      </>
    :false}
    </>
    
  )
}



const myHomeView = new Home();

chrome.tabs.query({ active: true, currentWindow: true }, ([{ id, url }]) => {
  chrome.tabs.sendMessage(id, {message: "versionCheck"}, (response) => {
    versionNumber = response;
    checkUpdate(versionNumber);
  });
})

const checkUpdate = (version) => {
  axios('https://api.github.com/repos/jdifeder/exabeam-enhancement-suite/releases', {
    method: 'GET'
  }).then(response => {
    // console.log(response.data);
    var versionNumbers = [];
    for (var i=0; i < response.data.length; i++) {
      versionNumbers.push(parseFloat(response.data[i].tag_name.substring(1)))
    }
    // console.log('versionNumbers as numbers = ', versionNumbers);
    myHomeView.highestVersion = Math.max(...versionNumbers);
    // console.log('highestVersion = ',highestVersion);
    if(myHomeView.highestVersion > version) {
      myHomeView.needsUpdate = true;
      myHomeView.showStart = false;
      for (var i=0; i < response.data.length; i++) {
        if(parseFloat(response.data[i].tag_name.substring(1)) === myHomeView.highestVersion) {
          // myHomeView.downloadLink = response.data[i].assets[0].browser_download_url
          myHomeView.downloadLink = response.data[i].html_url;
        }
      }
      // console.log('downloadLink = ', downloadLink);
    }
  }).catch(error => {
    console.log('Could not reach Github to check for latest release')
    console.log(error);
  });
}



const HomeView = observer(() => {

  

  const dt = useRef(null);
  const toast = useRef(null);

  const TableHeader = (headerName, theClass, filterID) => {
    const exportCSV = () => {
      dt.current.exportCSV();
    };
  
    return (
    <div className="table-header">
      {headerName}
      <div style={{ textAlign: "left" }}><Button type="button" icon="pi pi-external-link" label="Export" onClick={exportCSV}></Button></div>
      {filterID !== '' ? 
        <span className="p-input-icon-right">
          <i className="pi pi-search" />
          <InputText type="search" value={theClass[filterID]} onInput={(e) => theClass[filterID] = e.target.value} placeholder="Search" />
        </span>
      :false}
      
    </div>
    )
  }

  const downloadUpdate = () => {
    window.open(myHomeView.downloadLink);
  }

  const getTab = () => {
    toast.current.show({severity:'info', summary: 'Loading', life: 3000});
    myHomeView.getTab();
  }

  return (
    <>
    <Toast ref={toast} />
      {/* <div className="p-grid"> */}
        {myHomeView.needsUpdate ?
          <> 
            <div className="p-grid">
              <div className="p-col-3"></div>
              <div className="p-col-6">
                <Card title="Update Available" subTitle="Please download to fix known issues">
                  <p style={{ color: "red" }}>Current Version: {versionNumber}</p>
                  <p>Latest Version: {myHomeView.highestVersion}</p>
                  <span>
                    <p style={{ color: "blue", 'text-decoration': 'underline',  cursor: "pointer" }} onClick={() => myHomeView.onUpdateIssueSelect()}>Update not applying<i className="pi pi-question-circle"></i> </p>
                    {/* <i className="pi pi-question-circle" style={{ cursor: "pointer" }} onClick={() => myHomeView.onUpdateIssueSelect()}></i> */}
                  </span>
                   
                  <br/>
                  <Button label="Download" onClick={() => downloadUpdate()} />
                  <br/><br/>
                  <Button label="Skip" onClick={() => getTab()} />
                </Card>
                <br/>
              </div>
            </div>
          </>
        :false}
        {myHomeView.showStart ?
          <>
          <div className="p-grid">
            <div className="p-col-3"></div>
            <div className="p-col-6">
              <Card title="Exabeam Enhancement Suite">
                <p>Browse Triggered Rules</p>
                {/* <p>Data Validation (Limited)</p> */}
                <br/>
                <Button label="Open Exabeam Enhancement Suite" onClick={() => getTab()} />
              </Card>
            </div>
          </div>
          </> 
          
        :false}
        {myHomeView.showHome ?
          <>
            <div className="p-grid">
              <div className="p-col-3">
                <Card title="Notable Triggered Rules" subTitle="User Sessions">
                  <p>Get all User Sessions for a period of days</p>
                  <p>Browse Triggered Rules</p>
                  <p>Minimum Session Risk Score = 90</p>
                  <label><b>Previous days to query</b> </label> <InputText value={myHomeView.queryUnitNum} onInput={(e) => myHomeView.queryUnitNum= e.target.value} />
                  <br/>
                  <Button label="Start" onClick={() => myHomeView.getNotables('session', '90')} /> <br/>
                </Card>
              </div>
              <div className="p-col-3">
                <Card title="Notable Triggered Rules" subTitle="Asset Sessions">
                  <p>Get all Asset Sessions for a period of days</p>
                  <p>Browse Triggered Rules</p>
                  <p>Minimum Session Risk Score = 90</p>
                  <label><b>Previous days to query</b> </label> <InputText value={myHomeView.queryUnitNum} onInput={(e) => myHomeView.queryUnitNum= e.target.value} />
                  <br/>
                  <Button label="Start" onClick={() => myHomeView.getNotables('asset', '90')} /> <br/>
                </Card>
              </div>
              <div className="p-col-3">
                <Card title="All Triggered Rules" subTitle="User Sessions">
                  <p>Get all User Sessions for a period of days</p>
                  <p>Browse Triggered Rules</p>
                  <p>Minimum Session Risk Score = 1</p>
                  <label><b>Previous days to query</b> </label> <InputText value={myHomeView.queryUnitNum} onInput={(e) => myHomeView.queryUnitNum= e.target.value} />
                  <br/>
                  <Button label="Start" onClick={() => myHomeView.getNotables('session', '1')} /> <br/>
                </Card>
              </div>
              <div className="p-col-3">
                <Card title="All Triggered Rules" subTitle="Asset Sessions">
                  <p>Get all Asset Sessions for a period of days</p>
                  <p>Browse Triggered Rules</p>
                  <p>Minimum Session Risk Score = 1</p>
                  <label><b>Previous days to query</b> </label> <InputText value={myHomeView.queryUnitNum} onInput={(e) => myHomeView.queryUnitNum= e.target.value} />
                  <br/>
                  <Button label="Start" onClick={() => myHomeView.getNotables('asset', '1')} /> <br/>
                </Card>
              </div>
            </div>

            {/* <div className="p-grid">
              <div className="p-col-3">
                <Card title="Data Validation" subTitle="BETA">
                  <p>Get 2 samples of every Event Type for a period of days</p>
                  <p>Get Raw Event from DL if DL is present</p>
                  <p>Browse event samples to discover issues</p>
                  <label><b>Previous days to query</b> </label> <InputText value={myHomeView.queryUnitNum} onInput={(e) => myHomeView.queryUnitNum= e.target.value} />
                  <br/>
                  <Button label="Start" onClick={() => myHomeView.startValidation()} /> <br/>
                </Card>
              </div>
            </div> */}
            
          </>
        :false}
        {myHomeView.showHome && myHomeView.showpRuleTuning  ?       
        <div>
          <div className="p-col-12" >
            <h2>Previous Triggered Rule Queries</h2>
            <DataTable value={myHomeView.previousRuleTuning} className="p-datatable-sm p-datatable-striped" ref={dt} paginator
              paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5,10,20,50]}
              header={TableHeader('',myHomeView,'previousRuleTuningGlobalFilter')}
              globalFilter={myHomeView.previousRuleTuningGlobalFilter} loading={myHomeView.loading} resizableColumns sortField="id" sortOrder={-1}>
              <Column header="Open" body={myHomeView.openTableButtonRuleTuning}></Column>
              {myHomeView.pRuleTuningDynamicColumns}
              <Column header="Del" body={myHomeView.delTableButtonRuleTuning}></Column>
            </DataTable>
          </div>         
        </div>
          : false}
        {/* {myHomeView.showHome && myHomeView.showpDataValidation ?
          <div className="p-col-12" >
            <h2>Previous Data Validation Sessions</h2>
            <DataTable value={myHomeView.previousDataValidation} className="p-datatable-sm p-datatable-striped" ref={dt} paginator
              paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5,10,20,50]}
              header={TableHeader('',myHomeView,'previousDataValidationGlobalFilter')}
              globalFilter={myHomeView.previousDataValidationGlobalFilter} loading={myHomeView.loading} resizableColumns sortField="id" sortOrder={-1}>
              <Column header="Open" body={myHomeView.openTableButtonDataValidation}></Column>
              {myHomeView.pDataValidationDynamicColumns}
              <Column header="Del" body={myHomeView.delTableButtonDataValidation}></Column>
            </DataTable>
          </div>
        :false} */}


    </>
  );
}
  
      
);

const RuleTuningView = observer(() => {
  const dt = useRef(null);
  const TableHeader = (headerName, theClass, filterID) => {
    const exportCSV = () => {
      dt.current.exportCSV();
    };
  
    return (
    <div className="table-header">
      {headerName}
      <div style={{ textAlign: "left" }}><Button type="button" icon="pi pi-external-link" label="Export" onClick={exportCSV}></Button></div>
      {filterID !== '' ? 
        <span className="p-input-icon-right">
          <i className="pi pi-search" />
          <InputText type="search" value={theClass[filterID]} onInput={(e) => theClass[filterID] = e.target.value} placeholder="Search" />
        </span>
      :false}
      
    </div>
    )
  }

  return (
    <>
    {myHomeView.showTuning ?
    
      <div className="p-grid">
        <div className="p-col-3">
          <Card title="Summary of Sessions" style={{marginBottom: '2em' }}>
            <b>Total Session Scores:</b> {numberFormatter(myHomeView.uSessionSummaryRiskScore)} <br/>
            <b>Total Session Count:</b> {numberFormatter(myHomeView.uSessionSummarySessionCount)} <br/>
            <b>Notable Session Count:</b> {numberFormatter(myHomeView.uSessionSummaryNotableCount)} <br/>
            <b>Notable Per Day (Average):</b> {numberFormatter(myHomeView.uSessionSummaryNotablePerDay)} <br/>
            <Button label="Home" onClick={() => myHomeView.toggleShowHome()} /> <br/>
          </Card>
        </div>
        <div className="p-col-3">
          <Card title="Results of Tuning" style={{marginBottom: '2em' }}>
            <b>Session Scores:</b> {numberFormatter(myHomeView.uSessionSummaryTunedRiskScore)} {myHomeView.uSessionSummaryTunedRiskScorePercent ? <span style={{color: 'green'}}>({myHomeView.uSessionSummaryTunedRiskScorePercent}%) </span> :false} <br/>
            <b>Notable Session Count:</b> {numberFormatter(myHomeView.uSessionSummaryTunedNotableCount)} {myHomeView.uSessionSummaryTunedRiskScorePercent ? <span style={{color:'green'}}>({myHomeView.uSessionSummaryTunedNotableCountPercent}%) </span> :false}  <br/>
            <b>Notable Per Day (Average):</b> {numberFormatter(myHomeView.uSessionSummaryTunedNotablePerDay)} {myHomeView.uSessionSummaryTunedRiskScorePercent ? <span style={{color:'green'}}>({myHomeView.uSessionSummaryTunedNotablePerDayPercent}%) </span> :false}  <br/>
          </Card>
        </div>
        <div className="p-col-6">
          <Card title="Tuned Rule Conditions" style={{marginBottom: '2em' }}>
            <TreeTable value={myHomeView.ruleTuning}>
              <Column field="name" header="Rule" expander></Column>
              <Column field="value" header="Event Value"></Column>
              <Column field="count" header="Rule Count"></Column>
              <Column field="score" header="Score"></Column>
            </TreeTable>
          </Card>
        </div>
      </div>
    :false}
    {myHomeView.showTuning && !myHomeView.showEvents ?
      <>
        <div className="p-grid">
          <div className="p-col-12">
            <TabView activeIndex={myHomeView.activeIndex} onTabChange={(e) => myHomeView.setActiveIndex(e.index)}>
              <TabPanel header="All Rules">
                <div className="p-grid">
                  <div className="p-col-12">
                    <h2>Rules</h2>
                    <DataTable value={myHomeView.ruleData} className="p-datatable-sm p-datatable-striped" ref={dt} paginator
                      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={20} rowsPerPageOptions={[5,10,20,50]}
                      header={TableHeader('',myHomeView,'')} stateStorage="session" stateKey="rulesTableState"
                      globalFilter={myHomeView.ruleDataGlobalFilter} loading={myHomeView.loading} resizableColumns columnResizeMode="fit" sortField="totalScore" sortOrder={-1}>
                      <Column field="ruleDef.ruleCategory" header="Rule Category" sortable filter filterMatchMode="contains" style={{width:'20%'}}/>
                      <Column field="rule" header="Rule ID" body={myHomeView.rulesAndModelsRuleId} sortable filter filterMatchMode="contains" style={{width:'15%'}}/>
                      <Column field="ruleName" header="Rule Name" sortable filter filterMatchMode="contains" style={{width:'35%'}}/>
                      <Column field="count" body={myHomeView.openTableButtonSelectRule} header="Events" sortable style={{width:'10%'}}/>
                      <Column field="sessionCount" header="Sessions" body={myHomeView.openTableButtonSelectSessions} sortable style={{width:'10%'}}/>
                      <Column field="totalScore" header="Total Score" body={tablePercentFormat} sortable style={{width:'10%'}}/>
                    </DataTable>
                  </div>
                </div>
              </TabPanel>
              <TabPanel header="By Category">
                <div className="p-grid">
                  <div className="p-col-12">
                    <h3>NOTE: Category table will not change based on any simulated rule tuning</h3>
                  </div>
                  {myHomeView.showCategory ? 
                    <div className="p-col-12">
                      <h2>Rule Categories</h2>
                      <DataTable value={myHomeView.ruleCategories} className="p-datatable-sm p-datatable-striped" ref={dt}
                        header={TableHeader('',myHomeView,'')} stateStorage="session" stateKey="categoryTableState"
                        globalFilter={myHomeView.ruleDataGlobalFilter} loading={myHomeView.loading} resizableColumns columnResizeMode="fit" sortField="totalScore" sortOrder={-1}>
                        <Column field="categoryName" header="Category" sortable filter filterMatchMode="contains" style={{width:'25%'}}/>
                        <Column field="count" header="Rule Triggers" body={myHomeView.openTableButtonSelectCategory} sortable style={{width:'25%'}}/>
                        <Column field="sessionCount" header="Sessions" body={myHomeView.numberFormatter} sortable style={{width:'25%'}}/>
                        <Column field="totalScore" header="Total Score" body={myHomeView.numberFormatter} sortable style={{width:'25%'}}/>
                      </DataTable>
                    </div>
                  :false}
                  {myHomeView.showCategoryRules ? 
                    <div className="p-col-12">
                      <h2>Rule Category - {myHomeView.selectedCategory}</h2>
                      <Button label="Back to all Rule Categories" onClick={() => myHomeView.toggleShowCategories()} /> 
                      <DataTable value={myHomeView.selectedRules} className="p-datatable-sm p-datatable-striped" ref={dt} paginator
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={20} rowsPerPageOptions={[5,10,20,50]}
                        header={TableHeader('',myHomeView,'')} stateStorage="session" stateKey="rulesTableState"
                        globalFilter={myHomeView.ruleDataGlobalFilter} loading={myHomeView.loading} resizableColumns columnResizeMode="fit" sortField="totalScore" sortOrder={-1}>
                        <Column field="ruleDef.ruleCategory" header="Rule Category" sortable filter filterMatchMode="contains" style={{width:'20%'}}/>
                        <Column field="rule" header="Rule ID" body={myHomeView.rulesAndModelsRuleId} sortable filter filterMatchMode="contains" style={{width:'15%'}}/>
                        <Column field="name" header="Rule Name" sortable filter filterMatchMode="contains" style={{width:'35%'}}/>
                        <Column field="count" header="Events" body={myHomeView.openTableButtonSelectRule} sortable style={{width:'10%'}}/>
                        <Column field="sessionCount" header="Sessions" body={myHomeView.buttonViewSessions} sortable style={{width:'10%'}}/>
                        <Column field="totalScore" header="Total Score" body={myHomeView.numberFormatter} sortable style={{width:'10%'}}/>
                      </DataTable>
                    </div>
                  :false}
                </div>
              </TabPanel>
              <TabPanel header="By MITRE Technique">
                <div className="p-grid">
                  <div className="p-col-12">
                    <h3>NOTE: MITRE table will not change based on any simulated rule tuning</h3>
                  </div>
                  {myHomeView.showMitre ? 
                    <div className="p-col-12">
                      <h2>MITRE Techniques</h2>
                      <DataTable value={myHomeView.ruleLabels} className="p-datatable-sm p-datatable-striped" ref={dt}
                        header={TableHeader('',myHomeView,'')} stateStorage="session" stateKey="mitreTableState"
                        globalFilter={myHomeView.ruleDataGlobalFilter} loading={myHomeView.loading} resizableColumns columnResizeMode="fit" sortField="totalScore" sortOrder={-1}>
                        <Column field="labelId" header="Technique ID" sortable filter filterMatchMode="contains" style={{width:'25%'}}/>
                        <Column field="labelName" header="Technique Name" sortable filter filterMatchMode="contains" style={{width:'30%'}}/>
                        <Column field="count" header="Rule Triggers" body={myHomeView.openTableButtonSelectMitre} sortable style={{width:'15%'}}/>
                        <Column field="sessionCount" header="Sessions" body={myHomeView.numberFormatter} sortable style={{width:'15%'}}/>
                        <Column field="totalScore" header="Total Score" body={myHomeView.numberFormatter} sortable style={{width:'15%'}}/>
                      </DataTable>
                    </div>
                  :false}
                  {myHomeView.showMitreRules ? 
                    <div className="p-col-12">
                      <h2>MITRE Technique - {myHomeView.selectedMitre}</h2>
                      <Button label="Back to all MITRE Techniques" onClick={() => myHomeView.toggleShowMitre()} /> 
                      <DataTable value={myHomeView.selectedRules} className="p-datatable-sm p-datatable-striped" ref={dt} paginator
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={20} rowsPerPageOptions={[5,10,20,50]}
                        header={TableHeader('',myHomeView,'')} stateStorage="session" stateKey="rulesTableState"
                        globalFilter={myHomeView.ruleDataGlobalFilter} loading={myHomeView.loading} resizableColumns columnResizeMode="fit" sortField="totalScore" sortOrder={-1}>
                        <Column field="ruleDef.ruleCategory" header="Rule Category" sortable filter filterMatchMode="contains" style={{width:'20%'}}/>
                        <Column field="rule" header="Rule ID" body={myHomeView.rulesAndModelsRuleId} sortable filter filterMatchMode="contains" style={{width:'15%'}}/>
                        <Column field="name" header="Rule Name" sortable filter filterMatchMode="contains" style={{width:'35%'}}/>
                        <Column field="count" header="Events" body={myHomeView.openTableButtonSelectRule} sortable style={{width:'10%'}}/>
                        <Column field="sessionCount" header="Sessions" body={myHomeView.buttonViewSessions} sortable style={{width:'10%'}}/>
                        <Column field="totalScore" header="Total Score" body={myHomeView.numberFormatter} sortable style={{width:'10%'}}/>
                      </DataTable>
                    </div>
                  :false}
                </div>
              </TabPanel>
              <TabPanel header="By Vendor">
                <div className="p-grid">
                  <div className="p-col-12">
                    <h3>NOTE: Vendor table will not change based on any simulated rule tuning</h3>
                  </div>
                  {myHomeView.showSource ? 
                    <div className="p-col-12">
                      <h2>Vendors</h2>
                      <DataTable value={myHomeView.ruleSources} className="p-datatable-sm p-datatable-striped" ref={dt}
                        header={TableHeader('',myHomeView,'')} stateStorage="session" stateKey="sourceTableState"
                        globalFilter={myHomeView.ruleDataGlobalFilter} loading={myHomeView.loading} resizableColumns columnResizeMode="fit" sortField="totalScore" sortOrder={-1}>
                        <Column field="sourceName" header="Vendor" sortable filter filterMatchMode="contains" style={{width:'25%'}}/>
                        <Column field="count" header="Rule Triggers" body={myHomeView.openTableButtonSelectSourceRule} sortable style={{width:'25%'}}/>
                        <Column field="sessionCount" header="Sessions" body={myHomeView.numberFormatter} sortable style={{width:'25%'}}/>
                        <Column field="totalScore" header="Total Score" body={myHomeView.numberFormatter} sortable style={{width:'25%'}}/>
                      </DataTable>
                    </div>
                  :false}
                  {myHomeView.showSourceRules ? 
                    <div className="p-col-12">
                      <h2>Vendor - {myHomeView.selectedSource}</h2>
                      <Button label="Back to all Vendors" onClick={() => myHomeView.toggleShowSources()} /> 
                      <DataTable value={myHomeView.selectedRules} className="p-datatable-sm p-datatable-striped" ref={dt} paginator
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={20} rowsPerPageOptions={[5,10,20,50]}
                        header={TableHeader('',myHomeView,'')} stateStorage="session" stateKey="rulesTableState"
                        globalFilter={myHomeView.ruleDataGlobalFilter} loading={myHomeView.loading} resizableColumns columnResizeMode="fit" sortField="totalScore" sortOrder={-1}>
                        <Column field="ruleDef.ruleCategory" header="Rule Category" sortable filter filterMatchMode="contains" style={{width:'20%'}}/>
                        <Column field="rule" header="Rule ID" body={myHomeView.rulesAndModelsRuleId} sortable filter filterMatchMode="contains" style={{width:'15%'}}/>
                        <Column field="name" header="Rule Name" sortable filter filterMatchMode="contains" style={{width:'35%'}}/>
                        <Column field="count" header="Events" body={myHomeView.openTableButtonSelectRuleSource} sortable style={{width:'10%'}}/>
                        <Column field="sessionCount" header="Sessions" body={myHomeView.buttonViewSessions} sortable style={{width:'10%'}}/>
                        <Column field="totalScore" header="Total Score" body={myHomeView.numberFormatter} sortable style={{width:'10%'}}/>
                      </DataTable>
                    </div>
                  :false}
                </div>
              </TabPanel>
            </TabView>
          </div>
        </div>

        
      </>
    :false}
    {!myHomeView.showTuning && myHomeView.showEvents ?
    <div>
      <div className="p-grid" >
        <div className="p-col-12">
          <Card title={myHomeView.selectedRuleHeader} style={{ width: '25rem', marginBottom: '2em' }}>
            <b>Event Count: </b> {numberFormatter(myHomeView.selectedRuleCount)} <br/>
            <b>Session Count: </b> {numberFormatter(myHomeView.selectedRuleSessionCount)} <br/>
            <b>Total Score: </b> {numberFormatter(myHomeView.selectedRuleScore)} <br/>
            <Button label="Back" onClick={() => myHomeView.toggleShowEvents()} /> <br/>
          </Card>
        </div>
        <div className="p-col-12">
          <h2>Events</h2>
          <DataTable value={myHomeView.eventSummaryDataDone} className="p-datatable-sm p-datatable-striped" ref={dt} paginator
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={20} rowsPerPageOptions={[5,10,20,50]}
            header={TableHeader('Events',myHomeView,'eventSummaryGlobalFilter')}
            globalFilter={myHomeView.eventSummaryGlobalFilter} loading={myHomeView.loading} resizableColumns columnResizeMode="fit" sortField="totalScore" sortOrder={-1}>
            <Column header="Filter" body={myHomeView.openTableButtonFilterEvent} style={{width:'10%'}}></Column>
            <Column field="fieldName" header="Field Name" sortable filter filterMatchMode="contains" style={{width:'15%'}}/>
            <Column field="fieldValue" header="Value" body={eventValueFormat} sortable filter filterMatchMode="contains" style={{width:'30%'}}/>
            <Column field="count" header="Event Count" body={tablePercentFormat} sortable style={{width:'15%'}}/>
            <Column field="sessionCount" header="Session Count" body={myHomeView.openTableButtonSelectSessions} sortable style={{width:'15%'}}/>
            <Column field="totalScore" header="Total Score" body={tablePercentFormat} sortable style={{width:'15%'}}/>
          </DataTable>
        </div>
      </div>
    </div>
    
      :false}
    
        
  </>
  );
}
  
);

// const DataValidationTables = observer(() => {
//   const dt = useRef(null);
//   const TableHeader = (headerName, theClass, filterID) => {
//     const exportCSV = () => {
//       dt.current.exportCSV();
//     };
  
//     return (
//     <div className="table-header">
//       {headerName}
//       <div style={{ textAlign: "left" }}><Button type="button" icon="pi pi-external-link" label="Export" onClick={exportCSV}></Button></div>
//       {filterID !== '' ? 
//         <span className="p-input-icon-right">
//           <i className="pi pi-search" />
//           <InputText type="search" value={theClass[filterID]} onInput={(e) => theClass[filterID] = e.target.value} placeholder="Search" />
//         </span>
//       :false}
      
//     </div>
//     )
//   }
//   return (
//     <>
//     {myHomeView.showValidation ?
//     <>
//     <div className="p-grid">
//       <div className="p-col-12">
//         <h1>Data Validation</h1>
//       </div>
//     </div>
//     <TabView>
//         <TabPanel header="Data Sources">
//         <div className="p-grid">
//           <div className="p-col-12">
//             <h3>Data Sources</h3>
//             <DataTable value={myHomeView.sourcesDone} className="p-datatable-sm p-datatable-striped" ref={dt}
//               header={TableHeader('',myHomeView,'')}
//               loading={myHomeView.loading} resizableColumns columnResizeMode="fit" sortField="source" sortOrder={-1}>
//               <Column field="source" header="Source" sortable filter filterMatchMode="contains"/>
//               <Column field="name" header="Event Type" sortable filter filterMatchMode="contains"/>
//               <Column field="inSession" header="User Sessions" body={myHomeView.booleanFormat} sortable filter filterMatchMode="contains"/>
//               <Column field="inAsset" header="Asset Sessions" body={myHomeView.booleanFormat} sortable filter filterMatchMode="contains"/>
//               <Column header="Sample Events" body={myHomeView.openTableButtonSelectSampleEvents}></Column>
//               <Column field="configIssues" header="Missing Events" body={myHomeView.openTableButtonSelectConfigIssue} sortable filter filterMatchMode="gte"/>
//               <Column field="parsingIssues" header="Parsing Issues" body={myHomeView.openTableButtonSelectParsingIssue} sortable filter filterMatchMode="gte"/>
//             </DataTable>
//           </div>
//         </div>
//         </TabPanel>
//         <TabPanel header="Event Types">
//           <div className="p-grid">
//             <div className="p-col-12">
//               <h3>Event Types</h3>
//               <DataTable value={myHomeView.eventTypesDone} className="p-datatable-sm p-datatable-striped" ref={dt}
//                 header={TableHeader('',myHomeView,'')}
//                 loading={myHomeView.loading} resizableColumns columnResizeMode="fit" sortField="name" sortOrder={1}>
//                 <Column field="name" header="Event Type" sortable filter filterMatchMode="contains"/>
//                 <Column field="inSession" header="User Sessions" body={myHomeView.booleanFormat} sortable filter filterMatchMode="contains"/>
//                 <Column field="inAsset" header="Asset Sessions" body={myHomeView.booleanFormat} sortable filter filterMatchMode="contains"/>
//                 <Column field="uniqueUsers" header="Users" body={myHomeView.eventTypeUsers} sortable/>
//                 <Column field="uniqueHosts" header="Hosts" body={myHomeView.eventTypeHosts} sortable/>
//                 <Column field="fieldsPopulatingPercent" header="Field Count" body={myHomeView.eventTypeFields} sortable/>
//                 <Column field="modelsPopulatingPercent" header="Models Populating" body={myHomeView.eventTypeModelsPopulating} sortable/>
//                 <Column field="rulesCouldTriggerPercent" header="Rules Can Trigger" body={myHomeView.eventTypeRulesCouldTrigger} sortable/>
//               </DataTable>
//             </div>
//           </div>
//         </TabPanel>
//         <TabPanel header="Rules">
//           <div className="p-grid">
//             <div className="p-col-12">
//               <h3>Rules</h3>
//               <DataTable value={myHomeView.rulesAndModelsDone} className="p-datatable-sm p-datatable-striped" ref={dt} paginator
//               paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
//               currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={20} rowsPerPageOptions={[5,10,20,50]}
//                 header={TableHeader('',myHomeView,'rulesAndModelsGlobalFilter')}
//                 globalFilter={myHomeView.rulesAndModelsGlobalFilter} loading={myHomeView.loading} resizableColumns columnResizeMode="fit" sortField="ruleCat" sortOrder={1}>
//                 <Column field="ruleCat" header="Rule Category" sortable filter filterMatchMode="contains"/>
//                 <Column field="ruleId" header="Rule ID" body={myHomeView.rulesAndModelsRuleId} sortable filter filterMatchMode="contains"/>
//                 <Column field="ruleName" header="Rule Name" sortable filter filterMatchMode="contains"/>
//                 <Column field="modelName" header="Model" body={myHomeView.rulesAndModelsModelName} sortable filter filterMatchMode="contains"/>
//                 <Column field="modelDisabled" header="Disabled" sortable filter filterMatchMode="contains"/>
//                 <Column field="eventInRuleType" header="Event Present" body={myHomeView.rulesAndModelsEventInRule} sortable filter filterMatchMode="contains"/>
//                 <Column field="featurePresent" header="Feature Present" body={myHomeView.booleanFormat} sortable filter filterMatchMode="contains"/>
//                 <Column field="populating" header="Model Populating" body={myHomeView.booleanFormat} sortable filter filterMatchMode="contains"/>
//                 <Column field="hasTriggered" header="Has Triggered" body={myHomeView.booleanFormat} sortable filter filterMatchMode="contains"/>
//               </DataTable>
//           </div>
//           </div>
//         </TabPanel>
//     </TabView> 
//     </>
//     :false}
//   </>
//   );
// });

const Dialogs = observer(() => {
  const dt = useRef(null);
  const TableHeader = (headerName, theClass, filterID) => {
    const exportCSV = () => {
      dt.current.exportCSV();
    };
  
    return (
    <div className="table-header">
      {headerName}
      <div style={{ textAlign: "left" }}><Button type="button" icon="pi pi-external-link" label="Export" onClick={exportCSV}></Button></div>
      {filterID !== '' ? 
        <span className="p-input-icon-right">
          <i className="pi pi-search" />
          <InputText type="search" value={theClass[filterID]} onInput={(e) => theClass[filterID] = e.target.value} placeholder="Search" />
        </span>
      :false}
      
    </div>
    )
  }
  return (
    <>
    <Dialog header="Data Validation Progress" visible={myHomeView.visibleDataValidationProgress} style={{ width: '80vw' }} onHide={() => myHomeView.onHide('visibleDataValidationProgress')}>
      <p>Models: {myHomeView.doneCountModels} out of {myHomeView.todoModels}</p>
      <p>Rules: {myHomeView.doneCountRules} out of {myHomeView.todoRules}</p>
      <p>Get Event Type Names: {myHomeView.getAllEventsProgress}</p>
      <p>Event Types: {myHomeView.doneCountEventTypes} out of {myHomeView.todoEventTypes}</p>
      <p>User Sessions: {myHomeView.doneCountEventTypeSessions} out of {myHomeView.todoEventTypeSessions}</p>
      <p>User Session Events: {myHomeView.doneCountEventTypeSessionsDetails} out of {myHomeView.todoEventTypeSessionsDetails}</p>
      <p>Asset Sessions: {myHomeView.doneCountEventTypeAssets} out of {myHomeView.todoEventTypeAssets}</p>
      {/* <p>Asset Session Events: {myHomeView.doneCountEventTypeAssetsDetails} out of {myHomeView.todoEventTypeAssetsDetails}</p> */}
      <p>Raw Event Fetch: {myHomeView.doneRawEventsCount} out of {myHomeView.todoRawEventsCount}</p>
      <ProgressBar value={myHomeView.dataValidationProgress} />
      {myHomeView.errorVisible ?
        <>
          {myHomeView.rawEventErrors > 0 ?
            
            <span>
            Raw Event Errors: {myHomeView.rawEventErrors } <br></br>
            Will retry up to 10 times, retry attempt = {myHomeView.retryAttemptRawEventsCount}
            </span>
          :false}
          {myHomeView.errors.length > 0 ? 
            <div> {prettyJson(myHomeView.errors) } </div>
          :false}
          
        </>
        
      :false}
    </Dialog>

    <Dialog header="Timeline Analysis Progress" visible={myHomeView.visibleTuningProgress} style={{ width: '80vw' }} onHide={() => myHomeView.onHide('visibleTuningProgress')}>
      <p>Timelines: {myHomeView.doneCountTimelines} out of {myHomeView.todoTimelines}</p>
      <ProgressBar value={myHomeView.tuningProgress} />
      {myHomeView.errorVisible ?
          <div>
            {prettyJson(myHomeView.errors) }
          </div>
      :false}
    </Dialog>

    <Dialog header="Event Types" visible={myHomeView.visibleMissingEventTypes} style={{ width: '80vw' }} onHide={() => myHomeView.onHide('visibleMissingEventTypes')}>
      <div className="p-grid">
        <div className="p-col-6">
            <h3>Required Event Types</h3>
            <div>{prettyJson(myHomeView.selectedRequiredEventTypes)}</div>
        </div>
        
        <div className="p-col-6">
            <h3>Present Event Types</h3>
            <div>{prettyJson(myHomeView.selectedPresentEventTypes) }</div>
        </div>
      </div>
    </Dialog>

    <Dialog header="Source" visible={myHomeView.visibleSelectedSource} style={{ width: '80vw' }} onHide={() => myHomeView.onHide('visibleSelectedSource')}>
      <div className="p-grid">
        <div className="p-col-6">
            <h3>{myHomeView.sessionHeader}</h3>
            <div>{prettyJson(myHomeView.selectedSourceSessionEvents) }</div>
        </div>
        <div className="p-col-6">
            <h3>{myHomeView.assetHeader}</h3>
            <div>{prettyJson(myHomeView.selectedSourceAssetEvents) }</div>
        </div>
      </div>
    </Dialog>

    <Dialog header="Event Fields" visible={myHomeView.visibleMissingEventFields} style={{ width: '80vw' }} onHide={() => myHomeView.onHide('visibleMissingEventFields')}>
      <div className="p-grid">
        <div className="p-col-4">
            <h3>Present Event Fields (User Sessions)</h3>
            <div>{prettyJson(myHomeView.selectedSessionEventFields) }</div>
        </div>
        <div className="p-col-4">
            <h3>Present Event Fields (Asset Sessions)</h3>
            <div>{prettyJson(myHomeView.selectedAssetEventFields) }</div>
        </div>
        <div className="p-col-4">
          <h3>Missing Event Fields</h3>
          <DataTable value={myHomeView.selectedMissingEventFieldTable} className="p-datatable-sm p-datatable-striped" ref={dt}
            resizableColumns columnResizeMode="fit" sortField="count" sortOrder={-1}>
            <Column field="name" header="Field" sortable/>
            <Column field="count" header="Models Dependant" sortable/>
            <Column header="Percent" body={myHomeView.eventFieldsMissingTable} sortable/>
          </DataTable>
        </div>
      </div>
    </Dialog>

    <Dialog header="Rule" visible={myHomeView.visibleRule} style={{ width: '80vw' }} onHide={() => myHomeView.onHide('visibleRule')}>
        <div>{prettyJson(myHomeView.selectedRule) }</div>
    </Dialog>

    <Dialog header="Model" visible={myHomeView.visibleModel} style={{ width: '80vw' }} onHide={() => myHomeView.onHide('visibleModel')}>
        <div>{prettyJson(myHomeView.selectedModel) }</div>
    </Dialog>
    
    <Dialog header="User List" visible={myHomeView.visibleUserList} style={{ width: '80vw' }} onHide={() => myHomeView.onHide('visibleUserList')}>
      <DataTable value={myHomeView.selectedUserList} className="p-datatable-sm p-datatable-striped" ref={dt}
        resizableColumns columnResizeMode="fit" sortField="name" sortOrder={1} paginator
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={12} rowsPerPageOptions={[12,20,50]}>
        <Column field="name" header="User" sortable filter filterMatchMode="contains"/>
      </DataTable>
    </Dialog>
    
    <Dialog header="Host List" visible={myHomeView.visibleHostList} style={{ width: '80vw' }} onHide={() => myHomeView.onHide('visibleHostList')}>
      <DataTable value={myHomeView.selectedHostList} className="p-datatable-sm p-datatable-striped" ref={dt}
        resizableColumns columnResizeMode="fit" sortField="name" sortOrder={1} paginator
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={12} rowsPerPageOptions={[12,20,50]}>
        <Column field="name" header="Host" sortable filter filterMatchMode="contains"/>
      </DataTable>
    </Dialog>

    <Dialog header="Session List" visible={myHomeView.visibleSessionList} style={{ width: '80vw' }} onHide={() => myHomeView.onHide('visibleSessionList')}>
      <DataTable value={myHomeView.selectedSessionList} className="p-datatable-sm p-datatable-striped" ref={dt}
        resizableColumns columnResizeMode="fit" sortField="score" sortOrder={-1} paginator
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={12} rowsPerPageOptions={[12,20,50]}> 
        <Column field="id" header="Session ID" body={myHomeView.openSessionLink} sortable filter filterMatchMode="contains"/>
        <Column field="score" header="Risk Score" sortable filter filterMatchMode="gte"/>
      </DataTable>
    </Dialog>

    <Dialog header="Parsing Issues" visible={myHomeView.visibleParsingIssues} style={{ width: '80vw' }} onHide={() => myHomeView.onHide('visibleParsingIssues')}>
      <div className="p-grid">
        <div className="p-col-6">
          <h3>User Event Fields Parsed Different in DL</h3>
          <div>{prettyJson(myHomeView.sessionParsingIssues, 3) }</div>  
        </div>
        <div className="p-col-6">
          <h3>Asset Event Fields Parsed Different in DL</h3>
          <div>{prettyJson(myHomeView.assetParsingIssues, 3) }</div>
        </div>
      </div>
    </Dialog>

    <Dialog header="Update Issues" visible={myHomeView.visibleUpdateIssues} style={{ width: '80vw' }} onHide={() => myHomeView.onHide('visibleUpdateIssues')}>
      <div className="p-grid">
        <div className="p-col-12">
          <Card title="Update Steps" subTitle="Follow these steps to correctly apply updates">
            <p>Download the <a href="https://github.com/jdifeder/exabeam-enhancement-suite/releases/latest" target="_blank">latest release.</a></p>
            <p>Extract exabeam-enhancement-suite.zip to the same directory you previously extracted the extension to.</p>
            <p>If the previous directory is unknown, extract to a new folder, delete the extension from Chrome, and reinstall.</p>
            <p>Navigate to chrome://extensions/ in Chrome.</p>
            <p>Find the Exabeam Enhancement Suite extension and click the arrow to "reload" the extension.</p>
            <p style={{ color: 'red' }}>Failing to click this "reload" error is the most common reason the extension does not use the newly extracted files!</p>
          </Card>
        </div>
      </div>
    </Dialog>

    
  </>
  );
}
  
);

ReactDOM.render(
  <React.StrictMode>
    <HomeView />
    <RuleTuningView />
    {/* <DataValidationTables /> */}
    <Dialogs />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
