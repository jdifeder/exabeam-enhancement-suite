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
import { observer } from "mobx-react-lite";
import ReactJson from 'react-json-view'

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



const tablePercentFormat = (rowData, props) => {
  let percentField = '';
  percentField = percentField.concat(props.field,'Percent')
  return (
    <>
    <span>{rowData[props.field]} </span>
    <span style={{ color: 'green' }}>({rowData[percentField]}%) </span>
  </>)
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
// myHomeView.getTab();

const HomeView = observer(() => {
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
      <div className="p-grid">
        {myHomeView.showStart ? 
          <Button label="Start Exabeam Enhancement Suite" onClick={() => myHomeView.getTab()} />
        :false}
        {myHomeView.showHome ?
          <>
            <div className="p-col-6">
              <h2>New Rule Tuning Session</h2>
              <div className="form-group">
                  <label><b>Previous days to query</b> </label>
                  <InputText value={myHomeView.queryUnitNum} onInput={(e) => myHomeView.queryUnitNum= e.target.value} />
              </div>
              <div className="form-group">
                  <label><b>Risk Score Greater Than</b> </label>
                  <InputText value={myHomeView.queryRiskScore} onInput={(e) => myHomeView.queryRiskScore= e.target.value} />
              </div>
              <Button label="Get User Sessions" onClick={() => myHomeView.getNotables('session')} /> <br></br>
              <Button label="Get Asset Sessions" onClick={() => myHomeView.getNotables('asset')} /> <br></br>
            </div>
            <div className="p-col-6">
                <h2>New Data Validation Session (BETA)</h2>
                <div className="form-group">
                    <label><b>Previous days to query</b> </label>
                    <InputText value={myHomeView.queryUnitNum} onInput={(e) => myHomeView.queryUnitNum= e.target.value} />
                </div>
                <Button label="Start Data Validation" onClick={() => myHomeView.startValidation()} /> <br></br>
            </div>
          </>
        :false}
        {myHomeView.showHome && myHomeView.showpRuleTuning  ?       
        <div>
          <div className="p-col-12" >
            <h2>Previous Tuning Sessions</h2>
            <DataTable value={myHomeView.previousRuleTuning} className="p-datatable-sm" ref={dt} paginator
              paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5,10,20,50]}
              header={TableHeader('Previous Tuning Sessions',myHomeView,'previousRuleTuningGlobalFilter')}
              globalFilter={myHomeView.previousRuleTuningGlobalFilter} loading={myHomeView.loading} resizableColumns sortField="id" sortOrder={-1}>
              <Column header="Open" body={myHomeView.openTableButtonRuleTuning}></Column>
              {myHomeView.pRuleTuningDynamicColumns}
              <Column header="Del" body={myHomeView.delTableButtonRuleTuning}></Column>
            </DataTable>
          </div>         
        </div>
          : false}
        {myHomeView.showHome && myHomeView.showpDataValidation ?
          <div className="p-col-12" >
            <h2>Previous Data Validation Sessions</h2>
            <DataTable value={myHomeView.previousDataValidation} className="p-datatable-sm" ref={dt} paginator
              paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5,10,20,50]}
              header={TableHeader('Previous Data Validation Sessions',myHomeView,'previousDataValidationGlobalFilter')}
              globalFilter={myHomeView.previousDataValidationGlobalFilter} loading={myHomeView.loading} resizableColumns sortField="id" sortOrder={-1}>
              <Column header="Open" body={myHomeView.openTableButtonDataValidation}></Column>
              {myHomeView.pDataValidationDynamicColumns}
              <Column header="Del" body={myHomeView.delTableButtonDataValidation}></Column>
            </DataTable>
          </div>
        :false}
      </div>

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
            <b>Total Session Scores:</b> {myHomeView.uSessionSummaryRiskScore} <br/>
            <b>Total Session Count:</b> {myHomeView.uSessionSummarySessionCount} <br/>
            <b>Notable Session Count:</b> {myHomeView.uSessionSummaryNotableCount} <br/>
            <b>Notable Per Day (Average):</b> {myHomeView.uSessionSummaryNotablePerDay} <br/>
            <Button label="Back" onClick={() => myHomeView.toggleShowHome()} /> <br/>
          </Card>
        </div>
        <div className="p-col-3">
          <Card title="Results of Tuning" style={{marginBottom: '2em' }}>
            <b>Session Scores:</b> {myHomeView.uSessionSummaryTunedRiskScore} {myHomeView.uSessionSummaryTunedRiskScorePercent ? <span style={{color: 'green'}}>({myHomeView.uSessionSummaryTunedRiskScorePercent}%) </span> :false} <br/>
            <b>Notable Session Count:</b> {myHomeView.uSessionSummaryTunedNotableCount} {myHomeView.uSessionSummaryTunedRiskScorePercent ? <span style={{color:'green'}}>({myHomeView.uSessionSummaryTunedNotableCountPercent}%) </span> :false}  <br/>
            <b>Notable Per Day (Average):</b> {myHomeView.uSessionSummaryTunedNotablePerDay} {myHomeView.uSessionSummaryTunedRiskScorePercent ? <span style={{color:'green'}}>({myHomeView.uSessionSummaryTunedNotablePerDayPercent}%) </span> :false}  <br/>
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
      <div className="p-grid">
        <div className="p-col-4">
          <h2>Breakdown by Entity</h2>
          <DataTable value={myHomeView.userData} className="p-datatable-sm" ref={dt} paginator
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={20} rowsPerPageOptions={[5,10,20,50]}
            header={TableHeader('Breakdown by Entity',myHomeView,'userDataGlobalFilter')}
            globalFilter={myHomeView.userDataGlobalFilter} loading={myHomeView.loading} resizableColumns sortField="totalScore" sortOrder={-1}>
            {myHomeView.userDataDynamicColumns}
          </DataTable>
        </div>
        <div className="p-col-8">
          <h2>Breakdown by Rule</h2>
          <DataTable value={myHomeView.ruleData} className="p-datatable-sm" ref={dt} paginator
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={20} rowsPerPageOptions={[5,10,20,50]}
            header={TableHeader('Breakdown by Rule',myHomeView,'ruleDataGlobalFilter')}
            globalFilter={myHomeView.ruleDataGlobalFilter} loading={myHomeView.loading} resizableColumns columnResizeMode="fit" sortField="totalScore" sortOrder={-1}>
            <Column header="Open" body={myHomeView.openTableButtonSelectRule}></Column>
            <Column field="rule" header="Rule ID" sortable filter filterMatchMode="contains" style={{width:'15%'}}/>
            <Column field="ruleName" header="Rule Name" sortable filter filterMatchMode="contains" style={{width:'30%'}}/>
            <Column field="count" header="Triggers" sortable style={{width:'15%'}}/>
            <Column field="sessionCount" header="Sessions" body={tablePercentFormat} sortable style={{width:'15%'}}/>
            <Column field="totalScore" header="Total Score" body={tablePercentFormat} sortable style={{width:'15%'}}/>
          </DataTable>
          </div>
      </div>
    :false}
    {!myHomeView.showTuning && myHomeView.showEvents ?
    <div>
      <div className="p-grid" >
        <div className="p-col-12">
          <Card title={myHomeView.selectedRuleHeader} style={{ width: '25rem', marginBottom: '2em' }}>
            <b>Event Count: </b> {myHomeView.selectedRuleCount} <br/>
            <b>Session Count: </b> {myHomeView.selectedRuleSessionCount} <br/>
            <b>Total Score: </b> {myHomeView.selectedRuleScore} <br/>
            <Button label="Back" onClick={() => myHomeView.toggleShowEvents()} /> <br/>
          </Card>
        </div>
        <div className="p-col-12">
          <h2>Events</h2>
          <DataTable value={myHomeView.eventSummaryDataDone} className="p-datatable-sm" ref={dt} paginator
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={20} rowsPerPageOptions={[5,10,20,50]}
            header={TableHeader('Events',myHomeView,'eventSummaryGlobalFilter')}
            globalFilter={myHomeView.eventSummaryGlobalFilter} loading={myHomeView.loading} resizableColumns columnResizeMode="fit" sortField="totalScore" sortOrder={-1}>
            <Column header="Open" body={myHomeView.openTableButtonFilterEvent}></Column>
            <Column field="fieldName" header="Field Name" sortable filter filterMatchMode="contains" style={{width:'15%'}}/>
            <Column field="fieldValue" header="Value" body={eventValueFormat} sortable filter filterMatchMode="contains" style={{width:'30%'}}/>
            <Column field="count" header="Event Count" body={tablePercentFormat} sortable style={{width:'15%'}}/>
            <Column field="sessionCount" header="Session Count" body={tablePercentFormat} sortable style={{width:'15%'}}/>
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

const DataValidationTables = observer(() => {
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
    {myHomeView.showValidation ?
    <>
    <div className="p-grid">
      <div className="p-col-12">
        <h1>Data Validation</h1>
      </div>
    </div>
    <TabView>
        <TabPanel header="Data Sources">
        <div className="p-grid">
          <div className="p-col-12">
            <h3>Data Sources</h3>
            <DataTable value={myHomeView.sourcesDone} className="p-datatable-sm" ref={dt}
              header={TableHeader('',myHomeView,'')}
              loading={myHomeView.loading} resizableColumns columnResizeMode="fit" sortField="configIssues" sortOrder={-1}>
              <Column header="Open" body={myHomeView.openTableButtonSelectSource}></Column>
              <Column field="source" header="Source" sortable filter filterMatchMode="contains"/>
              <Column field="name" header="Event Type" sortable filter filterMatchMode="contains"/>
              <Column field="inSession" header="User Sessions" body={myHomeView.booleanFormat} sortable filter filterMatchMode="contains"/>
              <Column field="inAsset" header="Asset Sessions" body={myHomeView.booleanFormat} sortable filter filterMatchMode="contains"/>
              <Column field="configIssues" header="Missing Events" body={myHomeView.openTableButtonSelectConfigIssue} sortable filter filterMatchMode="gte"/>
              <Column field="parsingIssues" header="Parsing Issues" body={myHomeView.openTableButtonSelectParsingIssue} sortable filter filterMatchMode="gte"/>
            </DataTable>
          </div>
        </div>
        </TabPanel>
        <TabPanel header="Event Types">
          <div className="p-grid">
            <div className="p-col-12">
              <h3>Event Types</h3>
              <DataTable value={myHomeView.eventTypesDone} className="p-datatable-sm" ref={dt}
                header={TableHeader('',myHomeView,'')}
                loading={myHomeView.loading} resizableColumns columnResizeMode="fit" sortField="name" sortOrder={1}>
                <Column field="name" header="Event Type" sortable filter filterMatchMode="contains"/>
                <Column field="inSession" header="User Sessions" body={myHomeView.booleanFormat} sortable filter filterMatchMode="contains"/>
                <Column field="inAsset" header="Asset Sessions" body={myHomeView.booleanFormat} sortable filter filterMatchMode="contains"/>
                <Column field="source" header="Users" body={myHomeView.eventTypeUsers} sortable/>
                <Column field="source" header="Hosts" body={myHomeView.eventTypeHosts} sortable/>
                <Column field="source" header="Field Count" body={myHomeView.eventTypeFields} sortable/>
                <Column field="source" header="Models Populating" body={myHomeView.eventTypeModelsPopulating} sortable/>
                <Column field="source" header="Rules Can Trigger" body={myHomeView.eventTypeRulesCouldTrigger} sortable/>
              </DataTable>
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Rules">
          <div className="p-grid">
            <div className="p-col-12">
              <h3>Rules</h3>
              <DataTable value={myHomeView.rulesAndModelsDone} className="p-datatable-sm" ref={dt} paginator
              paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={20} rowsPerPageOptions={[5,10,20,50]}
                header={TableHeader('',myHomeView,'rulesAndModelsGlobalFilter')}
                globalFilter={myHomeView.rulesAndModelsGlobalFilter} loading={myHomeView.loading} resizableColumns columnResizeMode="fit" sortField="ruleCat" sortOrder={1}>
                <Column field="ruleCat" header="Rule Category" sortable filter filterMatchMode="contains"/>
                <Column field="ruleId" header="Rule ID" body={myHomeView.rulesAndModelsRuleId} sortable filter filterMatchMode="contains"/>
                <Column field="ruleName" header="Rule Name" sortable filter filterMatchMode="contains"/>
                <Column field="modelName" header="Model" body={myHomeView.rulesAndModelsModelName} sortable filter filterMatchMode="contains"/>
                <Column field="modelDisabled" header="Disabled" sortable filter filterMatchMode="contains"/>
                <Column field="eventInRuleType" header="Event Present" body={myHomeView.rulesAndModelsEventInRule} sortable filter filterMatchMode="contains"/>
                <Column field="featurePresent" header="Feature Present" body={myHomeView.booleanFormat} sortable filter filterMatchMode="contains"/>
                <Column field="populating" header="Model Populating" body={myHomeView.booleanFormat} sortable filter filterMatchMode="contains"/>
                <Column field="hasTriggered" header="Has Triggered" body={myHomeView.booleanFormat} sortable filter filterMatchMode="contains"/>
              </DataTable>
          </div>
          </div>
        </TabPanel>
    </TabView> 
    </>
    :false}
  </>
  );
}
  
);

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
          <DataTable value={myHomeView.selectedMissingEventFieldTable} className="p-datatable-sm" ref={dt}
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
      <DataTable value={myHomeView.selectedUserList} className="p-datatable-sm" ref={dt}
        resizableColumns columnResizeMode="fit" sortField="name" sortOrder={1}>
        <Column field="name" header="User" sortable filter filterMatchMode="contains"/>
      </DataTable>
    </Dialog>
    
    <Dialog header="Host List" visible={myHomeView.visibleHostList} style={{ width: '80vw' }} onHide={() => myHomeView.onHide('visibleHostList')}>
      <DataTable value={myHomeView.selectedHostList} className="p-datatable-sm" ref={dt}
        resizableColumns columnResizeMode="fit" sortField="name" sortOrder={1}>
        <Column field="name" header="Host" sortable filter filterMatchMode="contains"/>
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

    
  </>
  );
}
  
);

ReactDOM.render(
  <React.StrictMode>
    <HomeView />
    <RuleTuningView />
    <DataValidationTables />
    <Dialogs />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
