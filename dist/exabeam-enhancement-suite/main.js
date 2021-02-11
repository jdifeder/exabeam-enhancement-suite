(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\johnj\Documents\exabeam-enhancement-suite\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _sentry_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/angular */ "UH2p");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/progressbar */ "+DzE");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/treetable */ "EVgl");












const _c0 = function () { return { standalone: true }; };
function AppComponent_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Result Limt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_div_1_div_12_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.queryLimit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx_r16.queryLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r16.queryLimit)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Days to query");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_div_1_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.queryUnitNum = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Risk Score Greater Than");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_div_1_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.queryRiskScore = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AppComponent_div_1_div_12_Template, 5, 4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.getNotables("session"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.getNotables("asset"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.startValidation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx_r0.queryUnitNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.queryUnitNum)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx_r0.queryRiskScore);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.queryRiskScore)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Get User Sessions for past ", ctx_r0.queryUnitNum, " days");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Get Asset Sessions for past ", ctx_r0.queryUnitNum, " days");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Data Validation for past ", ctx_r0.queryUnitNum, " days (BETA)");
} }
function AppComponent_div_2_div_1_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", ctx_r31.uSessionSummaryTunedRiskScorePercent, "%) ");
} }
function AppComponent_div_2_div_1_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", ctx_r32.uSessionSummaryTunedNotableCountPercent, "%) ");
} }
function AppComponent_div_2_div_1_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", ctx_r33.uSessionSummaryTunedNotablePerDayPercent, "%) ");
} }
function AppComponent_div_2_div_1_p_treeTable_50_ng_template_2_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", col_r39.header, " ");
} }
function AppComponent_div_2_div_1_p_treeTable_50_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_2_div_1_p_treeTable_50_ng_template_2_th_1_Template, 2, 1, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r36.columns5);
} }
function AppComponent_div_2_div_1_p_treeTable_50_ng_template_3_td_1_p_treeTableToggler_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-treeTableToggler", 50);
} if (rf & 2) {
    const rowNode_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rowNode", rowNode_r40);
} }
function AppComponent_div_2_div_1_p_treeTable_50_ng_template_3_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_2_div_1_p_treeTable_50_ng_template_3_td_1_p_treeTableToggler_1_Template, 1, 1, "p-treeTableToggler", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r44 = ctx.$implicit;
    const i_r45 = ctx.index;
    const rowData_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r45 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", rowData_r41[col_r44.field], " ");
} }
function AppComponent_div_2_div_1_p_treeTable_50_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_2_div_1_p_treeTable_50_ng_template_3_td_1_Template, 3, 2, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const columns_r42 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", columns_r42);
} }
function AppComponent_div_2_div_1_p_treeTable_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-treeTable", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_div_2_div_1_p_treeTable_50_ng_template_2_Template, 2, 1, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppComponent_div_2_div_1_p_treeTable_50_ng_template_3_Template, 2, 1, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r34.ruleTuning)("columns", ctx_r34.columns5)("resizableColumns", true);
} }
function AppComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Summary of Sessions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Session Scores:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Total Session Count:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Notable Session Count:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Notable Per Day:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Results of Tuning");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Session Scores:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, AppComponent_div_2_div_1_span_32_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Notable Session Count:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, AppComponent_div_2_div_1_span_37_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Notable Per Day:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, AppComponent_div_2_div_1_span_42_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Tuned Rule Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, AppComponent_div_2_div_1_p_treeTable_50_Template, 4, 3, "p-treeTable", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r25.uSessionSummaryRiskScore, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r25.uSessionSummarySessionCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r25.uSessionSummaryNotableCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r25.uSessionSummaryNotablePerDay, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r25.uSessionSummaryTunedRiskScore, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r25.uSessionSummaryTunedRiskScorePercent);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r25.uSessionSummaryTunedNotableCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r25.uSessionSummaryTunedRiskScorePercent);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r25.uSessionSummaryTunedNotablePerDay, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r25.uSessionSummaryTunedRiskScorePercent);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r25.refresh);
} }
function AppComponent_div_2_div_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_2_div_2_ng_template_6_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r57.exportExcel(ctx_r57.userData); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "EXPORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_2_div_2_ng_template_6_Template_input_input_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return _r49.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_div_2_div_2_ng_template_7_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", col_r61.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", col_r61.header, " ");
} }
function AppComponent_div_2_div_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_2_div_2_ng_template_7_th_1_Template, 2, 2, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r51.columns1);
} }
function AppComponent_div_2_div_2_ng_template_8_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r64 = ctx.$implicit;
    const users_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", users_r62[col_r64.field], " ");
} }
function AppComponent_div_2_div_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_2_div_2_ng_template_8_td_1_Template, 2, 1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r52.columns1);
} }
function AppComponent_div_2_div_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_2_div_2_ng_template_14_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r66.exportExcel(ctx_r66.ruleData); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "EXPORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_2_div_2_ng_template_14_Template_input_input_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r67); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13); return _r53.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_div_2_div_2_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Rule ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Rule Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Rule Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Session Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Total Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "rule");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "ruleName");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "count");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "sessionCount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "totalScore");
} }
function AppComponent_div_2_div_2_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const users_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSelectableRow", users_r69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](users_r69.rule);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](users_r69.ruleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](users_r69.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", users_r69.sessionCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", users_r69.sessionCountPercent, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", users_r69.totalScore, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", users_r69.totalScorePercent, "%) ");
} }
function AppComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Breakdown by Entity");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p-table", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AppComponent_div_2_div_2_ng_template_6_Template, 8, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_div_2_div_2_ng_template_7_Template, 2, 1, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AppComponent_div_2_div_2_ng_template_8_Template, 2, 1, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Breakdown by Rule");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p-table", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onRowSelect", function AppComponent_div_2_div_2_Template_p_table_onRowSelect_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r70.onRowSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AppComponent_div_2_div_2_ng_template_14_Template, 8, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AppComponent_div_2_div_2_ng_template_15_Template, 11, 5, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AppComponent_div_2_div_2_ng_template_16_Template, 15, 8, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r26.columns1)("value", ctx_r26.userData)("loading", ctx_r26.loading)("resizableColumns", true)("sortOrder", -1)("paginator", true)("rows", 20)("showCurrentPageReport", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r26.columns2)("value", ctx_r26.ruleData)("loading", ctx_r26.loading)("resizableColumns", true)("sortOrder", -1)("paginator", true)("rows", 20)("showCurrentPageReport", true);
} }
function AppComponent_div_2_div_3_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Event Count: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Session Count: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Total Score: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_2_div_3_mat_card_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r73.toggleShowEvents(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Event Summary for ", ctx_r72.selectedRule, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r72.selectedRuleCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r72.selectedRuleSessionCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r72.selectedRuleScore, " ");
} }
function AppComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_2_div_3_mat_card_1_Template, 19, 4, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r27.refresh);
} }
function AppComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 9);
} }
function AppComponent_div_2_div_5_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_2_div_5_ng_template_3_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r79.exportExcel(ctx_r79.eventSummaryData); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "EXPORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_2_div_5_ng_template_3_Template_input_input_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r80); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r75.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_div_2_div_5_ng_template_4_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", col_r83.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", col_r83.header, " ");
} }
function AppComponent_div_2_div_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_2_div_5_ng_template_4_th_1_Template, 2, 2, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r77.columns4);
} }
function AppComponent_div_2_div_5_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_2_div_5_ng_template_5_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r86); const users_r84 = ctx.$implicit; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r85.tuneRule(users_r84); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const users_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](users_r84.fieldName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", users_r84.fieldValue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", users_r84.count, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", users_r84.eventCountPercent, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", users_r84.sessionCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", users_r84.sessionCountPercent, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", users_r84.totalScore, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", users_r84.scoreCountPercent, "%) ");
} }
function AppComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p-table", 69, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppComponent_div_2_div_5_ng_template_3_Template, 8, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppComponent_div_2_div_5_ng_template_4_Template, 4, 1, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AppComponent_div_2_div_5_ng_template_5_Template, 20, 8, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r29.columns4)("value", ctx_r29.eventSummaryData)("paginator", true)("rows", 20)("sortOrder", -1)("resizableColumns", true)("showCurrentPageReport", true);
} }
function AppComponent_div_2_div_6_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_2_div_6_ng_template_5_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r91.exportExcel(ctx_r91.eventData); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "EXPORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_2_div_6_ng_template_5_Template_input_input_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r92); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4); return _r87.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_div_2_div_6_ng_template_6_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r95 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", col_r95.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", col_r95.header, " ");
} }
function AppComponent_div_2_div_6_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_2_div_6_ng_template_6_th_1_Template, 2, 2, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r89.columns3);
} }
function AppComponent_div_2_div_6_ng_template_7_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r98 = ctx.$implicit;
    const users_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", users_r96[col_r98.field], " ");
} }
function AppComponent_div_2_div_6_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_2_div_6_ng_template_7_td_1_Template, 2, 1, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r90.columns3);
} }
function AppComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p-table", 72, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AppComponent_div_2_div_6_ng_template_5_Template, 8, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AppComponent_div_2_div_6_ng_template_6_Template, 2, 1, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_div_2_div_6_ng_template_7_Template, 2, 1, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r30.columns3)("value", ctx_r30.eventData)("paginator", true)("rows", 20)("resizableColumns", true)("showCurrentPageReport", true);
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_2_div_1_Template, 51, 11, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_div_2_div_2_Template, 17, 16, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppComponent_div_2_div_3_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppComponent_div_2_div_4_Template, 1, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AppComponent_div_2_div_5_Template, 6, 7, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AppComponent_div_2_div_6_Template, 8, 6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showHome);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showHome && !ctx_r1.showEvents);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.showHome && ctx_r1.showEvents);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showEvents);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.showHome && ctx_r1.showEvents);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", false);
} }
function AppComponent_div_3_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_3_ng_template_6_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r108.exportExcel(ctx_r108.eventTypes); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "EXPORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_3_ng_template_6_Template_input_input_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r109); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return _r100.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_div_3_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "In Any");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "In Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "In Asset");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Hosts");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Field Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Models Populating");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Rules Can Trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_3_ng_template_7_Template_input_input_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r113); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return _r100.filter($event.target.value, "name", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_3_ng_template_7_Template_input_input_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r113); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return _r100.filter($event.target.value, "populating", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_3_ng_template_7_Template_input_input_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r113); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return _r100.filter($event.target.value, "inSession", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_3_ng_template_7_Template_input_input_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r113); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return _r100.filter($event.target.value, "inAsset", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_3_ng_template_7_Template_input_input_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r113); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return _r100.filter($event.target.value, "uniqueUsers", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_3_ng_template_7_Template_input_input_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r113); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return _r100.filter($event.target.value, "uniqueHosts", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_3_ng_template_7_Template_input_input_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r113); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return _r100.filter($event.target.value, "fieldCount", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_3_ng_template_7_Template_input_input_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r113); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return _r100.filter($event.target.value, "modelCount", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_3_ng_template_7_Template_input_input_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r113); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return _r100.filter($event.target.value, "ruleCount", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "populating");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "inSession");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "inAsset");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "uniqueUsers");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "uniqueHosts");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "fieldsPopulatingPercent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "modelsPopulatingPercent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "rulesCouldTriggerPercent");
} }
function AppComponent_div_3_ng_template_8_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const users_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", users_r122.uniqueUserPercent, "%) ");
} }
function AppComponent_div_3_ng_template_8_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const users_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", users_r122.uniqueHostPercent, "%) ");
} }
function AppComponent_div_3_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_3_ng_template_8_Template_td_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r128); const users_r122 = ctx.$implicit; const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r127.onUsersSelect(users_r122.uniqueUsersList); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AppComponent_div_3_ng_template_8_span_13_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_3_ng_template_8_Template_td_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r128); const users_r122 = ctx.$implicit; const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r129.onHostsSelect(users_r122.uniqueHostsList); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AppComponent_div_3_ng_template_8_span_18_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_3_ng_template_8_Template_td_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r128); const users_r122 = ctx.$implicit; const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r130.onEventFieldsSelect(users_r122.requiredEventFields, users_r122.presentEventFields, users_r122.missingEventFields, users_r122.missingEventFieldTable); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const users_r122 = ctx.$implicit;
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSelectableRow", users_r122);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](users_r122.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](users_r122.populating);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](users_r122.inSession);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](users_r122.inAsset);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 20, users_r122.uniqueUsers), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 22, ctx_r103.summary.uniqueUserCount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", users_r122.uniqueUserPercent);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 24, users_r122.uniqueHosts), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 26, ctx_r103.summary.uniqueHostCount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", users_r122.uniqueHostPercent);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", users_r122.fieldsPopulating, " / ", users_r122.fieldCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", users_r122.fieldsPopulatingPercent, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 28, users_r122.modelsPopulating), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 30, users_r122.modelCount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", users_r122.modelsPopulatingPercent, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 32, users_r122.rulesCouldTrigger), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 34, users_r122.ruleCount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", users_r122.rulesCouldTriggerPercent, "%) ");
} }
function AppComponent_div_3_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_3_ng_template_14_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r132); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r131.exportExcel(ctx_r131.rulesAndModelsDone); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "EXPORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_3_ng_template_14_Template_input_input_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r132); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13); return _r104.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_div_3_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Rule Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Rule ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Rule Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Event Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Feature Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Model Populating");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Has Triggered");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_3_ng_template_15_Template_input_input_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r136); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13); return _r104.filter($event.target.value, "ruleCat", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_3_ng_template_15_Template_input_input_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r136); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13); return _r104.filter($event.target.value, "ruleId", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_3_ng_template_15_Template_input_input_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r136); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13); return _r104.filter($event.target.value, "ruleName", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_3_ng_template_15_Template_input_input_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r136); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13); return _r104.filter($event.target.value, "modelName", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_3_ng_template_15_Template_input_input_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r136); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13); return _r104.filter($event.target.value, "modelDisabled", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_3_ng_template_15_Template_input_input_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r136); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13); return _r104.filter($event.target.value, "eventInRuleType", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_3_ng_template_15_Template_input_input_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r136); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13); return _r104.filter($event.target.value, "featurePresent", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_3_ng_template_15_Template_input_input_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r136); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13); return _r104.filter($event.target.value, "populating", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_div_3_ng_template_15_Template_input_input_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r136); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13); return _r104.filter($event.target.value, "hasTriggered", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "ruleCat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "ruleId");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "ruleName");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "modelName");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "modelDisabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "eventInRuleType");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "featurePresent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "populating");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "hasTriggered");
} }
function AppComponent_div_3_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_3_ng_template_16_Template_td_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r147); const users_r145 = ctx.$implicit; const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r146.onRuleSelect(users_r145.ruleDef); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_3_ng_template_16_Template_td_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r147); const users_r145 = ctx.$implicit; const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r148.onRuleSelect(users_r145.ruleDef); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_3_ng_template_16_Template_td_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r147); const users_r145 = ctx.$implicit; const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r149.onModelSelect(users_r145.modelDef); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_3_ng_template_16_Template_td_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r147); const users_r145 = ctx.$implicit; const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r150.onEventTypesSelect(users_r145.ruleDef.requiredEvents, users_r145.presentEventTypes); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_3_ng_template_16_Template_td_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r147); const users_r145 = ctx.$implicit; const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r151.onEventFieldsSelect(users_r145.modelDef.requiredEventFields, users_r145.modelDef.presentEventFields, users_r145.modelDef.missingEventFields, []); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const users_r145 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSelectableRow", users_r145);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](users_r145.ruleCat);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](users_r145.ruleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](users_r145.ruleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](users_r145.modelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](users_r145.modelDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](users_r145.eventInRuleType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](users_r145.featurePresent);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](users_r145.populating);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](users_r145.hasTriggered);
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Event Types");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p-table", 76, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AppComponent_div_3_ng_template_6_Template, 8, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_div_3_ng_template_7_Template, 38, 9, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AppComponent_div_3_ng_template_8_Template, 35, 36, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Rules");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p-table", 77, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AppComponent_div_3_ng_template_14_Template, 8, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AppComponent_div_3_ng_template_15_Template, 38, 9, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AppComponent_div_3_ng_template_16_Template, 19, 10, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r2.columns6)("value", ctx_r2.eventTypes)("loading", ctx_r2.loading)("resizableColumns", true)("sortOrder", 1)("rows", 15)("paginator", true)("showCurrentPageReport", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r2.columns6)("value", ctx_r2.rulesAndModelsDone)("loading", ctx_r2.loading)("resizableColumns", true)("sortOrder", -1)("rows", 15)("paginator", true)("showCurrentPageReport", true);
} }
function AppComponent_code_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("              ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r3.errors), "\n          ");
} }
function AppComponent_code_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("              ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r4.errors), "\n          ");
} }
function AppComponent_ng_template_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "count");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "percent");
} }
function AppComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const users_r153 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSelectableRow", users_r153);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](users_r153.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](users_r153.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", users_r153.percent, "%) ");
} }
function AppComponent_ng_template_86_Template(rf, ctx) { if (rf & 1) {
    const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_template_86_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r155); const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r154.exportExcel(ctx_r154.selectedUserList); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "EXPORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_ng_template_86_Template_input_input_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r155); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](85); return _r8.filter($event.target.value, "name", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "name");
} }
function AppComponent_ng_template_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const users_r158 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSelectableRow", users_r158);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](users_r158.name);
} }
function AppComponent_ng_template_93_Template(rf, ctx) { if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_template_93_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r160); const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r159.exportExcel(ctx_r159.selectedHostList); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "EXPORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AppComponent_ng_template_93_Template_input_input_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r160); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](92); return _r12.filter($event.target.value, "name", "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", "name");
} }
function AppComponent_ng_template_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const users_r163 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSelectableRow", users_r163);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](users_r163.name);
} }
const _c1 = function () { return { width: "50vw" }; };
const _c2 = function () { return { width: "90vw" }; };
const _c3 = function () { return { width: "80vw" }; };
class AppComponent {
    constructor(fb, http, ref, messageService) {
        this.fb = fb;
        this.http = http;
        this.ref = ref;
        this.messageService = messageService;
        this.first = 0;
        this.dataValidationProgress = 0;
        this.tuningProgress = 0;
    }
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
    ngAfterContentInit() {
        this.host = localStorage.getItem('host');
        chrome.tabs.query({ active: true, currentWindow: true }, ([{ id, url }]) => {
            this.host = url;
            this.host = this.host.split('https://')[1].substr(0, this.host.split('https://')[1].indexOf('/'));
        });
        if (localStorage.getItem('nodeServer') != null)
            this.nodeServer = localStorage.getItem('nodeServer');
    }
    getAuth(type) {
        this.arrayType = type;
        if (this.username === '' || this.password === '') {
            alert('Please enter username and passowrd to continue');
            return;
        }
        this.showLogin = false;
        if (this.host.startsWith('https://')) {
            this.host = this.host.replace(/https:\/\//g, "");
        }
        if (this.host.endsWith('/')) {
            this.host = this.host.split('/')[0];
        }
        if (this.host.includes('-aa.ia.exabeam.com')) {
            alert('Internal SaaS URLs are unsupported. Please use the customer facing URL and a working local username and password');
            return;
        }
        localStorage.setItem('host', this.host);
        localStorage.setItem('nodeServer', this.nodeServer);
        _sentry_angular__WEBPACK_IMPORTED_MODULE_0__["setUser"]({ username: this.host + '-' + this.username });
        //this.host = this.saasAlias+'-aa.ia.exabeam.com';
        if (this.arrayType === 'validation') {
            var formData = new FormData();
            formData.append("username", this.username);
            formData.append("password", this.password);
            //log in and keep the cookies for auth
            this.http.post('https://' + this.host + '/api/auth/login', formData, { withCredentials: true, headers: { 'TargetURL': 'https://' + this.host + '/api/auth/login', 'u': this.username, 'p': this.password, 'cookiehost': this.host, 'cache-control': 'no-cache, no-store, must-revalidate' } }).subscribe((response) => {
                //console.log(response);
                this.startValidation();
            }, (error) => {
                console.log(error);
                alert('ERROR fetching data: Check your server address and authenticaiton details and try again');
                location.reload();
            });
        }
        else {
            var formData = new FormData();
            formData.append("username", this.username);
            formData.append("password", this.password);
            this.http.post('https://' + this.host + '/api/auth/login', formData, { withCredentials: true, headers: { 'TargetURL': 'https://' + this.host + '/api/auth/login', 'u': this.username, 'p': this.password, 'cookiehost': this.host, 'cache-control': 'no-cache, no-store, must-revalidate' } }).subscribe((response) => {
                //console.log(response);
                this.getNotables(type);
            }, (error) => {
                console.log(error);
                alert('ERROR fetching data: Check your URL and authenticaiton details and try again');
                location.reload();
                this.getNotables(type);
            });
        }
    }
    getNotables(type) {
        this.arrayType = type;
        this.showLogin = false;
        this.loading = true;
        this.showHome = true;
        //Threat Hunter query for all sessions that with risk score >= 90 over 7 days
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { message: "notableSearch" }, (response) => {
                console.log('noatble response = ', response);
                this.thResults = response;
                this.fixArray();
            });
        });
    }
    fixArray() {
        console.log('fixArray() running');
        console.log('this.arrayType = ', this.arrayType);
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
        if (this.arrayType === 'asset' && typeof this.thResults.entities.asset !== 'undefined') {
            for (this.index = 0; this.index < this.thResults.entities.asset.length; this.index++) {
                this.thResultsUsers.sessions[this.index] = {};
                this.thResultsUsers.sessions[this.index].id = this.thResults.entities.asset[this.index].assetSequenceInfo.assetSequenceId;
                this.thResultsUsers.sessions[this.index].user = this.thResults.entities.asset[this.index].assetSequenceInfo.assetId;
                this.thResultsUsers.sessions[this.index].riskScore = this.thResults.entities.asset[this.index].assetSequenceInfo.riskScore;
            }
            this.getSequences(0);
        }
        if (this.arrayType === 'session' && typeof this.thResults.entities.session !== 'undefined') {
            for (this.index = 0; this.index < this.thResults.entities.session.length; this.index++) {
                this.thResultsUsers.sessions[this.index] = {};
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
        if (offset != 0) {
            var tempIndex = offset * this.allowedCount;
        }
        else {
            var tempIndex = 0;
        }
        var maxIndex = tempIndex + this.allowedCount;
        var tempKeys = [];
        var tempArray = [];
        this.thResultsUsers.sessions.forEach((obj, index) => {
            tempKeys.push(obj.id);
        });
        for (var a = tempIndex; a < maxIndex; a++) {
            tempArray.push(tempKeys[a]);
        }
        this.todoTimelines = tempKeys.length;
        //Start loop of fetch
        tempArray.forEach((obj, index) => {
            if (obj != undefined) {
                this.http.get('https://' + this.host + '/uba/api/user/sequence/triggeredRules?sequenceType=session&sequenceId=' + obj, { withCredentials: true, headers: { 'TargetURL': 'https://' + this.host + '/uba/api/user/sequence/triggeredRules?sequenceType=session&sequenceId=' + obj, 'cookiehost': this.host } }).subscribe((response) => {
                    //console.log('got response of timeline and it is = ',response);
                    this.thResultsUsers.sessions.forEach((obj2, index2) => {
                        //console.log('obj(',obj,') && obj2.id(',obj2.id,')');
                        if (obj === obj2.id) {
                            //console.log('matches!')
                            obj2.rules = response;
                            //console.log('counter BEFORE = ', counter);
                            counter = counter + 1;
                            //console.log('counter AFTER = ', counter);
                            this.doneCountSessions = this.doneCountSessions + 1;
                            //console.log('this.doneCountTimelines BEFORE = ', this.doneCountTimelines);
                            this.doneCountTimelines++;
                            //console.log('this.doneCountTimelines AFTER = ', this.doneCountTimelines);
                            this.tuningProgress = Math.round(((this.doneCountTimelines / this.todoTimelines) * 100));
                            this.ref.detectChanges();
                            if (counter < this.allowedCount) {
                                //  console.log('Index = '+b+' this.activeCount LESSER this.allowedCount');
                            }
                            else {
                                //  console.log('Index = '+b+' this.activeCount GREATER this.allowedCount');
                                if (this.doneCountSessions <= tempKeys.length)
                                    this.getSessions(offset + 1);
                            }
                            if (this.doneCountSessions === tempKeys.length) {
                                this.ref.detectChanges();
                                this.arraySum();
                            }
                        }
                    });
                    //  console.log(response);
                }, (error) => {
                    console.log(error);
                });
            }
        });
    }
    getSequences(offset) {
        this.visibleTuningProgress = true;
        var counter = 0;
        if (offset != 0) {
            var tempIndex = offset * this.allowedCount;
        }
        else {
            var tempIndex = 0;
        }
        var maxIndex = tempIndex + this.allowedCount;
        var tempKeys = [];
        var tempArray = [];
        this.thResultsUsers.sessions.forEach((obj, index) => {
            tempKeys.push(obj.id);
        });
        for (var a = tempIndex; a < maxIndex; a++) {
            tempArray.push(tempKeys[a]);
        }
        this.todoTimelines = tempKeys.length;
        //Start loop of fetch
        tempArray.forEach((obj, index) => {
            if (obj != undefined) {
                this.http.get('https://' + this.host + '/uba/api/asset/sequence/' + obj + '/triggeredRules', { withCredentials: true, headers: { 'TargetURL': 'https://' + this.host + '/uba/api/asset/sequence/' + obj + '/triggeredRules', 'cookiehost': this.host } }).subscribe((response) => {
                    this.thResultsUsers.sessions.forEach((obj2, index2) => {
                        if (obj === obj2.id) {
                            obj2.rules = response;
                            counter = counter + 1;
                            this.doneCountSessions = this.doneCountSessions + 1;
                            this.doneCountTimelines++;
                            this.tuningProgress = Math.round(((this.doneCountTimelines / this.todoTimelines) * 100));
                            if (counter < this.allowedCount) {
                                //  console.log('Index = '+b+' this.activeCount LESSER this.allowedCount');
                            }
                            else {
                                //  console.log('Index = '+b+' this.activeCount GREATER this.allowedCount');
                                if (this.doneCountSessions <= tempKeys.length)
                                    this.getSequences(offset + 1);
                            }
                            if (this.doneCountSessions === tempKeys.length)
                                this.arraySum();
                        }
                    });
                    //  console.log(response);
                }, (error) => {
                    console.log(error);
                });
            }
        });
    }
    arraySum() {
        //Setup array to count what users have triggered sessions and their total scores
        //console.log('about to start');
        this.thResultsUsers.sessions.forEach((obj, index) => {
            //console.log('in my new loop on index '+index);
            if (this.thResultsUsers.userCounts.some(username => username.user === this.thResultsUsers.sessions[index].user)) {
                //  console.log( "Object found inside the array.");
            }
            else {
                //  console.log("Object not found.");
                //  console.log('pushing '+this.thResultsUsers.sessions[index].user);
                this.thResultsUsers.userCounts.push({ 'user': this.thResultsUsers.sessions[index].user, 'count': 0, 'totalScore': 0 });
            }
        });
        //Add up the amount of times a user was seen and sum up the total risk score of those sessions
        for (var i = 0; i < this.thResultsUsers.sessions.length; i++) {
            for (var b = 0; b < this.thResultsUsers.userCounts.length; b++) {
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
        for (var i = 0; i < this.thResultsUsers.sessions.length; i++) {
            if (this.thResultsUsers.sessions[i].riskScore >= 90)
                this.uSessionSummaryNotableCount = this.uSessionSummaryNotableCount + 1;
            this.uSessionSummaryRiskScore = this.uSessionSummaryRiskScore + this.thResultsUsers.sessions[i].riskScore;
        }
        this.uSessionSummaryNotablePerDay = Math.round(this.uSessionSummaryNotableCount / this.queryUnitNum);
        this.uSessionSummarySessionCount = this.thResultsUsers.sessions.length;
        //Setup array to count what rules have triggered and their total scores
        //console.log('about to start rules');
        this.thResultsUsers.sessions.forEach((obj, index) => {
            this.thResultsUsers.sessions[index].rules.triggeredRules.forEach((obj2, index2) => {
                this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleName = this.thResultsUsers.sessions[index].rules.rules[this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId].ruleName;
                if (this.thResultsUsers.ruleCounts.some(ruleName => ruleName.rule === this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId)) {
                    //   console.log( this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId +" found inside the array.");
                }
                else {
                    //console.log(this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId+" not found.");
                    //  console.log('index = '+index);
                    // console.log('index2 = '+index2);
                    this.thResultsUsers.ruleCounts.push({ 'rule': this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId, 'ruleName': this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleName, 'count': 0, 'sessionCount': 0, 'originalSessionCount': 0, 'totalScore': 0, 'ruleDef': this.thResultsUsers.sessions[index].rules.rules[this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId] });
                }
            });
        });
        //Add empty array of events under each triggered rule
        for (var b = 0; b < this.thResultsUsers.ruleCounts.length; b++) {
            this.thResultsUsers.ruleCounts[b].events = [];
        }
        //Fill in event details for each event triggered under a rule
        this.thResultsUsers.sessions.forEach((obj, index) => {
            this.thResultsUsers.sessions[index].rules.triggeredRules.forEach((obj2, index2) => {
                this.thResultsUsers.ruleCounts.forEach((obj3, index3) => {
                    if (this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId === this.thResultsUsers.ruleCounts[index3].rule) {
                        if (this.thResultsUsers.ruleCounts[index3].events.some(eventObject => eventObject.eventId === this.thResultsUsers.sessions[index].rules.triggeredRules[index2].eventId)) {
                            //  console.log( this.thResultsUsers.sessions[index].rules.triggeredRules[index2].eventId +" found inside the array.");
                        }
                        else {
                            //   console.log(this.thResultsUsers.sessions[index].rules.triggeredRules[index2].eventId+" not found.");
                            Object.keys(this.thResultsUsers.sessions[index].rules.triggeredRuleEvents).forEach((obj4, index4) => {
                                if (obj4 === this.thResultsUsers.sessions[index].rules.triggeredRules[index2].eventId) {
                                    if (this.thResultsUsers.sessions[index].rules.triggeredRuleEvents[obj4].fields['riskScore-' + this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId] == undefined)
                                        this.thResultsUsers.sessions[index].rules.triggeredRuleEvents[obj4].fields['riskScore-' + this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId] = 0;
                                    this.thResultsUsers.sessions[index].rules.triggeredRuleEvents[obj4].fields['riskScore-' + this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId] = this.thResultsUsers.sessions[index].rules.triggeredRuleEvents[obj4].fields['riskScore-' + this.thResultsUsers.sessions[index].rules.triggeredRules[index2].ruleId] + Math.round(this.thResultsUsers.sessions[index].rules.triggeredRules[index2].riskScore);
                                    this.thResultsUsers.ruleCounts[index3].events.push(this.thResultsUsers.sessions[index].rules.triggeredRuleEvents["" + obj4].fields);
                                }
                            });
                        }
                    }
                });
            });
        });
        //Add up the amount of times a rule was seen and sum up the total risk score of those rules
        for (var i = 0; i < this.thResultsUsers.sessions.length; i++) {
            for (var a = 0; a < this.thResultsUsers.sessions[i].rules.triggeredRules.length; a++) {
                for (var b = 0; b < this.thResultsUsers.ruleCounts.length; b++) {
                    if (this.thResultsUsers.sessions[i].rules.triggeredRules[a].ruleId === this.thResultsUsers.ruleCounts[b].rule) {
                        this.thResultsUsers.ruleCounts[b].originalCount = this.thResultsUsers.ruleCounts[b].count + 1;
                        this.thResultsUsers.ruleCounts[b].count = this.thResultsUsers.ruleCounts[b].count + 1;
                        this.thResultsUsers.ruleCounts[b].originalTotalScore = this.thResultsUsers.ruleCounts[b].totalScore + Math.round(this.thResultsUsers.sessions[i].rules.triggeredRules[a].riskScore);
                        this.thResultsUsers.ruleCounts[b].totalScore = this.thResultsUsers.ruleCounts[b].totalScore + Math.round(this.thResultsUsers.sessions[i].rules.triggeredRules[a].riskScore);
                        if (this.uSessionSummaryTunedRiskScore) {
                            this.thResultsUsers.ruleCounts[b].totalScorePercent = Math.round(((this.thResultsUsers.ruleCounts[b].totalScore / this.uSessionSummaryTunedRiskScore)) * 100);
                        }
                        else {
                            this.thResultsUsers.ruleCounts[b].totalScorePercent = Math.round(((this.thResultsUsers.ruleCounts[b].totalScore / this.uSessionSummaryRiskScore)) * 100);
                        }
                    }
                }
            }
        }
        for (var b = 0; b < this.thResultsUsers.ruleCounts.length; b++) {
            for (var i = 0; i < this.thResultsUsers.sessions.length; i++) {
                if (this.thResultsUsers.sessions[i].rules.triggeredRules.some(rule => rule.ruleId === this.thResultsUsers.ruleCounts[b].rule)) {
                    this.thResultsUsers.ruleCounts[b].originalSessionCount = this.thResultsUsers.ruleCounts[b].originalSessionCount + 1;
                    this.thResultsUsers.ruleCounts[b].sessionCount = this.thResultsUsers.ruleCounts[b].sessionCount + 1;
                    if (this.uSessionSummaryTunedRiskScore) {
                        this.thResultsUsers.ruleCounts[b].sessionCountPercent = Math.round(((this.thResultsUsers.ruleCounts[b].sessionCount / this.uSessionSummaryTunedNotablePerDay)) * 100);
                    }
                    else {
                        this.thResultsUsers.ruleCounts[b].sessionCountPercent = Math.round(((this.thResultsUsers.ruleCounts[b].sessionCount / this.uSessionSummarySessionCount)) * 100);
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
    }
    toggleShowEvents() {
        this.showEvents = false;
        this.showHome = true;
    }
    setEvents(ruleName) {
        this.tempCount = 0;
        this.showHome = false;
        this.showEvents = true;
        this.columns3 = [];
        this.eventData = [];
        this.eventSummaryData = [];
        for (var i = 0; i < this.thResultsUsers.ruleCounts.length; i++) {
            if (this.thResultsUsers.ruleCounts[i].rule === ruleName) {
                this.eventData = this.thResultsUsers.ruleCounts[i].events;
                this.eventData.forEach((obj, index) => {
                    Object.keys(obj).forEach((obj2, index2) => {
                        if (obj2 != 'time' && obj2 != 'rawlog_time' && obj2 != 'session_order' && obj2 != 'event_id' && obj2 != 'alert_id' && obj2 != 'riskScore' && obj2 != 'is_session_last' && obj2.substring(0, obj2.indexOf('-')) != 'riskScore' && obj[obj2] != '') {
                            if (this.eventSummaryData.some(theEvent => theEvent.fieldName === obj2 && theEvent.fieldValue === obj[obj2])) {
                            }
                            else {
                                this.eventSummaryData.push({ 'fieldName': obj2, 'fieldValue': obj[obj2], 'count': 0, 'totalScore': 0, 'sessionCount': 0, 'sessionIds': [] });
                            }
                            if (this.columns3.some(eventObject => eventObject.field === obj2)) {
                            }
                            else {
                                this.columns3.push({ 'field': obj2, 'header': obj2 });
                            }
                        }
                    });
                });
            }
        }
        for (var i = 0; i < this.eventData.length; i++) {
            Object.keys(this.eventData[i]).forEach((obj2, index2) => {
                for (var b = 0; b < this.eventSummaryData.length; b++) {
                    if (this.eventSummaryData[b].fieldName === obj2 && this.eventSummaryData[b].fieldValue === this.eventData[i][obj2] && this.eventData[i]['riskScore-' + this.selectedRule]) {
                        if (this.bannedEvents.some(theEvent => theEvent.event_id === this.eventData[i].event_id)) {
                            this.bannedEvents.forEach((obj3, index3) => {
                                if (obj3.event_id === this.eventData[i].event_id) {
                                    if (obj3.rules.some(theRule => theRule === ruleName)) {
                                    }
                                    else {
                                        this.eventSummaryData[b].count = this.eventSummaryData[b].count + 1;
                                        this.eventSummaryData[b].totalScore = this.eventSummaryData[b].totalScore + this.eventData[i]['riskScore-' + this.selectedRule];
                                        this.eventSummaryData[b].eventCountPercent = Math.round(((this.eventSummaryData[b].count / this.selectedRuleCount)) * 100);
                                        this.eventSummaryData[b].scoreCountPercent = Math.round(((this.eventSummaryData[b].totalScore / this.selectedRuleScore)) * 100);
                                        if (this.eventSummaryData[b].sessionIds.some(id => id === this.eventData[i].session_id)) {
                                        }
                                        else {
                                            this.eventSummaryData[b].sessionIds.push(this.eventData[i].session_id);
                                            this.eventSummaryData[b].sessionCount = this.eventSummaryData[b].sessionCount + 1;
                                            this.eventSummaryData[b].sessionCountPercent = Math.round(((this.eventSummaryData[b].sessionCount / this.selectedRuleSessionCount)) * 100);
                                        }
                                    }
                                }
                            });
                        }
                        else {
                            this.eventSummaryData[b].count = this.eventSummaryData[b].count + 1;
                            this.eventSummaryData[b].totalScore = this.eventSummaryData[b].totalScore + this.eventData[i]['riskScore-' + this.selectedRule];
                            this.eventSummaryData[b].eventCountPercent = Math.round(((this.eventSummaryData[b].count / this.selectedRuleCount)) * 100);
                            this.eventSummaryData[b].scoreCountPercent = Math.round(((this.eventSummaryData[b].totalScore / this.selectedRuleScore)) * 100);
                            if (this.eventSummaryData[b].sessionIds.some(id => id === this.eventData[i].session_id)) {
                            }
                            else {
                                this.eventSummaryData[b].sessionIds.push(this.eventData[i].session_id);
                                this.eventSummaryData[b].sessionCount = this.eventSummaryData[b].sessionCount + 1;
                                this.eventSummaryData[b].sessionCountPercent = Math.round(((this.eventSummaryData[b].sessionCount / this.selectedRuleSessionCount)) * 100);
                            }
                        }
                    }
                }
            });
        }
    }
    tuneRule(data) {
        this.foundRule = false;
        //Add rule tuning conditions to array
        if (this.ruleTuning.length == 0) {
            this.ruleTuning.push({ 'data': { 'name': this.selectedRule, 'value': '', 'count': '', 'score': '', 'sessionCount': '' }, 'children': [] });
            this.ruleTuning[0].children.push({ 'data': { 'name': data.fieldName, 'value': data.fieldValue, 'count': data.count, 'score': data.totalScore, 'sessionCount': data.sessionCount, 'scorePercent': Math.round(((data.totalScore / this.uSessionSummaryRiskScore)) * 100) } });
        }
        else {
            this.ruleTuning.forEach((obj, index) => {
                if (obj.data.name === this.selectedRule) {
                    this.foundRule = true;
                    if (obj.children.some(theEvent => theEvent.data.name === data.fieldName && theEvent.data.value === data.fieldValue)) {
                    }
                    else {
                        obj.children.push({ 'data': { 'name': data.fieldName, 'value': data.fieldValue, 'count': data.count, 'score': data.totalScore, 'sessionCount': data.sessionCount, 'scorePercent': Math.round(((data.totalScore / this.uSessionSummaryRiskScore)) * 100) } });
                    }
                }
            });
            if (this.foundRule == false) {
                this.ruleTuning.push({ 'data': { 'name': this.selectedRule, 'value': '', 'count': '', 'score': '', 'sessionCount': '' }, 'children': [{ 'data': { 'name': data.fieldName, 'value': data.fieldValue, 'count': data.count, 'score': data.totalScore, 'sessionCount': data.sessionCount, 'scorePercent': Math.round(((data.totalScore / this.uSessionSummaryRiskScore)) * 100) } }] });
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
            });
        });
        //Apply changes to rule counts
        for (var b = 0; b < this.thResultsUsers.ruleCounts.length; b++) {
            this.ruleTuning.forEach((obj, index) => {
                if (obj.data.name === this.thResultsUsers.ruleCounts[b].rule) {
                    this.thResultsUsers.ruleCounts[b].count = this.thResultsUsers.ruleCounts[b].originalCount - obj.data.count;
                    this.thResultsUsers.ruleCounts[b].totalScore = this.thResultsUsers.ruleCounts[b].originalTotalScore - obj.data.score;
                    this.thResultsUsers.ruleCounts[b].sessionCount = this.thResultsUsers.ruleCounts[b].originalSessionCount - obj.data.sessionCount;
                    if (obj.data.name === this.selectedRule) {
                        this.selectedRuleScore = this.thResultsUsers.ruleCounts[b].totalScore;
                        this.selectedRuleCount = this.thResultsUsers.ruleCounts[b].count;
                        this.selectedRuleSessionCount = this.thResultsUsers.ruleCounts[b].sessionCount;
                    }
                }
            });
        }
        this.ruleData = this.thResultsUsers.ruleCounts;
        this.eventData.forEach((obj, index) => {
            Object.keys(obj).forEach((obj2, index2) => {
                if (data.fieldName === obj2 && data.fieldValue === obj[obj2]) {
                    if (this.bannedEvents.some(theEvent => theEvent.event_id === obj.event_id)) {
                        this.bannedEvents.forEach((obj3, index3) => {
                            if (obj3.event_id === obj.event_id) {
                                if (obj3.rules.some(theRule => theRule === this.selectedRule)) {
                                    //console.log(this.selectedRule+ ' is already banned for event_id '+obj.event_id);         
                                }
                                else {
                                    obj3.event_id[obj.event_id].rules.push(this.selectedRule);
                                }
                            }
                        });
                    }
                    else {
                        this.bannedEvents.push({ 'event_id': obj.event_id, 'rules': [this.selectedRule] });
                    }
                }
            });
        });
        //Test out rule exceptions on sessions
        this.thResultsUsers.sessions.forEach((obj, index) => {
            obj.riskScoreTuned = obj.riskScore;
            Object.keys(obj.rules.triggeredRuleEvents).forEach((obj2, index2) => {
                if (this.bannedEvents.some(theEvent => theEvent.event_id === obj2)) {
                    this.bannedEvents.forEach((obj3, index3) => {
                        if (obj3.event_id === obj2) {
                            obj3.rules.forEach((obj4, index4) => {
                                Object.keys(obj.rules.triggeredRuleEvents[obj2].fields).forEach((obj5, index4) => {
                                    //console.log ('obj5 = '+obj5 + ' '+ obj5.substring(obj5.indexOf('-') + 1));
                                    if (obj3.rules.some(theRule => theRule === obj5.substring(obj5.indexOf('-') + 1))) {
                                        //console.log('found one at index '+ index);
                                        //console.log('subtracting '+obj.rules.triggeredRuleEvents[obj2].fields[obj5]+ ' from '+obj.riskScoreTuned);
                                        obj.riskScoreTuned = obj.riskScoreTuned - obj.rules.triggeredRuleEvents[obj2].fields[obj5];
                                    }
                                });
                            });
                        }
                    });
                }
            });
        });
        // Calculate results of rule exceptions on sessions
        this.uSessionSummaryTunedNotableCount = 0;
        this.uSessionSummaryTunedNotablePerDay = 0;
        this.uSessionSummaryTunedRiskScore = 0;
        this.uSessionSummaryTunedNotableCountPercent = 0;
        this.uSessionSummaryTunedNotablePerDayPercent = 0;
        this.uSessionSummaryTunedRiskScorePercent = 0;
        for (var i = 0; i < this.thResultsUsers.sessions.length; i++) {
            if (this.thResultsUsers.sessions[i].riskScoreTuned >= 90)
                this.uSessionSummaryTunedNotableCount = this.uSessionSummaryTunedNotableCount + 1;
            this.uSessionSummaryTunedRiskScore = this.uSessionSummaryTunedRiskScore + this.thResultsUsers.sessions[i].riskScoreTuned;
        }
        this.uSessionSummaryTunedNotablePerDay = Math.round(this.uSessionSummaryTunedNotableCount / this.queryUnitNum);
        this.uSessionSummaryTunedNotableCountPercent = Math.round(((this.uSessionSummaryTunedNotableCount / this.uSessionSummaryNotableCount) - 1) * 100);
        this.uSessionSummaryTunedNotablePerDayPercent = Math.round(((this.uSessionSummaryTunedNotablePerDay / this.uSessionSummaryNotablePerDay) - 1) * 100);
        this.uSessionSummaryTunedRiskScorePercent = Math.round(((this.uSessionSummaryTunedRiskScore / this.uSessionSummaryRiskScore) - 1) * 100);
        //Reset user session score rollup and re-evaluate based on the tuned risk scores from sessions
        this.thResultsUsers.userCounts.forEach((obj, index) => {
            obj.totalScore = 0;
        });
        for (var i = 0; i < this.thResultsUsers.sessions.length; i++) {
            for (var b = 0; b < this.thResultsUsers.userCounts.length; b++) {
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
        this.http.get('https://' + this.host + '/uba/api/rules/fetchRules?filterBy=all', { withCredentials: true, headers: { 'TargetURL': 'https://' + this.host + '/uba/api/rules/fetchRules?filterBy=all', 'cookiehost': this.host, 'cache-control': 'no-cache, no-store, must-revalidate' } }).subscribe((response) => {
            this.allRules = response;
            //console.log('response');
            //console.log(response);
            this.allRules.forEach((obj, index) => {
                obj.rules.forEach((obj2, index) => {
                    if (obj2.ruleDef.modelName === 'FACT') {
                        obj2.canTrigger = 'N/A';
                    }
                    else {
                        obj2.canTrigger = false;
                    }
                    obj2.hasTriggered = false;
                });
            });
            this.getModels();
        }, (error) => {
            console.log('error');
            console.log(error);
            this.errors.push('Error fetching all rules');
            this.errorVisible = true;
            alert('ERROR fetching data: Check your URL and authenticaiton details and try again');
            //location.reload();
        });
    }
    getModels() {
        //Get all models
        this.http.get('https://' + this.host + '/uba/api/rules/modelDefinitions', { withCredentials: true, headers: { 'TargetURL': 'https://' + this.host + '/uba/api/rules/modelDefinitions', 'cookiehost': this.host, 'cache-control': 'no-cache, no-store, must-revalidate' } }).subscribe((response) => {
            this.allModels = response;
            //console.log(response);
            Object.keys(this.allModels).forEach((obj, index) => {
                this.allModels[obj].populating = false;
                this.allModels[obj].attributes.populating = false;
            });
            this.checkModels(0);
        }, (error) => {
            console.log(error);
            this.errors.push('Error fetching all models');
            this.errorVisible = true;
        });
    }
    checkModels(offset) {
        var counter = 0;
        if (offset != 0) {
            var tempIndex = offset * this.allowedCount;
        }
        else {
            var tempIndex = 0;
        }
        var maxIndex = tempIndex + this.allowedCount;
        var tempKeys = Object.keys(this.allModels);
        this.todoModels = tempKeys.length;
        var tempArray = [];
        for (var b = tempIndex; b < maxIndex; b++) {
            tempArray.push(tempKeys[b]);
        }
        tempArray.forEach((obj, index) => {
            if (obj != undefined) {
                this.http.get('https://' + this.host + '/uba/api/histograms/search?maxNumberOfResults=1&modelName=' + obj, { withCredentials: true, headers: { 'TargetURL': 'https://' + this.host + '/uba/api/histograms/search?maxNumberOfResults=1&modelName=' + obj, 'cookiehost': this.host, 'cache-control': 'no-cache, no-store, must-revalidate' } }).subscribe((response) => {
                    //  console.log(response);
                    this.allModels[obj].histograms = response;
                    if (this.allModels[obj].histograms.histograms.length != 0) {
                        this.allModels[obj].populating = true;
                        this.allModels[obj].attributes.populating = true;
                    }
                    //  console.log('this index after = '+index);
                    counter = counter + 1;
                    this.doneCountModels = this.doneCountModels + 1;
                    this.dataValidationProgress = Math.round(((this.doneCountModels / this.todoModels) * 20));
                    this.ref.detectChanges();
                    if (counter < this.allowedCount) {
                    }
                    else {
                        if (this.doneCountModels <= tempKeys.length)
                            this.checkModels(offset + 1);
                    }
                    if (this.doneCountModels === tempKeys.length) {
                        console.log('moving to checkRules');
                        this.checkRules(0);
                    }
                }, (error) => {
                    console.log(error);
                    this.errors.push('Error fetching model: ' + obj);
                    this.errorVisible = true;
                    counter = counter + 1;
                    this.doneCountModels = this.doneCountModels + 1;
                    if (counter < this.allowedCount) {
                    }
                    else {
                        if (this.doneCountModels <= tempKeys.length)
                            this.checkModels(offset + 1);
                    }
                    if (this.doneCountModels === tempKeys.length) {
                        console.log('moving to checkRules');
                        this.checkRules(0);
                    }
                });
            }
        });
    }
    checkRules(offset) {
        var counter = 0;
        if (offset != 0) {
            var tempIndex = offset * this.allowedCount;
        }
        else {
            var tempIndex = 0;
        }
        var maxIndex = tempIndex + this.allowedCount;
        var tempKeys = [];
        var tempArray = [];
        this.allRules.forEach((obj, index) => {
            obj.rules.forEach((obj2, index2) => {
                tempKeys.push(obj2.ruleId);
            });
        });
        this.todoRules = tempKeys.length;
        for (var a = tempIndex; a < maxIndex; a++) {
            tempArray.push(tempKeys[a]);
        }
        //Check all rules if triggered
        tempArray.forEach((obj, index) => {
            this.http.get('https://' + this.host + '/uba/api/rules/triggerFrequency?ruleId=' + obj, { withCredentials: true, headers: { 'TargetURL': 'https://' + this.host + '/uba/api/rules/triggerFrequency?ruleId=' + obj, 'cookiehost': this.host, 'cache-control': 'no-cache, no-store, must-revalidate' } }).subscribe((response) => {
                //  console.log(response);
                this.allRules.forEach((obj2, index2) => {
                    obj2.rules.forEach((obj3, index3) => {
                        if (obj3.ruleId === obj) {
                            obj3.triggerFreq = response;
                            if (obj3.triggerFreq.triggerFrequency === 0) {
                            }
                            else {
                                obj3.hasTriggered = true;
                            }
                        }
                    });
                });
                counter = counter + 1;
                this.doneCountRules = this.doneCountRules + 1;
                this.dataValidationProgress = Math.round((((this.doneCountRules / this.todoRules) * 20) + 20));
                //console.log('Rules counter = '+counter);
                //console.log('doneCountRules = '+this.doneCountRules);
                //console.log('tempKeys.length = '+tempKeys.length);
                this.ref.detectChanges();
                if (counter < this.allowedCount) {
                    //  console.log('Index = '+b+' this.activeCount LESSER this.allowedCount');
                }
                else {
                    //  console.log('Index = '+b+' this.activeCount GREATER this.allowedCount');
                    if (this.doneCountRules <= tempKeys.length)
                        this.checkRules(offset + 1);
                }
                if (this.doneCountRules === tempKeys.length)
                    this.combineArrays();
            }, (error) => {
                console.log(error);
                this.errors.push('Error fetching rule: ' + obj);
                this.errorVisible = true;
                counter = counter + 1;
                this.doneCountRules = this.doneCountRules + 1;
                if (counter < this.allowedCount) {
                    //  console.log('Index = '+b+' this.activeCount LESSER this.allowedCount');
                }
                else {
                    //  console.log('Index = '+b+' this.activeCount GREATER this.allowedCount');
                    if (this.doneCountRules <= tempKeys.length)
                        this.checkRules(offset + 1);
                }
                if (this.doneCountRules === tempKeys.length)
                    this.combineArrays();
            });
        });
    }
    combineArrays() {
        this.rulesAndModels = [];
        this.allRules.forEach((obj, index) => {
            obj.rules.forEach((obj2, index2) => {
                var ruleType;
                if (obj2.ruleDef.modelName === 'FACT') {
                    ruleType = 'FACT';
                }
                else {
                    ruleType = 'Model';
                }
                if (this.allModels[obj2.ruleDef.modelName] == undefined) {
                    this.rulesAndModels.push({ ruleCat: obj.categoryId, ruleId: obj2.ruleDef.ruleId, ruleName: obj2.ruleDef.ruleName, ruleType: ruleType, modelName: obj2.ruleDef.modelName, modelDisabled: 'N/A', populating: 'N/A', hasTriggered: obj2.hasTriggered.toString(), ruleDef: obj2.ruleDef });
                }
                else {
                    this.rulesAndModels.push({ ruleCat: obj.categoryId, ruleId: obj2.ruleDef.ruleId, ruleName: obj2.ruleDef.ruleName, ruleType: ruleType, modelName: obj2.ruleDef.modelName, modelDisabled: this.allModels[obj2.ruleDef.modelName].attributes.disabled, populating: this.allModels[obj2.ruleDef.modelName].populating.toString(), hasTriggered: obj2.hasTriggered.toString(), ruleDef: obj2.ruleDef, modelDef: this.allModels[obj2.ruleDef.modelName].attributes });
                }
            });
        });
        this.findRequiredData();
    }
    findRequiredData() {
        this.rulesAndModels.forEach((obj, index) => {
            //If not a fact based rule, determine the event types required for model to trigger
            if (obj.modelDef != undefined) {
                obj.modelDef.requiredEventFields = [];
                obj.modelDef.presentEventFields = [];
                obj.modelDef.missingEventFields = [];
                //If the feature has no parenthesis then just use a field name
                if (obj.modelDef.feature.toLowerCase().startsWith('count') || obj.modelDef.feature.toLowerCase().startsWith('distinct') || obj.modelDef.feature.toLowerCase().startsWith('sum') || obj.modelDef.feature.toLowerCase().startsWith('sequence')) {
                    if ((obj.modelDef.feature.toLowerCase().substring(obj.modelDef.feature.indexOf("(") + 1)).startsWith('getvalue(')) {
                        obj.modelDef.requiredEventFields.push(obj.modelDef.feature.toLowerCase().substring(obj.modelDef.feature.indexOf("(") + 1, obj.modelDef.feature.indexOf(")") + 1).replace(/ /g, ""));
                    }
                    else {
                        obj.modelDef.requiredEventFields.push(obj.modelDef.feature.toLowerCase().substring(obj.modelDef.feature.indexOf("(") + 1, obj.modelDef.feature.indexOf(",")).replace(/ /g, ""));
                    }
                }
                else {
                    obj.modelDef.requiredEventFields.push(obj.modelDef.feature.toLowerCase().replace(/ /g, ""));
                }
                if (obj.modelDef.trainIf.toLowerCase().startsWith('count') || obj.modelDef.trainIf.toLowerCase().startsWith('distinct') || obj.modelDef.trainIf.toLowerCase().startsWith('sum') || obj.modelDef.trainIf.toLowerCase().startsWith('sequence')) {
                    if ((obj.modelDef.trainIf.toLowerCase().substring(obj.modelDef.trainIf.indexOf("(") + 1)).startsWith('getvalue(')) {
                        if (obj.modelDef.requiredEventFields.some(field => field === obj.modelDef.trainIf.toLowerCase().substring(obj.modelDef.trainIf.indexOf("(") + 1, obj.modelDef.trainIf.indexOf(")") + 1).replace(/ /g, ""))) {
                        }
                        else {
                            obj.modelDef.requiredEventFields.push(obj.modelDef.trainIf.toLowerCase().substring(obj.modelDef.trainIf.indexOf("(") + 1, obj.modelDef.trainIf.indexOf(")") + 1).replace(/ /g, ""));
                        }
                    }
                    else {
                        if (obj.modelDef.requiredEventFields.some(field => field === obj.modelDef.trainIf.toLowerCase().substring(obj.modelDef.trainIf.indexOf("(") + 1, obj.modelDef.trainIf.indexOf(",")).replace(/ /g, ""))) {
                        }
                        else {
                            obj.modelDef.requiredEventFields.push(obj.modelDef.trainIf.toLowerCase().substring(obj.modelDef.trainIf.indexOf("(") + 1, obj.modelDef.trainIf.indexOf(",")).replace(/ /g, ""));
                        }
                    }
                }
                if (obj.modelDef.trainIf.toLowerCase().includes('exists(')) {
                    obj.modelDef.requiredEventFields.push(obj.modelDef.trainIf.toLowerCase().substring(obj.modelDef.trainIf.indexOf("exists(") + 7, obj.modelDef.trainIf.indexOf(")", (obj.modelDef.trainIf.indexOf("exists(") + 7))));
                }
                if (obj.modelDef.scopeType === 'USER' || obj.modelDef.scopeType === 'PEERS' || obj.modelDef.scopeType === 'DEVICE') {
                    obj.modelDef.requiredEventFields.push(obj.modelDef.scopeValue.toLowerCase().replace(/ /g, ""));
                }
                //If the model is trained by counting events at the end of the session or sequence then the true event types required are in the "Count" statement in the model's feature
                if (obj.modelDef.histogramEventTypes.includes('session-end') || obj.modelDef.histogramEventTypes.includes('sequence-end')) {
                    obj.modelDef.requiredEventTypes = obj.modelDef.feature.substring(obj.modelDef.feature.indexOf(",") + 1, obj.modelDef.feature.lastIndexOf(")")).replace(/ /g, "").split(",");
                    for (var i = obj.modelDef.requiredEventTypes.length - 1; i >= 0; i--) {
                        if (obj.modelDef.requiredEventTypes[i].startsWith("'") && obj.modelDef.requiredEventTypes[i].endsWith("'") && obj.modelDef.requiredEventTypes[i].charAt(1).match(/[a-z]/) != null) {
                            obj.modelDef.requiredEventTypes[i] = obj.modelDef.requiredEventTypes[i].replace(/'/g, "");
                        }
                        else {
                            obj.modelDef.requiredEventTypes.splice(i, 1);
                        }
                    }
                    obj.ruleDef.requiredEvents = obj.modelDef.requiredEventTypes;
                    //Otherwise we can simply use the "histogramEventTypes" field
                }
                else {
                    if (obj.modelDef.histogramEventTypes.includes(':')) {
                        obj.modelDef.requiredEventTypes = obj.modelDef.histogramEventTypes.split(":");
                        obj.ruleDef.requiredEvents = obj.modelDef.requiredEventTypes;
                    }
                    else {
                        obj.modelDef.requiredEventTypes = [];
                        obj.modelDef.requiredEventTypes.push(obj.modelDef.histogramEventTypes);
                        obj.ruleDef.requiredEvents = obj.modelDef.requiredEventTypes;
                    }
                }
            }
            else {
                //If there is no model then use the rule definition field
                obj.ruleDef.requiredEvents = obj.ruleDef.ruleEventTypes;
            }
        });
        this.getEventTypes();
    }
    getEventTypes() {
        this.eventTypes = [];
        this.rulesAndModels.forEach((obj, index) => {
            if (obj.populating != 'N/A') {
                obj.ruleDef.requiredEvents.forEach((obj2, index2) => {
                    if (this.eventTypes.some(event => event.name === obj2)) {
                    }
                    else {
                        this.eventTypes.push({ name: obj2 });
                    }
                });
            }
        });
        this.getEventTypeSessions(0);
    }
    getEventTypeSessions(offset) {
        // console.log('getting event types offset: '+offset);
        var counter = 0;
        var tempKeys = [];
        var tempArray = [];
        var tempAdded = 0;
        this.eventTypes.forEach((obj, index) => {
            tempKeys.push(obj);
        });
        this.todoEventTypes = tempKeys.length;
        for (var a = 0; a < tempKeys.length && tempAdded <= this.allowedEventTypeCount; a++) {
            if (this.doneEventTypes.some(event => event.name === tempKeys[a].name)) {
            }
            else {
                //  console.log('pushing '+tempKeys[a].name+' to doneEventTypes');
                tempArray.push(tempKeys[a]);
                this.doneEventTypes.push(tempKeys[a]);
                tempAdded++;
            }
        }
        //Check all event types if they exist
        tempArray.forEach((obj, index) => {
            if (obj != undefined) {
                // console.log('querying for '+obj.name);
                this.activeEventTypes++;
                chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                    chrome.tabs.sendMessage(tabs[0].id, { message: "eventTypeSearch", eventType: obj }, (response) => {
                        if (typeof response == 'undefined') {
                            console.log('response is undefined');
                            this.errors.push('error fetching all session IDs for event type: ' + obj.name + '. Trying again');
                            this.errorVisible = true;
                            for (var a = 0; a < this.doneEventTypes.length; a++) {
                                if (this.doneEventTypes[a].name === obj.name)
                                    this.doneEventTypes.splice(a, 1);
                            }
                            this.getEventTypeSessions(offset);
                        }
                        else {
                            this.activeEventTypes--;
                            this.eventTypes.forEach((obj2, index2) => {
                                if (obj.name === obj2.name) {
                                    console.log('got response for ' + obj.name);
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
                                    if (obj2.response.entities.session != undefined) {
                                        obj2.response.entities.session.forEach((obj3, index3) => {
                                            if (!obj3.sessionInfo.username.endsWith('$')) {
                                                if (obj2.uniqueUsersList.some(user => user.name === obj3.sessionInfo.username.toLowerCase())) {
                                                }
                                                else {
                                                    obj2.uniqueUsers = obj2.uniqueUsers + 1;
                                                    obj2.uniqueUsersList.push({ 'name': obj3.sessionInfo.username.toLowerCase() });
                                                }
                                                if (this.summary.uniqueUsers.some(user => user.name === obj3.sessionInfo.username.toLowerCase())) {
                                                }
                                                else {
                                                    this.summary.uniqueUsers.push({ 'name': obj3.sessionInfo.username.toLowerCase() });
                                                    this.summary.uniqueUserCount = this.summary.uniqueUserCount + 1;
                                                }
                                            }
                                        });
                                    }
                                    if (obj2.response.entities.asset != undefined) {
                                        obj2.response.entities.asset.forEach((obj3, index3) => {
                                            if (!((obj3.assetSequenceInfo.assetId.match(/\d\./g) || []).length === 3)) {
                                                if (!((obj3.assetSequenceInfo.assetId.match(/\:/g) || []).length >= 1)) {
                                                    if (obj2.uniqueHostsList.some(user => user.name === obj3.assetSequenceInfo.assetId.toLowerCase())) {
                                                    }
                                                    else {
                                                        obj2.uniqueHosts = obj2.uniqueHosts + 1;
                                                        obj2.uniqueHostsList.push({ 'name': obj3.assetSequenceInfo.assetId.toLowerCase() });
                                                    }
                                                    if (this.summary.uniqueHosts.some(user => user.name === obj3.assetSequenceInfo.assetId.toLowerCase())) {
                                                    }
                                                    else {
                                                        this.summary.uniqueHosts.push({ 'name': obj3.assetSequenceInfo.assetId.toLowerCase() });
                                                        this.summary.uniqueHostCount = this.summary.uniqueHostCount + 1;
                                                    }
                                                }
                                            }
                                        });
                                    }
                                    if (obj2.response.entities.lockout != undefined) {
                                        obj2.response.entities.lockout.forEach((obj3, index3) => {
                                            if (!obj3.lockoutInfo.username.endsWith('$')) {
                                                if (obj2.uniqueUsersList.some(user => user.name === obj3.lockoutInfo.username.toLowerCase())) {
                                                }
                                                else {
                                                    obj2.uniqueUsers = obj2.uniqueUsers + 1;
                                                    obj2.uniqueUsersList.push({ 'name': obj3.lockoutInfo.username.toLowerCase() });
                                                }
                                                if (this.summary.uniqueUsers.some(user => user.name === obj3.lockoutInfo.username.toLowerCase())) {
                                                }
                                                else {
                                                    this.summary.uniqueUsers.push({ 'name': obj3.lockoutInfo.username.toLowerCase() });
                                                    this.summary.uniqueUserCount = this.summary.uniqueUserCount + 1;
                                                }
                                            }
                                        });
                                    }
                                    obj2.sequenceTypes = [];
                                    Object.keys(obj2.response.entities).forEach((obj3, index3) => {
                                        if (obj3 != 'session' && obj3 != 'asset' && obj3 != 'lockout')
                                            obj2.sequenceTypes.push(obj3);
                                    });
                                    obj2.sequenceTypes.forEach((obj3, index3) => {
                                        obj2.response.entities[obj3].forEach((obj4, index4) => {
                                            if (!obj4.dataFeedInfo.username.endsWith('$')) {
                                                if (obj2.uniqueUsersList.some(user => user.name === obj4.dataFeedInfo.username.toLowerCase())) {
                                                }
                                                else {
                                                    obj2.uniqueUsers = obj2.uniqueUsers + 1;
                                                    obj2.uniqueUsersList.push({ 'name': obj4.dataFeedInfo.username.toLowerCase() });
                                                }
                                                if (this.summary.uniqueUsers.some(user => user.name === obj4.dataFeedInfo.username.toLowerCase())) {
                                                }
                                                else {
                                                    this.summary.uniqueUsers.push({ 'name': obj4.dataFeedInfo.username.toLowerCase() });
                                                    this.summary.uniqueUserCount = this.summary.uniqueUserCount + 1;
                                                }
                                            }
                                        });
                                    });
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
                                    }
                                    else {
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
                                    this.dataValidationProgress = Math.round((((this.doneCountEventTypes / this.todoEventTypes) * 20) + 40));
                                    //console.log('this.dataValidationProgress AFTER = ',this.dataValidationProgress);
                                    this.ref.detectChanges();
                                    if (counter === this.allowedEventTypeCount + 1 || this.todoEventTypes - this.doneCountEventTypes === 0) {
                                        offset = offset + 1;
                                        ;
                                        if (this.doneCountEventTypes < tempKeys.length) {
                                            //console.log('short, running again');
                                            this.getEventTypeSessions(offset);
                                        }
                                        else {
                                            console.log('starting to get session details');
                                            this.getEventTypeSessionDetails(0);
                                        }
                                    }
                                }
                            });
                        }
                    });
                });
            }
        });
    }
    getEventTypeSessionDetails(offset) {
        var counter = 0;
        var tempKeys = [];
        var tempArray = [];
        var tempAdded = 0;
        this.eventTypes.forEach((obj, index) => {
            if (obj.response.entities.session != undefined)
                tempKeys.push(obj);
        });
        this.todoEventTypeSessions = tempKeys.length;
        for (var a = 0; a < tempKeys.length && tempAdded <= this.allowedEventTypeCount; a++) {
            //console.log('tempAdded: '+tempAdded);
            if (this.doneEventTypeSessions.some(event => event.name === tempKeys[a].name)) {
            }
            else {
                //console.log('pushing '+tempKeys[a].name+' to doneEventTypeSessions');
                tempArray.push(tempKeys[a]);
                this.doneEventTypeSessions.push(tempKeys[a]);
                tempAdded++;
            }
        }
        tempArray.forEach((obj, index) => {
            this.eventTypes.forEach((obj2, index2) => {
                if (obj.name === obj2.name) {
                    obj2.inSession = true;
                    obj2.sessionCount = obj2.response.entities.session.length;
                    obj2.totalCount = obj2.totalCount + obj2.response.entities.session.length;
                    var tempSessions = 0;
                    obj2.response.entities.session.forEach((obj3, index3) => {
                        if (index3 < this.allowedEventTypeCount) {
                            tempSessions++;
                            //this.http.get('https://'+this.host+'/uba/api/sequence/events/eventType?sequenceType=session&sequenceId='+obj3.sessionInfo.sessionId+'&eventType='+obj2.name+'&numberOfResults=10', {withCredentials: true}).subscribe(
                            this.http.get('https://' + this.host + '/uba/api/sequence/events/eventType?sequenceType=session&sequenceId=' + obj3.sessionInfo.sessionId + '&eventType=' + obj2.name + '&numberOfResults=10', { withCredentials: true, headers: { 'TargetURL': 'https://' + this.host + '/uba/api/sequence/events/eventType?sequenceType=session&sequenceId=' + obj3.sessionInfo.sessionId + '&eventType=' + obj2.name + '&numberOfResults=10', 'cookiehost': this.host, 'cache-control': 'no-cache, no-store, must-revalidate' } }).subscribe((response) => {
                                for (var i = 0; i < Object.keys(response).length; i++) {
                                    obj2.todoSessionEventIDs.push({ 'sessionId': obj3.sessionInfo.sessionId, 'eventId': response[i] });
                                }
                                tempSessions--;
                                if (tempSessions === 0) {
                                    this.doneCountEventTypeSessions++;
                                    counter++;
                                }
                                this.dataValidationProgress = Math.round((((this.doneCountEventTypeSessions / this.todoEventTypeSessions) * 10) + 60));
                                //console.log('counter: for event type sessions '+counter+' for offset: '+offset);
                                this.ref.detectChanges();
                                if (tempSessions === 0 && (counter === this.allowedEventTypeCount + 1 || this.todoEventTypeSessions - this.doneCountEventTypeSessions === 0)) {
                                    offset++;
                                    //console.log('counter: '+counter+' === '+this.allowedEventTypeCount+1+'. offset now '+offset);
                                    if (this.doneCountEventTypeSessions < tempKeys.length) {
                                        this.getEventTypeSessionDetails(offset);
                                    }
                                    else {
                                        console.log('Moving to Asset Event Details here');
                                        this.getEventTypeAssetDetails(0);
                                    }
                                }
                            }, (error) => {
                                console.log(error);
                                this.errors.push('Error fetching single session for event type: ' + obj2.name);
                                this.errorVisible = true;
                            });
                        }
                    });
                }
            });
        });
    }
    getEventTypeAssetDetails(offset) {
        var counter = 0;
        var tempKeys = [];
        var tempArray = [];
        var tempAdded = 0;
        this.eventTypes.forEach((obj, index) => {
            if (obj.response.entities.asset != undefined)
                tempKeys.push(obj);
        });
        this.todoEventTypeAssets = tempKeys.length;
        for (var a = 0; a < tempKeys.length && tempAdded <= this.allowedEventTypeCount; a++) {
            if (this.doneEventTypeAssets.some(event => event.name === tempKeys[a].name)) {
            }
            else {
                tempArray.push(tempKeys[a]);
                this.doneEventTypeAssets.push(tempKeys[a]);
                tempAdded++;
            }
        }
        tempArray.forEach((obj, index) => {
            this.eventTypes.forEach((obj2, index2) => {
                if (obj.name === obj2.name) {
                    obj2.inAsset = true;
                    obj2.assetCount = obj2.response.entities.asset.length;
                    obj2.totalCount = obj2.totalCount + obj2.response.entities.asset.length;
                    var tempSessions = 0;
                    obj2.response.entities.asset.forEach((obj3, index3) => {
                        if (index3 < this.allowedEventTypeCount) {
                            tempSessions++;
                            //this.http.get('https://'+this.host+'/uba/api/sequence/events/eventType?sequenceType=asset&sequenceId='+obj3.assetSequenceInfo.assetSequenceId+'&eventType='+obj2.name+'&numberOfResults=10', {withCredentials: true}).subscribe(
                            this.http.get('https://' + this.host + '/uba/api/sequence/events/eventType?sequenceType=asset&sequenceId=' + obj3.assetSequenceInfo.assetSequenceId + '&eventType=' + obj2.name + '&numberOfResults=10', { withCredentials: true, headers: { 'TargetURL': 'https://' + this.host + '/uba/api/sequence/events/eventType?sequenceType=asset&sequenceId=' + obj3.assetSequenceInfo.assetSequenceId + '&eventType=' + obj2.name + '&numberOfResults=10', 'cookiehost': this.host, 'cache-control': 'no-cache, no-store, must-revalidate' } }).subscribe((response) => {
                                for (var i = 0; i < Object.keys(response).length; i++) {
                                    obj2.todoAssetEventIDs.push({ 'sessionId': obj3.assetSequenceInfo.assetSequenceId, 'assetId': obj3.assetSequenceInfo.assetId, 'eventId': response[i] });
                                }
                                tempSessions--;
                                if (tempSessions === 0) {
                                    this.doneCountEventTypeAssets++;
                                    counter++;
                                }
                                this.dataValidationProgress = Math.round((((this.doneCountEventTypeAssets / this.todoEventTypeAssets) * 10) + 70));
                                //console.log('counter: for event type sessions '+counter+' for offset: '+offset);
                                this.ref.detectChanges();
                                if (tempSessions === 0 && (counter === this.allowedEventTypeCount + 1 || this.todoEventTypeAssets - this.doneCountEventTypeAssets === 0)) {
                                    offset++;
                                    //console.log('counter: '+counter+' === '+this.allowedEventTypeCount+1+'. offset now '+offset);
                                    if (this.doneCountEventTypeAssets < tempKeys.length) {
                                        this.getEventTypeAssetDetails(offset);
                                    }
                                    else {
                                        console.log('Moving to Session Event Details here');
                                        this.checkEventTypeSessionDetails(0);
                                    }
                                }
                            }, (error) => {
                                console.log(error);
                                this.errors.push('Error fetching single session for event type: ' + obj2.name);
                                this.errorVisible = true;
                            });
                        }
                    });
                }
            });
        });
    }
    checkEventTypeSessionDetails(offset) {
        var counter = 0;
        var tempKeys = [];
        var tempArray = [];
        var tempAdded = 0;
        this.eventTypes.forEach((obj, index) => {
            if (obj.response.entities.session != undefined && obj.todoSessionEventIDs.length !== 0)
                tempKeys.push(obj);
        });
        this.todoEventTypeSessionsDetails = tempKeys.length;
        for (var a = 0; a < tempKeys.length && tempAdded <= this.allowedEventTypeSessionCount; a++) {
            console.log('tempAdded: ', tempAdded);
            if (this.doneEventTypeSessionsDetails.some(event => event.name === tempKeys[a].name)) {
            }
            else {
                console.log('pushing ', tempKeys[a].name, ' to doneEventTypeSessionsDetails');
                tempArray.push(tempKeys[a]);
                this.doneEventTypeSessionsDetails.push(tempKeys[a]);
                tempAdded++;
            }
        }
        tempArray.forEach((obj, index) => {
            this.eventTypes.forEach((obj2, index2) => {
                if (obj.name === obj2.name) {
                    var tempSessions = 0;
                    obj2.todoSessionEventIDs.forEach((obj4, index4) => {
                        if (obj2.doneSessionEventIDs.some(event => event.sessionId === obj4.sessionId && event.eventId === obj4.eventId)) {
                        }
                        else {
                            obj2.doneSessionEventIDs.push({ 'sessionId': obj4.sessionId, 'eventId': obj4.eventId });
                            tempSessions++;
                            //this.http.get('https://'+this.host+'/uba/api/timeline/events/start?username=*&startSequenceType=session&startSequenceId='+obj4.sessionId+'&preferredNumberOfEvents=1&anomalyOnly=false&sequenceTypes=web&sequenceTypes=session&sequenceTypes=endpoint&sequenceTypes=file&startEventId='+obj4.eventId, {withCredentials: true}).subscribe(
                            this.http.get('https://' + this.host + '/uba/api/timeline/events/start?username=*&startSequenceType=session&startSequenceId=' + obj4.sessionId + '&preferredNumberOfEvents=1&anomalyOnly=false&sequenceTypes=web&sequenceTypes=session&sequenceTypes=endpoint&sequenceTypes=file&startEventId=' + obj4.eventId, { withCredentials: true, headers: { 'TargetURL': 'https://' + this.host + '/uba/api/timeline/events/start?username=*&startSequenceType=session&startSequenceId=' + obj4.sessionId + '&preferredNumberOfEvents=1&anomalyOnly=false&sequenceTypes=web&sequenceTypes=session&sequenceTypes=endpoint&sequenceTypes=file&startEventId=' + obj4.eventId, 'cookiehost': this.host, 'cache-control': 'no-cache, no-store, must-revalidate' } }).subscribe((response) => {
                                obj2.sessionEventDetails.push(response);
                                obj2.sessionEventDetails.forEach((obj5) => {
                                    if (obj5.firstEvent != undefined) {
                                        Object.keys(obj5.firstEvent.fields).forEach((obj6) => {
                                            if (obj2.sessionEventFields.some(theField => theField.toLowerCase().replace(/ /g, "") === obj6.toLowerCase().replace(/ /g, ""))) {
                                            }
                                            else {
                                                obj2.sessionEventFields.push(obj6.toLowerCase().replace(/ /g, ""));
                                            }
                                        });
                                    }
                                });
                                console.log('tempSessions BEFORE = ', tempSessions);
                                tempSessions--;
                                console.log('tempSessions AFTER = ', tempSessions);
                                if (tempSessions === 0) {
                                    this.doneCountEventTypeSessionsDetails++;
                                    counter++;
                                }
                                console.log('counter = ', counter);
                                console.log('this.allowedEventTypeSessionCount+1 = ', this.allowedEventTypeSessionCount + 1);
                                console.log('this.todoEventTypeSessionsDetails = ', this.todoEventTypeSessionsDetails);
                                console.log('this.doneCountEventTypeSessionsDetails = ', this.doneCountEventTypeSessionsDetails);
                                this.dataValidationProgress = Math.round((((this.doneCountEventTypeSessionsDetails / this.todoEventTypeSessionsDetails) * 10) + 80));
                                //console.log('counter: for event type sessions '+counter+' for offset: '+offset);
                                this.ref.detectChanges();
                                if (tempSessions === 0 && (counter === this.allowedEventTypeSessionCount + 1 || this.todoEventTypeSessionsDetails - this.doneCountEventTypeSessionsDetails === 0)) {
                                    offset++;
                                    console.log('counter: ' + counter + ' === ' + this.allowedEventTypeSessionCount + 1 + '. offset now ' + offset);
                                    if (this.doneCountEventTypeSessionsDetails < tempKeys.length) {
                                        console.log('running this.checkEventTypeSessionDetails(', offset, +')');
                                        this.checkEventTypeSessionDetails(offset);
                                    }
                                    else {
                                        console.log('Moved on to Event Asset Details here');
                                        this.checkEventTypeAssetDetails(0);
                                    }
                                }
                            }, (error) => {
                                console.log(error);
                                this.errors.push('Error fetching single session event for event type: ' + obj2.name);
                                this.errorVisible = true;
                            });
                        }
                    });
                }
            });
        });
    }
    checkEventTypeAssetDetails(offset) {
        var counter = 0;
        var tempKeys = [];
        var tempArray = [];
        var tempAdded = 0;
        this.eventTypes.forEach((obj, index) => {
            if (obj.response.entities.asset != undefined && obj.todoAssetEventIDs.length !== 0)
                tempKeys.push(obj);
        });
        this.todoEventTypeAssetsDetails = tempKeys.length;
        for (var a = 0; a < tempKeys.length && tempAdded <= this.allowedEventTypeSessionCount; a++) {
            //console.log('tempAdded: '+tempAdded);
            if (this.doneEventTypeAssetsDetails.some(event => event.name === tempKeys[a].name)) {
            }
            else {
                //console.log('pushing '+tempKeys[a].name+' to doneEventTypeSessionsDetails');
                tempArray.push(tempKeys[a]);
                this.doneEventTypeAssetsDetails.push(tempKeys[a]);
                tempAdded++;
            }
        }
        tempArray.forEach((obj, index) => {
            this.eventTypes.forEach((obj2, index2) => {
                if (obj.name === obj2.name) {
                    var tempSessions = 0;
                    obj2.todoAssetEventIDs.forEach((obj4, index4) => {
                        if (obj2.doneAssetEventIDs.some(event => event.sessionId === obj4.sessionId && event.eventId === obj4.eventId)) {
                        }
                        else {
                            obj2.doneAssetEventIDs.push({ 'sessionId': obj4.sessionId, 'eventId': obj4.eventId });
                            tempSessions++;
                            //this.http.get('https://'+this.host+'/uba/api/asset/timeline/events/start?assetId='+obj4.assetId+'&startAssetSequenceId='+obj4.sessionId+'&preferredNumberOfEvents=1&anomalyOnly=false&eventCategories=*&sequenceTypes=asset&eventTypes='+obj2.name+'&eventTypeInclude=true&startEventId='+obj4.eventId, {withCredentials: true}).subscribe(
                            this.http.get('https://' + this.host + '/uba/api/asset/timeline/events/start?assetId=' + obj4.assetId + '&startAssetSequenceId=' + obj4.sessionId + '&preferredNumberOfEvents=1&anomalyOnly=false&eventCategories=*&sequenceTypes=asset&eventTypes=' + obj2.name + '&eventTypeInclude=true&startEventId=' + obj4.eventId, { withCredentials: true, headers: { 'TargetURL': 'https://' + this.host + '/uba/api/asset/timeline/events/start?assetId=' + obj4.assetId + '&startAssetSequenceId=' + obj4.sessionId + '&preferredNumberOfEvents=1&anomalyOnly=false&eventCategories=*&sequenceTypes=asset&eventTypes=' + obj2.name + '&eventTypeInclude=true&startEventId=' + obj4.eventId, 'cookiehost': this.host, 'cache-control': 'no-cache, no-store, must-revalidate' } }).subscribe((response) => {
                                obj2.assetEventDetails.push(response);
                                obj2.assetEventDetails.forEach((obj5) => {
                                    if (obj5.firstEvent != undefined) {
                                        Object.keys(obj5.firstEvent.fields).forEach((obj6) => {
                                            if (obj2.assetEventFields.some(theField => theField.toLowerCase().replace(/ /g, "") === obj6.toLowerCase().replace(/ /g, ""))) {
                                            }
                                            else {
                                                obj2.assetEventFields.push(obj6.toLowerCase().replace(/ /g, ""));
                                            }
                                        });
                                    }
                                });
                                tempSessions--;
                                if (tempSessions === 0) {
                                    this.doneCountEventTypeAssetsDetails++;
                                    counter++;
                                }
                                this.dataValidationProgress = Math.round((((this.doneCountEventTypeAssetsDetails / this.todoEventTypeAssetsDetails) * 10) + 80));
                                //console.log('counter: for event type sessions '+counter+' for offset: '+offset);
                                this.ref.detectChanges();
                                if (tempSessions === 0 && (counter === this.allowedEventTypeSessionCount + 1 || this.todoEventTypeAssetsDetails - this.doneCountEventTypeAssetsDetails === 0)) {
                                    offset++;
                                    //console.log('counter: '+counter+' === '+this.allowedEventTypeSessionCount+1+'. offset now '+offset);
                                    if (this.doneCountEventTypeAssetsDetails < tempKeys.length) {
                                        this.checkEventTypeAssetDetails(offset);
                                    }
                                    else {
                                        console.log('Moved on to CheckFeature here');
                                        this.checkFeature();
                                    }
                                }
                            }, (error) => {
                                console.log(error);
                                this.errors.push('Error fetching single session event for event type: ' + obj2.name);
                                this.errorVisible = true;
                            });
                        }
                    });
                }
            });
        });
    }
    checkFeature() {
        this.rulesAndModels.forEach((obj, index) => {
            if (obj.modelDef != undefined) {
                obj.featurePresent = 'false';
            }
            else {
                obj.featurePresent = 'N/A';
            }
            this.eventTypes.forEach((obj2, index2) => {
                obj2.uniqueUserPercent = Math.round((obj2.uniqueUsers / this.summary.uniqueUserCount) * 100);
                obj2.uniqueHostPercent = Math.round((obj2.uniqueHosts / this.summary.uniqueHostCount) * 100);
                if (obj.ruleDef.requiredEvents.some(type => type === obj2.name)) {
                    if (obj.modelDef != undefined) {
                        if (obj.modelDef.modelType === 'NUMERICAL_TIME_OF_WEEK')
                            obj.featurePresent = 'true';
                        if (obj.populating === 'true')
                            obj.featurePresent = 'true';
                        if (obj.modelDef.scopeType != 'DEVICE' && obj2.inSession) {
                            obj2.sessionEventFields.forEach((obj3, index) => {
                                obj.modelDef.requiredEventFields.forEach((obj4, index) => {
                                    if (obj3 === obj4) {
                                        if (obj.modelDef.presentEventFields.some(field => field === obj4)) {
                                        }
                                        else {
                                            obj.modelDef.presentEventFields.push(obj3);
                                        }
                                    }
                                    if (obj.modelDef.requiredEventFields.length === obj.modelDef.presentEventFields.length)
                                        obj.featurePresent = 'true';
                                });
                            });
                        }
                        if (obj2.inAsset) {
                            obj2.assetEventFields.forEach((obj3, index) => {
                                obj.modelDef.requiredEventFields.forEach((obj4, index) => {
                                    if (obj3 === obj4)
                                        obj.modelDef.presentEventFields.push(obj3);
                                    if (obj.modelDef.requiredEventFields.length === obj.modelDef.presentEventFields.length)
                                        obj.featurePresent = 'true';
                                });
                            });
                        }
                        obj.modelDef.requiredEventFields.forEach((obj3, index) => {
                            if (obj.modelDef.presentEventFields.some(field => field === obj3)) {
                            }
                            else {
                                if (obj.modelDef.missingEventFields.some(field => field === obj3)) {
                                }
                                else {
                                    obj.modelDef.missingEventFields.push(obj3);
                                }
                            }
                        });
                    }
                }
            });
        });
        this.addEventDetails();
    }
    addEventDetails() {
        var doneCount = 0;
        this.rulesAndModels.forEach((obj, index) => {
            obj.eventInRuleType = 'false';
            obj.presentEventTypes = [];
            this.eventTypes.forEach((obj2, index2) => {
                if (obj.ruleDef.requiredEvents.some(types => types === obj2.name)) {
                    obj2.rules.push(obj.ruleDef);
                    if (obj.modelDef != undefined) {
                        obj2.models.push(obj.modelDef);
                        if (obj.modelDef.populating)
                            obj.ruleDef.modelPopulating = true;
                    }
                    if (obj2.sessionCount != undefined) {
                        obj.inSessions = 'true';
                        if (obj.ruleDef.ruleType === 'session') {
                            obj.presentEventTypes.push(obj2.name);
                            obj.eventInRuleType = 'true';
                        }
                    }
                    else {
                        obj.inSessions = 'false';
                    }
                    if (obj2.assetCount != undefined) {
                        obj.inAssets = 'true';
                        if (obj.ruleDef.ruleType === 'asset') {
                            obj.presentEventTypes.push(obj2.name);
                            obj.eventInRuleType = 'true';
                        }
                    }
                    else {
                        obj.inAssets = 'false';
                    }
                    if (obj2.endpointCount != undefined) {
                        obj.inEndpoints = 'true';
                        if (obj.ruleDef.ruleType === 'endpoint') {
                            obj.presentEventTypes.push(obj2.name);
                            obj.eventInRuleType = 'true';
                        }
                    }
                    else {
                        obj.inEndpoints = 'false';
                    }
                    if (obj2.fileCount != undefined) {
                        obj.inFiles = 'true';
                        if (obj.ruleDef.ruleType === 'file') {
                            obj.presentEventTypes.push(obj2.name);
                            obj.eventInRuleType = 'true';
                        }
                    }
                    else {
                        obj.inFiles = 'false';
                    }
                    if (obj2.webCount != undefined) {
                        obj.inWebs = 'true';
                        if (obj.ruleDef.ruleType === 'web') {
                            obj.presentEventTypes.push(obj2.name);
                            obj.eventInRuleType = 'true';
                        }
                    }
                    else {
                        obj.inWebs = 'false';
                    }
                    if (obj2.databaseCount != undefined) {
                        obj.inDatabase = 'true';
                        if (obj.ruleDef.ruleType === 'database') {
                            obj.presentEventTypes.push(obj2.name);
                            obj.eventInRuleType = 'true';
                        }
                    }
                    else {
                        obj.inDatabase = 'false';
                    }
                    if (obj2.lockoutCount != undefined) {
                        obj.inLockouts = 'true';
                        if (obj.ruleDef.ruleType === 'account-lockout') {
                            obj.presentEventTypes.push(obj2.name);
                            obj.eventInRuleType = 'true';
                        }
                    }
                    else {
                        obj.inLockouts = 'false';
                    }
                    obj2.ruleCount = obj2.rules.length;
                    obj2.modelCount = obj2.models.length;
                    //console.log('still in loop');
                }
            });
            doneCount = doneCount + 1;
            if (doneCount === this.rulesAndModels.length) {
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
        });
        this.eventTypes.forEach((obj2, index2) => {
            obj2.models.forEach((obj3, index2) => {
                if (obj3.populating) {
                    obj2.modelsPopulating = obj2.modelsPopulating + 1;
                    obj2.modelsPopulatingPercent = Math.round((obj2.modelsPopulating / obj2.modelCount) * 100);
                    obj2.missingEventFieldTable.forEach((obj5, index5) => {
                        obj5.percent = Math.round((obj5.count / (obj2.modelCount - obj2.modelsPopulating)) * 100);
                    });
                }
                else {
                    obj3.missingEventFields.forEach((obj4, index2) => {
                        if (obj2.missingEventFieldTable.length == 0) {
                            if (obj3.modelType != 'NUMERICAL_TIME_OF_WEEK')
                                obj2.missingEventFieldTable.push({ 'name': obj4, 'count': 1, 'percent': Math.round((1 / (obj2.modelCount - obj2.modelsPopulating)) * 100) });
                        }
                        else {
                            if (obj2.missingEventFieldTable.some(field => field.name === obj4)) {
                                obj2.missingEventFieldTable.forEach((obj5, index5) => {
                                    if (obj5.name === obj4 && obj3.modelType != 'NUMERICAL_TIME_OF_WEEK') {
                                        obj5.count = obj5.count + 1;
                                        obj5.percent = Math.round((obj5.count / (obj2.modelCount - obj2.modelsPopulating)) * 100);
                                    }
                                });
                            }
                            else {
                                if (obj3.modelType != 'NUMERICAL_TIME_OF_WEEK')
                                    obj2.missingEventFieldTable.push({ 'name': obj4, 'count': 1, 'percent': Math.round((1 / (obj2.modelCount - obj2.modelsPopulating)) * 100) });
                            }
                        }
                        if (obj2.missingEventFields.some(field => field === obj4)) {
                        }
                        else {
                            if (obj3.modelType != 'NUMERICAL_TIME_OF_WEEK')
                                obj2.missingEventFields.push(obj4);
                        }
                    });
                }
                obj3.requiredEventFields.forEach((obj4, index2) => {
                    if (obj2.requiredEventFields.some(field => field === obj4)) {
                    }
                    else {
                        obj2.requiredEventFields.push(obj4);
                    }
                });
                if (obj3.scopeType != 'DEVICE' && obj2.inSession) {
                    obj2.sessionEventFields.forEach((obj4, index4) => {
                        obj3.requiredEventFields.forEach((obj5, index5) => {
                            if (obj4 === obj5) {
                                if (obj2.presentEventFields.some(field => field === obj4)) {
                                }
                                else {
                                    obj2.presentEventFields.push(obj4);
                                }
                            }
                        });
                    });
                }
                if (obj2.inAsset) {
                    obj2.assetEventFields.forEach((obj4, index) => {
                        obj3.requiredEventFields.forEach((obj5, index) => {
                            if (obj4 === obj5) {
                                if (obj2.presentEventFields.some(field => field === obj4)) {
                                }
                                else {
                                    obj2.presentEventFields.push(obj4);
                                }
                            }
                        });
                    });
                }
                obj2.fieldCount = obj2.requiredEventFields.length;
                obj2.fieldsPopulating = obj2.fieldCount - obj2.missingEventFields.length;
                obj2.fieldsPopulatingPercent = Math.round((obj2.fieldsPopulating / obj2.fieldCount) * 100);
            });
            obj2.rules.forEach((obj3, index2) => {
                if (obj3.modelPopulating) {
                    obj2.rulesCouldTrigger = obj2.rulesCouldTrigger + 1;
                    obj2.rulesCouldTriggerPercent = Math.round((obj2.rulesCouldTrigger / obj2.ruleCount) * 100);
                }
            });
        });
    }
    exportExcel(table) {
        __webpack_require__.e(/*! import() | xlsx */ "xlsx").then(__webpack_require__.t.bind(null, /*! xlsx */ "EUZL", 7)).then(xlsx => {
            const worksheet = xlsx.utils.json_to_sheet(table);
            const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            this.saveAsExcelFile(excelBuffer, "TableExport");
        });
    }
    saveAsExcelFile(buffer, fileName) {
        __webpack_require__.e(/*! import() | file-saver */ "file-saver").then(__webpack_require__.t.bind(null, /*! file-saver */ "Iab2", 7)).then(FileSaver => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data = new Blob([buffer], {
                type: EXCEL_TYPE
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }
    onEventTypesSelect(required, present) {
        this.selectedRequiredEventTypes = required;
        this.selectedPresentEventTypes = present;
        this.visibleMissingEventTypes = true;
    }
    onEventFieldsSelect(required, present, missing, missingTable) {
        this.selectedRequiredEventFields = required;
        this.selectedPresentEventFields = present;
        this.selectedMissingEventFields = missing;
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
    onUsersSelect(users) {
        this.selectedUserList = users;
        this.visibleUserList = true;
    }
    onHostsSelect(hosts) {
        this.selectedHostList = hosts;
        this.visibleHostList = true;
    }
    onServerSelect() {
        this.visibleServer = true;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])], decls: 108, vars: 101, consts: [[1, "container-fluid"], ["class", "row", "id", "everythingBeforeLogin", 4, "ngIf"], ["id", "everythingAfterLogin", 4, "ngIf"], ["id", "dataValidationDiv", 4, "ngIf"], ["header", "Data Validation Progress", 3, "visible", "modal", "visibleChange"], [3, "value"], [4, "ngIf"], ["header", "Timeline Analysis Progress", 3, "visible", "modal", "visibleChange"], ["header", "Event Types", 3, "visible", "modal", "visibleChange"], [1, "row"], [1, "col-6"], ["header", "Event Fields", 3, "visible", "modal", "visibleChange"], [1, "col-2"], ["columnResizeMode", "fit", "sortField", "count", 3, "columns", "value", "resizableColumns", "sortOrder"], ["dt7", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["header", "Rule", 3, "visible", "modal", "visibleChange"], ["header", "Model", 3, "visible", "modal", "visibleChange"], ["header", "User List", 3, "visible", "modal", "visibleChange"], ["dt8", ""], ["pTemplate", "caption"], ["header", "Host List", 3, "visible", "modal", "visibleChange"], ["dt9", ""], ["header", "Server", 3, "visible", "modal", "visibleChange"], ["href", "https://github.com/jdifeder/exabeam-api-proxy", "target", "_blank"], ["id", "everythingBeforeLogin", 1, "row"], [1, "form-group"], ["for", "input1"], ["type", "text", "id", "input1", 1, "form-control", 3, "ngModel", "placeholder", "ngModelOptions", "ngModelChange"], ["for", "input3"], ["type", "text", "id", "input3", 1, "form-control", 3, "ngModel", "placeholder", "ngModelOptions", "ngModelChange"], ["class", "form-group", 4, "ngIf"], ["id", "getAuthButton", "type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "getAuthButton2", "type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "getAuthButton3", "type", "button", 1, "btn", "btn-primary", 3, "click"], ["for", "input4"], ["type", "text", "id", "input4", 1, "form-control", 3, "ngModel", "placeholder", "ngModelOptions", "ngModelChange"], ["id", "everythingAfterLogin"], ["class", "row", 4, "ngIf"], [1, "col-3"], ["style", "color:green", 4, "ngIf"], [3, "value", "columns", "resizableColumns", 4, "ngIf"], [2, "color", "green"], [3, "value", "columns", "resizableColumns"], ["dt5", ""], ["ttResizableColumn", "", 4, "ngFor", "ngForOf"], ["ttResizableColumn", ""], [4, "ngFor", "ngForOf"], [3, "rowNode", 4, "ngIf"], [3, "rowNode"], [1, "col-4"], ["columnResizeMode", "fit", "sortField", "totalScore", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "columns", "value", "loading", "resizableColumns", "sortOrder", "paginator", "rows", "showCurrentPageReport"], ["dt1", ""], [1, "col-8"], ["columnResizeMode", "fit", "sortField", "totalScore", "selectionMode", "single", "dataKey", "rule", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "columns", "value", "loading", "resizableColumns", "sortOrder", "paginator", "rows", "showCurrentPageReport", "onRowSelect"], ["dt2", ""], [1, "ui-helper-clearfix", 2, "text-align", "left"], ["icon", "pi pi-file-excel", "iconpos", "left", "label", "EXCEL", "pbutton", "", "type", "button", 1, "ui-button-success", "ui-button", "ui-widget", "ui-state-default", "ui-corner-all", "ui-button-text-icon-left", 2, "margin-right", "0.5em"], ["aria-hidden", "true", 1, "ui-button-icon-left", "ui-clickable", "pi", "pi-file-excel"], [1, "ui-button-text", "ui-clickable", 3, "click"], [2, "text-align", "right"], [1, "pi", "pi-search", 2, "margin", "4px 4px 0 0"], ["type", "text", "pInputText", "", "size", "50", "placeholder", "Search", 2, "width", "auto", 3, "input"], ["pResizableColumn", "", 3, "pSortableColumn", 4, "ngFor", "ngForOf"], ["pResizableColumn", "", 3, "pSortableColumn"], ["pResizableColumn", "", 2, "width", "750px", 3, "pSortableColumn"], [3, "pSelectableRow"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["sortField", "totalScore", "columnResizeMode", "fit", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "columns", "value", "paginator", "rows", "sortOrder", "resizableColumns", "showCurrentPageReport"], ["dt3", ""], [1, "ui-resizable-column"], ["columnResizeMode", "fit", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "columns", "value", "paginator", "rows", "resizableColumns", "showCurrentPageReport"], ["dt4", ""], ["class", "ui-resizable-column", 4, "ngFor", "ngForOf"], ["id", "dataValidationDiv"], ["columnResizeMode", "fit", "sortField", "name", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "columns", "value", "loading", "resizableColumns", "sortOrder", "rows", "paginator", "showCurrentPageReport"], ["columnResizeMode", "fit", "sortField", "populating", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "columns", "value", "loading", "resizableColumns", "sortOrder", "rows", "paginator", "showCurrentPageReport"], ["dt6", ""], ["pInputText", "", "type", "text", 3, "input"], [3, "click"], ["pResizableColumn", "", 2, "width", "250px", 3, "pSortableColumn"], ["pResizableColumn", "", 2, "width", "650px", 3, "pSortableColumn"], ["pResizableColumn", "", 2, "width", "150px", 3, "pSortableColumn"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_1_Template, 23, 12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_div_2_Template, 7, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppComponent_div_3_Template, 17, 16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p-dialog", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function AppComponent_Template_p_dialog_visibleChange_4_listener($event) { return ctx.visibleDataValidationProgress = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "p-progressBar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AppComponent_code_20_Template, 4, 3, "code", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p-dialog", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function AppComponent_Template_p_dialog_visibleChange_21_listener($event) { return ctx.visibleTuningProgress = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "p-progressBar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, AppComponent_code_25_Template, 4, 3, "code", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p-dialog", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function AppComponent_Template_p_dialog_visibleChange_26_listener($event) { return ctx.visibleMissingEventTypes = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Required Event Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Present Event Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](41, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "p-dialog", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function AppComponent_Template_p_dialog_visibleChange_42_listener($event) { return ctx.visibleMissingEventFields = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Required Event Fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Present Event Fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](57, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Missing Event Fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](64, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Missing Event Field Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "p-table", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, AppComponent_ng_template_70_Template, 7, 3, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, AppComponent_ng_template_71_Template, 8, 4, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "p-dialog", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function AppComponent_Template_p_dialog_visibleChange_72_listener($event) { return ctx.visibleRule = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](76, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "p-dialog", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function AppComponent_Template_p_dialog_visibleChange_77_listener($event) { return ctx.visibleModel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](81, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "p-dialog", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function AppComponent_Template_p_dialog_visibleChange_82_listener($event) { return ctx.visibleUserList = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "p-table", 13, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](86, AppComponent_ng_template_86_Template, 8, 0, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](87, AppComponent_ng_template_87_Template, 3, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](88, AppComponent_ng_template_88_Template, 3, 2, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "p-dialog", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function AppComponent_Template_p_dialog_visibleChange_89_listener($event) { return ctx.visibleHostList = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "p-table", 13, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](93, AppComponent_ng_template_93_Template, 8, 0, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](94, AppComponent_ng_template_94_Template, 3, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](95, AppComponent_ng_template_95_Template, 3, 2, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "p-dialog", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function AppComponent_Template_p_dialog_visibleChange_96_listener($event) { return ctx.visibleServer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Which server type should I choose?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "This tool requires HTTPS requests to be proxied through a Node server.\nThe quickest method to get started using this tool is to use the \"SaaS\" server.\nThe most secure and best performing method to use this tool is to use the \"Local\" server.\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "SaaS:       \n  Considerations:\n  Advanced Analytics server must be accessible from the public internet, (Specficially from https://exabeam.azurewebsites.net).\n  All data sent and received from this site, including credentials, will be proxied through a third party server.\n  The third party server is operated and secured by Exabeam hobbists and is not officially affiliated with Exabeam the company.\n  While we operate in good faith, it is important to disclose that privacy cannot be guarenteed.\n  Therefore it is highly recommend to use the \"Local\" server which ensures all traffic is routed through servers you own.\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Local:\n  Considerations:\n      Advanced Analytics server may be SaaS hosted or internal.\n      The only requirement is that the local Node server hosted by you has a route to the Advanced Analytics hostname/IP.\n      Code and instructions for the local Node server is open source and hosted on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "\n                  \n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showValidation && !ctx.showLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](92, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.visibleDataValidationProgress)("modal", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Models: ", ctx.doneCountModels, " out of ", ctx.todoModels, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Rules: ", ctx.doneCountRules, " out of ", ctx.todoRules, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Event Types: ", ctx.doneCountEventTypes, " out of ", ctx.todoEventTypes, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("User Sessions: ", ctx.doneCountEventTypeSessions, " out of ", ctx.todoEventTypeSessions, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Asset Sessions: ", ctx.doneCountEventTypeAssets, " out of ", ctx.todoEventTypeAssets, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("User Session Events: ", ctx.doneCountEventTypeSessionsDetails, " out of ", ctx.todoEventTypeSessionsDetails, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Asset Session Events: ", ctx.doneCountEventTypeAssetsDetails, " out of ", ctx.todoEventTypeAssetsDetails, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.dataValidationProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](93, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.visibleTuningProgress)("modal", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Timelines: ", ctx.doneCountTimelines, " out of ", ctx.todoTimelines, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.tuningProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](94, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.visibleMissingEventTypes)("modal", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("                      ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 78, ctx.selectedRequiredEventTypes), "\n                  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("                      ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](41, 80, ctx.selectedPresentEventTypes), "\n                  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](95, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.visibleMissingEventFields)("modal", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("                      ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](50, 82, ctx.selectedRequiredEventFields), "\n                  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("                      ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](57, 84, ctx.selectedPresentEventFields), "\n                  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("                      ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](64, 86, ctx.selectedMissingEventFields), "\n                  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx.columns6)("value", ctx.selectedMissingEventFieldTable)("resizableColumns", true)("sortOrder", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](96, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.visibleRule)("modal", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("              ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](76, 88, ctx.selectedRule), "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](97, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.visibleModel)("modal", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("              ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](81, 90, ctx.selectedModel), "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](98, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.visibleUserList)("modal", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx.columns6)("value", ctx.selectedUserList)("resizableColumns", true)("sortOrder", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](99, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.visibleHostList)("modal", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx.columns6)("value", ctx.selectedHostList)("resizableColumns", true)("sortOrder", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](100, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.visibleServer)("modal", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], primeng_dialog__WEBPACK_IMPORTED_MODULE_6__["Dialog"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__["ProgressBar"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_1__["PrimeTemplate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], primeng_treetable__WEBPACK_IMPORTED_MODULE_10__["TreeTable"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], primeng_treetable__WEBPACK_IMPORTED_MODULE_10__["TTResizableColumn"], primeng_treetable__WEBPACK_IMPORTED_MODULE_10__["TreeTableToggler"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["ResizableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["SortableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["SelectableRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sentry_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/angular */ "UH2p");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/treetable */ "EVgl");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/progressbar */ "+DzE");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/listbox */ "+07z");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");



















class AppModule {
    constructor(library) {
        // Add an icon to the library for convenient access in other components
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faQuestionCircle"]);
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FaIconLibrary"])); }, providers: [
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
            useValue: _sentry_angular__WEBPACK_IMPORTED_MODULE_2__["createErrorHandler"]({
                showDialog: true,
            }),
        }
        /*,
        {
          provide: Sentry.TraceService,
          deps: [Router],
        }
        ,
        {
          provide: APP_INITIALIZER,
          useFactory: () => () => {},
          deps: [Sentry.TraceService],
          multi: true,
        },
        */
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            primeng_treetable__WEBPACK_IMPORTED_MODULE_11__["TreeTableModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_7__["DialogModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_13__["ToastModule"],
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_12__["ProgressBarModule"],
            primeng_listbox__WEBPACK_IMPORTED_MODULE_14__["ListboxModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        primeng_treetable__WEBPACK_IMPORTED_MODULE_11__["TreeTableModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_7__["DialogModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_13__["ToastModule"],
        primeng_progressbar__WEBPACK_IMPORTED_MODULE_12__["ProgressBarModule"],
        primeng_listbox__WEBPACK_IMPORTED_MODULE_14__["ListboxModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sentry_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/angular */ "UH2p");
/* harmony import */ var _sentry_tracing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/tracing */ "aI3+");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "AytR");






_sentry_angular__WEBPACK_IMPORTED_MODULE_2__["init"]({
    dsn: "https://16e328fdd849407e9bfda2d692ecbec9@o187074.ingest.sentry.io/5616904",
    integrations: [
        new _sentry_tracing__WEBPACK_IMPORTED_MODULE_3__["Integrations"].BrowserTracing({
            tracingOrigins: ["localhost", "https://exabeam-cloud.web.app"],
            routingInstrumentation: _sentry_angular__WEBPACK_IMPORTED_MODULE_2__["routingInstrumentation"],
        }),
    ],
    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
});
if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .then(success => console.log('Bootstrap success'))
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map