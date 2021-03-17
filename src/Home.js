/*global chrome*/
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Column } from 'primereact/column';
import { Badge } from 'primereact/badge';
import { InputText } from 'primereact/inputtext';
import { TreeTable } from 'primereact/treetable';
import { ProgressBar } from 'primereact/progressbar';
import { Toast } from 'primereact/toast';
import { Listbox } from 'primereact/listbox';
import Dexie from 'dexie';
import * as moment from 'moment';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import { makeAutoObservable, toJS  } from "mobx";
import { observer } from "mobx-react-lite";
import { configure } from "mobx"



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { ObjectFlags } from 'typescript';

configure({
  enforceActions: "never",
})

class Home {
    needsUpdate = false;
    downloadLink = '';
    showStart = true;
    showHome = false;
    showLogin = false;
    showTuning = false;
    showEvents = false;
    showMitre = true;
    showMitreRules = false;
    showValidation = false;
    onPreviousSession = false;
    showpRuleTuning = false;
    showpDataValidation = false;
    visibleDataValidationProgress = false;
    visibleTuningProgress = false;
    visibleMissingEventTypes = false;
    visibleSelectedSource = false;
    visibleMissingEventFields = false;
    visibleRule = false;
    visibleModel = false;
    visibleUserList = false;
    visibleHostList = false;
    visibleSessionList = false;
    visibleParsingIssues = false;
    loading = false;
    activeIndex = 0;
    bannedEvents = [];
    eventSummaryDataDone = [];
    
    
    errors = [];
    rawEventErrors = 0;
    errorVisible = false;
    
    host = '';
    nodeServer = 'https://exabeam.azurewebsites.net/api/exabeam-cloud';
    username = '';
    password = '';
    queryUnit = 'd';
    queryUnitNum = '7';
    queryRiskScore = '90';
    queryLimit = '100000';
    queryLimitDV = '100000';

    allowedCount = 5;
    allowedEventTypeCount = 2;
    allowedSessionsPerEventType = 2;
    allowedEventsPerSession = 5;
    allowedEventTypeSessionCount = 1;
    allowedEventDetailCount = 5;
    allowedRawEventCount = 0;
    doneCount = 0;
    doneCountTimelines = 0;
    doneCountModels = 0;
    doneCountRules = 0;
    
    doneCountEventTypes = 0;
    doneCountEventTypeSessions = 0;
    doneCountEventTypeAssets = 0;
    doneCountEventTypeSessionsDetails = 0;
    doneCountEventTypeAssetsDetails = 0;
    doneCountEvents = 0;
    doneCountSessions = 0;
    todoRawEventsCount = 0;
    doneRawEventsCount = 0;
    validDoneRawEventsCount = 0;
    retryAttemptRawEventsCount = 0;
    trueOrFalse = [
      { label: 'True', value: 'true' },
      { label: 'False', value: 'false' }
    ];
    trueOrFalseOrNA = [
      { label: 'True', value: 'true' },
      { label: 'False', value: 'false' },
      { label: 'N/A', value: 'N/A' }
    ];

    activeEventTypes = 0;
    activeEventTypeSessions = 0;
    activeEventTypeAssets = 0;
    activeRawEvents = 0;

    pRuleTuningTable = [];
    pDataValidationTable = [];

    previousRuleTuningGlobalFilter = '';
    previousDataValidationGlobalFilter = '';
    userDataGlobalFilter = '';
    ruleDataGlobalFilter = '';
    eventSummaryGlobalFilter = '';
    sourcesGlobalFilter = '';
    eventTypesGlobalFilter = '';
    rulesAndModelsGlobalFilter = '';

    

  constructor() {
    makeAutoObservable(this, {
      getNotables: false,
      fixArray: false,
      getSequences: false,
      arraySum: false,
      combineArrays: false,
      findRequiredData: false,
      getEventTypes: false,
      getEventTypeSessions: false,
      getEventTypeSessionDetails: false,
      getEventTypeAssetDetails: false,
      checkEventTypeSessionDetails: false,
      checkEventTypeAssetDetails: false,
      getRawEvents: false,
      bootstrapEventTypes: false,
      checkFeature: false,
      checkMissingEvents: false,
      addEventDetails: false,
      determineSources: false

    });

    this.sessionParsingIssues = [];
    this.assetParsingIssues = [];
    this.selectedSessionUser = [];
    this.selectedSessionSrcIp = [];
    this.selectedSessionSrcHost = [];
    this.selectedSessionDestIp = [];
    this.selectedSessionDestHost = [];
    this.selectedSessionHost = [];
    this.selectedAssetUser = [];
    this.selectedAssetSrcIp = [];
    this.selectedAssetSrcHost = [];
    this.selectedAssetDestIp = [];
    this.selectedAssetDestHost = [];
    this.selectedAssetHost = [];
    
  }

    doneEventTypes = [];
    doneEventTypeSessions = [];
    doneEventTypeAssets = [];
    doneEventTypeSessionsDetails = [];
    doneEventTypeAssetsDetails = [];
    doneRawEvents = [];

  onHide = (name) => {
      this[name] = false;
  }
    

  getTab() {
    this.needsUpdate = false;
    this.showStart = false;
    chrome.tabs.query({ active: true, currentWindow: true }, ([{ id, url }]) => {
      console.log('url = ', url);
      console.log('id = ', id);
      this.tabID = id;
      this.host = url.split('https://')[1].substr(0,url.split('https://')[1].indexOf('/'));
      console.log('this.host = ',this.host);
      this.getDB();
    })
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  openTableButtonRuleTuning = (rowData) => {
    return <Button icon="pi pi-folder-open" onClick={() => this.selTuningSession(rowData)} />;
  }

  delTableButtonRuleTuning  = (rowData) => {
    return <Button icon="pi pi-trash" onClick={() => this.delPreviousRuleTuning(rowData)} />;
  }

  openTableButtonDataValidation = (rowData) => {
    return <Button icon="pi pi-folder-open" onClick={() => this.selDvSession(rowData)} />;
  }

  delTableButtonDataValidation  = (rowData) => {
    return <Button icon="pi pi-trash" onClick={() => this.delPreviousDataValidation(rowData)} />;
  }

  openTableButtonSelectRule = (rowData, props) => {
    return (
      <>
        <Button icon="pi pi-folder-open" onClick={() => this.onRowSelect(rowData)} />
        <span> </span>
        <NumberFormat value={rowData[props.field]} displayType={'text'} thousandSeparator={true} />
      </>
    ) 
  }

  openTableButtonSelectMitre = (rowData, props) => {
    return (
      <>
      <Button icon="pi pi-folder-open" onClick={() => this.onMitreSelect(rowData)} />
      <span> {rowData[props.field]}</span>
      
      </>
    )
  }

  openTableButtonFilterEvent = (rowData) => {
    return <Button icon="pi pi-filter " onClick={() => this.tuneRule(rowData)} />;
  }

  openTableButtonSelectSource = (rowData) => {
    return <Button icon="pi pi-folder-open" onClick={() => this.onSourceSelect(rowData.sessionEvents,rowData.assetEvents,'AA User Session Events','AA Asset Session Events')} />;
  }

  openTableButtonSelectSessions = (rowData, props) => {
    let percentField = '';
    percentField = percentField.concat(props.field,'Percent')
    return (
      <>
      <Button icon="pi pi-info-circle" onClick={() => this.onSessionsSelect(rowData.sessionIDs)} />
      <span> </span>
      <NumberFormat value={rowData[props.field]} displayType={'text'} thousandSeparator={true} />
      <span style={{ color: 'green' }}> ({rowData[percentField]}%) </span>
    </>)
  }

  openTableButtonSelectConfigIssue = (rowData, props) => {
    let booleanString = '0';
    if(typeof rowData[props.field] !== 'undefined') booleanString = rowData[props.field].toString();
    return (
      <>
        {rowData[props.field] > 0 ?
          <>
            <i className="pi pi-bell p-mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: "1rem", cursor: "pointer" }}onClick={() => this.onSourceSelect(rowData.sessionConfigIssueEvents,rowData.assetConfigIssueEvents,'User Events Missing From Asset Timelines','Asset Events Missing From User Timelines')}>
              <Badge severity="danger" value={booleanString}></Badge>
            </i>
          </>
        :
          <>
            <Badge value={booleanString} className="p-mr-2" ></Badge>
          </>
        }
      </>
    )
  }

  openTableButtonSelectParsingIssue = (rowData, props) => {
    let booleanString = '0';
    if(typeof rowData[props.field] !== 'undefined') booleanString = rowData[props.field].toString();
    return (
      <>
        {rowData[props.field] > 0 ?
          <>
            {/* <i className="pi pi-bell p-mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: "1rem", cursor: "pointer" }}onClick={() => this.onParsingIssueSelect(rowData.aaSessionEventParsingIssues.user, rowData.aaSessionEventParsingIssues.src_ip, rowData.aaSessionEventParsingIssues.src_host, rowData.aaSessionEventParsingIssues.dest_ip, rowData.aaSessionEventParsingIssues.dest_host, rowData.aaSessionEventParsingIssues.host, rowData.aaAssetEventParsingIssues.user, rowData.aaAssetEventParsingIssues.src_ip, rowData.aaAssetEventParsingIssues.src_host, rowData.aaAssetEventParsingIssues.dest_ip, rowData.aaAssetEventParsingIssues.dest_host, rowData.aaAssetEventParsingIssues.host)}> */}
            <i className="pi pi-bell p-mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: "1rem", cursor: "pointer" }}onClick={() => this.onParsingIssueSelect(rowData.aaSessionEventParsingIssues, rowData.aaAssetEventParsingIssues)}>  
              <Badge severity="danger" value={booleanString}></Badge>
            </i>
          </>
        :
          <>
            <Badge value={booleanString} className="p-mr-2" ></Badge>
          </>
        }
      </>
    )
  }

  selectedRuleHeader = () => {
    return <span>Summary for {this.selectedRule}</span>;
  }

 eventTypeUsers = (rowData) => {
    return (
      <>
      <Button icon="pi pi-folder-open" onClick={() => this.onUsersSelect(rowData.uniqueUsersList)} />
      <span> {rowData.uniqueUsers} / {this.summary.uniqueUserCount} </span>
      {rowData.uniqueUserPercent ? <span style={{color: 'green'}}>({rowData.uniqueUserPercent}%) </span> :false}
      </>
    )
  }

  eventTypeHosts = (rowData) => {
    return (
      <>
      <Button icon="pi pi-folder-open" onClick={() => this.onHostsSelect(rowData.uniqueHostsList)} />
      <span> {rowData.uniqueHosts} / {this.summary.uniqueHostCount} </span>
      {rowData.uniqueHostPercent ? <span style={{color: 'green'}}>({rowData.uniqueHostPercent}%) </span> :false}
      </>
    )
  }

  eventTypeFields = (rowData) => {
    return (
      <>
      <Button icon="pi pi-folder-open" onClick={() => this.onEventFieldsSelect(rowData.sessionEventFields,rowData.assetEventFields,rowData.missingEventFieldTable)} />
      <span> {rowData.fieldsPopulating} / {rowData.fieldCount} </span>
      {rowData.fieldsPopulatingPercent ? <span style={{color: 'green'}}>({rowData.fieldsPopulatingPercent}%) </span> :false}
      </>
    )
  }

  eventTypeModelsPopulating = (rowData) => {
    return (
      <>
      <span>{rowData.modelsPopulating} / {rowData.modelCount} </span>
      {rowData.modelsPopulatingPercent ? <span style={{color: 'green'}}>({rowData.modelsPopulatingPercent}%) </span> :false}
      </>
    )
  }

  eventTypeRulesCouldTrigger = (rowData) => {
    return (
      <>
      <span>{rowData.rulesCouldTrigger} / {rowData.ruleCount} </span>
      {rowData.rulesCouldTriggerPercent ? <span style={{color: 'green'}}>({rowData.rulesCouldTriggerPercent}%) </span> :false}
      </>
    )
  }

  rulesAndModelsRuleId = (rowData, props) => {
    return (
      <>
      <Button icon="pi pi-info-circle" onClick={() => this.onRuleSelect(rowData.ruleDef)} />
      <span> {rowData[props.field]}</span>
      
      </>
    )
  }

  buttonViewSessions = (rowData, props) => {
    return (
      <>
        <Button icon="pi pi-info-circle" onClick={() => this.onSessionsSelect(rowData.sessionIDs)} />
        <span> </span>
        <NumberFormat value={rowData[props.field]} displayType={'text'} thousandSeparator={true} />
      </>
    )
  }

  openSessionLink = (rowData, props) => {
    let user = '';
    let asset = '';
    let link = '';
    if(rowData[props.field].includes('asset@')) {
      asset = rowData[props.field].split('@')[1].substr(0, rowData[props.field].split('@')[1].lastIndexOf('-'));
      link = 'https://'.concat(this.host,'/uba/#asset/',asset,'/timeline/',rowData[props.field]);
    } else {
      user = rowData[props.field].substr(0, rowData[props.field].lastIndexOf('-'));
      link = 'https://'.concat(this.host,'/uba/#user/',user,'/timeline/',rowData[props.field]) ;
    }
    
    return (
      <>
        <Button icon="pi pi-external-link" onClick={() => window.open(link)} />
        <span> </span>
        <span>{rowData[props.field]}</span>
      </>
    )
  }

  rulesAndModelsModelName = (rowData) => {
    return (
      <>
      <Button icon="pi pi-folder-open" onClick={() => this.onModelSelect(rowData.modelDef)} />
      <span> {rowData.modelName}</span>
      </>
    )
  }

  rulesAndModelsEventInRule = (rowData) => {
    return (
      <>
      <Button icon="pi pi-folder-open" onClick={() => this.onEventTypesSelect(rowData.ruleDef.requiredEvents,rowData.presentEventTypes)} />
      <span> {rowData.eventInRuleType.toString()}</span>
      </>
    )
  }

  eventFieldsMissingTable = (rowData) => {
    return (
      <>
      {rowData.percent ? <span style={{color: 'green'}}>({rowData.percent}%) </span> :false}
      </>
    )
  }

  booleanFormat = (rowData, props) => {
    let booleanString = '';
    if(typeof rowData[props.field] !== 'undefined') booleanString = rowData[props.field].toString();
    return (
      <>
      <span >{booleanString} </span>
      </>
    )
  }

  numberFormatter = (rowData, props) => {
    return (
      <NumberFormat value={rowData[props.field]} displayType={'text'} thousandSeparator={true} />
    )
  }

  setActiveIndex = (index) => {
    this.activeIndex = index;
  }


  async getDB() {
    this.dbName = 'exabeamEnhancementSuite'+'-'+this.host;
    this.ruleTuningDb = 'ruleTuning';
    this.dataValidationDb = 'dataValidation';
    this.tableNames = [];
    this.dbStores = {};
    this.tableNames.push(this.ruleTuningDb);
    this.tableNames.push(this.dataValidationDb);
    this.tableNames.forEach((tableName) => {
      this.dbStores[tableName] = '++id,date,type'; // where schema is a string containing the primary key name + "," + a comma-delimited list of indexes.
    });
    var db = new Dexie(this.dbName);
    db.version(1).stores(this.dbStores);
    this.tempRuleTable = await db.table(this.ruleTuningDb).toArray();
    // this.previousRuleTuning = await db.table(this.ruleTuningDb).toArray();
    this.previousRuleTuning = [];
    this.tempDvTable = await db.table(this.dataValidationDb).toArray();
    // console.log('this.tempDvTable = ',this.tempDvTable);
    this.previousDataValidation = [];
    //this.previousDataValidation = await db.table(this.dataValidationDb).toArray();
    this.afterDB();
  }

  afterDB(){
    if(this.tempRuleTable.length !== 0) {
      this.tempRuleTable.forEach((obj) => {
        this.previousRuleTuning.push({
          id: obj.id,
          date: obj.date,
          daysQueried: obj.daysQueried,
          riskScore: obj.riskScore,
          type: obj.type,
          uSessionSummaryRiskScore: obj.uSessionSummaryRiskScore,
          uSessionSummarySessionCount: obj.uSessionSummarySessionCount,
          uSessionSummaryNotableCount: obj.uSessionSummaryNotableCount,
          uSessionSummaryNotablePerDay: obj.uSessionSummaryNotablePerDay
        })
      })
      this.tempRuleTable = [];
      this.showpRuleTuning = true;
    }
    if(this.tempDvTable.length !== 0) {
      this.tempDvTable.forEach((obj) => {
        this.previousDataValidation.push({
          id: obj.id,
          date: obj.date,
          daysQueried: obj.daysQueried
        })
      })
      this.tempDvTable = [];
      this.showpDataValidation = true;
    } 
    this.showpRuleTuning = !this.showpRuleTuning;
    this.showpRuleTuning = !this.showpRuleTuning;
    this.showpDataValidation = !this.showpDataValidation;
    this.showpDataValidation = !this.showpDataValidation;
    this.previousRuleTuning.forEach((obj) => {
      obj.epochDate = obj.date;
      obj.date = moment(obj.date).format('lll');
      if(obj.type === 'session') obj.type = 'user';
    });
    this.previousDataValidation.forEach((obj) => {
      obj.epochDate = obj.date;
      obj.date = moment(obj.date).format('lll');
    });
    // console.log('this.previousRuleTuning = ', this.previousRuleTuning);
    // console.log('this.previousDataValidation = ', this.previousDataValidation);
    
    this.pRuleTuningColumns = [
      { field: 'date', header: 'Date Run' },
      { field: 'daysQueried', header: 'Days Queried' },
      { field: 'riskScore', header: 'Min Risk Score' },
      { field: 'type', header: 'Session Type' },
      { field: 'uSessionSummaryRiskScore', header: 'Session Scores' },
      { field: 'uSessionSummarySessionCount', header: 'Session Count' },
      { field: 'uSessionSummaryNotableCount', header: 'Notable Count' },
      { field: 'uSessionSummaryNotablePerDay', header: 'Notable Per Day (Average)' }
    ];
    this.pRuleTuningDynamicColumns = this.pRuleTuningColumns.map((col,i) => {
      if(col.field === 'uSessionSummaryRiskScore' || col.field === 'uSessionSummarySessionCount' || col.field === 'uSessionSummaryNotableCount' || col.field === 'uSessionSummaryNotablePerDay') {
        return <Column key={col.field} field={col.field} body={this.numberFormatter} header={col.header} sortable/>
      } else {
        return <Column key={col.field} field={col.field} header={col.header} sortable/>;
      }
      
    });
    
    
    this.pRuleTuningSettings = {
      columns: {
        date: { title: 'Date Run' },
        daysQueried: { title: 'Days Queried' },
        riskScore: { title: 'Min Risk Score' },
        type: { title: 'Session Type' },
        uSessionSummaryRiskScore: { title: 'Session Scores' },
        uSessionSummarySessionCount: { title: 'Session Count' },
        uSessionSummaryNotableCount: { title: 'Notable Count' },
        uSessionSummaryNotablePerDay: { title: 'Notable Per Day (Average)' }
      }
    }
    this.pDataValidationColumns = [
      { field: 'date', header: 'Date Run' },
      { field: 'daysQueried', header: 'Days Queried' }
    ]
    this.pDataValidationDynamicColumns = this.pDataValidationColumns.map((col,i) => {
      return <Column key={col.field} field={col.field} header={col.header} sortable/>;
    });
    this.showHome = true;
  }

  getNotables(type, riskScore) {
    this.arrayType = type;
    this.queryRiskScore = riskScore;
    this.showLogin = false;
    this.showHome = false;
    this.loading = true;
    this.showTuning = true;
    //Threat Hunter query for all sessions that with risk score >= 90 over 7 days
    chrome.tabs.sendMessage(this.tabID, {message: "notableSearch", queryUnit: this.queryUnit, queryUnitNum: this.queryUnitNum, queryRiskScore: this.queryRiskScore, queryLimit: this.queryLimit}, (response) => {
      //console.log('noatble response = ',response);
      this.thResults = response;
      this.fixArray();
    });
  }

  fixArray(){
    console.log('fixArray() running');
    console.log('this.arrayType = ',this.arrayType);
    this.forEachBreak = false;
    this.counter = 0;
    this.thResultsUsers = {};
    this.thResultsUsers.sessions = [];
    this.thResultsUsers.userCounts = [];
    this.thResultsUsers.ruleCounts = [];
    this.thResultsAssets = {};
    this.thResultsAssets.sessions = [];
    this.thResultsAssets.userCounts = [];
    this.thResultsAssets.ruleCounts = [];
    this.doneCountSessions = 0;
    this.doneCountTimelines = 0;
    //Grab all the session IDs from the TH query and put them in a new array
    if(this.arrayType === 'asset' && typeof this.thResults.entities.asset !== 'undefined') {
      for (this.index = 0; this.index < this.thResults.entities.asset.length; this.index++) { 
        this.thResultsUsers.sessions[this.index] = {}
        this.thResultsUsers.sessions[this.index].id = this.thResults.entities.asset[this.index].assetSequenceInfo.assetSequenceId;
        this.thResultsUsers.sessions[this.index].user = this.thResults.entities.asset[this.index].assetSequenceInfo.assetId;
        this.thResultsUsers.sessions[this.index].riskScore = this.thResults.entities.asset[this.index].assetSequenceInfo.riskScore;  
      }
      this.getSequences(0);
    }
    if(this.arrayType === 'session' && typeof this.thResults.entities.session !== 'undefined') {
      for (this.index = 0; this.index < this.thResults.entities.session.length; this.index++) { 
        this.thResultsUsers.sessions[this.index] = {}
        this.thResultsUsers.sessions[this.index].id = this.thResults.entities.session[this.index].sessionInfo.sessionId;
        this.thResultsUsers.sessions[this.index].user = this.thResults.entities.session[this.index].sessionInfo.username;
        this.thResultsUsers.sessions[this.index].riskScore = this.thResults.entities.session[this.index].sessionInfo.riskScore;  
      }
      this.getSessions(0);
    }
      
    //Take all of those session IDs and get all the triggered rules and their underlying events, add them to the array
  }

  getSessions(offset) {
    this.visibleTuningProgress = true;
    var counter = 0;
    if(offset != 0) {
      var tempIndex = offset * this.allowedCount;
    } else {
      var tempIndex = 0;
    }
    var maxIndex = tempIndex + this.allowedCount;
    var tempKeys = []
    var tempArray = [];
    this.thResultsUsers.sessions.forEach((obj, index) => {
      tempKeys.push(obj.id);
    })
    for (var a=tempIndex; a < maxIndex; a++) {
      tempArray.push(tempKeys[a]);
    }
    this.todoTimelines = tempKeys.length;
    //Start loop of fetch
    tempArray.forEach((obj,index) => {
      if(obj != undefined) {
        axios('https://'+this.host+'/uba/api/user/sequence/triggeredRules?sequenceType=session&sequenceId='+obj, {
          method: 'GET',
          withCredentials: 'include',
        }).then(response => {
          //console.log('got response of timeline and it is = ',response);
          this.thResultsUsers.sessions.forEach((obj2, index2) => {
            //console.log('obj(',obj,') && obj2.id(',obj2.id,')');
            if(obj === obj2.id) {
              //console.log('matches!')
              obj2.rules = response.data;
              //console.log('counter BEFORE = ', counter);
              counter = counter + 1;
              //console.log('counter AFTER = ', counter);
              this.doneCountSessions = this.doneCountSessions + 1;
              //console.log('this.doneCountTimelines BEFORE = ', this.doneCountTimelines);
              this.doneCountTimelines++;
              //console.log('this.doneCountTimelines AFTER = ', this.doneCountTimelines);
              this.tuningProgress = Math.round(((this.doneCountTimelines/this.todoTimelines) * 100));
              
              if(counter < this.allowedCount) {
              //  console.log('Index = '+b+' this.activeCount LESSER this.allowedCount');
              } else {
              //  console.log('Index = '+b+' this.activeCount GREATER this.allowedCount');
                if(this.doneCountSessions <= tempKeys.length) this.getSessions(offset+1);
              }
              if(this.doneCountSessions === tempKeys.length) {
                
                this.arraySum(this.thResultsUsers);
         } 
            }
          })
        //  console.log(response);
        }).catch(error => {
        //  console.log(error);
        });
      } 
    })
      
  }

  getSequences(offset) {
    this.visibleTuningProgress = true;
    var counter = 0;
    if(offset != 0) {
      var tempIndex = offset * this.allowedCount;
    } else {
      var tempIndex = 0;
    }
    var maxIndex = tempIndex + this.allowedCount;
    var tempKeys = []
    var tempArray = [];
    this.thResultsUsers.sessions.forEach((obj, index) => {
      tempKeys.push(obj.id);
    })
    for (var a=tempIndex; a < maxIndex; a++) {
      tempArray.push(tempKeys[a]);
    }
    this.todoTimelines = tempKeys.length;
    //Start loop of fetch
    tempArray.forEach((obj,index) => {
      if(obj != undefined) {
        axios('https://'+this.host+'/uba/api/asset/sequence/'+obj+'/triggeredRules', {
          method: 'GET',
          withCredentials: 'include',
        }).then(response => {
          this.thResultsUsers.sessions.forEach((obj2, index2) => {
            if(obj === obj2.id) {
              obj2.rules = response.data;
              counter = counter + 1;
              this.doneCountSessions = this.doneCountSessions + 1;
              this.doneCountTimelines++;
              this.tuningProgress = Math.round(((this.doneCountTimelines/this.todoTimelines) * 100));
              if(counter < this.allowedCount) {
              //  console.log('Index = '+b+' this.activeCount LESSER this.allowedCount');
              } else {
              //  console.log('Index = '+b+' this.activeCount GREATER this.allowedCount');
                if(this.doneCountSessions <= tempKeys.length) this.getSequences(offset+1);
              }
              if(this.doneCountSessions === tempKeys.length) {
                
                
                this.arraySum(this.thResultsUsers);
              } 
            }
          })
          
        //  console.log(response);
        }).catch(error => {
          // console.log(error);
        });
      }
      
    })
      
  }

  arraySum(sessionData){
    // console.log('arraySum starting');
    sessionData.sessionCounts = {};
    //Setup array to count what users have triggered sessions and their total scores
    sessionData.sessions.forEach((obj, index) => {
      if(sessionData.userCounts.some(username => username.user === sessionData.sessions[index].user)) {
      } else{
        sessionData.userCounts.push({'user': sessionData.sessions[index].user, 'count': 0, 'totalScore':0})
      }
       
    })
    // console.log('1');
    //Add up the amount of times a user was seen and sum up the total risk score of those sessions
    for (var i=0; i < sessionData.sessions.length; i++) {
      for (var b=0; b < sessionData.userCounts.length; b++) {
        if (sessionData.sessions[i].user === sessionData.userCounts[b].user) {
          sessionData.userCounts[b].count = sessionData.userCounts[b].count + 1;
          sessionData.userCounts[b].totalScore = sessionData.userCounts[b].totalScore + sessionData.sessions[i].riskScore;
        }
      }     
    }
    // console.log('2');
    //Sum up user session info
    this.uSessionSummaryNotableCount = 0;
    this.uSessionSummaryRiskScore = 0;
    this.uSessionSummaryCount = sessionData.sessions.length;
    for (var i=0; i < sessionData.sessions.length; i++) {
      if(sessionData.sessions[i].riskScore >= 90) this.uSessionSummaryNotableCount = this.uSessionSummaryNotableCount + 1
      this.uSessionSummaryRiskScore = this.uSessionSummaryRiskScore + sessionData.sessions[i].riskScore;
    }
    this.uSessionSummaryNotablePerDay = Math.round(this.uSessionSummaryNotableCount / this.queryUnitNum );
    this.uSessionSummarySessionCount = sessionData.sessions.length;

    // console.log('3');
    //Setup array to summarize sessions
    // for (var i=0; i < sessionData.sessions.length; i++) {
    //   console.log('starting index i = ',i);
    //   console.log('sessionData.sessions[',i,'] = ',sessionData.sessions[i]);
    //   sessionData.sessionCounts[sessionData.sessions[i].id] = {};
    //   sessionData.sessionCounts[sessionData.sessions[i].id].id = sessionData.sessions[i].id;
    //   sessionData.sessionCounts[sessionData.sessions[i].id].score = sessionData.sessions[i].riskScore;
    //   sessionData.sessionCounts[sessionData.sessions[i].id].rulesUnique = Object.values(sessionData.sessions[i].rules.rules);
    //   sessionData.sessionCounts[sessionData.sessions[i].id].rulesUniqueCount = Object.keys(sessionData.sessions[i].rules.rules).length;
    //   for (var a=0; a < sessionData.sessionCounts[sessionData.sessions[i].id].rulesUnique.length; a++) {
    //     console.log('starting index a = ',a);
    //     sessionData.sessionCounts[sessionData.sessions[i].id].rulesUnique[a].events = [];
    //     for (var b=0; b < sessionData.sessions[i].rules.triggeredRules.length; b++) {
    //       console.log('starting index b = ',b);
    //       if(sessionData.sessions[i].rules.triggeredRules[b].ruleId === sessionData.sessionCounts[sessionData.sessions[i].id].rulesUnique[a].ruleId) {
    //         console.log('got a match at index b = ',b);
    //         console.log('going to push ',sessionData.sessions[i].rules.triggeredRuleEvents[sessionData.sessions[i].rules.triggeredRules[b].eventId].fields);
    //         console.log('into ',sessionData.sessionCounts[sessionData.sessions[i].id].rulesUnique[a].events);
    //         sessionData.sessionCounts[sessionData.sessions[i].id].rulesUnique[a].events.push(sessionData.sessions[i].rules.triggeredRuleEvents[sessionData.sessions[i].rules.triggeredRules[b].eventId].fields);
    //         console.log('push happened');
    //         console.log('events now look like ',sessionData.sessionCounts[sessionData.sessions[i].id].rulesUnique[a].events);
    //       }
    //       console.log('finishing index b = ',b);
    //     }
    //   }
    //   sessionData.sessionCounts[sessionData.sessions[i].id].rulesTotalCount = sessionData.sessions[i].rules.triggeredRules.length;
    //   console.log('finishing index = ',i);
    // }
    // sessionData.sessionCounts = Object.values(sessionData.sessionCounts);

      

    // console.log('4');
    //Setup array to count what rules have triggered and their total scores
    sessionData.sessions.forEach((obj, index) => {
      sessionData.sessions[index].rules.triggeredRules.forEach((obj2, index2) => {
        sessionData.sessions[index].rules.triggeredRules[index2].ruleName = sessionData.sessions[index].rules.rules[sessionData.sessions[index].rules.triggeredRules[index2].ruleId].ruleName;
        if(sessionData.ruleCounts.some(ruleName => ruleName.rule === sessionData.sessions[index].rules.triggeredRules[index2].ruleId)) {
        } else{    
          sessionData.ruleCounts.push({'rule': sessionData.sessions[index].rules.triggeredRules[index2].ruleId, 'ruleName': sessionData.sessions[index].rules.triggeredRules[index2].ruleName, 'count': 0, 'sessionCount': 0, 'originalSessionCount': 0, 'sessionIDs': [], 'totalScore':0, 'ruleDef': sessionData.sessions[index].rules.rules[sessionData.sessions[index].rules.triggeredRules[index2].ruleId]});
        }
      }) 
    })
    // console.log('5');
    //Add empty array of events under each triggered rule
    for (var b=0; b < sessionData.ruleCounts.length; b++) {
      sessionData.ruleCounts[b].events = [];
    }
    // console.log('6');
    //Fill in event details for each event triggered under a rule
    sessionData.sessions.forEach((obj, index) => {
      sessionData.sessions[index].rules.triggeredRules.forEach((obj2, index2) => {
        sessionData.ruleCounts.forEach((obj3, index3) => {
          if(sessionData.sessions[index].rules.triggeredRules[index2].ruleId === sessionData.ruleCounts[index3].rule) {
            if(sessionData.ruleCounts[index3].events.some(eventObject => eventObject.eventId === sessionData.sessions[index].rules.triggeredRules[index2].eventId)) {
            //  console.log( sessionData.sessions[index].rules.triggeredRules[index2].eventId +" found inside the array.");
            } else{    
           //   console.log(sessionData.sessions[index].rules.triggeredRules[index2].eventId+" not found.");
              Object.keys(sessionData.sessions[index].rules.triggeredRuleEvents).forEach((obj4, index4) => {
                if(obj4 === sessionData.sessions[index].rules.triggeredRules[index2].eventId){
                  if(sessionData.sessions[index].rules.triggeredRuleEvents[obj4].fields['riskScore-'+sessionData.sessions[index].rules.triggeredRules[index2].ruleId] == undefined) sessionData.sessions[index].rules.triggeredRuleEvents[obj4].fields['riskScore-'+sessionData.sessions[index].rules.triggeredRules[index2].ruleId] = 0;
                  sessionData.sessions[index].rules.triggeredRuleEvents[obj4].fields.origSessionId = sessionData.sessions[index].id;
                  sessionData.sessions[index].rules.triggeredRuleEvents[obj4].fields['riskScore-'+sessionData.sessions[index].rules.triggeredRules[index2].ruleId] = sessionData.sessions[index].rules.triggeredRuleEvents[obj4].fields['riskScore-'+sessionData.sessions[index].rules.triggeredRules[index2].ruleId] + Math.round(sessionData.sessions[index].rules.triggeredRules[index2].riskScore);
                  sessionData.ruleCounts[index3].events.push(sessionData.sessions[index].rules.triggeredRuleEvents[""+obj4].fields);
                }
              })
            }
          }     
        })
      })
    })
    // console.log('7');
    //Add up the amount of times a rule was seen and sum up the total risk score of those rules
    for (var i=0; i < sessionData.sessions.length; i++) {
      for (var a=0; a < sessionData.sessions[i].rules.triggeredRules.length; a++) {
        for (var b=0; b < sessionData.ruleCounts.length; b++) { 
          if (sessionData.sessions[i].rules.triggeredRules[a].ruleId === sessionData.ruleCounts[b].rule) {
            sessionData.ruleCounts[b].originalCount = sessionData.ruleCounts[b].count + 1;
            sessionData.ruleCounts[b].count = sessionData.ruleCounts[b].count + 1; 
            sessionData.ruleCounts[b].originalTotalScore = sessionData.ruleCounts[b].totalScore + Math.round(sessionData.sessions[i].rules.triggeredRules[a].riskScore);         
            sessionData.ruleCounts[b].totalScore = sessionData.ruleCounts[b].totalScore + Math.round(sessionData.sessions[i].rules.triggeredRules[a].riskScore);
            if(this.uSessionSummaryTunedRiskScore) {
              sessionData.ruleCounts[b].totalScorePercent = Math.round(((sessionData.ruleCounts[b].totalScore / this.uSessionSummaryTunedRiskScore))*100);
            } else {
              sessionData.ruleCounts[b].totalScorePercent = Math.round(((sessionData.ruleCounts[b].totalScore / this.uSessionSummaryRiskScore))*100);
            }
                                           
          }
        }
      }     
    }

    // console.log('8');
    for (var b=0; b < sessionData.ruleCounts.length; b++) {
      for (var i=0; i < sessionData.sessions.length; i++) {
        if(sessionData.sessions[i].rules.triggeredRules.some(rule => rule.ruleId === sessionData.ruleCounts[b].rule)) {
          sessionData.ruleCounts[b].originalSessionCount = sessionData.ruleCounts[b].originalSessionCount + 1;
          sessionData.ruleCounts[b].sessionIDs.push({id: sessionData.sessions[i].id,score: sessionData.sessions[i].riskScore});
          sessionData.ruleCounts[b].sessionCount = sessionData.ruleCounts[b].sessionCount + 1;
          if(this.uSessionSummaryTunedRiskScore) {
            sessionData.ruleCounts[b].sessionCountPercent = Math.round(((sessionData.ruleCounts[b].sessionCount / this.uSessionSummaryTunedNotablePerDay))*100);
          } else{
            sessionData.ruleCounts[b].sessionCountPercent = Math.round(((sessionData.ruleCounts[b].sessionCount / this.uSessionSummarySessionCount))*100);
          }
          
        }
      }     
    }
    //  console.log('sessionData = ',sessionData);

    if(!this.onPreviousSession) this.storeTuningSession();
    this.setTuningData(sessionData.userCounts, sessionData.ruleCounts, sessionData.sessionCounts)

  }

  setTuningData(userCounts, ruleCounts, sessionCounts) {
    console.log('setting tuning data');
    this.userData = userCounts;
    this.ruleData = ruleCounts;
    this.sessionData = sessionCounts;
    this.ruleLabels = {};
    // console.log('this.ruleData = ',this.ruleData);
    // console.log('this.userData = ',this.userData);
    this.ruleTuning = [];
    this.bannedEvents = [];
    this.loading = false;
    this.visibleTuningProgress = false;

    for (var i=0; i < this.ruleData.length; i++) {
      this.ruleData[i].ruleDef.ruleLabels.forEach((obj2) => {
        if(typeof this.ruleLabels[obj2.type.concat('-',obj2.id)] === 'undefined') {
          this.ruleLabels[obj2.type.concat('-',obj2.id)] = {};
          this.ruleLabels[obj2.type.concat('-',obj2.id)].labelType = obj2.type;
          this.ruleLabels[obj2.type.concat('-',obj2.id)].labelId = obj2.id;
          this.ruleLabels[obj2.type.concat('-',obj2.id)].labelName = obj2.labelName;
          this.ruleLabels[obj2.type.concat('-',obj2.id)].count = this.ruleData[i].count;
          this.ruleLabels[obj2.type.concat('-',obj2.id)].totalScore = this.ruleData[i].totalScore;
          this.ruleLabels[obj2.type.concat('-',obj2.id)].sessionCount = this.ruleData[i].sessionCount;
          this.ruleLabels[obj2.type.concat('-',obj2.id)].rules = [];
        } else {
          this.ruleLabels[obj2.type.concat('-',obj2.id)].count = this.ruleLabels[obj2.type.concat('-',obj2.id)].count + this.ruleData[i].count
          this.ruleLabels[obj2.type.concat('-',obj2.id)].totalScore = this.ruleLabels[obj2.type.concat('-',obj2.id)].totalScore + this.ruleData[i].totalScore;
          this.ruleLabels[obj2.type.concat('-',obj2.id)].sessionCount = this.ruleLabels[obj2.type.concat('-',obj2.id)].sessionCount + this.ruleData[i].sessionCount;
          
        }
        this.ruleLabels[obj2.type.concat('-',obj2.id)].rules.push(
          {
            rule: this.ruleData[i].rule,
            name: this.ruleData[i].ruleName,
            count: this.ruleData[i].count,
            totalScore: this.ruleData[i].totalScore,
            sessionCount: this.ruleData[i].sessionCount,
            ruleDef: this.ruleData[i].ruleDef,
            sessionIDs: this.ruleData[i].sessionIDs
          }
        );
      })
    }
    this.ruleLabels = Object.values(this.ruleLabels);
    // console.log('this.ruleLabels = ', this.ruleLabels);

    this.columns1 = [
      { field: 'user', header: 'User' },
      { field: 'count', header: 'Session Count' },
      { field: 'totalScore', header: 'Total Score' }
    ];

    this.userDataDynamicColumns = this.columns1.map((col,i) => {
      return <Column key={col.field} field={col.field} header={col.header} sortable/>;
    });

    this.columns2 = [
      { field: 'rule', header: 'Rule ID' },
      { field: 'ruleName', header: 'Rule Name' },
      { field: 'count', header: 'Rule Count' },
      { field: 'sessionCount', header: 'Session Count' },
      { field: 'totalScore', header: 'Total Score' }
    ];

    this.columns4 = [
      { field: 'fieldName', header: 'Field Name' },
      { field: 'fieldValue', header: 'Value' },
      { field: 'count', header: 'Event Count' },
      { field: 'sessionCount', header: 'Session Count' },
      { field: 'totalScore', header: 'Total Score' }
    ];

    this.columns5 = [
      { field: 'name', header: 'Name' },
      { field: 'value', header: 'Value' },
      { field: 'count', header: 'Rule Count' },
      { field: 'score', header: 'Score' }
    ];

    this.ruleTuningDynamicColumns = this.columns5.map((col,i) => {
      return <Column key={col.field} field={col.field} header={col.header} sortable/>;
    });

    
    this.showTuning = false;
    this.showTuning = true;
    this.loading = false;
    
  }

  async storeTuningSession() {
    var db = new Dexie(this.dbName);
    db.version(1).stores(this.dbStores);
    await db.table(this.ruleTuningDb).add({
      date: Date.now(),
      type: this.arrayType,
      daysQueried: this.queryUnitNum,
      riskScore: this.queryRiskScore,
      sessionData: this.thResultsUsers,
      uSessionSummaryRiskScore: this.uSessionSummaryRiskScore,
      uSessionSummarySessionCount: this.uSessionSummarySessionCount,
      uSessionSummaryNotableCount: this.uSessionSummaryNotableCount,
      uSessionSummaryNotablePerDay: this.uSessionSummaryNotablePerDay
    });
    console.log('just inserted and now this.db.ruleTuning.toArray() = ', await db.table(this.ruleTuningDb).toArray());
  }

  async storeValidationSession() {
    var db = new Dexie(this.dbName);
    db.version(1).stores(this.dbStores);
    if(this.onPreviousSession) {
      // console.log('on previous session, will attempt to put');
      // console.log('data to be inserted:');
      // console.log('this.selectedSession.id= ',this.selectedSession.id);
      // console.log('this.selectedSession.epochDate= ',this.selectedSession.epochDate);
      // console.log('this.selectedSession.daysQueried= ',this.selectedSession.daysQueried);
      // console.log('this.rulesAndModels= ',this.rulesAndModels);
      // console.log('this.eventTypes= ',this.eventTypes);
      // console.log('this.summary= ',this.summary);
      // console.log('this.sources= ',this.sources);
      await db.table(this.dataValidationDb).put({
        id: this.selectedSession.id,
        date: this.selectedSession.date,
        daysQueried: this.selectedSession.daysQueried, 
        rulesAndModels: this.rulesAndModelsDone,
        eventTypes: this.eventTypesDone,
        summary: this.summary,
        sources: this.sourcesDone
      });
    } else {
      console.log('not on previous session, will attempt to add')
      await db.table(this.dataValidationDb).add({
        date: Date.now(),
        daysQueried: this.queryUnitNum,
        rulesAndModels: this.rulesAndModelsDone,
        eventTypes: this.eventTypesDone,
        summary: this.summary,
        sources: this.sourcesDone
      });
    }
    
    console.log('just inserted and now this.db.dataValidation.toArray() = ', await db.table(this.dataValidationDb).toArray());
    this.loading = false;
  }

  

  async delTuningSession(id) {
    var db = new Dexie(this.dbName);
    db.version(1).stores(this.dbStores);
    await db.table(this.ruleTuningDb).delete(id);
    this.getDB();
  }

  async delDataValidation(id) {
    var db = new Dexie(this.dbName);
    db.version(1).stores(this.dbStores);
    await db.table(this.dataValidationDb).delete(id);
    this.getDB();
  }

  async selTuningSession(rowData) {
    var db = new Dexie(this.dbName);
    db.version(1).stores(this.dbStores);
    this.selectedSession = await db.table(this.ruleTuningDb).where({id: rowData.id}).toArray();
    this.selectedSession = this.selectedSession[0];
    this.onSessionSelect();
  }

  onSessionSelect() {
    this.onPreviousSession = true;
    this.thResultsUsers = this.selectedSession.sessionData;
    // console.log('this.thResultsUsers = ',this.thResultsUsers);
    this.uSessionSummaryRiskScore = this.selectedSession.uSessionSummaryRiskScore;
    this.uSessionSummarySessionCount = this.selectedSession.uSessionSummarySessionCount;
    this.uSessionSummaryNotableCount = this.selectedSession.uSessionSummaryNotableCount;
    this.uSessionSummaryNotablePerDay = this.selectedSession.uSessionSummaryNotablePerDay;
    this.showHome = false;
    this.showTuning = true;
    this.setTuningData(this.selectedSession.sessionData.userCounts, this.selectedSession.sessionData.ruleCounts);
    // this.arraySum(this.selectedSession.sessionData);
    
  }

  async selDvSession(rowData) {
    var db = new Dexie(this.dbName);
    db.version(1).stores(this.dbStores);
    this.selectedSession = await db.table(this.dataValidationDb).where({id: rowData.id}).toArray();
    this.selectedSession = this.selectedSession[0];
    this.onDvSessionSelect();
  }

  onDvSessionSelect() {
    // console.log('onDvSessionSelect started');
    this.onPreviousSession = true;
    this.rulesAndModels = this.selectedSession.rulesAndModels;
    this.rulesAndModelsDone = this.selectedSession.rulesAndModels;
    this.eventTypes = this.selectedSession.eventTypes;
    this.eventTypesDone = this.eventTypes;
    this.summary = this.selectedSession.summary;
    this.showHome = false;
    this.showValidation = true;
    this.getRawEvents(0,0)
    //this.findRequiredData(this.rulesAndModels);
    
  }

  delPreviousRuleTuning(session) {
    console.log('selected data to delete = ', session);
    this.delTuningSession(session.id);
  }

  delPreviousDataValidation(session) {
    console.log('selected data to delete = ', session);
    this.delDataValidation(session.id);
  }

  onSourceSelect(sessionEvents, assetEvents, sessionHeader, assetHeader) {
    this.selectedSourceSessionEvents = [];
    this.selectedSourceAssetEvents = [];
    this.sessionHeader = sessionHeader;
    this.assetHeader = assetHeader;
    sessionEvents.forEach((obj) => {
      this.selectedSourceSessionEvents.push(obj);
    })
    assetEvents.forEach((obj) => {
      this.selectedSourceAssetEvents.push(obj);
    })
    this.visibleSelectedSource = true;


  }

  onRowSelect(event) {
    this.selectedRule = event.rule;
    this.selectedRuleCount = event.count;
    this.selectedRuleScore = event.totalScore;
    this.selectedRuleSessionCount = event.sessionCount;
    console.log('selected rule = ', event.rule);
    this.showTuning = false;
    this.showEvents = true;
    this.loading = true;
    this.setEvents(event.rule);
    
    
  }

  onMitreSelect (rowData) {
    this.selectedMitre = rowData.labelId.concat('-',rowData.labelName);
    this.selectedRules = rowData.rules;
    this.showMitre = false;
    this.showMitreRules = true;

  }

  toggleShowMitre() {
    this.showMitre = true;
    this.showMitreRules = false;
  }

  toggleShowEvents() {
    this.showEvents = false;
    this.showTuning = true;
     
  }

  toggleShowHome() {
    this.uSessionSummaryTunedRiskScore = null;
    this.uSessionSummaryTunedNotableCount = null;
    this.uSessionSummaryTunedNotablePerDay = null;
    this.uSessionSummaryTunedRiskScorePercent = null;
    this.uSessionSummaryTunedNotableCountPercent = null;
    this.uSessionSummaryTunedNotablePerDayPercent = null;

    this.allRules = null;
    this.allModels = null; 
    this.summary = {};
    this.summary.uniqueUsers = [];
    this.summary.uniqueHosts = [];
    this.summary.uniqueIPs = [];
    this.summary.uniqueUserCount = 0;
    this.summary.uniqueHostCount = 0;
    this.summary.uniqueIPsCount = 0;
    this.sources = [];
    this.userData = [];
    this.ruleData = [];
    this.doneEventTypes = [];
    this.doneEventTypeSessions = [];
    this.doneEventTypeAssets = [];
    this.doneEventTypeSessionsDetails = [];
    this.doneEventTypeAssetsDetails = [];
    this.doneRawEvents = [];

    this.todoRawEventsCount = 0;
    this.doneRawEventsCount = 0;
    this.validDoneRawEventsCount = 0;
    this.retryAttemptRawEventsCount = 0;

    this.getDB();
    this.showTuning = false;
    this.showValidation = false;
    this.onPreviousSession = false;
    this.showpRuleTuning = true;
    this.showHome = true;
  }

  setEvents(ruleName) {
    this.tempCount = 0;
    this.showTuning = false;
    this.showEvents = true;
    this.eventData = [];
    this.eventSummaryData = [];
    this.eventSummaryData2 = {};
    for (var i=0; i < this.thResultsUsers.ruleCounts.length; i++) {
      if(this.thResultsUsers.ruleCounts[i].rule === ruleName){
        this.eventData = this.thResultsUsers.ruleCounts[i].events;
        this.eventData.forEach((obj) => {
          if(this.bannedEvents.some(theEvent => theEvent.event_id === obj.event_id)) {
            this.bannedEvents.forEach((obj3) => {
              if(obj3.event_id === obj.event_id){
                if(obj3.rules.some(theRule => theRule === ruleName)){           
                } else {
                  Object.keys(obj).forEach((obj2) => {
                    if(obj2 != 'time' && obj2 != 'rawlog_time' && obj2 != 'session_order' && obj2 != 'event_id' && obj2 != 'alert_id' && obj2 != 'riskScore' && obj2 != 'is_session_last' && obj2 != 'rawlog_refs' && obj2.substring(0,obj2.indexOf('-')) != 'riskScore' && obj[obj2] != ''){
                      if(typeof this.eventSummaryData2[obj2.concat('-',obj[obj2])] === 'undefined') {
                        this.eventSummaryData2[obj2.concat('-',obj[obj2])] = {};
                        this.eventSummaryData2[obj2.concat('-',obj[obj2])].fieldName = obj2;
                        this.eventSummaryData2[obj2.concat('-',obj[obj2])].fieldValue = obj[obj2];
                        this.eventSummaryData2[obj2.concat('-',obj[obj2])].count = 1;
                        this.eventSummaryData2[obj2.concat('-',obj[obj2])].totalScore = obj['riskScore-'+this.selectedRule];
                        this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionCount = 0;
                        this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionIds = [];
                        if(this.thResultsUsers.ruleCounts[i].sessionIDs.some(id => id.id === obj.origSessionId)) {
                          this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionIds.push({id: obj.origSessionId});
                          this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionCount++;
                        } 
                        this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionCountPercent = Math.round(((this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionCount / this.selectedRuleSessionCount))*100);
                      } else {
                        this.eventSummaryData2[obj2.concat('-',obj[obj2])].count++;
                        this.eventSummaryData2[obj2.concat('-',obj[obj2])].totalScore = this.eventSummaryData2[obj2.concat('-',obj[obj2])].totalScore + obj['riskScore-'+this.selectedRule];
                        this.eventSummaryData2[obj2.concat('-',obj[obj2])].countPercent = Math.round(((this.eventSummaryData2[obj2.concat('-',obj[obj2])].count / this.selectedRuleCount))*100);
                        this.eventSummaryData2[obj2.concat('-',obj[obj2])].totalScorePercent = Math.round(((this.eventSummaryData2[obj2.concat('-',obj[obj2])].totalScore / this.selectedRuleScore))*100);
                        if(this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionIds.some(id => id.id === obj.origSessionId)) {
                        } else {
                          if(this.thResultsUsers.ruleCounts[i].sessionIDs.some(id => id.id === obj.origSessionId)) {
                            this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionIds.push({id: obj.origSessionId});
                            this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionCount++;
                            this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionCountPercent = Math.round(((this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionCount / this.selectedRuleSessionCount))*100);
                          }
                        }
                      } 
                    }     
                  })
                }
              }
            })
          } else {
            Object.keys(obj).forEach((obj2) => {
              if(obj2 != 'time' && obj2 != 'rawlog_time' && obj2 != 'session_order' && obj2 != 'event_id' && obj2 != 'alert_id' && obj2 != 'riskScore' && obj2 != 'is_session_last' && obj2 != 'rawlog_refs' && obj2.substring(0,obj2.indexOf('-')) != 'riskScore' && obj[obj2] != ''){
                if(typeof this.eventSummaryData2[obj2.concat('-',obj[obj2])] === 'undefined') {
                  this.eventSummaryData2[obj2.concat('-',obj[obj2])] = {};
                  this.eventSummaryData2[obj2.concat('-',obj[obj2])].fieldName = obj2;
                  this.eventSummaryData2[obj2.concat('-',obj[obj2])].fieldValue = obj[obj2];
                  this.eventSummaryData2[obj2.concat('-',obj[obj2])].count = 1;
                  this.eventSummaryData2[obj2.concat('-',obj[obj2])].totalScore = obj['riskScore-'+this.selectedRule];
                  this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionCount = 0;
                  this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionIds = [];
                  if(this.thResultsUsers.ruleCounts[i].sessionIDs.some(id => id.id === obj.origSessionId)) {
                    this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionIds.push({id: obj.origSessionId});
                    this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionCount++;
                  }
                  this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionCountPercent = Math.round(((this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionCount / this.selectedRuleSessionCount))*100);
                } else {
                  this.eventSummaryData2[obj2.concat('-',obj[obj2])].count++;
                  this.eventSummaryData2[obj2.concat('-',obj[obj2])].totalScore = this.eventSummaryData2[obj2.concat('-',obj[obj2])].totalScore + obj['riskScore-'+this.selectedRule];
                  this.eventSummaryData2[obj2.concat('-',obj[obj2])].countPercent = Math.round(((this.eventSummaryData2[obj2.concat('-',obj[obj2])].count / this.selectedRuleCount))*100);
                  this.eventSummaryData2[obj2.concat('-',obj[obj2])].totalScorePercent = Math.round(((this.eventSummaryData2[obj2.concat('-',obj[obj2])].totalScore / this.selectedRuleScore))*100);
                  if(this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionIds.some(id => id.id === obj.origSessionId)) {
                  } else {
                    if(this.thResultsUsers.ruleCounts[i].sessionIDs.some(id => id.id === obj.origSessionId)) {
                      this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionIds.push({id: obj.origSessionId});
                      this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionCount++;
                      this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionCountPercent = Math.round(((this.eventSummaryData2[obj2.concat('-',obj[obj2])].sessionCount / this.selectedRuleSessionCount))*100);
                    }
                  } 
                } 
              }     
            })
          }
          
        })
      } 
    }

    this.eventSummaryData = Object.values(this.eventSummaryData2);
    this.eventSummaryData2 = [];
    this.eventSummaryDataDone = this.eventSummaryData;
    this.eventSummaryData = [];
    this.loading = false;
    

  }

  


  
  tuneRule(data){
    this.foundRule = false;
    //Add rule tuning conditions to array
    if(this.ruleTuning.length == 0){
      this.ruleTuning.push({'data':{'name': this.selectedRule, 'value': '', 'count': '', 'score': '', 'sessionCount': ''},'children': []});
      this.ruleTuning[0].children.push({'data':{'name': data.fieldName, 'value': data.fieldValue, 'count': data.count, 'score':data.totalScore, 'sessionCount':data.sessionCount, 'scorePercent': Math.round(((data.totalScore / this.uSessionSummaryRiskScore))*100)}})
    } else {
      this.ruleTuning.forEach((obj, index) => {
        if(obj.data.name === this.selectedRule) {
          this.foundRule = true;
          if(obj.children.some(theEvent => theEvent.data.name === data.fieldName && theEvent.data.value === data.fieldValue)) {
          } else {
            obj.children.push({'data':{'name': data.fieldName, 'value': data.fieldValue, 'count': data.count, 'score':data.totalScore, 'sessionCount': data.sessionCount, 'scorePercent': Math.round(((data.totalScore / this.uSessionSummaryRiskScore))*100)}})           
          }
          
        }
      })
      if(this.foundRule == false) {
        this.ruleTuning.push({'data':{'name': this.selectedRule, 'value': '', 'count': '', 'score': '', 'sessionCount': ''},'children': [{'data':{'name': data.fieldName, 'value': data.fieldValue, 'count': data.count, 'score':data.totalScore, 'sessionCount':data.sessionCount, 'scorePercent': Math.round(((data.totalScore / this.uSessionSummaryRiskScore))*100)}}]});
      }
    }

    //Go back through tuned rules and sum up changes per rule
    this.ruleTuning.forEach((obj, index) => {
      obj.data.count = 0;
      obj.data.score = 0;
      obj.data.sessionCount = 0;
      obj.children.forEach((obj2, index2) => {
        obj.data.count = obj.data.count + obj2.data.count;
        obj.data.score = obj.data.score + obj2.data.score;
        obj.data.sessionCount = obj.data.sessionCount + obj2.data.sessionCount;
      })
    })

    //Apply changes to rule counts
    for (var b=0; b < this.thResultsUsers.ruleCounts.length; b++) {
      this.ruleTuning.forEach((obj, index) => {
        if (obj.data.name === this.thResultsUsers.ruleCounts[b].rule) {
          this.thResultsUsers.ruleCounts[b].count = this.thResultsUsers.ruleCounts[b].originalCount - obj.data.count;
          this.thResultsUsers.ruleCounts[b].totalScore = this.thResultsUsers.ruleCounts[b].originalTotalScore - obj.data.score;
          this.thResultsUsers.ruleCounts[b].sessionCount = this.thResultsUsers.ruleCounts[b].originalSessionCount - obj.data.sessionCount;
          if(obj.data.name === this.selectedRule) {
            this.selectedRuleScore = this.thResultsUsers.ruleCounts[b].totalScore;
            this.selectedRuleCount = this.thResultsUsers.ruleCounts[b].count;
            this.selectedRuleSessionCount = this.thResultsUsers.ruleCounts[b].sessionCount;
          }
        }
      })
    }
    this.ruleData = this.thResultsUsers.ruleCounts;
    

    this.eventData.forEach((obj, index) => {
      Object.keys(obj).forEach((obj2, index2) => {
        if(data.fieldName === obj2 && data.fieldValue === obj[obj2]) {
          if(this.bannedEvents.some(theEvent => theEvent.event_id === obj.event_id)) {
            this.bannedEvents.forEach((obj3, index3) => {
              if(obj3.event_id === obj.event_id){
                if(obj3.rules.some(theRule => theRule === this.selectedRule)){    
                  //console.log(this.selectedRule+ ' is already banned for event_id '+obj.event_id);         
                } else {
                  obj3.event_id[obj.event_id].rules.push(this.selectedRule);
                } 
              }
            })                 
          } else {
            this.bannedEvents.push({'event_id': obj.event_id, 'rules': [this.selectedRule]})
          }
        }
      })      
    })

    //Test out rule exceptions on sessions
    this.thResultsUsers.sessions.forEach((obj, index) => {
      obj.riskScoreTuned = obj.riskScore;
      Object.keys(obj.rules.triggeredRuleEvents).forEach((obj2, index2) => {
        if(this.bannedEvents.some(theEvent => theEvent.event_id === obj2)) {
          this.bannedEvents.forEach((obj3, index3) => {
            if(obj3.event_id === obj2) {
              obj3.rules.forEach((obj4, index4) => {
                Object.keys(obj.rules.triggeredRuleEvents[obj2].fields).forEach((obj5, index4) => {
                  //console.log ('obj5 = '+obj5 + ' '+ obj5.substring(obj5.indexOf('-') + 1));
                  if(obj3.rules.some(theRule => theRule === obj5.substring(obj5.indexOf('-') + 1))){ 
                    //console.log('found one at index '+ index);
                    //console.log('subtracting '+obj.rules.triggeredRuleEvents[obj2].fields[obj5]+ ' from '+obj.riskScoreTuned);
                    obj.riskScoreTuned = obj.riskScoreTuned - obj.rules.triggeredRuleEvents[obj2].fields[obj5];        
                  } 
                })
              })
            }   
          })
        }
      })
    })

    // Calculate results of rule exceptions on sessions
    this.uSessionSummaryTunedNotableCount = 0;
    this.uSessionSummaryTunedNotablePerDay = 0;
    this.uSessionSummaryTunedRiskScore = 0;
    this.uSessionSummaryTunedNotableCountPercent = 0;
    this.uSessionSummaryTunedNotablePerDayPercent = 0;
    this.uSessionSummaryTunedRiskScorePercent = 0;
    for (var i=0; i < this.thResultsUsers.sessions.length; i++) {
      if(this.thResultsUsers.sessions[i].riskScoreTuned >= 90) this.uSessionSummaryTunedNotableCount = this.uSessionSummaryTunedNotableCount + 1
      this.uSessionSummaryTunedRiskScore = this.uSessionSummaryTunedRiskScore + this.thResultsUsers.sessions[i].riskScoreTuned;
    }
    this.uSessionSummaryTunedNotablePerDay = Math.round(this.uSessionSummaryTunedNotableCount / this.queryUnitNum );
    this.uSessionSummaryTunedNotableCountPercent = Math.round(((this.uSessionSummaryTunedNotableCount / this.uSessionSummaryNotableCount)-1)*100);
    this.uSessionSummaryTunedNotablePerDayPercent = Math.round(((this.uSessionSummaryTunedNotablePerDay / this.uSessionSummaryNotablePerDay)-1)*100);
    this.uSessionSummaryTunedRiskScorePercent = Math.round(((this.uSessionSummaryTunedRiskScore / this.uSessionSummaryRiskScore)-1)*100);

    //Reset user session score rollup and re-evaluate based on the tuned risk scores from sessions
    this.thResultsUsers.userCounts.forEach((obj, index) => {
      obj.totalScore = 0;
    })
    for (var i=0; i < this.thResultsUsers.sessions.length; i++) {
      for (var b=0; b < this.thResultsUsers.userCounts.length; b++) {
        if (this.thResultsUsers.sessions[i].user === this.thResultsUsers.userCounts[b].user) {
          this.thResultsUsers.userCounts[b].totalScore = this.thResultsUsers.userCounts[b].totalScore + this.thResultsUsers.sessions[i].riskScoreTuned;
        }
      }     
    }
    this.userData = this.thResultsUsers.userCounts;

    //re-calcualte results of rule exceptions on event data
    this.setEvents(this.selectedRule);
    
  }

  startValidation() {
    this.showValidation = true;
    this.loading = true;
    this.showLogin = false;
    this.showHome = false;
    this.visibleDataValidationProgress = true;
    //Get all rules
    axios('https://'+this.host+'/uba/api/rules/fetchRules?filterBy=all', {
      method: 'GET',
      withCredentials: 'include',
    }).then(response => {
      this.allRules = response.data;
      this.allRules.forEach((obj, index) => {
        obj.rules.forEach((obj2, index) => {
          if(obj2.ruleDef.modelName === 'FACT') {
            obj2.canTrigger = 'N/A';
          } else {
            obj2.canTrigger = false;
          }
          obj2.hasTriggered = false;
        })             
      })
      this.getModels();
    }).catch(error => {
      console.log('error');
      console.log(error);
      this.errors.push('Error fetching all rules');
      this.errorVisible = true;
      alert('ERROR fetching data: Check your URL and authenticaiton details and try again');
    }); 
  }
  
  

  getModels() {
    //Get all models
    axios('https://'+this.host+'/uba/api/rules/modelDefinitions', {
      method: 'GET',
      withCredentials: 'include',
    }).then(response => {
      this.allModels = response.data;
      //console.log(response);
      Object.keys(this.allModels).forEach((obj, index) => {
        this.allModels[obj].populating = false;
        this.allModels[obj].attributes.populating = false;
      })
      this.checkModels(0);
    }).catch(error => {
      console.log(error);
      this.errors.push('Error fetching all models');
      this.errorVisible = true;
    });      
  }

  checkModels(offset) {
    var counter = 0;
    if(offset != 0) {
      var tempIndex = offset * this.allowedCount;
    } else {
      var tempIndex = 0;
    }
    var maxIndex = tempIndex + this.allowedCount;
    var tempKeys = Object.keys(this.allModels);
    this.todoModels = tempKeys.length;
    var tempArray = [];
    for (var b=tempIndex; b < maxIndex; b++) {
      tempArray.push(tempKeys[b]);
    }
    tempArray.forEach((obj,index) => {
      if(obj != undefined) {
        axios('https://'+this.host+'/uba/api/histograms/search?maxNumberOfResults=1&modelName='+obj, {
          method: 'GET',
          withCredentials: 'include',
        }).then(response => {
          //  console.log(response);
          this.allModels[obj].histograms = response.data;
          if(this.allModels[obj].histograms.histograms.length != 0) {
            this.allModels[obj].populating = true;
            this.allModels[obj].attributes.populating = true;
          }
        //  console.log('this index after = '+index);
          counter = counter + 1;
          this.doneCountModels = this.doneCountModels + 1;
          this.dataValidationProgress = Math.round(((this.doneCountModels/this.todoModels) * 20));
           
          if(counter < this.allowedCount) {
          } else {
          if(this.doneCountModels <= tempKeys.length) this.checkModels(offset+1);
          }
          if(this.doneCountModels === tempKeys.length) {
            console.log('moving to checkRules');
            this.checkRules(0);
          }
        }).catch(error => {
          console.log(error);
          this.errors.push('Error fetching model: '+obj);
          this.errorVisible = true;
          counter = counter + 1;
          this.doneCountModels = this.doneCountModels + 1;
          if(counter < this.allowedCount) {
          } else {
          if(this.doneCountModels <= tempKeys.length) this.checkModels(offset+1);
          }
          if(this.doneCountModels === tempKeys.length) {
            console.log('moving to checkRules');
            this.checkRules(0);
          }
        });
      }
      
    })
    
    
  }

  checkRules(offset) {
    var counter = 0;
    if(offset != 0) {
      var tempIndex = offset * this.allowedCount;
    } else {
      var tempIndex = 0;
    }
    var maxIndex = tempIndex + this.allowedCount;
    var tempKeys = []
    var tempArray = [];
    this.allRules.forEach((obj,index) => {
      obj.rules.forEach((obj2,index2) => {
        tempKeys.push(obj2.ruleId);
      })
    })
    this.todoRules = tempKeys.length;
    for (var a=tempIndex; a < maxIndex; a++) {
      tempArray.push(tempKeys[a]);
    }
    //Check all rules if triggered
    tempArray.forEach((obj,index) => {
      axios('https://'+this.host+'/uba/api/rules/triggerFrequency?ruleId='+obj, {
        method: 'GET',
        withCredentials: 'include',
      }).then(response => {
        //  console.log(response);
        this.allRules.forEach((obj2,index2) => {
          obj2.rules.forEach((obj3,index3) => {
            if(obj3.ruleId === obj) {
              obj3.triggerFreq = response.data;
              if(obj3.triggerFreq.triggerFrequency === 0) {
              } else{
                obj3.hasTriggered = true;
              }
            }
          })
        })
        counter = counter + 1;
        this.doneCountRules = this.doneCountRules + 1;
        this.dataValidationProgress = Math.round((((this.doneCountRules/this.todoRules) * 20) + 20));
        //console.log('Rules counter = '+counter);
        //console.log('doneCountRules = '+this.doneCountRules);
        //console.log('tempKeys.length = '+tempKeys.length);
         
        if(counter < this.allowedCount) {
        //  console.log('Index = '+b+' this.activeCount LESSER this.allowedCount');
        } else {
        //  console.log('Index = '+b+' this.activeCount GREATER this.allowedCount');
          if(this.doneCountRules <= tempKeys.length) this.checkRules(offset+1);
        }
         if(this.doneCountRules === tempKeys.length) this.combineArrays();
      }).catch(error => {
        console.log(error);
          this.errors.push('Error fetching rule: '+obj);
          this.errorVisible = true;
          counter = counter + 1;
          this.doneCountRules = this.doneCountRules + 1;
          if(counter < this.allowedCount) {
          //  console.log('Index = '+b+' this.activeCount LESSER this.allowedCount');
          } else {
          //  console.log('Index = '+b+' this.activeCount GREATER this.allowedCount');
            if(this.doneCountRules <= tempKeys.length) this.checkRules(offset+1);
          }
          if(this.doneCountRules === tempKeys.length) this.combineArrays();
      });

    })
    
      
  }

  combineArrays() {
    this.summary = {};
    this.summary.uniqueUsers = [];
    this.summary.uniqueHosts = [];
    this.summary.uniqueIPs = [];
    this.summary.uniqueUserCount = 0;
    this.summary.uniqueHostCount = 0;
    this.summary.uniqueIPsCount = 0;
    this.rulesAndModels = [];
    this.allRules.forEach((obj,index) => {
      obj.rules.forEach((obj2,index2) => {
        var ruleType;
        if(obj2.ruleDef.modelName === 'FACT') {
          ruleType = 'FACT';
        } else {
          ruleType = 'Model';
        }

        if(this.allModels[obj2.ruleDef.modelName] == undefined) {
          this.rulesAndModels.push({ruleCat: obj.categoryId, ruleId: obj2.ruleDef.ruleId, ruleName: obj2.ruleDef.ruleName, ruleType: ruleType, modelName: obj2.ruleDef.modelName, modelDisabled: 'N/A', populating: 'N/A', hasTriggered: obj2.hasTriggered.toString(), ruleDef: obj2.ruleDef})
        } else {
          this.rulesAndModels.push({ruleCat: obj.categoryId, ruleId: obj2.ruleDef.ruleId, ruleName: obj2.ruleDef.ruleName, ruleType: ruleType, modelName: obj2.ruleDef.modelName, modelDisabled: this.allModels[obj2.ruleDef.modelName].attributes.disabled, populating: this.allModels[obj2.ruleDef.modelName].populating.toString(), hasTriggered: obj2.hasTriggered.toString(), ruleDef: obj2.ruleDef, modelDef: this.allModels[obj2.ruleDef.modelName].attributes})
        }
        
      })
    })
    
    this.findRequiredData(this.rulesAndModels);
  }

  findRequiredData(rulesAndModels) {
    rulesAndModels.forEach((obj,index) => {
      var tempfield = '';
      //If not a fact based rule, determine the event types required for model to trigger
      if(obj.modelDef != undefined) {
        obj.modelDef.requiredEventFields = [];
        obj.modelDef.presentEventFields = [];
        obj.modelDef.missingEventFields = [];
        //If the feature has no parenthesis then just use a field name
        if(obj.modelDef.feature.toLowerCase().startsWith('count') || obj.modelDef.feature.toLowerCase().startsWith('distinct') || obj.modelDef.feature.toLowerCase().startsWith('sum') || obj.modelDef.feature.toLowerCase().startsWith('sequence')) {
          if((obj.modelDef.feature.toLowerCase().substring(obj.modelDef.feature.indexOf("(")+1)).startsWith('getvalue(')) {
            tempfield = obj.modelDef.feature.toLowerCase().substring(obj.modelDef.feature.indexOf("(")+1, obj.modelDef.feature.indexOf(")")+1).replace(/ /g,"");        
          } else {
            tempfield = obj.modelDef.feature.toLowerCase().substring(obj.modelDef.feature.indexOf("(")+1, obj.modelDef.feature.indexOf(",")).replace(/ /g,"");    
          }   
        } else {
          tempfield = obj.modelDef.feature.toLowerCase().replace(/ /g,"");            
        }
        if(obj.modelDef.requiredEventFields.some(field => field === tempfield)) {
        } else {
          obj.modelDef.requiredEventFields.push(tempfield);
        }
        if(obj.modelDef.trainIf.toLowerCase().startsWith('count') || obj.modelDef.trainIf.toLowerCase().startsWith('distinct') || obj.modelDef.trainIf.toLowerCase().startsWith('sum') || obj.modelDef.trainIf.toLowerCase().startsWith('sequence')) {
          if((obj.modelDef.trainIf.toLowerCase().substring(obj.modelDef.trainIf.indexOf("(")+1)).startsWith('getvalue(')) {
            tempfield = obj.modelDef.trainIf.toLowerCase().substring(obj.modelDef.trainIf.indexOf("(")+1, obj.modelDef.trainIf.indexOf(")")+1).replace(/ /g,"");
          } else {
            tempfield = obj.modelDef.trainIf.toLowerCase().substring(obj.modelDef.trainIf.indexOf("(")+1, obj.modelDef.trainIf.indexOf(",")).replace(/ /g,"");
          }          
        }
        if(obj.modelDef.requiredEventFields.some(field => field === tempfield)) {
        } else {
          obj.modelDef.requiredEventFields.push(tempfield);
        }
        if(obj.modelDef.trainIf.toLowerCase().includes('exists(')) {
          tempfield = obj.modelDef.trainIf.toLowerCase().substring(obj.modelDef.trainIf.indexOf("exists(")+7, obj.modelDef.trainIf.indexOf(")", (obj.modelDef.trainIf.indexOf("exists(")+7)));
          if(obj.modelDef.requiredEventFields.some(field => field === tempfield)) {
          } else {
            obj.modelDef.requiredEventFields.push(tempfield);
          }
        }
        if(obj.modelDef.scopeType === 'USER' || obj.modelDef.scopeType === 'PEERS' || obj.modelDef.scopeType === 'DEVICE') {
          tempfield = obj.modelDef.scopeValue.toLowerCase().replace(/ /g,"");
          if(obj.modelDef.requiredEventFields.some(field => field === tempfield)) {
          } else {
            obj.modelDef.requiredEventFields.push(tempfield);
          }
        }
        //If the model is trained by counting events at the end of the session or sequence then the true event types required are in the "Count" statement in the model's feature
        if(obj.modelDef.histogramEventTypes.includes('session-end') || obj.modelDef.histogramEventTypes.includes('sequence-end')) {
          obj.modelDef.requiredEventTypes = obj.modelDef.feature.substring(obj.modelDef.feature.indexOf(",")+1, obj.modelDef.feature.lastIndexOf(")")).replace(/ /g,"").split(",");
          for (var i = obj.modelDef.requiredEventTypes.length - 1; i>= 0; i--) {
            if(obj.modelDef.requiredEventTypes[i].startsWith("'") && obj.modelDef.requiredEventTypes[i].endsWith("'") && obj.modelDef.requiredEventTypes[i].charAt(1).match(/[a-z]/) != null) {
              obj.modelDef.requiredEventTypes[i] = obj.modelDef.requiredEventTypes[i].replace(/'/g,"");
            } else {
              obj.modelDef.requiredEventTypes.splice(i, 1);
            }
        }
          obj.ruleDef.requiredEvents = obj.modelDef.requiredEventTypes;
          //Otherwise we can simply use the "histogramEventTypes" field
        } else {
          if(obj.modelDef.histogramEventTypes.includes(':')) {
            obj.modelDef.requiredEventTypes = obj.modelDef.histogramEventTypes.split(":");
            obj.ruleDef.requiredEvents = obj.modelDef.requiredEventTypes;
          } else {
            obj.modelDef.requiredEventTypes = [];
            obj.modelDef.requiredEventTypes.push(obj.modelDef.histogramEventTypes);
            obj.ruleDef.requiredEvents = obj.modelDef.requiredEventTypes;
          }
        }
      } else {
          //If there is no model then use the rule definition field
          obj.ruleDef.requiredEvents = obj.ruleDef.ruleEventTypes;
        }     
    })
    
    if(this.onPreviousSession) {
      this.bootstrapEventTypes();
    } else {
      this.getEventTypes();
    }
  }

  getEventTypes() {
    this.eventTypes = [];
    this.rulesAndModels.forEach((obj,index) => {
      if(obj.populating != 'N/A') {
        obj.ruleDef.requiredEvents.forEach((obj2,index2) => {
          if(this.eventTypes.some(event => event.name === obj2)) {
          } else {
            this.eventTypes.push({name: obj2});
          }
        })
      }
    })
    
    this.getEventTypeSessions(0);  
    
    
  }

  getEventTypeSessions(offset) {
   // console.log('getting event types offset: '+offset);
    var counter = 0;
    var tempKeys = []
    var tempArray = [];
    var tempAdded = 0;
    this.eventTypes.forEach((obj,index) => {
      tempKeys.push(obj);
    })
    this.todoEventTypes = tempKeys.length;
    for (var a=0; a < tempKeys.length && tempAdded <= this.allowedEventTypeCount; a++) {
      if(this.doneEventTypes.some(event => event.name === tempKeys[a].name)) {
      } else {
      //  console.log('pushing '+tempKeys[a].name+' to doneEventTypes');
        tempArray.push(tempKeys[a]);
        this.doneEventTypes.push(tempKeys[a]);
        tempAdded++;
      }      
    }
    //Check all event types if they exist
    tempArray.forEach((obj,index) => {
      if(obj != undefined) {
       // console.log('querying for '+obj.name);
       this.activeEventTypes++
      chrome.tabs.sendMessage(this.tabID, {message: "eventTypeSearch", eventType: obj, queryUnit: this.queryUnit, queryUnitNum: this.queryUnitNum, queryLimit: this.queryLimitDV}, (response) => {
        if(typeof response == 'undefined') {
          console.log ('response is undefined');
          this.errors.push('error fetching all session IDs for event type: '+obj.name+'. Trying again');
          this.errorVisible = true;     
          for (var a = 0; a < this.doneEventTypes.length; a++) {
            if(this.doneEventTypes[a].name === obj.name) this.doneEventTypes.splice(a, 1);
          }              
          this.getEventTypeSessions(offset);
        } else {
          this.activeEventTypes--
          this.eventTypes.forEach((obj2, index2) => {
            if(obj.name === obj2.name) {
              obj2.response = response;
              obj2.todoSessionIDs = [];
              obj2.todoAssetIDs = [];
              obj2.todoSessionEventIDs = [];
              obj2.todoAssetEventIDs = [];
              obj2.doneSessionIDs = [];
              obj2.doneAssetIDs = [];
              obj2.doneSessionEventIDs = [];
              obj2.doneAssetEventIDs = [];
              obj2.sessionEventDetails = [];
              obj2.sessionEventFields = [];
              obj2.assetEventDetails = [];
              obj2.assetEventFields = [];
                    
              if (Object.keys(obj2.response.entities).length != 0) {  
                obj2.populating = true;
              } else {
                obj2.populating = false;
              }
              //console.log('counter BEFORE = ',counter);
              counter = counter + 1;
              //console.log('counter AFTER = ',counter);            
              //console.log('counter: '+counter+' for offset: '+offset);
              //console.log('tempKeys.length = ',tempKeys.length);
              //console.log('this.doneCountEventTypes BEFORE = ',this.doneCountEventTypes);             
              this.doneCountEventTypes = this.doneCountEventTypes + 1;
              //console.log('this.doneCountEventTypes AFTER = ',this.doneCountEventTypes);
              //console.log('this.dataValidationProgress BEFORE = ',this.dataValidationProgress);
              this.dataValidationProgress = Math.round((((this.doneCountEventTypes/this.todoEventTypes) * 20) + 40));
              //console.log('this.dataValidationProgress AFTER = ',this.dataValidationProgress);
                            
              if(counter === this.allowedEventTypeCount+1 || this.todoEventTypes-this.doneCountEventTypes === 0) {
                offset = offset + 1;
                if (obj.response.entities.asset != undefined){
                  // console.log('BEFORE SORT = ', obj2.response.entities.asset);
                  obj2.response.entities.asset.sort((a, b) => (a.assetSequenceInfo.numOfEvents > b.assetSequenceInfo.numOfEvents) ? 1 : -1);
                  // console.log('AFTER SORT = ', obj2.response.entities.asset);
                } 
                if (obj.response.entities.session != undefined) obj2.response.entities.session.sort((a, b) => (a.sessionInfo.numOfEvents > b.sessionInfo.numOfEvents) ? 1 : -1);
                if(this.doneCountEventTypes < tempKeys.length) {

                  //console.log('short, running again');
                  this.getEventTypeSessions(offset);

                } else {
                  console.log('starting to get session details');
                  this.getTodoSessions();
                } 
              }
              
            }
          })
        }
        
      });     
    }     
  })
       
  }

  getTodoSessions() {
    this.todoSessionIDs = [];
    this.todoAssetIDs = []
    for (var i=0; i < this.eventTypes.length; i++) {
      if(typeof this.eventTypes[i].response.entities.session !== 'undefined') {
        this.eventTypes[i].inSession = true;
        this.eventTypes[i].sessionCount = this.eventTypes[i].response.entities.session.length;
        this.eventTypes[i].totalCount = this.eventTypes[i].totalCount + this.eventTypes[i].response.entities.session.length;
        for (var a=0; a < this.allowedSessionsPerEventType; a++) {
          if(typeof this.eventTypes[i].response.entities.session[a] !== 'undefined') {
            this.todoSessionIDs.push({
              name: this.eventTypes[i].name,
              sessionId: this.eventTypes[i].response.entities.session[a].sessionInfo.sessionId,
              eventIds: [],
              eventDetails: []
            });
          }
        }
      }
      if(typeof this.eventTypes[i].response.entities.asset !== 'undefined') {
        for (var a=0; a < this.allowedSessionsPerEventType; a++) {
          if(typeof this.eventTypes[i].response.entities.asset[a] !== 'undefined') {
            this.todoAssetIDs.push({
              name: this.eventTypes[i].name,
              assetId: this.eventTypes[i].response.entities.asset[a].assetSequenceInfo.assetId,
              assetSequenceId: this.eventTypes[i].response.entities.asset[a].assetSequenceInfo.assetSequenceId,
              eventDetails: []
            });
          }
        }
      }
    }
    // console.log('this.todoSessionIDs = ',this.todoSessionIDs);
    // console.log('this.todoAssetIDs = ',this.todoAssetIDs);
    this.todoEventTypeSessions = this.todoSessionIDs.length;
    this.todoEventTypeAssets  =this.todoAssetIDs.length;
    this.getEventTypeSessionDetails();
  }

  getEventTypeSessionDetails(){
    var tempSessions = 0
    this.todoSessionIDs.forEach((obj) => {
      if(this.doneEventTypeSessions.some(event => event.name === obj.name && event.sessionId === obj.sessionId)) {
      } else {
        if(tempSessions < this.allowedEventTypeCount) {
          tempSessions++;
          this.doneEventTypeSessions.push(obj);
          axios('https://'+this.host+'/uba/api/sequence/events/eventType?sequenceType=session&sequenceId='+obj.sessionId+'&eventType='+obj.name+'&numberOfResults='+this.allowedEventsPerSession, {
            method: 'GET',
            withCredentials: 'include',
          }).then(response => {
            for (var i = 0; i < Object.keys(response.data).length; i++) {
              obj.eventIds.push(response.data[i]);
            }
            tempSessions--;
            this.doneCountEventTypeSessions++                
            this.dataValidationProgress = Math.round((((this.doneCountEventTypeSessions/this.todoEventTypeSessions) * 10) + 60));
              
            if(tempSessions === 0) {
              if(this.doneCountEventTypeSessions < this.todoEventTypeSessions) {
                this.getEventTypeSessionDetails();
              } else {
                // console.log('Moving to Asset Event Details here');
                // console.log('finished this.todoSessionIDs = ',this.todoSessionIDs);
                this.getTodoSessionEvents();
              }
            }
          }).catch(error => {
            console.log(error);
            this.errors.push('Error fetching single session for event type: '+obj.name);
            this.errorVisible = true;
          });
        }
      }
    })
     
  }

  getTodoSessionEvents() {
    var tempSessionLength = 0;
    for (var i=0; i < this.todoSessionIDs.length; i++) {
      this.todoSessionIDs[i].eventIds.forEach((obj) => {
        tempSessionLength++;
      })
    }
    this.todoEventTypeSessionsDetails = tempSessionLength;
    this.checkEventTypeSessionDetails();
  }

  checkEventTypeSessionDetails() {
    var tempSessions = 0;
    var tempEvents = 0;
    this.todoSessionIDs.forEach((obj) => {
      if(this.doneEventTypeSessionsDetails.some(event => event.name === obj.name && event.sessionId === obj.sessionId)) {
      } else {
        if(tempSessions < this.allowedEventTypeSessionCount) {
          tempSessions++;
          this.doneEventTypeSessionsDetails.push(obj);
          obj.eventIds.forEach((obj2) => {
            tempEvents++;
            axios('https://'+this.host+'/uba/api/timeline/events/start?username=*&startSequenceType=session&startSequenceId='+obj.sessionId+'&preferredNumberOfEvents=1&anomalyOnly=false&sequenceTypes=web&sequenceTypes=session&sequenceTypes=endpoint&sequenceTypes=file&startEventId='+obj2, {
              method: 'GET',
              withCredentials: 'include',
            }).then(response => {
              obj.eventDetails.push(response.data);
              tempEvents--
              this.doneCountEventTypeSessionsDetails++;               
              this.dataValidationProgress = Math.round((((this.doneCountEventTypeSessionsDetails/this.todoEventTypeSessionsDetails) * 10) + 80));
                
              if(tempEvents === 0) {
                tempSessions--;
                if(this.doneCountEventTypeSessionsDetails < this.todoEventTypeSessionsDetails) {
                  this.checkEventTypeSessionDetails();
                } else {
                  this.pushSessionEventDetails();
                  
                }
              }
            }).catch(error => {
              console.log(error);
              this.errors.push('Error fetching single session event for event type: '+obj.name);
              this.errorVisible = true;
            });
          })
        }
      }
    })
  }

  pushSessionEventDetails() {
    for (var i=0; i < this.eventTypes.length; i++) {
      for (var a=0; a < this.todoSessionIDs.length; a++) {
        if(this.eventTypes[i].name === this.todoSessionIDs[a].name) {
          this.todoSessionIDs[a].eventDetails.forEach((obj) => {
            if(typeof obj.firstEvent !== 'undefined') {
              if(typeof obj.aggregatedEvents[0].es[0].fields.rawlog_refs !== 'undefined') {
                obj.firstEvent.fields.rawEventSearch = '{"rawlog_refs":'+JSON.stringify(obj.aggregatedEvents[0].es[0].fields.rawlog_refs)+'}';
              }
              Object.keys(obj.firstEvent.fields).forEach((obj6) => {
                if(this.eventTypes[i].sessionEventFields.some(theField => theField.toLowerCase().replace(/ /g,"") === obj6.toLowerCase().replace(/ /g,""))) {
                } else{
                  this.eventTypes[i].sessionEventFields.push(obj6.toLowerCase().replace(/ /g,""));
                }
              })
            }
            this.eventTypes[i].sessionEventDetails.push(obj);                              
          })
        }
      }
    }
    this.getEventTypeAssetDetails();
  }

  getEventTypeAssetDetails(){
    var tempSessions = 0
    this.todoAssetIDs.forEach((obj) => {
      if(this.doneEventTypeAssets.some(event => event.name === obj.name && event.assetId === obj.assetId && event.assetSequenceId === obj.assetSequenceId)) {
      } else {
        if(tempSessions < this.allowedEventTypeCount) {
          tempSessions++;
          this.doneEventTypeAssets.push(obj);
          axios('https://'+this.host+'/uba/api/asset/timeline/events/start?assetId='+obj.assetId+'&startAssetSequenceId='+obj.assetSequenceId+'&preferredNumberOfEvents=5&anomalyOnly=false&eventCategories=*&sequenceTypes=asset&eventTypes='+obj.name+'&eventTypeInclude=true', {
            method: 'GET',
            withCredentials: 'include',
          }).then(response => {
            obj.eventDetails.push(response.data); 
            tempSessions--
            this.doneCountEventTypeAssets++                
            this.dataValidationProgress = Math.round((((this.doneCountEventTypeAssets/this.todoEventTypeAssets) * 10) + 80));

            if(tempSessions === 0) {
              if(this.doneCountEventTypeAssets < this.todoEventTypeAssets) {
                this.getEventTypeAssetDetails();
              } else {
                console.log('Moved on to pushAssetEventDetails here');
                this.pushAssetEventDetails();
              }
            }
          }).catch(error => {
            console.log(error);
            this.errors.push('Error fetching single session event for event type: '+obj.name);
            this.errorVisible = true;
          });
        }
      }
    })
     
  }

  pushAssetEventDetails() {
    for (var i=0; i < this.eventTypes.length; i++) {
      for (var a=0; a < this.todoAssetIDs.length; a++) {
        if(this.eventTypes[i].name === this.todoAssetIDs[a].name) {
          this.todoAssetIDs[a].eventDetails.forEach((obj) => {
            if(typeof obj.firstEvent !== 'undefined') {
              obj.aggregatedEvents[0].es.forEach((obj6) => {
                if(typeof obj6.fields.rawlog_refs !== 'undefined') {
                  obj6.fields.rawEventSearch = '{"rawlog_refs":'+JSON.stringify(obj6.fields.rawlog_refs)+'}';
                }
                Object.keys(obj6.fields).forEach((obj7) => {
                  if(this.eventTypes[i].assetEventFields.some(theField => theField.toLowerCase().replace(/ /g,"") === obj7.toLowerCase().replace(/ /g,""))) {
                  } else{
                    this.eventTypes[i].assetEventFields.push(obj7.toLowerCase().replace(/ /g,""));
                    }
                })
              })
            }
            this.eventTypes[i].assetEventDetails.push(obj);
          })
        }
      }
    }
    this.getRawEvents(0,0);
  }

  async getRawEvents(offset, retryAttempt) {
    // console.log('started getRawEvents. offset: ',offset);
    this.retryAttemptRawEventsCount = retryAttempt;
    var counter = 0;
    var tempKeys = []
    var tempArray = [];
    var tempAdded = 0;
    this.eventTypes.forEach((obj) => {
      obj.sessionEventDetails.forEach((obj2) => {
        if(typeof obj2.firstEvent.fields.rawEventSearch !== 'undefined' && obj2.firstEvent.fields.rawEventSearch != null && obj2.firstEvent.fields.rawEventSearch != '') {
          if(tempKeys.some(event => event === obj2.firstEvent.fields.rawEventSearch)) {
          } else {
            tempKeys.push(obj2.firstEvent.fields.rawEventSearch);
          }
          if(typeof obj2.firstEvent.fields.dlEvent !== 'undefined') {
            if(this.doneRawEvents.some(event => event === obj2.firstEvent.fields.rawEventSearch)) {
            } else {
              this.validDoneRawEventsCount++;
              this.doneRawEventsCount++;
              this.doneRawEvents.push(obj2.firstEvent.fields.rawEventSearch);
            } 
          }        
        }        
      });
      obj.assetEventDetails.forEach((obj2) => {
        if(typeof obj2.aggregatedEvents[0] !== 'undefined') {
          obj2.aggregatedEvents[0].es.forEach((obj6) => {
            if(typeof obj6.fields.rawEventSearch !== 'undefined' && obj6.fields.rawEventSearch != null && obj6.fields.rawEventSearch != '') {
              if(tempKeys.some(event => event === obj6.fields.rawEventSearch)) {
              } else {
                tempKeys.push(obj6.fields.rawEventSearch);
              }
              if(typeof obj6.fields.dlEvent !== 'undefined') {
                if(this.doneRawEvents.some(event => event === obj6.fields.rawEventSearch)) {
                } else {
                  this.validDoneRawEventsCount++;
                  this.doneRawEventsCount++;
                  this.doneRawEvents.push(obj6.fields.rawEventSearch);
                } 
              }
            }
          })
        }      
      });
    });
    this.todoRawEventsCount = tempKeys.length;
    if(this.validDoneRawEventsCount != this.todoRawEventsCount ) {
      this.visibleDataValidationProgress = true;
    }  
    
    for (var a=0; a < tempKeys.length && tempAdded <= this.allowedRawEventCount; a++) {
      if(this.doneRawEvents.some(event => event === tempKeys[a])) {
      } else {
        tempArray.push(tempKeys[a]);
        this.doneRawEvents.push(tempKeys[a]);
        tempAdded++;
        // console.log('tempAdded updated to ', tempAdded);
      }      
    }
    var templength = this.doneRawEvents.length;
    // console.log('this.doneRawEvents.length = ', templength);
    // console.log('this.doneRawEventsCount = ', this.doneRawEventsCount);
    if(tempArray.length === 0) {
      // console.log('tempArray.length === 0, nothing to query');
      if(this.onPreviousSession) {
        this.findRequiredData(this.rulesAndModels)
      } else {
        this.bootstrapEventTypes();
      }
    } 
    // console.log('setup arrays, tempArray.length = ', tempArray.length);
    if(offset === 0 && retryAttempt === 0){
      // console.log('First offset and no retry check');
      // console.log('this.todoRawEventsCount = ', this.todoRawEventsCount);
      // console.log('this.validDoneRawEventsCount = ', this.validDoneRawEventsCount);
      // console.log('this.doneRawEventsCount = ', this.doneRawEventsCount);
    }
    //Get raw events from DL all rules if triggered
    tempArray.forEach(async (obj) => {
      if(obj != undefined) {
        this.activeRawEvents++
        chrome.tabs.sendMessage(this.tabID, {message: "rawEventSearch", rawlog_refs: obj}, async (response) => {
          if(typeof response[Object.keys(response)[0]] !== 'undefined' && typeof response[Object.keys(response)[0]][0].hits !== 'undefined') {
            this.eventTypes.forEach((obj2) => {
              obj2.sessionEventDetails.forEach((obj3) => {
                if(obj3.firstEvent.fields.rawEventSearch === obj) {
                  obj3.firstEvent.fields.dlEvent = response[Object.keys(response)[0]][0].hits.hits[0]._source;
                }        
              });
              obj2.assetEventDetails.forEach((obj3) => {
                if(typeof obj3.aggregatedEvents !== 'undefined' && typeof obj3.aggregatedEvents[0] !== 'undefined') {
                  obj3.aggregatedEvents[0].es.forEach((obj6) => {
                    if(obj6.fields.rawEventSearch === obj) {
                      obj6.fields.dlEvent = response[Object.keys(response)[0]][0].hits.hits[0]._source;
                    }
                  })
                }     
              });
            });
            this.activeEventTypes--
            counter++;
            this.doneRawEventsCount++
            this.validDoneRawEventsCount++
            this.dataValidationProgress = Math.round((((this.doneRawEventsCount/this.todoRawEventsCount) * 10) + 90));
            
            // console.log('got a response');
            // console.log('counter = ', counter);
            // console.log('offset = ', counter);
            // console.log('this.todoRawEventsCount = ', this.todoRawEventsCount);
            var templength = this.doneRawEvents.length;
            // console.log('this.doneRawEvents.length = ', templength);
            // console.log('this.doneRawEventsCount = ', this.doneRawEventsCount);
            // console.log('this.validDoneRawEventsCount = ', this.validDoneRawEventsCount);
            if(counter === this.allowedRawEventCount+1 || this.todoRawEventsCount-this.doneRawEventsCount === 0) {
              offset++
              if(this.doneRawEventsCount < tempKeys.length) {
                // console.log('short, running again');
                this.getRawEvents(offset,this.retryAttemptRawEventsCount);
              } else {
                if(this.doneRawEventsCount === this.validDoneRawEventsCount) {
                  // All raw events successfully queired, moving on to bootstrapEventTypes
                  // console.log('All raw events successfully queired, moving on');
                  if(this.onPreviousSession) {
                    this.findRequiredData(this.rulesAndModels)
                  } else {
                    this.bootstrapEventTypes();
                  }
                } else {
                  if(this.retryAttemptRawEventsCount <= 10) {
                    // Some raw events not queired successfully and retry attempt is less than 10, go back back fetch missing raw events
                    // console.log('Some raw events not queired successfully and retry attempt is less than 10, go back back fetch missing raw events');
                    // console.log('this.retryAttemptRawEventsCount = ', this.retryAttemptRawEventsCount);
                    // console.log('this.todoRawEventsCount = ', this.todoRawEventsCount);
                    // console.log('this.validDoneRawEventsCount = ', this.validDoneRawEventsCount);
                    // console.log('this.doneRawEventsCount = ', this.doneRawEventsCount);
                    this.retryAttemptRawEventsCount++;
                    this.doneRawEventsCount = 0;
                    this.rawEventErrors = 0;
                    this.validDoneRawEventsCount = 0;
                    this.doneRawEvents = [];
                    this.getRawEvents(0, this.retryAttemptRawEventsCount);
                  } else {
                    // Some raw events still not queired successfuly, but retry attemps is greater than 10 so we need to move on
                    console.log('Some raw events still not queired successfuly, but retry attemps is greater than 10 so we need to move on');
                    console.log('this.todoRawEventsCount = ', this.todoRawEventsCount);
                    console.log('this.validDoneRawEventsCount = ', this.validDoneRawEventsCount);
                    console.log('this.doneRawEventsCount = ', this.doneRawEventsCount);
                    if(this.onPreviousSession) {
                      this.findRequiredData(this.rulesAndModels)
                    } else {
                      this.bootstrapEventTypes();
                    }
                  }
                }
              }
            }
          } else {
            this.rawEventErrors++;
            this.errorVisible = true;
            this.activeEventTypes--
            counter++;
            this.doneRawEventsCount++
            this.dataValidationProgress = Math.round((((this.doneRawEventsCount/this.todoRawEventsCount) * 10) + 90));
            // this.sleep(10000);
            await this.sleep(10000);
            
            // console.log('got a response');
            // console.log('counter = ', counter);
            // console.log('offset = ', counter);
            // console.log('this.todoRawEventsCount = ', this.todoRawEventsCount);
            var templength = this.doneRawEvents.length;
            // console.log('this.doneRawEvents.length = ', templength);
            // console.log('this.doneRawEventsCount = ', this.doneRawEventsCount);
            // console.log('this.validDoneRawEventsCount = ', this.validDoneRawEventsCount);
            if(counter === this.allowedRawEventCount+1 || this.todoRawEventsCount-this.doneRawEventsCount === 0) {
              offset++
              if(this.doneRawEventsCount < tempKeys.length) {
                // console.log('short, running again');
                this.getRawEvents(offset,this.retryAttemptRawEventsCount);
              } else {
                if(this.doneRawEventsCount === this.validDoneRawEventsCount) {
                  // All raw events successfully queired, moving on to bootstrapEventTypes
                  // console.log('All raw events successfully queired, moving on');
                  if(this.onPreviousSession) {
                    this.findRequiredData(this.rulesAndModels)
                  } else {
                    this.bootstrapEventTypes();
                  }
                } else {
                  if(this.retryAttemptRawEventsCount <= 10) {
                    // Some raw events not queired successfully and retry attempt is less than 10, go back back fetch missing raw events
                    // console.log('Some raw events not queired successfully and retry attempt is less than 10, go back back fetch missing raw events');
                    // console.log('this.retryAttemptRawEventsCount = ', this.retryAttemptRawEventsCount);
                    // console.log('this.todoRawEventsCount = ', this.todoRawEventsCount);
                    // console.log('this.validDoneRawEventsCount = ', this.validDoneRawEventsCount);
                    // console.log('this.doneRawEventsCount = ', this.doneRawEventsCount);
                    this.retryAttemptRawEventsCount++;
                    this.doneRawEventsCount = 0;
                    this.rawEventErrors = 0;
                    this.validDoneRawEventsCount = 0;
                    this.doneRawEvents = [];
                    this.getRawEvents(0, this.retryAttemptRawEventsCount);
                  } else {
                    // Some raw events still not queired successfuly, but retry attemps is greater than 3 so we need to move on
                    // console.log('Some raw events still not queired successfuly, but retry attemps is greater than 3 so we need to move on');
                    // console.log('this.todoRawEventsCount = ', this.todoRawEventsCount);
                    // console.log('this.validDoneRawEventsCount = ', this.validDoneRawEventsCount);
                    // console.log('this.doneRawEventsCount = ', this.doneRawEventsCount);
                    if(this.onPreviousSession) {
                      this.findRequiredData(this.rulesAndModels)
                    } else {
                      this.bootstrapEventTypes();
                    }
                  }
                }
              }
            }
          }
          
          
        });
      }     
    });
    
      
  }

  bootstrapEventTypes(){
    this.eventTypes.forEach((obj2, index2) => {
      obj2.totalCount = 0;
      obj2.rules = [];
      obj2.models = [];   
      obj2.assetEventIDs = [];
      obj2.requiredEventFields = [];
      obj2.presentEventFields = [];
      obj2.missingEventFields = [];
      obj2.missingEventFieldTable = [];
      obj2.fieldsPopulating = 0;
      obj2.fieldsPopulatingPercent = 0;
      obj2.modelsPopulating = 0;
      obj2.modelsPopulatingPercent = 0;
      obj2.rulesCouldTrigger = 0;
      obj2.rulesCouldTriggerPercent = 0;
      obj2.uniqueUsersList = [];
      obj2.uniqueHostsList = [];
      obj2.uniqueIPsList = [];
      obj2.uniqueUsers = 0;
      obj2.uniqueHosts = 0;
      obj2.uniqueIPs = 0;
      if(obj2.response.entities.session != undefined) {
        obj2.response.entities.session.forEach((obj3,index3) => {
          if(!obj3.sessionInfo.username.endsWith('$')) {                  
            if(obj2.uniqueUsersList.some(user => user.name === obj3.sessionInfo.username.toLowerCase())) {
            } else {
              obj2.uniqueUsers = obj2.uniqueUsers + 1;
              obj2.uniqueUsersList.push({'name':obj3.sessionInfo.username.toLowerCase()});
            }
            if(this.summary.uniqueUsers.some(user => user.name === obj3.sessionInfo.username.toLowerCase())) {
            } else {
              this.summary.uniqueUsers.push({'name':obj3.sessionInfo.username.toLowerCase()});
              this.summary.uniqueUserCount = this.summary.uniqueUserCount + 1;
            }
          }
        })
      }
      if(obj2.response.entities.asset != undefined) {
        obj2.response.entities.asset.forEach((obj3,index3) => {
          if(!((obj3.assetSequenceInfo.assetId.match(/\d\./g) || []).length === 3)) {
            if(!((obj3.assetSequenceInfo.assetId.match(/\:/g) || []).length >= 1)) {                
              if(obj2.uniqueHostsList.some(user => user.name === obj3.assetSequenceInfo.assetId.toLowerCase())) {
              } else {
                obj2.uniqueHosts = obj2.uniqueHosts + 1;
                obj2.uniqueHostsList.push({'name':obj3.assetSequenceInfo.assetId.toLowerCase()});
              }
              if(this.summary.uniqueHosts.some(user => user.name === obj3.assetSequenceInfo.assetId.toLowerCase())) {
              } else {
                this.summary.uniqueHosts.push({'name':obj3.assetSequenceInfo.assetId.toLowerCase()});
                this.summary.uniqueHostCount = this.summary.uniqueHostCount + 1;
              }
            }
          }
        })
      }
      if(obj2.response.entities.lockout != undefined) {
        obj2.response.entities.lockout.forEach((obj3,index3) => {
          if(!obj3.lockoutInfo.username.endsWith('$')) {                  
            if(obj2.uniqueUsersList.some(user => user.name === obj3.lockoutInfo.username.toLowerCase())) {
            } else {
              obj2.uniqueUsers = obj2.uniqueUsers + 1;
              obj2.uniqueUsersList.push({'name':obj3.lockoutInfo.username.toLowerCase()});
            }
            if(this.summary.uniqueUsers.some(user => user.name === obj3.lockoutInfo.username.toLowerCase())) {
            } else {
              this.summary.uniqueUsers.push({'name':obj3.lockoutInfo.username.toLowerCase()});
              this.summary.uniqueUserCount = this.summary.uniqueUserCount + 1;
            }
          }
        })
      }
      obj2.sequenceTypes = [];
      Object.keys(obj2.response.entities).forEach((obj3,index3) => {
        if(obj3 != 'session' && obj3 != 'asset' && obj3 != 'lockout') obj2.sequenceTypes.push(obj3);
      })
      obj2.sequenceTypes.forEach((obj3,index3) => {
        obj2.response.entities[obj3].forEach((obj4,index4) => {
          if(!obj4.dataFeedInfo.username.endsWith('$')) {                  
            if(obj2.uniqueUsersList.some(user => user.name === obj4.dataFeedInfo.username.toLowerCase())) {
            } else {
              obj2.uniqueUsers = obj2.uniqueUsers + 1;
              obj2.uniqueUsersList.push({'name':obj4.dataFeedInfo.username.toLowerCase()});
            }
            if(this.summary.uniqueUsers.some(user => user.name === obj4.dataFeedInfo.username.toLowerCase())) {
            } else {
              this.summary.uniqueUsers.push({'name':obj4.dataFeedInfo.username.toLowerCase()});
              this.summary.uniqueUserCount = this.summary.uniqueUserCount + 1;
            }
          }
        })
      })
      if (obj2.response.entities.endpoint != undefined) {
        obj2.inEndpoint = true;
        obj2.endpointCount = obj2.response.entities.endpoint.length;
        obj2.totalCount = obj2.totalCount + obj2.response.entities.endpoint.length;
      } 
      if (obj2.response.entities.file != undefined) {
        obj2.inFile = true;
        obj2.fileCount = obj2.response.entities.file.length;
        obj2.totalCount = obj2.totalCount + obj2.response.entities.file.length;
      } 
      if (obj2.response.entities.web != undefined) {
        obj2.inWeb = true;
        obj2.webCount = obj2.response.entities.web.length;
        obj2.totalCount = obj2.totalCount + obj2.response.entities.web.length;
      } 
      if (obj2.response.entities.database != undefined) {
        obj2.inDatabase = true;
        obj2.databaseCount = obj2.response.entities.database.length;
        obj2.totalCount = obj2.totalCount + obj2.response.entities.database.length;
      } 
      if (obj2.response.entities.lockout != undefined) {
        obj2.inLockout = true;
        obj2.lockoutCount = obj2.response.entities.lockout.length;
        obj2.totalCount = obj2.totalCount + obj2.response.entities.lockout.length;
      }     
      if (Object.keys(obj2.response.entities).length != 0) {  
        obj2.populating = true;
      } else {
        obj2.populating = false;
      }             
    })
     
    this.checkFeature();
  }


  checkFeature(){
    this.rulesAndModels.forEach((obj,index) => {
      if(obj.modelDef != undefined) { 
        obj.featurePresent = 'false';
      } else {
        obj.featurePresent = 'N/A';
      }     
      this.eventTypes.forEach((obj2,index2) => {
        obj2.uniqueUserPercent = Math.round((obj2.uniqueUsers / this.summary.uniqueUserCount) * 100);
        obj2.uniqueHostPercent = Math.round((obj2.uniqueHosts / this.summary.uniqueHostCount) * 100);       
        if(obj.ruleDef.requiredEvents.some(type => type === obj2.name)) {
          if(obj.modelDef != undefined) {            
            if(obj.modelDef.modelType === 'NUMERICAL_TIME_OF_WEEK') obj.featurePresent = 'true';
            if(obj.populating === 'true') obj.featurePresent = 'true';
            if(obj2.inSession) {
              obj2.sessionEventFields.forEach((obj3,index) => {
                obj.modelDef.requiredEventFields.forEach((obj4,index) => {
                  if(obj3 === obj4) {
                    if(obj.modelDef.presentEventFields.some(field => field === obj4)) {
                    } else {
                      obj.modelDef.presentEventFields.push(obj3);
                    }
                  } 
                  if(obj.modelDef.requiredEventFields.length === obj.modelDef.presentEventFields.length) obj.featurePresent = 'true';
                })
              })
            }
            if(obj2.inAsset) {
              obj2.assetEventFields.forEach((obj3,index) => {
                obj.modelDef.requiredEventFields.forEach((obj4,index) => {
                  if(obj3 === obj4) {
                    if(obj.modelDef.presentEventFields.some(field => field === obj4)) {
                    } else {
                      obj.modelDef.presentEventFields.push(obj3);
                    }
                  }
                  if(obj.modelDef.requiredEventFields.length === obj.modelDef.presentEventFields.length) obj.featurePresent = 'true';
                })
              })
            }
            
          }
        }
      })
      
    })
    this.checkMissingEvents();
    
    
  }

  checkMissingEvents() {
    this.rulesAndModels.forEach((obj,index) => {
      this.eventTypes.forEach((obj2,index2) => {
        if(obj.ruleDef.requiredEvents.some(type => type === obj2.name)) {
          if(obj.modelDef != undefined) {
            obj.modelDef.requiredEventFields.forEach((obj3,index) => {
              if(obj.modelDef.presentEventFields.some(field => field === obj3)) {
              } else{
                if(obj.modelDef.missingEventFields.some(field => field === obj3)) {
                } else {
                  obj.modelDef.missingEventFields.push(obj3);
                }
              }
              
            })
          }
        }
      })
      
    })
    
    this.addEventDetails();

  }


  addEventDetails() {
    var doneCount = 0;
    this.rulesAndModels.forEach((obj,index) => {
      obj.eventInRuleType = 'false';
      obj.presentEventTypes = [];
      this.eventTypes.forEach((obj2, index2) => {
        if(obj.ruleDef.requiredEvents.some(types => types === obj2.name)) {
          obj2.rules.push(obj.ruleDef);
          if(obj.modelDef != undefined) {
            obj2.models.push(obj.modelDef);
            if(obj.modelDef.populating) obj.ruleDef.modelPopulating = true;
          } 
          if(obj2.sessionCount != undefined) {
            obj.inSessions = 'true';
            if(obj.ruleDef.ruleType === 'session') {
              obj.presentEventTypes.push(obj2.name);
              obj.eventInRuleType = 'true';
            } 
          } else {
            obj.inSessions = 'false';
          }
          if(obj2.assetCount != undefined) {
            obj.inAssets = 'true';
            if(obj.ruleDef.ruleType === 'asset') {
              obj.presentEventTypes.push(obj2.name);
              obj.eventInRuleType = 'true';
            }
          } else {
            obj.inAssets = 'false';
          }
          if(obj2.endpointCount != undefined) {
            obj.inEndpoints = 'true';
            if(obj.ruleDef.ruleType === 'endpoint') {
              obj.presentEventTypes.push(obj2.name);
              obj.eventInRuleType = 'true';
            }
          } else {
            obj.inEndpoints = 'false';
          }
          if(obj2.fileCount != undefined) {
            obj.inFiles = 'true';
            if(obj.ruleDef.ruleType === 'file') {
              obj.presentEventTypes.push(obj2.name);
              obj.eventInRuleType = 'true';
            }
          } else {
            obj.inFiles = 'false';
          }
          if(obj2.webCount != undefined) {
            obj.inWebs = 'true';
            if(obj.ruleDef.ruleType === 'web') {
              obj.presentEventTypes.push(obj2.name);
              obj.eventInRuleType = 'true';
            }
          } else {
            obj.inWebs = 'false';
          }
          if(obj2.databaseCount != undefined) {
            obj.inDatabase = 'true';
            if(obj.ruleDef.ruleType === 'database') {
              obj.presentEventTypes.push(obj2.name);
              obj.eventInRuleType = 'true';
            }
          } else {
            obj.inDatabase = 'false';
          }
          if(obj2.lockoutCount != undefined) {
            obj.inLockouts = 'true';
            if(obj.ruleDef.ruleType === 'account-lockout') {
              obj.presentEventTypes.push(obj2.name);
              obj.eventInRuleType = 'true';
            }
          } else {
            obj.inLockouts = 'false';
          }
          obj2.ruleCount = obj2.rules.length;
          obj2.modelCount = obj2.models.length;
          //console.log('still in loop');
        }
      })
      doneCount = doneCount + 1;
      if(doneCount === this.rulesAndModels.length) {      
        this.rulesAndModelsDone = this.rulesAndModels;
        this.rulesAndModels = [];
         
        this.columns6 = [
          { field: 'ruleCat', header: 'Rule Category' },
          { field: 'ruleId', header: 'Rule ID' },
          { field: 'ruleName', header: 'Rule Name' },
          { field: 'modelName', header: 'Model' },
          { field: 'eventInRuleType', header: 'Events Present' },
          { field: 'populating', header: 'Model Populating' },
          { field: 'hasTriggered', header: 'Has Triggered' }
        ];
      } 
    })
    this.eventTypes.forEach((obj2, index2) => {
      obj2.models.forEach((obj3, index2) => {
        if(obj3.populating) {
          obj2.modelsPopulating = obj2.modelsPopulating + 1;
          obj2.modelsPopulatingPercent = Math.round((obj2.modelsPopulating / obj2.modelCount) * 100);
          obj2.missingEventFieldTable.forEach((obj5, index5) => {
              obj5.percent = Math.round((obj5.count / (obj2.modelCount - obj2.modelsPopulating))*100);
          })      
        } else {         
          obj3.missingEventFields.forEach((obj4, index2) => {
            if(obj2.missingEventFieldTable.length == 0) {
              if(obj3.modelType != 'NUMERICAL_TIME_OF_WEEK') obj2.missingEventFieldTable.push({'name': obj4, 'count': 1, 'percent': Math.round((1 / (obj2.modelCount - obj2.modelsPopulating))*100)});
            } else {
              if(obj2.missingEventFieldTable.some(field => field.name === obj4)) {
                obj2.missingEventFieldTable.forEach((obj5, index5) => {
                  if(obj5.name === obj4 && obj3.modelType != 'NUMERICAL_TIME_OF_WEEK') {
                    obj5.count = obj5.count + 1;
                    obj5.percent = Math.round((obj5.count / (obj2.modelCount - obj2.modelsPopulating))*100);
                  }
                })
              } else {
                if(obj3.modelType != 'NUMERICAL_TIME_OF_WEEK') obj2.missingEventFieldTable.push({'name': obj4, 'count': 1, 'percent': Math.round((1 / (obj2.modelCount - obj2.modelsPopulating))*100)});
              }
            }
            if(obj2.missingEventFields.some(field => field === obj4)) {
            } else {
              if(obj3.modelType != 'NUMERICAL_TIME_OF_WEEK') obj2.missingEventFields.push(obj4);
            }          
          })          
        }
        obj3.requiredEventFields.forEach((obj4, index2) => {
          if(obj2.requiredEventFields.some(field => field === obj4)) {
          } else {
            obj2.requiredEventFields.push(obj4);
          }          
        })
        if(obj2.inSession) {
          obj2.sessionEventFields.forEach((obj4,index4) => {
            obj3.requiredEventFields.forEach((obj5,index5) => {
              if(obj4 === obj5) {
                if(obj2.presentEventFields.some(field => field === obj4)) {
                } else {
                  obj2.presentEventFields.push(obj4);
                }
              } 
            })
          })
        }
        if(obj2.inAsset) {
          obj2.assetEventFields.forEach((obj4,index) => {
            obj3.requiredEventFields.forEach((obj5,index) => {
              if(obj4 === obj5) {
                if(obj2.presentEventFields.some(field => field === obj4)) {
                } else {
                  obj2.presentEventFields.push(obj4);
                }
              }
            })
          })
        }
        obj2.fieldCount = obj2.requiredEventFields.length;
        obj2.fieldsPopulating = obj2.presentEventFields.length;
        obj2.fieldsPopulatingPercent = Math.round((obj2.presentEventFields.length / obj2.requiredEventFields.length) * 100); 
      })
      obj2.rules.forEach((obj3, index2) => {
        if(obj3.modelPopulating) {
          obj2.rulesCouldTrigger = obj2.rulesCouldTrigger + 1;
          obj2.rulesCouldTriggerPercent = Math.round((obj2.rulesCouldTrigger / obj2.ruleCount) * 100);
        } 
      })
    })
    this.determineSources(this.eventTypes);
    
  }

  determineSources(eventTypes) {
    this.sources = [];
    this.sourcesDone = [];
    eventTypes.forEach((obj) => {
      obj.sessionEventDetails.forEach((obj2) => {
        if(this.sources.some(source => source.source === obj2.firstEvent.fields.source && source.name === obj2.firstEvent.fields.event_type)) {} else {
          this.sources.push({
            'source': obj2.firstEvent.fields.source,
            'name': obj2.firstEvent.fields.event_type,
            'inSession': false, 
            'inAsset': false,
            'configIssues': 0,
            'sessionConfigIssueEvents': [],
            'assetConfigIssueEvents': [],
            'missingAssetEvents': false,
            'missingSessionEvents': false,
            'sessionEventsWithSrcOrDestHost': 0,
            'sessionEventsWithEntityId': 0,
            'assetEventsWithUser': 0,
            'assetEventsWithSessionId': 0,
            'parsingIssues': 0,
            'aaSessionEventParsingIssues': {
              'src_ip': [],
              'src_host': [],
              'dest_ip': [],
              'dest_host': [],
              'host': [],
              'user': []
            },
            'aaAssetEventParsingIssues': {
              'src_ip': [],
              'src_host': [],
              'dest_ip': [],
              'dest_host': [],
              'host': [],
              'user': []
            },
            'aaSessionEventFieldCounts':{
              'src_ip': 0,
              'src_host': 0,
              'dest_ip': 0,
              'dest_host': 0,
              'host': 0,
              'user': 0
            },
            'dlSessionEventFieldCounts':{
              'src_ip': 0,
              'src_host': 0,
              'dest_ip': 0,
              'dest_host': 0,
              'host': 0,
              'user': 0
            },
            'aaAssetEventFieldCounts':{
              'src_ip': 0,
              'src_host': 0,
              'dest_ip': 0,
              'dest_host': 0,
              'host': 0,
              'user': 0
            },
            'dlAssetEventFieldCounts':{
              'src_ip': 0,
              'src_host': 0,
              'dest_ip': 0,
              'dest_host': 0,
              'host': 0,
              'user': 0
            },
            'sessionRawEventCount': 0,
            'assetRawEventCount': 0,
            'sessionEvents': [],
            'assetEvents': [],
            'models': obj.models,
            'rules': obj.rules
          });
        }
      })
      obj.assetEventDetails.forEach((obj2) => {
        if(typeof obj2.aggregatedEvents[0] !== 'undefined') {
          obj2.aggregatedEvents[0].es.forEach((obj6) => {
            if(this.sources.some(source => source.source === obj6.fields.source && source.name === obj6.fields.event_type)) {} else {
              this.sources.push({
                'source': obj6.fields.source,
                'name': obj6.fields.event_type,
                'inSession': false, 
                'inAsset': false,
                'configIssues': 0,
                'sessionConfigIssueEvents': [],
                'assetConfigIssueEvents': [],
                'missingAssetEvents': false,
                'missingSessionEvents': false,
                'sessionEventsWithSrcOrDestHost': 0,
                'sessionEventsWithEntityId': 0,
                'assetEventsWithUser': 0,
                'assetEventsWithSessionId': 0,
                'parsingIssues': 0,
                'aaSessionEventParsingIssues': {
                  'src_ip': [],
                  'src_host': [],
                  'dest_ip': [],
                  'dest_host': [],
                  'host': [],
                  'user': []
                },
                'aaAssetEventParsingIssues': {
                  'src_ip': [],
                  'src_host': [],
                  'dest_ip': [],
                  'dest_host': [],
                  'host': [],
                  'user': []
                },
                'aaSessionEventFieldCounts':{
                  'src_ip': 0,
                  'src_host': 0,
                  'dest_ip': 0,
                  'dest_host': 0,
                  'host': 0,
                  'user': 0
                },
                'dlSessionEventFieldCounts':{
                  'src_ip': 0,
                  'src_host': 0,
                  'dest_ip': 0,
                  'dest_host': 0,
                  'host': 0,
                  'user': 0
                },
                'aaAssetEventFieldCounts':{
                  'src_ip': 0,
                  'src_host': 0,
                  'dest_ip': 0,
                  'dest_host': 0,
                  'host': 0,
                  'user': 0
                },
                'dlAssetEventFieldCounts':{
                  'src_ip': 0,
                  'src_host': 0,
                  'dest_ip': 0,
                  'dest_host': 0,
                  'host': 0,
                  'user': 0
                },
                'sessionRawEventCount': 0,
                'assetRawEventCount': 0,
                'sessionEvents': [],
                'assetEvents': [],
                'models': obj.models,
                'rules': obj.rules
              });
            }
          })
        }
        
      })
      obj.sessionEventDetails.forEach((obj2) => {
        this.sources.forEach((obj3) => {
          if(obj3.source === obj2.firstEvent.fields.source && obj3.name === obj2.firstEvent.fields.event_type) {
            obj3.sessionEvents.push(obj2.firstEvent.fields);
            obj3.inSession = true;
            let tempSrcHost = '';
            let tempDestHost = '';
            if(typeof obj2.firstEvent.fields.src_host !== 'undefined' && obj2.firstEvent.fields.src_host !== 'localhost' ) tempSrcHost = obj2.firstEvent.fields.src_host;
            if(typeof obj2.firstEvent.fields.dest_host !== 'undefined' && obj2.firstEvent.fields.dest_host !== 'localhost' ) tempDestHost = obj2.firstEvent.fields.dest_host;
            //config issue check
            if((typeof obj2.firstEvent.fields.src_host !== 'undefined' && obj2.firstEvent.fields.src_host !== 'localhost' ) || (typeof obj2.firstEvent.fields.dest_host !== 'undefined' && obj2.firstEvent.fields.dest_host !== 'localhost')) obj3.sessionEventsWithSrcOrDestHost++;
            if(typeof obj2.firstEvent.fields.entity_asset_id !== 'undefined') obj3.sessionEventsWithEntityId++;
            if(((typeof obj2.firstEvent.fields.src_host !== 'undefined' && obj2.firstEvent.fields.src_host !== 'localhost' ) || (typeof obj2.firstEvent.fields.dest_host !== 'undefined' && obj2.firstEvent.fields.dest_host !== 'localhost')) && typeof obj2.firstEvent.fields.entity_asset_id === 'undefined') obj3.sessionConfigIssueEvents.push({src_host: tempSrcHost, dest_host: tempDestHost, fullEvent: obj2.firstEvent.fields});
            
            if(obj3.sessionEventsWithSrcOrDestHost > 0 && obj3.sessionEventsWithEntityId === 0) {
              obj3.missingAssetEvents = true;
              //obj3.configIssues++;
              obj3.configIssues = obj3.sessionConfigIssueEvents.length + obj3.assetConfigIssueEvents.length;
            }
            //AA parsed field check
            if(typeof obj2.firstEvent.fields.src_ip !== 'undefined') {
              if(!((obj2.firstEvent.fields.src_ip.match(/\:/g) || []).length >= 1)) {
                obj3.aaSessionEventFieldCounts.src_ip++; 
              }
            }           
            if(typeof obj2.firstEvent.fields.src_host !== 'undefined') obj3.aaSessionEventFieldCounts.src_host++;
            if(typeof obj2.firstEvent.fields.dest_ip !== 'undefined') {
              if(!((obj2.firstEvent.fields.dest_ip.match(/\:/g) || []).length >= 1)) {
                obj3.aaSessionEventFieldCounts.dest_ip++; 
              }
            } 
            if(typeof obj2.firstEvent.fields.dest_host !== 'undefined') obj3.aaSessionEventFieldCounts.dest_host++;
            if(typeof obj2.firstEvent.fields.host !== 'undefined') obj3.aaSessionEventFieldCounts.host++;
            if(typeof obj2.firstEvent.fields.user !== 'undefined') {
              if(obj2.firstEvent.fields.user !== 'system' && !obj2.firstEvent.fields.user.endsWith('$') && !obj2.firstEvent.fields.user.includes('*') && 
              !obj2.firstEvent.fields.user.includes('anonymous') && obj2.firstEvent.fields.event_type !== 'failed-logon' && 
              obj2.firstEvent.fields.event_type !== 'computer-logon') obj3.aaSessionEventFieldCounts.user++;
            }
            //DL parsed field check
            if(typeof obj2.firstEvent.fields.dlEvent !== 'undefined') {
              obj3.sessionRawEventCount++
              if(typeof obj2.firstEvent.fields.dlEvent.src_ip !== 'undefined') {
                if(!((obj2.firstEvent.fields.dlEvent.src_ip.match(/\:/g) || []).length >= 1)) {
                  if(typeof obj2.firstEvent.fields.src_ip === 'undefined') {
                    obj3.parsingIssues++;
                    obj3.aaSessionEventParsingIssues.src_ip.push({parsedInDL:obj2.firstEvent.fields.dlEvent.src_ip,parsedInAA:'',fullEvent:obj2.firstEvent.fields});
                  } 
                  obj3.dlSessionEventFieldCounts.src_ip++; 
                }
              }
              if(typeof obj2.firstEvent.fields.dlEvent.dest_ip !== 'undefined') obj3.dlSessionEventFieldCounts.dest_ip++;
              if(typeof obj2.firstEvent.fields.dlEvent.dest_ip !== 'undefined') {
                if(!((obj2.firstEvent.fields.dlEvent.dest_ip.match(/\:/g) || []).length >= 1)) {
                  if(typeof obj2.firstEvent.fields.dest_ip === 'undefined') {
                    obj3.parsingIssues++;
                    obj3.aaSessionEventParsingIssues.dest_ip.push({parsedInDL:obj2.firstEvent.fields.dlEvent.dest_ip,parsedInAA:'',fullEvent:obj2.firstEvent.fields});
                  } 
                  obj3.dlSessionEventFieldCounts.dest_ip++; 
                }
              }
              if(typeof obj2.firstEvent.fields.dlEvent.src_host !== 'undefined') {
                if(typeof obj2.firstEvent.fields.src_host === 'undefined') {
                  obj3.parsingIssues++;
                  obj3.aaSessionEventParsingIssues.src_host.push({parsedInDL:obj2.firstEvent.fields.dlEvent.src_host,parsedInAA:'',fullEvent:obj2.firstEvent.fields});
                } 
                obj3.dlSessionEventFieldCounts.src_host++;
              } 
              if(typeof obj2.firstEvent.fields.dlEvent.dest_host !== 'undefined') {
                if(typeof obj2.firstEvent.fields.dest_host === 'undefined') {
                  obj3.parsingIssues++;
                  obj3.aaSessionEventParsingIssues.dest_host.push({parsedInDL:obj2.firstEvent.fields.dlEvent.dest_host,parsedInAA:'',fullEvent:obj2.firstEvent.fields});
                } 
                obj3.dlSessionEventFieldCounts.dest_host++;
              } 
              if(typeof obj2.firstEvent.fields.dlEvent.host !== 'undefined') {
                if(typeof obj2.firstEvent.fields.host === 'undefined') {
                  obj3.parsingIssues++;
                  obj3.aaSessionEventParsingIssues.host.push({parsedInDL:obj2.firstEvent.fields.dlEvent.host,parsedInAA:'',fullEvent:obj2.firstEvent.fields});
                } 
                obj3.dlSessionEventFieldCounts.host++;
              } 
              if(typeof obj2.firstEvent.fields.dlEvent.user !== 'undefined') {
                if(obj2.firstEvent.fields.event_type !== 'failed-logon' && obj2.firstEvent.fields.event_type !== 'computer-logon' && obj2.firstEvent.fields.dlEvent.user !== 'system' && 
                !obj2.firstEvent.fields.dlEvent.user.endsWith('$') && !obj2.firstEvent.fields.dlEvent.user.includes('*') && !obj2.firstEvent.fields.dlEvent.user.includes('anonymous')) {
                  if(typeof obj2.firstEvent.fields.user === 'undefined') {
                    obj3.parsingIssues++;
                    obj3.aaSessionEventParsingIssues.user.push({parsedInDL:obj2.firstEvent.fields.dlEvent.user,parsedInAA:'',fullEvent:obj2.firstEvent.fields});
                  }
                  obj3.dlSessionEventFieldCounts.user++;
                } 
              }
            }
            //Only check DL parsed fields if all raw events were successfully fetched from DL
            if(obj3.sessionRawEventCount > 0 && obj3.sessionRawEventCount !== obj3.sessionEvents.length) {
              obj3.parsingIssues = 0;
            }
          }
        })
      })
      obj.assetEventDetails.forEach((obj2) => {
        if(typeof obj2.aggregatedEvents[0] !== 'undefined') {
          obj2.aggregatedEvents[0].es.forEach((obj6) => {
            this.sources.forEach((obj3) => {
              if(obj3.source === obj6.fields.source && obj3.name === obj6.fields.event_type) {
                obj3.assetEvents.push(obj6.fields);
                obj3.inAsset = true;
                if(typeof obj6.fields.user !== 'undefined' ) {
                  if(obj6.fields.user !== 'system' && !obj6.fields.user.endsWith('$') && !obj6.fields.user.includes('*') && 
                  !obj6.fields.user.includes('anonymous') && obj6.fields.event_type !== 'failed-logon' && obj6.fields.event_type !== 'computer-logon' && obj6.fields.event_type !== 'network-connection-successful' && obj6.fields.event_type !== 'network-connection-failed') {
                    obj3.assetEventsWithUser++
                    if(typeof obj6.fields.session_id === 'undefined') {
                      var isInFeed = false;
                      for(let i=0; i<Object.keys(obj6.fields).length; i++) {
                        if(Object.keys(obj6.fields)[i].includes('feed_') || Object.keys(obj6.fields)[i] === 'lockout_id') isInFeed = true
                      }
                      if(!isInFeed) obj3.assetConfigIssueEvents.push({user: obj6.fields.user,fullEvent: obj6.fields});
                    } 
                  }
                } 
                if(typeof obj6.fields.session_id !== 'undefined') obj3.assetEventsWithSessionId++;
                if(obj3.assetEventsWithUser > 0 && obj3.assetEventsWithSessionId === 0) {
                  obj3.missingSessionEvents = true;
                  // obj3.configIssues++;
                  obj3.configIssues = obj3.sessionConfigIssueEvents.length + obj3.assetConfigIssueEvents.length;
                }
                //AA parsed field check
                if(typeof obj6.fields.src_ip !== 'undefined') {
                  if(!((obj6.fields.src_ip.match(/\:/g) || []).length >= 1)) {
                    obj3.aaAssetEventFieldCounts.src_ip++; 
                  }
                }     
                if(typeof obj6.fields.src_host !== 'undefined') obj3.aaAssetEventFieldCounts.src_host++;
                if(typeof obj6.fields.dest_ip !== 'undefined') {
                  if(!((obj6.fields.dest_ip.match(/\:/g) || []).length >= 1)) {
                    obj3.aaAssetEventFieldCounts.dest_ip++; 
                  }
                } 
                if(typeof obj6.fields.dest_host !== 'undefined') obj3.aaAssetEventFieldCounts.dest_host++;
                if(typeof obj6.fields.host !== 'undefined') obj3.aaAssetEventFieldCounts.host++;
                if(typeof obj6.fields.user !== 'undefined') {
                  if(obj6.fields.user !== 'system' && !obj6.fields.user.endsWith('$') && !obj6.fields.user.includes('*') && 
                  !obj6.fields.user.includes('anonymous') && obj6.fields.event_type !== 'failed-logon' && 
                  obj6.fields.event_type !== 'computer-logon') obj3.aaAssetEventFieldCounts.user++;
                }
                //DL parsed field check
                if(typeof obj6.fields.dlEvent !== 'undefined') {
                  obj3.assetRawEventCount++
                  if(typeof obj6.fields.dlEvent.src_ip !== 'undefined') {
                    if(!((obj6.fields.dlEvent.src_ip.match(/\:/g) || []).length >= 1)) {
                      if(typeof obj6.fields.src_ip === 'undefined') {
                        obj3.parsingIssues++;
                        obj3.aaAssetEventParsingIssues.src_ip.push({parsedInDL:obj6.fields.dlEvent.src_ip,parsedInAA:'',fullEvent:obj6.fields});
                      } 
                      obj3.dlAssetEventFieldCounts.src_ip++; 
                    }
                  }
                  if(typeof obj6.fields.dlEvent.dest_ip !== 'undefined') obj3.dlAssetEventFieldCounts.dest_ip++;
                  if(typeof obj6.fields.dlEvent.dest_ip !== 'undefined') {
                    if(!((obj6.fields.dlEvent.dest_ip.match(/\:/g) || []).length >= 1)) {
                      if(typeof obj6.fields.dest_ip === 'undefined') {
                        obj3.parsingIssues++;
                        obj3.aaAssetEventParsingIssues.dest_ip.push({parsedInDL:obj6.fields.dlEvent.dest_ip,parsedInAA:'',fullEvent:obj6.fields});
                      } 
                      obj3.dlAssetEventFieldCounts.dest_ip++; 
                    }
                  }
                  if(typeof obj6.fields.dlEvent.src_host !== 'undefined') {
                    if(typeof obj6.fields.src_host === 'undefined') {
                      obj3.parsingIssues++;
                      obj3.aaAssetEventParsingIssues.src_host.push({parsedInDL:obj6.fields.dlEvent.src_host,parsedInAA:'',fullEvent:obj6.fields});
                    } 
                    obj3.dlAssetEventFieldCounts.src_host++;
                  } 
                  if(typeof obj6.fields.dlEvent.dest_host !== 'undefined') {
                    if(typeof obj6.fields.dest_host === 'undefined') {
                      obj3.parsingIssues++;
                      obj3.aaAssetEventParsingIssues.dest_host.push({parsedInDL:obj6.fields.dlEvent.dest_host,parsedInAA:'',fullEvent:obj6.fields});
                    } 
                    obj3.dlAssetEventFieldCounts.dest_host++;
                  } 
                  if(typeof obj6.fields.dlEvent.host !== 'undefined') {
                    if(typeof obj6.fields.host === 'undefined') {
                      obj3.parsingIssues++;
                      obj3.aaAssetEventParsingIssues.host.push({parsedInDL:obj6.fields.dlEvent.host,parsedInAA:'',fullEvent:obj6.fields});
                    } 
                    obj3.dlAssetEventFieldCounts.host++;
                  } 
                  if(typeof obj6.fields.dlEvent.user !== 'undefined') {
                    if(obj6.fields.event_type !== 'failed-logon' && obj6.fields.event_type !== 'computer-logon' && obj6.fields.dlEvent.user !== 'system' && !obj6.fields.dlEvent.user.endsWith('$') && 
                    !obj6.fields.dlEvent.user.includes('*') && !obj6.fields.dlEvent.user.includes('anonymous')) {
                      if(typeof obj6.fields.user === 'undefined') {
                        obj3.parsingIssues++;
                        obj3.aaAssetEventParsingIssues.user.push({parsedInDL:obj6.fields.dlEvent.user,parsedInAA:'',fullEvent:obj6.fields});
                      }
                      obj3.dlAssetEventFieldCounts.user++;
                    } 
                  }
                }
                //Only check DL parsed fields if all raw events were successfully fetched from DL
                if(obj3.assetRawEventCount > 0 && obj3.assetRawEventCount !== obj3.assetEvents.length) {
                  obj3.parsingIssues = 0;
                }           
              }
            })

          })
        }
        
      })     
    })
    console.log('data validation done');
    this.sourcesDone = this.sources;
    this.sources = {};
    this.eventTypesDone = this.eventTypes;
    this.eventTypes = [];
    this.loading = false;
    this.visibleDataValidationProgress = false;
    this.storeValidationSession();
    
  }

  onEventTypesSelect(required,present) {
    this.selectedRequiredEventTypes = required;
    this.selectedPresentEventTypes = present;
    this.visibleMissingEventTypes = true;
    
  }
  
  onEventFieldsSelect(sessionEventFields,assetEventFields, missingTable) {
    //this.selectedRequiredEventFields = required;
    //this.selectedPresentEventFields = present;
    //this.selectedMissingEventFields = missing;
    sessionEventFields = sessionEventFields.sort();
    assetEventFields = assetEventFields.sort();
    this.selectedSessionEventFields = sessionEventFields;
    this.selectedAssetEventFields = assetEventFields;
    this.selectedMissingEventFieldTable = missingTable;
    this.visibleMissingEventFields = true;
    
  }

  onRuleSelect(rule) {
    this.selectedRule = rule;
    this.visibleRule = true;
    
  }

  onModelSelect(model) {
    this.selectedModel = model;
    this.visibleModel = true;
    
  }

  onSessionsSelect(sessions) {
    console.log('this.selectedSessionList = ',this.selectedSessionList);
    this.selectedSessionList = sessions;
    this.visibleSessionList = true;
  }

  onUsersSelect(users) {
    users = users.sort();
    this.selectedUserList = users;
    this.visibleUserList = true;
    
  }

  onHostsSelect(hosts) {
    hosts = hosts.sort();
    this.selectedHostList = hosts;
    this.visibleHostList = true;
    
  }

  onServerSelect(){
    this.visibleServer = true;
  }

  // onParsingIssueSelect(sessionUser,sessionSrcIp,sessionSrcHost,sessionDestIp,sessionDestHost,sessionHost,assetUser,assetSrcIp,assetSrcHost,assetDestIp,assetDestHost,assetHost){
  onParsingIssueSelect(sessionEvents,assetEvents){  
    // this.selectedSessionUser = sessionUser;
    // this.selectedSessionSrcIp = sessionSrcIp;
    // this.selectedSessionSrcHost = sessionSrcHost;
    // this.selectedSessionDestIp = sessionDestIp;
    // this.selectedSessionDestHost = sessionDestHost;
    // this.selectedSessionHost = sessionHost;
    // this.selectedAssetUser = assetUser;
    // this.selectedAssetSrcIp = assetSrcIp;
    // this.selectedAssetSrcHost = assetSrcHost;
    // this.selectedAssetDestIp = assetDestIp;
    // this.selectedAssetDestHost = assetDestHost;
    // this.selectedAssetHost = assetHost;
    this.sessionParsingIssues = sessionEvents;
    this.assetParsingIssues = assetEvents;
    this.visibleParsingIssues = true;
    
  }

    


}

  export default Home;