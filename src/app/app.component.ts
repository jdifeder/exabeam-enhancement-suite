import * as Sentry from "@sentry/angular";
import { Component, OnInit, AfterViewInit, ChangeDetectorRef   } from '@angular/core';
import { Observable } from "rxjs/Rx"
import { FormBuilder, FormGroup, SelectMultipleControlValueAccessor } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { SelectItem } from 'primeng/api';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { TreeTableModule } from 'primeng/treetable';
import { TreeNode } from 'primeng/api/treenode';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})

export class AppComponent implements OnInit, AfterViewInit  {
  items: any;
  loaded: boolean;
  form: FormGroup;
  nodeServer: any;
  thResults: any;
  thResultsUsers: any;
  thResultsAssets: any;
  index: any;
  counter: any;
  modelCounter: any;
  ruleCounter: any;
  eventTypeCounter: any;
  forEachBreak: boolean;
  selectedModel: any;
  selectedRule: any;
  selectedRuleCount: any;
  selectedRuleSessionCount: any;
  selectedRuleScore: any;
  ruleTuning: TreeNode[];
  tester: TreeNode[];
  foundRule: any;
  refresh: any;
  tempCount: any;
  bannedEvents: any;
  loading: any;
  arrayType: any;
  summary: any;
  errors: any;
  errorVisible: boolean;

  uSessionSummaryCount: any;
  uSessionSummaryNotableCount: number;
  uSessionSummarySessionCount: any;
  uSessionSummaryNotablePerDay: any;
  uSessionSummaryRiskScore: any;
  uSessionSummaryTunedNotableCount: any;
  uSessionSummaryTunedNotableCountPercent: any;
  uSessionSummaryTunedNotablePerDay: any;
  uSessionSummaryTunedNotablePerDayPercent: any;
  uSessionSummaryTunedRiskScore: any;
  uSessionSummaryTunedRiskScorePercent: any;

  rows: 0;
  first = 0;
  userData: any;
  columns1: any;
  ruleData: any;
  columns2: any;
  eventData: any;
  columns3: any;
  eventSummaryData: any;
  columns4: any;
  columns5: any;
  showHome: boolean;
  showEvents: boolean;
  showValidation: boolean;

  showLogin: any;
  host: any;
  saasAlias: any;
  username: any;
  password: any;
  queryUnit: any;
  queryUnitNum: any;
  queryRiskScore: any;
  queryLimit: any;

  allRules : any;
  allModels : any;
  allEventTypes: any;
  rulesAndModels : any;
  eventTypes : any;

  tempModelKeys :any;
  tempRuleKeys : any;
  allowedCount : any;
  allowedEventTypeCount: any
  allowedEventTypeSessionCount: any;
  allowedEventDetailCount: any;
  activeCount : any;
  doneCount: any;
  doneEventTypes: any;
  doneEventTypeSessions: any;
  doneEventTypeAssets: any;
  doneEventTypeSessionsDetails: any;
  doneEventTypeAssetsDetails: any;
  todoTimelines : any;
  todoModels : any;
  todoRules : any;
  todoEventTypes : any;
  todoEventTypeSessions: any;
  todoEventTypeAssets: any;
  todoEventTypeSessionsDetails: any;
  todoEventTypeAssetsDetails: any;
  doneCountTimelines : any
  doneCountModels : any;
  doneCountRules : any;
  doneCountEventTypes : any;
  doneCountEvents : any;
  doneCountSessions: any;
  doneCountEventTypeSessions: any;
  doneCountEventTypeAssets: any;
  doneCountEventTypeSessionsDetails: any;
  doneCountEventTypeAssetsDetails: any;
  columns6: any;
  rulesAndModelsDone: any;
  trueOrFalse : SelectItem[];
  trueOrFalseOrNA :SelectItem[];
  
  visibleDataValidationProgress: boolean;
  visibleTuningProgress: boolean;
  visibleMissingEventTypes: boolean;
  visibleMissingEventFields: boolean;
  visibleRule: boolean;
  visibleModel: boolean;
  visibleUserList: boolean;
  visibleHostList: boolean;
  visibleServer: boolean;
  selectedUserList: any;
  selectedHostList: any;
  selectedRequiredEventTypes: any;
  selectedPresentEventTypes: any;
  selectedRequiredEventFields: any;
  selectedPresentEventFields: any;
  selectedMissingEventFields: any;
  selectedMissingEventFieldTable : any;

  dataValidationProgress: number = 0;
  tuningProgress : number = 0;

  activeEventTypes: any;
  activeEventTypeSessions: any;
  activeEventTypeAssets: any;


  constructor( 
    public fb: FormBuilder, 
    private http: HttpClient, 
    private ref: ChangeDetectorRef,
    private messageService: MessageService
  ) {  }

  


  ngOnInit() {
    this.showLogin = true;
    this.showHome = false;
    this.showEvents = false;
    this.showValidation = false;
    this.refresh = true;
    this.bannedEvents = [];
    this.summary = {};
    this.errors = [];
    this.errorVisible = false;
    this.summary.uniqueUsers = [];
    this.summary.uniqueHosts = [];
    this.summary.uniqueIPs = [];
    this.summary.uniqueUserCount = 0;
    this.summary.uniqueHostCount = 0;
    this.summary.uniqueIPsCount = 0;
    this.host = '';
    this.nodeServer = 'https://exabeam.azurewebsites.net/api/exabeam-cloud';
    this.username = '';
    this.password = '';
    this.queryUnit = 'd';
    this.queryUnitNum = '7';
    this.queryRiskScore = '90';
    this.queryLimit = '10000';

    this.allowedCount = 5;
    this.allowedEventTypeCount = 2;
    this.allowedEventTypeSessionCount = 5;
    this.allowedEventDetailCount = 5;
    this.doneCount = 0;
    this.doneCountTimelines = 0;
    this.doneCountModels = 0;
    this.doneCountRules = 0;
    this.doneEventTypes = [];
    this.doneEventTypeSessions = [];
    this.doneEventTypeAssets = [];
    this.doneEventTypeSessionsDetails = [];
    this.doneEventTypeAssetsDetails = [];
    this.doneCountEventTypes = 0;
    this.doneCountEventTypeSessions = 0;
    this.doneCountEventTypeAssets = 0;
    this.doneCountEventTypeSessionsDetails = 0;
    this.doneCountEventTypeAssetsDetails = 0;
    this.doneCountEvents = 0;
    this.doneCountSessions = 0;
    this.trueOrFalse = [
      { label: 'True', value: 'true' },
      { label: 'False', value: 'false' }
    ];
    this.trueOrFalseOrNA = [
      { label: 'True', value: 'true' },
      { label: 'False', value: 'false' },
      { label: 'N/A', value: 'N/A' }
    ];

    this.activeEventTypes = 0;
    this.activeEventTypeSessions = 0;
    this.activeEventTypeAssets = 0;



    
  }

  ngAfterViewInit() {
    //Press the button to get sessions if they press Enter after entering in the SaaS Alias
    /*
    var input = document.getElementById("theHost");
    input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("getAuthButton").click();
    }
    });
    */
  }

  ngAfterContentInit (){
    this.host = localStorage.getItem('host');
    chrome.tabs.query({ active: true, currentWindow: true }, ([{ id, url }]) => {
      this.host = url;
      this.host = this.host.split('https://')[1].substr(0,this.host.split('https://')[1].indexOf('/'));
    })
    if(localStorage.getItem('nodeServer') != null) this.nodeServer = localStorage.getItem('nodeServer');
    
  }

  getAuth(type) {
    this.arrayType = type;
    if(this.username === '' || this.password === '') {
      alert('Please enter username and passowrd to continue');
      return
    }
    this.showLogin = false;
    if(this.host.startsWith('https://')) {
      this.host = this.host.replace(/https:\/\//g,"");
    }
    if(this.host.endsWith('/')) {
      this.host = this.host.split('/')[0];
    }
    if(this.host.includes('-aa.ia.exabeam.com')) {
      alert('Internal SaaS URLs are unsupported. Please use the customer facing URL and a working local username and password');
      return
    }
    localStorage.setItem('host', this.host);
    localStorage.setItem('nodeServer', this.nodeServer);
    Sentry.setUser({ username: this.host+'-'+this.username });


      //this.host = this.saasAlias+'-aa.ia.exabeam.com';
      if(this.arrayType === 'validation') {
        var formData: any = new FormData();
        formData.append("username", this.username);
        formData.append("password", this.password);
        //log in and keep the cookies for auth
        this.http.post('https://'+this.host+'/api/auth/login', formData, { withCredentials: true, headers: {'TargetURL': 'https://'+this.host+'/api/auth/login', 'u': this.username, 'p': this.password, 'cookiehost': this.host,  'cache-control': 'no-cache, no-store, must-revalidate'}}).subscribe( 
          (response) => {
          //console.log(response);
          this.startValidation();
          },
          (error) => {
            console.log(error);
            alert('ERROR fetching data: Check your server address and authenticaiton details and try again');
            location.reload();
          } 
        )
      }else {
        var formData: any = new FormData();
        formData.append("username", this.username);
        formData.append("password", this.password);
        this.http.post('https://'+this.host+'/api/auth/login', formData, { withCredentials: true, headers: {'TargetURL': 'https://'+this.host+'/api/auth/login', 'u': this.username, 'p': this.password, 'cookiehost': this.host,  'cache-control': 'no-cache, no-store, must-revalidate'}}).subscribe( 
          (response) => {
          //console.log(response);
          this.getNotables(type);
          },
          (error) => {
            console.log(error);
            alert('ERROR fetching data: Check your URL and authenticaiton details and try again');
            location.reload();
            this.getNotables(type);
          } 
        )
        
      }
      

      

  }

  getNotables(type) {
    this.arrayType = type;
    this.showLogin = false;
    this.loading = true;
    this.showHome = true;
    //Threat Hunter query for all sessions that with risk score >= 90 over 7 days
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {message: "notableSearch"}, (response) => {
        console.log('noatble response = ',response);
        this.thResults = response;
        this.fixArray();
      });
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
    this.ref.detectChanges();  
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
        this.http.get('https://'+this.host+'/uba/api/user/sequence/triggeredRules?sequenceType=session&sequenceId='+obj, {withCredentials: true, headers: { 'TargetURL': 'https://'+this.host+'/uba/api/user/sequence/triggeredRules?sequenceType=session&sequenceId='+obj, 'cookiehost': this.host}}).subscribe(
        (response) => {
          //console.log('got response of timeline and it is = ',response);
          this.thResultsUsers.sessions.forEach((obj2, index2) => {
            //console.log('obj(',obj,') && obj2.id(',obj2.id,')');
            if(obj === obj2.id) {
              //console.log('matches!')
              obj2.rules = response;
              //console.log('counter BEFORE = ', counter);
              counter = counter + 1;
              //console.log('counter AFTER = ', counter);
              this.doneCountSessions = this.doneCountSessions + 1;
              //console.log('this.doneCountTimelines BEFORE = ', this.doneCountTimelines);
              this.doneCountTimelines++;
              //console.log('this.doneCountTimelines AFTER = ', this.doneCountTimelines);
              this.tuningProgress = Math.round(((this.doneCountTimelines/this.todoTimelines) * 100));
              this.ref.detectChanges();
              if(counter < this.allowedCount) {
              //  console.log('Index = '+b+' this.activeCount LESSER this.allowedCount');
              } else {
              //  console.log('Index = '+b+' this.activeCount GREATER this.allowedCount');
                if(this.doneCountSessions <= tempKeys.length) this.getSessions(offset+1);
              }
              if(this.doneCountSessions === tempKeys.length) {
                this.ref.detectChanges();
                this.arraySum();
         } 
            }
          })
        //  console.log(response);
        
        },
        (error) => { 
          console.log(error);
        }
      )
      }
      
    })
    this.ref.detectChanges();
      
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
        this.http.get('https://'+this.host+'/uba/api/asset/sequence/'+obj+'/triggeredRules', {withCredentials: true, headers: { 'TargetURL': 'https://'+this.host+'/uba/api/asset/sequence/'+obj+'/triggeredRules', 'cookiehost': this.host}}).subscribe(
        (response) => {
          this.thResultsUsers.sessions.forEach((obj2, index2) => {
            if(obj === obj2.id) {
              obj2.rules = response;
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
              if(this.doneCountSessions === tempKeys.length) this.arraySum();
            }
          })
        //  console.log(response);
        
        },
        (error) => { 
          console.log(error);
        }
      )
      }
      
    })
    this.ref.detectChanges();
      
  }

  arraySum(){
    //Setup array to count what users have triggered sessions and their total scores
    //console.log('about to start');
    this.thResultsUsers.sessions.forEach((obj, index) => {
      //console.log('in my new loop on index '+index);
      if(this.thResultsUsers.userCounts.some(username => username.user === this.thResultsUsers.sessions[index].user)) {
      //  console.log( "Object found inside the array.");
      } else{
      //  console.log("Object not found.");
      //  console.log('pushing '+this.thResultsUsers.sessions[index].user);
        this.thResultsUsers.userCounts.push({'user': this.thResultsUsers.sessions[index].user, 'count': 0, 'totalScore':0})
      }
       
    })
    //Add up the amount of times a user was seen and sum up the total risk score of those sessions
    for (var i=0; i < this.thResultsUsers.sessions.length; i++) {
      for (var b=0; b < this.thResultsUsers.userCounts.length; b++) {
        if (this.thResultsUsers.sessions[i].user === this.thResultsUsers.userCounts[b].user) {
          this.thResultsUsers.userCounts[b].count = this.thResultsUsers.userCounts[b].count + 1;
          this.thResultsUsers.userCounts[b].totalScore = this.thResultsUsers.userCounts[b].totalScore + this.thResultsUsers.sessions[i].riskScore;
        }
      }     
    }
    //Sum up user session info
    this.uSessionSummaryNotableCount = 0;
    this.uSessionSummaryRiskScore = 0;
    this.uSessionSummaryCount = this.thResultsUsers.sessions.length;
    for (var i=0; i < this.thResultsUsers.sessions.length; i++) {
      if(this.thResultsUsers.sessions[i].riskScore >= 90) this.uSessionSummaryNotableCount = this.uSessionSummaryNotableCount + 1
      this.uSessionSummaryRiskScore = this.uSessionSummaryRiskScore + this.thResultsUsers.sessions[i].riskScore;
    }
    this.uSessionSummaryNotablePerDay = Math.round(this.uSessionSummaryNotableCount / this.queryUnitNum );
    this.uSessionSummarySessionCount = this.thResultsUsers.sessions.length;

    //Setup array to count what rules have triggered and their total scores
    //console.log('about to start rules');
    this.thResultsUsers.sessions.forEach((obj, index) => {
      this.thResultsUsers.sessions[index].rules.triggeredRules.forEach((obj2, index2) => {
        this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleName = this.thResultsUsers.sessions[index].rules.rules[this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId].ruleName;
        if(this.thResultsUsers.ruleCounts.some(ruleName => ruleName.rule === this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId)) {
       //   console.log( this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId +" found inside the array.");
        } else{    
          //console.log(this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId+" not found.");
        //  console.log('index = '+index);
         // console.log('index2 = '+index2);
          this.thResultsUsers.ruleCounts.push({'rule': this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId, 'ruleName': this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleName, 'count': 0, 'sessionCount': 0, 'originalSessionCount': 0, 'totalScore':0, 'ruleDef': this.thResultsUsers.sessions[index].rules.rules[this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId]});
        }
      }) 
    })
    //Add empty array of events under each triggered rule
    for (var b=0; b < this.thResultsUsers.ruleCounts.length; b++) {
      this.thResultsUsers.ruleCounts[b].events = [];
    }
    //Fill in event details for each event triggered under a rule
    this.thResultsUsers.sessions.forEach((obj, index) => {
      this.thResultsUsers.sessions[index].rules.triggeredRules.forEach((obj2, index2) => {
        this.thResultsUsers.ruleCounts.forEach((obj3, index3) => {
          if(this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId === this.thResultsUsers.ruleCounts[index3].rule) {
            if(this.thResultsUsers.ruleCounts[index3].events.some(eventObject => eventObject.eventId === this.thResultsUsers.sessions[index].rules.triggeredRules[index2].eventId)) {
            //  console.log( this.thResultsUsers.sessions[index].rules.triggeredRules[index2].eventId +" found inside the array.");
            } else{    
           //   console.log(this.thResultsUsers.sessions[index].rules.triggeredRules[index2].eventId+" not found.");
              Object.keys(this.thResultsUsers.sessions[index].rules.triggeredRuleEvents).forEach((obj4, index4) => {
                if(obj4 === this.thResultsUsers.sessions[index].rules.triggeredRules[index2].eventId){
                  if(this.thResultsUsers.sessions[index].rules.triggeredRuleEvents[obj4].fields['riskScore-'+this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId] == undefined) this.thResultsUsers.sessions[index].rules.triggeredRuleEvents[obj4].fields['riskScore-'+this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId] = 0;
                  this.thResultsUsers.sessions[index].rules.triggeredRuleEvents[obj4].fields['riskScore-'+this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId] = this.thResultsUsers.sessions[index].rules.triggeredRuleEvents[obj4].fields['riskScore-'+this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId] + Math.round(this.thResultsUsers.sessions[index].rules.triggeredRules[index2].riskScore);
                  this.thResultsUsers.ruleCounts[index3].events.push(this.thResultsUsers.sessions[index].rules.triggeredRuleEvents[""+obj4].fields);
                }
              })
            }
          }     
        })
      })
    })
    //Add up the amount of times a rule was seen and sum up the total risk score of those rules
    for (var i=0; i < this.thResultsUsers.sessions.length; i++) {
      for (var a=0; a < this.thResultsUsers.sessions[i].rules.triggeredRules.length; a++) {
        for (var b=0; b < this.thResultsUsers.ruleCounts.length; b++) { 
          if (this.thResultsUsers.sessions[i].rules.triggeredRules[a].ruleId === this.thResultsUsers.ruleCounts[b].rule) {
            this.thResultsUsers.ruleCounts[b].originalCount = this.thResultsUsers.ruleCounts[b].count + 1;
            this.thResultsUsers.ruleCounts[b].count = this.thResultsUsers.ruleCounts[b].count + 1; 
            this.thResultsUsers.ruleCounts[b].originalTotalScore = this.thResultsUsers.ruleCounts[b].totalScore + Math.round(this.thResultsUsers.sessions[i].rules.triggeredRules[a].riskScore);         
            this.thResultsUsers.ruleCounts[b].totalScore = this.thResultsUsers.ruleCounts[b].totalScore + Math.round(this.thResultsUsers.sessions[i].rules.triggeredRules[a].riskScore);
            if(this.uSessionSummaryTunedRiskScore) {
              this.thResultsUsers.ruleCounts[b].totalScorePercent = Math.round(((this.thResultsUsers.ruleCounts[b].totalScore / this.uSessionSummaryTunedRiskScore))*100);
            } else {
              this.thResultsUsers.ruleCounts[b].totalScorePercent = Math.round(((this.thResultsUsers.ruleCounts[b].totalScore / this.uSessionSummaryRiskScore))*100);
            }
                                           
          }
        }
      }     
    }

    for (var b=0; b < this.thResultsUsers.ruleCounts.length; b++) {
      for (var i=0; i < this.thResultsUsers.sessions.length; i++) {
        if(this.thResultsUsers.sessions[i].rules.triggeredRules.some(rule => rule.ruleId === this.thResultsUsers.ruleCounts[b].rule)) {
          this.thResultsUsers.ruleCounts[b].originalSessionCount = this.thResultsUsers.ruleCounts[b].originalSessionCount + 1;
          this.thResultsUsers.ruleCounts[b].sessionCount = this.thResultsUsers.ruleCounts[b].sessionCount + 1;
          if(this.uSessionSummaryTunedRiskScore) {
            this.thResultsUsers.ruleCounts[b].sessionCountPercent = Math.round(((this.thResultsUsers.ruleCounts[b].sessionCount / this.uSessionSummaryTunedNotablePerDay))*100);
          } else{
            this.thResultsUsers.ruleCounts[b].sessionCountPercent = Math.round(((this.thResultsUsers.ruleCounts[b].sessionCount / this.uSessionSummarySessionCount))*100);
          }
          
        }
      }     
    }

    this.userData = this.thResultsUsers.userCounts;
    this.ruleData = this.thResultsUsers.ruleCounts;
    this.ruleTuning = [];
    this.loading = false;
    this.visibleTuningProgress = false;



    this.columns1 = [
      { field: 'user', header: 'User' },
      { field: 'count', header: 'Session Count' },
      { field: 'totalScore', header: 'Total Score' }
    ];

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

    this.ref.detectChanges();

    

  }

  onRowSelect(event) {
    this.selectedRule = event.data.rule;
    this.selectedRuleCount = event.data.count;
    this.selectedRuleScore = event.data.totalScore;
    this.selectedRuleSessionCount = event.data.sessionCount;
    this.setEvents(event.data.rule);
    this.showEvents = true;
    this.ref.detectChanges();
  }

  toggleShowEvents() {
    this.showEvents = false;
    this.showHome = true;
    this.ref.detectChanges(); 
    }

  setEvents(ruleName) {
    this.tempCount = 0;
    this.showHome = false;
    this.showEvents = true;
    this.columns3 = [];
    this.eventData = [];
    this.eventSummaryData = [];
    for (var i=0; i < this.thResultsUsers.ruleCounts.length; i++) {
      if(this.thResultsUsers.ruleCounts[i].rule === ruleName){
        this.eventData = this.thResultsUsers.ruleCounts[i].events;
        this.eventData.forEach((obj, index) => {
          Object.keys(obj).forEach((obj2, index2) => {
            if(obj2 != 'time' && obj2 != 'rawlog_time' && obj2 != 'session_order' && obj2 != 'event_id' && obj2 != 'alert_id' && obj2 != 'riskScore' && obj2 != 'is_session_last' && obj2.substring(0,obj2.indexOf('-')) != 'riskScore' && obj[obj2] != ''){
              if(this.eventSummaryData.some(theEvent => theEvent.fieldName === obj2 && theEvent.fieldValue === obj[obj2])) {
              } else{
                this.eventSummaryData.push({'fieldName': obj2, 'fieldValue': obj[obj2], 'count': 0, 'totalScore': 0, 'sessionCount': 0, 'sessionIds':[]});
              }
              if(this.columns3.some(eventObject => eventObject.field === obj2)) {
              } else{
                this.columns3.push({'field': obj2, 'header': obj2})
              }
            }
            
          })
        })
      } 
    }
    for (var i=0; i < this.eventData.length; i++) {
      Object.keys(this.eventData[i]).forEach((obj2, index2) => {
        for (var b=0; b < this.eventSummaryData.length; b++) {
          if(this.eventSummaryData[b].fieldName === obj2 && this.eventSummaryData[b].fieldValue === this.eventData[i][obj2] && this.eventData[i]['riskScore-'+this.selectedRule]) {
            if(this.bannedEvents.some(theEvent => theEvent.event_id === this.eventData[i].event_id)) {
              this.bannedEvents.forEach((obj3, index3) => {
                if(obj3.event_id === this.eventData[i].event_id){
                  if(obj3.rules.some(theRule => theRule === ruleName)){           
                  } else {
                    this.eventSummaryData[b].count = this.eventSummaryData[b].count + 1;
                    this.eventSummaryData[b].totalScore = this.eventSummaryData[b].totalScore + this.eventData[i]['riskScore-'+this.selectedRule];
                    this.eventSummaryData[b].eventCountPercent = Math.round(((this.eventSummaryData[b].count / this.selectedRuleCount))*100);
                    this.eventSummaryData[b].scoreCountPercent = Math.round(((this.eventSummaryData[b].totalScore / this.selectedRuleScore))*100);                   
                    if(this.eventSummaryData[b].sessionIds.some(id => id === this.eventData[i].session_id)) {
                    } else {
                      this.eventSummaryData[b].sessionIds.push(this.eventData[i].session_id);
                      this.eventSummaryData[b].sessionCount = this.eventSummaryData[b].sessionCount + 1;
                      this.eventSummaryData[b].sessionCountPercent = Math.round(((this.eventSummaryData[b].sessionCount / this.selectedRuleSessionCount))*100);
                    }                    
                  }
                }
              })
            } else {
              this.eventSummaryData[b].count = this.eventSummaryData[b].count + 1;
              this.eventSummaryData[b].totalScore = this.eventSummaryData[b].totalScore + this.eventData[i]['riskScore-'+this.selectedRule];
              this.eventSummaryData[b].eventCountPercent = Math.round(((this.eventSummaryData[b].count / this.selectedRuleCount))*100);
              this.eventSummaryData[b].scoreCountPercent = Math.round(((this.eventSummaryData[b].totalScore / this.selectedRuleScore))*100); 
              if(this.eventSummaryData[b].sessionIds.some(id => id === this.eventData[i].session_id)) {
              } else {
                this.eventSummaryData[b].sessionIds.push(this.eventData[i].session_id);
                this.eventSummaryData[b].sessionCount = this.eventSummaryData[b].sessionCount + 1;
                this.eventSummaryData[b].sessionCountPercent = Math.round(((this.eventSummaryData[b].sessionCount / this.selectedRuleSessionCount))*100);
              }
            }            
          }          
        }      
      })       
    }
    this.ref.detectChanges();

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

    //DOM refresh issues in angular, this fixed it
    this.refresh = false;
    this.ref.detectChanges();
    this.refresh = true;
    this.ref.detectChanges();
    
  }
  
  startValidation() {
    this.showValidation = true;
    this.loading = true;
    this.showLogin = false;
    this.visibleDataValidationProgress = true;   
    //Get all rules
    //this.http.get('https://'+this.host+'/uba/api/rules/fetchRules?filterBy=all', {withCredentials: true, headers: {'accept': 'text/html,application/xhtml+xml,application/json'}}).subscribe(
    this.http.get('https://'+this.host+'/uba/api/rules/fetchRules?filterBy=all', {withCredentials: true, headers: {'TargetURL': 'https://'+this.host+'/uba/api/rules/fetchRules?filterBy=all', 'cookiehost': this.host,  'cache-control': 'no-cache, no-store, must-revalidate'}}).subscribe(
        (response) => {           
            this.allRules = response;
            //console.log('response');
            //console.log(response);
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
          },
        (error) => {
          console.log('error');
          console.log(error);
          this.errors.push('Error fetching all rules');
          this.errorVisible = true;
          alert('ERROR fetching data: Check your URL and authenticaiton details and try again');
          //location.reload();
        }
      )
      this.ref.detectChanges();
  }
  
  

  getModels() {
    //Get all models
    this.http.get('https://'+this.host+'/uba/api/rules/modelDefinitions', {withCredentials: true, headers: {'TargetURL': 'https://'+this.host+'/uba/api/rules/modelDefinitions', 'cookiehost': this.host,  'cache-control': 'no-cache, no-store, must-revalidate'}}).subscribe(
        (response) => {
            this.allModels = response;
            //console.log(response);
            Object.keys(this.allModels).forEach((obj, index) => {
              this.allModels[obj].populating = false;
              this.allModels[obj].attributes.populating = false;
            })
            this.checkModels(0);            
          },
        (error) => {
          console.log(error);
          this.errors.push('Error fetching all models');
          this.errorVisible = true;
        }
      )
      this.ref.detectChanges();
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
        this.http.get('https://'+this.host+'/uba/api/histograms/search?maxNumberOfResults=1&modelName='+obj, {withCredentials: true, headers: {'TargetURL': 'https://'+this.host+'/uba/api/histograms/search?maxNumberOfResults=1&modelName='+obj, 'cookiehost': this.host,  'cache-control': 'no-cache, no-store, must-revalidate'}}).subscribe(
        (response) => {
        //  console.log(response);
          this.allModels[obj].histograms = response;
          if(this.allModels[obj].histograms.histograms.length != 0) {
            this.allModels[obj].populating = true;
            this.allModels[obj].attributes.populating = true;
          }
        //  console.log('this index after = '+index);
          counter = counter + 1;
          this.doneCountModels = this.doneCountModels + 1;
          this.dataValidationProgress = Math.round(((this.doneCountModels/this.todoModels) * 20));
          this.ref.detectChanges(); 
          if(counter < this.allowedCount) {
          } else {
          if(this.doneCountModels <= tempKeys.length) this.checkModels(offset+1);
          }
          if(this.doneCountModels === tempKeys.length) {
            console.log('moving to checkRules');
            this.checkRules(0);
          } 
        },
        (error) => { 
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
        }
      )
      }
      
    })
    this.ref.detectChanges();
    
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
      this.http.get('https://'+this.host+'/uba/api/rules/triggerFrequency?ruleId='+obj, {withCredentials: true, headers: {'TargetURL': 'https://'+this.host+'/uba/api/rules/triggerFrequency?ruleId='+obj, 'cookiehost': this.host,  'cache-control': 'no-cache, no-store, must-revalidate'}}).subscribe(
        (response) => {
        //  console.log(response);
        this.allRules.forEach((obj2,index2) => {
          obj2.rules.forEach((obj3,index3) => {
            if(obj3.ruleId === obj) {
              obj3.triggerFreq = response;
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
        this.ref.detectChanges(); 
        if(counter < this.allowedCount) {
        //  console.log('Index = '+b+' this.activeCount LESSER this.allowedCount');
        } else {
        //  console.log('Index = '+b+' this.activeCount GREATER this.allowedCount');
          if(this.doneCountRules <= tempKeys.length) this.checkRules(offset+1);
        }
         if(this.doneCountRules === tempKeys.length) this.combineArrays();
        },
        (error) => { 
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
        }
      )
    })
    this.ref.detectChanges();
      
  }

  combineArrays() {
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
    this.ref.detectChanges();
    this.findRequiredData();
  }

  findRequiredData() {
    this.rulesAndModels.forEach((obj,index) => {
      //If not a fact based rule, determine the event types required for model to trigger
      if(obj.modelDef != undefined) {
        obj.modelDef.requiredEventFields = [];
        obj.modelDef.presentEventFields = [];
        obj.modelDef.missingEventFields = [];
        //If the feature has no parenthesis then just use a field name
        if(obj.modelDef.feature.toLowerCase().startsWith('count') || obj.modelDef.feature.toLowerCase().startsWith('distinct') || obj.modelDef.feature.toLowerCase().startsWith('sum') || obj.modelDef.feature.toLowerCase().startsWith('sequence')) {
          if((obj.modelDef.feature.toLowerCase().substring(obj.modelDef.feature.indexOf("(")+1)).startsWith('getvalue(')) {
            obj.modelDef.requiredEventFields.push(obj.modelDef.feature.toLowerCase().substring(obj.modelDef.feature.indexOf("(")+1, obj.modelDef.feature.indexOf(")")+1).replace(/ /g,""))
          } else {
            obj.modelDef.requiredEventFields.push(obj.modelDef.feature.toLowerCase().substring(obj.modelDef.feature.indexOf("(")+1, obj.modelDef.feature.indexOf(",")).replace(/ /g,""));
          }        
        } else {
          obj.modelDef.requiredEventFields.push(obj.modelDef.feature.toLowerCase().replace(/ /g,""));
        }
        if(obj.modelDef.trainIf.toLowerCase().startsWith('count') || obj.modelDef.trainIf.toLowerCase().startsWith('distinct') || obj.modelDef.trainIf.toLowerCase().startsWith('sum') || obj.modelDef.trainIf.toLowerCase().startsWith('sequence')) {
          if((obj.modelDef.trainIf.toLowerCase().substring(obj.modelDef.trainIf.indexOf("(")+1)).startsWith('getvalue(')) {
            if(obj.modelDef.requiredEventFields.some(field => field === obj.modelDef.trainIf.toLowerCase().substring(obj.modelDef.trainIf.indexOf("(")+1, obj.modelDef.trainIf.indexOf(")")+1).replace(/ /g,""))) {
            } else {
              obj.modelDef.requiredEventFields.push(obj.modelDef.trainIf.toLowerCase().substring(obj.modelDef.trainIf.indexOf("(")+1, obj.modelDef.trainIf.indexOf(")")+1).replace(/ /g,""));
            }
          } else {
            if(obj.modelDef.requiredEventFields.some(field => field === obj.modelDef.trainIf.toLowerCase().substring(obj.modelDef.trainIf.indexOf("(")+1, obj.modelDef.trainIf.indexOf(",")).replace(/ /g,""))) {
            } else {
              obj.modelDef.requiredEventFields.push(obj.modelDef.trainIf.toLowerCase().substring(obj.modelDef.trainIf.indexOf("(")+1, obj.modelDef.trainIf.indexOf(",")).replace(/ /g,""));
            }
          }          
        }
        if(obj.modelDef.trainIf.toLowerCase().includes('exists(')) {
          obj.modelDef.requiredEventFields.push(obj.modelDef.trainIf.toLowerCase().substring(obj.modelDef.trainIf.indexOf("exists(")+7, obj.modelDef.trainIf.indexOf(")", (obj.modelDef.trainIf.indexOf("exists(")+7))));
        }
        if(obj.modelDef.scopeType === 'USER' || obj.modelDef.scopeType === 'PEERS' || obj.modelDef.scopeType === 'DEVICE') {
          obj.modelDef.requiredEventFields.push(obj.modelDef.scopeValue.toLowerCase().replace(/ /g,""));
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
    this.ref.detectChanges();
    this.getEventTypes();
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
    this.ref.detectChanges();
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
       chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {message: "eventTypeSearch", eventType: obj}, (response) => {
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
              console.log('got response for '+obj.name);
              obj2.response = response;
              obj2.totalCount = 0;
              obj2.rules = [];
              obj2.models = [];
              obj2.sessionEventDetails = [];
              obj2.sessionEventFields = [];
              obj2.todoSessionIDs = [];
              obj2.doneSessionIDs = [];
              obj2.todoAssetIDs = [];
              obj2.todoAssetIDs = [];
              obj2.todoSessionEventIDs = [];
              obj2.doneSessionEventIDs = [];
              obj2.todoAssetEventIDs = [];
              obj2.doneAssetEventIDs = [];
              obj2.assetEventDetails = [];
              obj2.assetEventFields = [];
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
              this.ref.detectChanges();              
              if(counter === this.allowedEventTypeCount+1 || this.todoEventTypes-this.doneCountEventTypes === 0) {
                offset = offset + 1;;
                if(this.doneCountEventTypes < tempKeys.length) {
                  //console.log('short, running again');
                  this.getEventTypeSessions(offset);

                } else {
                  console.log('starting to get session details');
                  this.getEventTypeSessionDetails(0);
                } 
              }
              
            }
          })
          }
          
        });
      });       
      }     
    })
    this.ref.detectChanges();     
  }


  getEventTypeSessionDetails(offset){
    var counter = 0;
    var tempKeys = []
    var tempArray = [];
    var tempAdded = 0;
    this.eventTypes.forEach((obj,index) => {
      if (obj.response.entities.session != undefined) tempKeys.push(obj);
    })
    this.todoEventTypeSessions = tempKeys.length;
    for (var a=0; a < tempKeys.length && tempAdded <= this.allowedEventTypeCount; a++) {
      //console.log('tempAdded: '+tempAdded);
      if(this.doneEventTypeSessions.some(event => event.name === tempKeys[a].name)) {
      } else {
        //console.log('pushing '+tempKeys[a].name+' to doneEventTypeSessions');
        tempArray.push(tempKeys[a]);
        this.doneEventTypeSessions.push(tempKeys[a]);
        tempAdded++;
      }      
    }

    tempArray.forEach((obj,index) => {
      this.eventTypes.forEach((obj2, index2) => {
        if(obj.name === obj2.name) {
          obj2.inSession = true;
          obj2.sessionCount = obj2.response.entities.session.length;
          obj2.totalCount = obj2.totalCount + obj2.response.entities.session.length;
          var tempSessions = 0               
          obj2.response.entities.session.forEach((obj3,index3) => {
            if(index3 < this.allowedEventTypeCount) {
              tempSessions++
              //this.http.get('https://'+this.host+'/uba/api/sequence/events/eventType?sequenceType=session&sequenceId='+obj3.sessionInfo.sessionId+'&eventType='+obj2.name+'&numberOfResults=10', {withCredentials: true}).subscribe(
              this.http.get('https://'+this.host+'/uba/api/sequence/events/eventType?sequenceType=session&sequenceId='+obj3.sessionInfo.sessionId+'&eventType='+obj2.name+'&numberOfResults=10', {withCredentials: true, headers: {'TargetURL': 'https://'+this.host+'/uba/api/sequence/events/eventType?sequenceType=session&sequenceId='+obj3.sessionInfo.sessionId+'&eventType='+obj2.name+'&numberOfResults=10', 'cookiehost': this.host,  'cache-control': 'no-cache, no-store, must-revalidate'}}).subscribe(
              (response) => {
                for (var i = 0; i < Object.keys(response).length; i++) {
                  obj2.todoSessionEventIDs.push({'sessionId': obj3.sessionInfo.sessionId, 'eventId': response[i]});
                }
                tempSessions--                
                if(tempSessions === 0){
                  this.doneCountEventTypeSessions++;
                  counter++;
                } 
                this.dataValidationProgress = Math.round((((this.doneCountEventTypeSessions/this.todoEventTypeSessions) * 10) + 60));
                //console.log('counter: for event type sessions '+counter+' for offset: '+offset);
                this.ref.detectChanges(); 
                if(tempSessions === 0 && (counter === this.allowedEventTypeCount+1 || this.todoEventTypeSessions-this.doneCountEventTypeSessions === 0)) {
                  offset++;
                  //console.log('counter: '+counter+' === '+this.allowedEventTypeCount+1+'. offset now '+offset);
                  if(this.doneCountEventTypeSessions < tempKeys.length) {
                    this.getEventTypeSessionDetails(offset);
                  } else {
                    console.log('Moving to Asset Event Details here');
                    this.getEventTypeAssetDetails(0);
                  }
                }

              },
              (error) => { 
                console.log(error);
                this.errors.push('Error fetching single session for event type: '+obj2.name);
                this.errorVisible = true;
              })
            }
          })
        }
      })
    })
    this.ref.detectChanges(); 
  }

  getEventTypeAssetDetails(offset){
    var counter = 0;
    var tempKeys = []
    var tempArray = [];
    var tempAdded = 0;
    this.eventTypes.forEach((obj,index) => {
      if (obj.response.entities.asset != undefined) tempKeys.push(obj);
    })
    this.todoEventTypeAssets = tempKeys.length;
    for (var a=0; a < tempKeys.length && tempAdded <= this.allowedEventTypeCount; a++) {
      if(this.doneEventTypeAssets.some(event => event.name === tempKeys[a].name)) {
      } else {
        tempArray.push(tempKeys[a]);
        this.doneEventTypeAssets.push(tempKeys[a]);
        tempAdded++;
      }      
    }

    tempArray.forEach((obj,index) => {
      this.eventTypes.forEach((obj2, index2) => {
        if(obj.name === obj2.name) {
            obj2.inAsset = true;
            obj2.assetCount = obj2.response.entities.asset.length;
            obj2.totalCount = obj2.totalCount + obj2.response.entities.asset.length; 
            var tempSessions = 0                
            obj2.response.entities.asset.forEach((obj3,index3) => {
            if(index3 < this.allowedEventTypeCount) {
              tempSessions++
              //this.http.get('https://'+this.host+'/uba/api/sequence/events/eventType?sequenceType=asset&sequenceId='+obj3.assetSequenceInfo.assetSequenceId+'&eventType='+obj2.name+'&numberOfResults=10', {withCredentials: true}).subscribe(
              this.http.get('https://'+this.host+'/uba/api/sequence/events/eventType?sequenceType=asset&sequenceId='+obj3.assetSequenceInfo.assetSequenceId+'&eventType='+obj2.name+'&numberOfResults=10', {withCredentials: true, headers: {'TargetURL': 'https://'+this.host+'/uba/api/sequence/events/eventType?sequenceType=asset&sequenceId='+obj3.assetSequenceInfo.assetSequenceId+'&eventType='+obj2.name+'&numberOfResults=10', 'cookiehost': this.host,  'cache-control': 'no-cache, no-store, must-revalidate'}}).subscribe(
              (response) => {
                for (var i = 0; i < Object.keys(response).length; i++) {
                  obj2.todoAssetEventIDs.push({'sessionId': obj3.assetSequenceInfo.assetSequenceId, 'assetId': obj3.assetSequenceInfo.assetId, 'eventId': response[i]});
                }
                tempSessions--                
                if(tempSessions === 0){
                  this.doneCountEventTypeAssets++;
                  counter++;
                } 
                this.dataValidationProgress = Math.round((((this.doneCountEventTypeAssets/this.todoEventTypeAssets) * 10) + 70));
                //console.log('counter: for event type sessions '+counter+' for offset: '+offset);
                this.ref.detectChanges(); 
                if(tempSessions === 0 && (counter === this.allowedEventTypeCount+1 || this.todoEventTypeAssets-this.doneCountEventTypeAssets === 0)) {
                  offset++;
                  //console.log('counter: '+counter+' === '+this.allowedEventTypeCount+1+'. offset now '+offset);
                  if(this.doneCountEventTypeAssets < tempKeys.length) {
                    this.getEventTypeAssetDetails(offset);
                  } else {
                    console.log('Moving to Session Event Details here');
                    this.checkEventTypeSessionDetails(0);
                  }
                }

              },
              (error) => { 
                console.log(error);
                this.errors.push('Error fetching single session for event type: '+obj2.name);
                this.errorVisible = true;
              })
            }
          })
        }
      })
    })
    this.ref.detectChanges(); 
  }


  checkEventTypeSessionDetails(offset) {
    var counter = 0;
    var tempKeys = []
    var tempArray = [];
    var tempAdded = 0;
    this.eventTypes.forEach((obj,index) => {
      if (obj.response.entities.session != undefined && obj.todoSessionEventIDs.length !== 0) tempKeys.push(obj);
    })
    this.todoEventTypeSessionsDetails = tempKeys.length;
    for (var a=0; a < tempKeys.length && tempAdded <= this.allowedEventTypeSessionCount; a++) {
      console.log('tempAdded: ',tempAdded);
      if(this.doneEventTypeSessionsDetails.some(event => event.name === tempKeys[a].name)) {
      } else {
        console.log('pushing ',tempKeys[a].name,' to doneEventTypeSessionsDetails');
        tempArray.push(tempKeys[a]);
        this.doneEventTypeSessionsDetails.push(tempKeys[a]);
        tempAdded++;
      }      
    }

    tempArray.forEach((obj,index) => {
      this.eventTypes.forEach((obj2, index2) => {
        if(obj.name === obj2.name) {     
            var tempSessions = 0;       
            obj2.todoSessionEventIDs.forEach((obj4,index4) => {
              if(obj2.doneSessionEventIDs.some(event => event.sessionId === obj4.sessionId && event.eventId === obj4.eventId)){
              } else {
                obj2.doneSessionEventIDs.push({'sessionId': obj4.sessionId, 'eventId': obj4.eventId});
                tempSessions++
                //this.http.get('https://'+this.host+'/uba/api/timeline/events/start?username=*&startSequenceType=session&startSequenceId='+obj4.sessionId+'&preferredNumberOfEvents=1&anomalyOnly=false&sequenceTypes=web&sequenceTypes=session&sequenceTypes=endpoint&sequenceTypes=file&startEventId='+obj4.eventId, {withCredentials: true}).subscribe(
                this.http.get('https://'+this.host+'/uba/api/timeline/events/start?username=*&startSequenceType=session&startSequenceId='+obj4.sessionId+'&preferredNumberOfEvents=1&anomalyOnly=false&sequenceTypes=web&sequenceTypes=session&sequenceTypes=endpoint&sequenceTypes=file&startEventId='+obj4.eventId, {withCredentials: true, headers: {'TargetURL': 'https://'+this.host+'/uba/api/timeline/events/start?username=*&startSequenceType=session&startSequenceId='+obj4.sessionId+'&preferredNumberOfEvents=1&anomalyOnly=false&sequenceTypes=web&sequenceTypes=session&sequenceTypes=endpoint&sequenceTypes=file&startEventId='+obj4.eventId, 'cookiehost': this.host,  'cache-control': 'no-cache, no-store, must-revalidate'}}).subscribe(
                  (response) => {                        
                    obj2.sessionEventDetails.push(response);
                    obj2.sessionEventDetails.forEach((obj5) => {
                      if(obj5.firstEvent != undefined) {
                        Object.keys(obj5.firstEvent.fields).forEach((obj6) => {
                          if(obj2.sessionEventFields.some(theField => theField.toLowerCase().replace(/ /g,"") === obj6.toLowerCase().replace(/ /g,""))) {
                          } else{
                            obj2.sessionEventFields.push(obj6.toLowerCase().replace(/ /g,""));
                          }
                        })
                      }                              
                    })
                    console.log('tempSessions BEFORE = ',tempSessions);
                    tempSessions--
                    console.log('tempSessions AFTER = ',tempSessions);                
                    if(tempSessions === 0){
                      this.doneCountEventTypeSessionsDetails++;
                      counter++;
                    }
                    console.log('counter = ',counter);
                    console.log('this.allowedEventTypeSessionCount+1 = ',this.allowedEventTypeSessionCount+1); 
                    console.log('this.todoEventTypeSessionsDetails = ',this.todoEventTypeSessionsDetails); 
                    console.log('this.doneCountEventTypeSessionsDetails = ',this.doneCountEventTypeSessionsDetails);  
                    this.dataValidationProgress = Math.round((((this.doneCountEventTypeSessionsDetails/this.todoEventTypeSessionsDetails) * 10) + 80));
                    //console.log('counter: for event type sessions '+counter+' for offset: '+offset);
                    this.ref.detectChanges(); 
                    if(tempSessions === 0 && (counter === this.allowedEventTypeSessionCount+1 || this.todoEventTypeSessionsDetails-this.doneCountEventTypeSessionsDetails === 0)) {
                      offset++;
                      console.log('counter: '+counter+' === '+this.allowedEventTypeSessionCount+1+'. offset now '+offset);
                      if(this.doneCountEventTypeSessionsDetails < tempKeys.length) {
                        console.log('running this.checkEventTypeSessionDetails(',offset,+')');
                        this.checkEventTypeSessionDetails(offset);
                      } else {
                        console.log('Moved on to Event Asset Details here');
                        this.checkEventTypeAssetDetails(0);
                      }
                    }                      
                  },
                  (error) => { 
                    console.log(error);
                    this.errors.push('Error fetching single session event for event type: '+obj2.name);
                    this.errorVisible = true;
                  })
                }
            })                                                                                      
        }
      })
    })
    this.ref.detectChanges();
  }

  checkEventTypeAssetDetails(offset) {
    var counter = 0;
    var tempKeys = []
    var tempArray = [];
    var tempAdded = 0;
    this.eventTypes.forEach((obj,index) => {
      if (obj.response.entities.asset != undefined && obj.todoAssetEventIDs.length !== 0) tempKeys.push(obj);
    })
    this.todoEventTypeAssetsDetails = tempKeys.length;
    for (var a=0; a < tempKeys.length && tempAdded <= this.allowedEventTypeSessionCount; a++) {
      //console.log('tempAdded: '+tempAdded);
      if(this.doneEventTypeAssetsDetails.some(event => event.name === tempKeys[a].name)) {
      } else {
        //console.log('pushing '+tempKeys[a].name+' to doneEventTypeSessionsDetails');
        tempArray.push(tempKeys[a]);
        this.doneEventTypeAssetsDetails.push(tempKeys[a]);
        tempAdded++;
      }      
    }

    tempArray.forEach((obj,index) => {
      this.eventTypes.forEach((obj2, index2) => {
        if(obj.name === obj2.name) {
          var tempSessions = 0;       
          obj2.todoAssetEventIDs.forEach((obj4,index4) => {
            if(obj2.doneAssetEventIDs.some(event => event.sessionId === obj4.sessionId && event.eventId === obj4.eventId)){
            } else {
              obj2.doneAssetEventIDs.push({'sessionId': obj4.sessionId, 'eventId': obj4.eventId});
              tempSessions++
              //this.http.get('https://'+this.host+'/uba/api/asset/timeline/events/start?assetId='+obj4.assetId+'&startAssetSequenceId='+obj4.sessionId+'&preferredNumberOfEvents=1&anomalyOnly=false&eventCategories=*&sequenceTypes=asset&eventTypes='+obj2.name+'&eventTypeInclude=true&startEventId='+obj4.eventId, {withCredentials: true}).subscribe(
              this.http.get('https://'+this.host+'/uba/api/asset/timeline/events/start?assetId='+obj4.assetId+'&startAssetSequenceId='+obj4.sessionId+'&preferredNumberOfEvents=1&anomalyOnly=false&eventCategories=*&sequenceTypes=asset&eventTypes='+obj2.name+'&eventTypeInclude=true&startEventId='+obj4.eventId, {withCredentials: true, headers: {'TargetURL': 'https://'+this.host+'/uba/api/asset/timeline/events/start?assetId='+obj4.assetId+'&startAssetSequenceId='+obj4.sessionId+'&preferredNumberOfEvents=1&anomalyOnly=false&eventCategories=*&sequenceTypes=asset&eventTypes='+obj2.name+'&eventTypeInclude=true&startEventId='+obj4.eventId, 'cookiehost': this.host,  'cache-control': 'no-cache, no-store, must-revalidate'}}).subscribe(
                (response) => {
                  obj2.assetEventDetails.push(response);
                  obj2.assetEventDetails.forEach((obj5) => {
                    if(obj5.firstEvent != undefined) {
                      Object.keys(obj5.firstEvent.fields).forEach((obj6) => {
                        if(obj2.assetEventFields.some(theField => theField.toLowerCase().replace(/ /g,"") === obj6.toLowerCase().replace(/ /g,""))) {
                        } else{
                          obj2.assetEventFields.push(obj6.toLowerCase().replace(/ /g,""));
                          }
                        })
                      }                              
                    })
                    tempSessions--                
                    if(tempSessions === 0){
                      this.doneCountEventTypeAssetsDetails++;
                      counter++;
                    } 
                    this.dataValidationProgress = Math.round((((this.doneCountEventTypeAssetsDetails/this.todoEventTypeAssetsDetails) * 10) + 80));
                    //console.log('counter: for event type sessions '+counter+' for offset: '+offset);
                    this.ref.detectChanges(); 
                    if(tempSessions === 0 && (counter === this.allowedEventTypeSessionCount+1 || this.todoEventTypeAssetsDetails-this.doneCountEventTypeAssetsDetails === 0)) {
                      offset++;
                      //console.log('counter: '+counter+' === '+this.allowedEventTypeSessionCount+1+'. offset now '+offset);
                      if(this.doneCountEventTypeAssetsDetails < tempKeys.length) {
                        this.checkEventTypeAssetDetails(offset);
                      } else {
                        console.log('Moved on to CheckFeature here');
                        this.checkFeature();
                      }
                    }                      
                  },                                
                  (error) => { 
                    console.log(error);
                    this.errors.push('Error fetching single session event for event type: '+obj2.name);
                    this.errorVisible = true;
                  }
                )
              }                                                                     
            })                        

        }
      })
    })
    this.ref.detectChanges();
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
            if(obj.modelDef.scopeType != 'DEVICE' && obj2.inSession) {
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
                  if(obj3 === obj4) obj.modelDef.presentEventFields.push(obj3);
                  if(obj.modelDef.requiredEventFields.length === obj.modelDef.presentEventFields.length) obj.featurePresent = 'true';
                })
              })
            }
            obj.modelDef.requiredEventFields.forEach((obj3,index) => {
              if(obj.modelDef.presentEventFields.some(field => field === obj3)) {
              } else {
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
    this.ref.detectChanges();
    this.addEventDetails()
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
        console.log('data validation done');
        this.rulesAndModelsDone = this.rulesAndModels;
        this.loading = false;
        this.visibleDataValidationProgress = false;
        this.ref.detectChanges(); 
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
        if(obj3.scopeType != 'DEVICE' && obj2.inSession) {
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
        obj2.fieldsPopulating = obj2.fieldCount - obj2.missingEventFields.length;
        obj2.fieldsPopulatingPercent = Math.round((obj2.fieldsPopulating / obj2.fieldCount) * 100); 
      })
      obj2.rules.forEach((obj3, index2) => {
        if(obj3.modelPopulating) {
          obj2.rulesCouldTrigger = obj2.rulesCouldTrigger + 1;
          obj2.rulesCouldTriggerPercent = Math.round((obj2.rulesCouldTrigger / obj2.ruleCount) * 100);
        } 
      })
    })
    this.ref.detectChanges();
  }

  exportExcel(table) {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(table);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "TableExport");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
      import("file-saver").then(FileSaver => {
          let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
          let EXCEL_EXTENSION = '.xlsx';
          const data: Blob = new Blob([buffer], {
              type: EXCEL_TYPE
          });
          FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
      });
  }

  onEventTypesSelect(required,present) {
    this.selectedRequiredEventTypes = required;
    this.selectedPresentEventTypes = present;
    this.visibleMissingEventTypes = true;
    this.ref.detectChanges();
  }
  
  onEventFieldsSelect(required,present,missing, missingTable) {
    this.selectedRequiredEventFields = required;
    this.selectedPresentEventFields = present;
    this.selectedMissingEventFields = missing;
    this.selectedMissingEventFieldTable = missingTable;
    this.visibleMissingEventFields = true;
    this.ref.detectChanges();
  }

  onRuleSelect(rule) {
    this.selectedRule = rule;
    this.visibleRule = true;
    this.ref.detectChanges();
  }

  onModelSelect(model) {
    this.selectedModel = model;
    this.visibleModel = true;
    this.ref.detectChanges();
  }

  onUsersSelect(users) {
    this.selectedUserList = users;
    this.visibleUserList = true;
    this.ref.detectChanges();
  }

  onHostsSelect(hosts) {
    this.selectedHostList = hosts;
    this.visibleHostList = true;
    this.ref.detectChanges();
  }

  onServerSelect(){
    this.visibleServer = true;
    this.ref.detectChanges();
  }

  


}