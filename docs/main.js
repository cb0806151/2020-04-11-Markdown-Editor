(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='nav {{themeClasses[currentTheme]}}'>\r\n  <label class='nav__theme-toggle' (click)=\"toggleTheme()\">{{themes[currentTheme]}}</label>\r\n</div>\r\n<div class='container {{themeClasses[currentTheme]}}'>\r\n  <div class='editor {{themeClasses[currentTheme]}}'>\r\n    <div class='editor__save-button' (click)=\"copyMarkdownToClipboard()\">copy to clipboard</div>\r\n    <textarea class='editor__field {{themeClasses[currentTheme]}}' [(ngModel)]=\"textToBeMarkedDown\"></textarea>\r\n  </div>\r\n  <div class='display {{themeClasses[currentTheme]}}'>\r\n    <div class='display__field {{themeClasses[currentTheme]}}' [innerHTML]=\"getPurifiedHTML()\"></div>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  width: 100%;\n  height: 50px;\n  background: gray;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  border-bottom: 1px solid white; }\n  .nav .nav__theme-toggle {\n    padding: 10px;\n    font-weight: 100; }\n  .nav.light {\n    border-bottom: 1px solid black; }\n  .container {\n  width: 100%;\n  height: 90vh;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  @media (max-width: 700px) {\n    .container {\n      flex-direction: column; } }\n  .container .editor, .container .display {\n    width: 50%;\n    height: 100%; }\n  @media (max-width: 700px) {\n      .container .editor, .container .display {\n        width: 100%; } }\n  .container .editor {\n    border: 1px solid white; }\n  .container .editor.light {\n      border: 1px solid black; }\n  .container .editor .editor__save-button {\n      position: absolute;\n      font-weight: 100;\n      right: 50%;\n      padding: 10px;\n      margin: 20px; }\n  @media (max-width: 700px) {\n        .container .editor .editor__save-button {\n          right: 0%; } }\n  .container .editor .editor__field {\n      padding: 20px;\n      resize: none;\n      border: 0px;\n      width: calc(100% - 40px);\n      height: calc(100% - 40px); }\n  .container .editor .editor__field:focus {\n        outline: none; }\n  .container .display {\n    overflow-y: auto;\n    border-bottom: 1px solid white; }\n  .container .display .display__field {\n      padding: 20px; }\n  .container .display.light {\n      border-bottom: 1px solid black; }\n  .dark {\n  background: black;\n  color: white; }\n  .dark .nav__theme-toggle:hover, .dark .editor__save-button:hover {\n    background: white;\n    color: black; }\n  .light {\n  background: white;\n  color: black; }\n  .light .nav__theme-toggle:hover, .light .editor__save-button:hover {\n    background: black;\n    color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxSYXhzdXNcXERvY3VtZW50c1xcZ2l0aHViXFwyMDIwLTA0LTExLU1hcmtkb3duLUVkaXRvci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsOEJBQThCLEVBQUE7RUFQbEM7SUFTUSxhQUFhO0lBQ2IsZ0JBQWdCLEVBQUE7RUFWeEI7SUFhUSw4QkFBOEIsRUFBQTtFQUd0QztFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtFQUNuQjtJQU5KO01BT1Esc0JBQ0osRUFBQSxFQTRDSDtFQXBERDtJQVVRLFVBQVU7SUFDVixZQUFZLEVBQUE7RUFDWjtNQVpSO1FBYVksV0FDSixFQUFBLEVBQ0g7RUFmTDtJQWlCUSx1QkFBdUIsRUFBQTtFQWpCL0I7TUFtQlksdUJBQXVCLEVBQUE7RUFuQm5DO01Bc0JZLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsVUFBVTtNQUNWLGFBQWE7TUFDYixZQUFZLEVBQUE7RUFDWjtRQTNCWjtVQTRCZ0IsU0FBUyxFQUFBLEVBRWhCO0VBOUJUO01BZ0NZLGFBQWE7TUFDYixZQUFZO01BQ1osV0FBVztNQUNYLHdCQUF3QjtNQUN4Qix5QkFBeUIsRUFBQTtFQXBDckM7UUFzQ2dCLGFBQWEsRUFBQTtFQXRDN0I7SUEyQ1EsZ0JBQWdCO0lBQ2hCLDhCQUE4QixFQUFBO0VBNUN0QztNQThDWSxhQUFhLEVBQUE7RUE5Q3pCO01BaURZLDhCQUE4QixFQUFBO0VBTTFDO0VBQ0ksaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTtFQUZoQjtJQUtZLGlCQUFpQjtJQUNqQixZQUFZLEVBQUE7RUFLeEI7RUFDSSxpQkFBaUI7RUFDakIsWUFBWSxFQUFBO0VBRmhCO0lBS1ksaUJBQWlCO0lBQ2pCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLm5hdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIC5uYXZfX3RoZW1lLXRvZ2dsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgfVxyXG4gICAgJi5saWdodCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG59XHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAgfVxyXG4gICAgLmVkaXRvciwgLmRpc3BsYXkge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5lZGl0b3Ige1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICYubGlnaHQge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmVkaXRvcl9fc2F2ZS1idXR0b24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmVkaXRvcl9fZmllbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kaXNwbGF5IHtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAuZGlzcGxheV9fZmllbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmxpZ2h0IHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5kYXJrIHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLm5hdl9fdGhlbWUtdG9nZ2xlLCAuZWRpdG9yX19zYXZlLWJ1dHRvbiB7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubGlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAubmF2X190aGVtZS10b2dnbGUsIC5lZGl0b3JfX3NhdmUtYnV0dG9uIHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ "./node_modules/marked/src/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_3__);




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'application';
        this.textToBeMarkedDown = '# Marked in the browser\n\nRendered by **marked**.';
        this.themes = [
            "Light Mode",
            "Dark Mode",
        ];
        this.themeClasses = [
            'dark',
            'light',
        ];
        this.currentTheme = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        // document.getElementsByClassName('display-field')[0].innerHTML = marked('# Marked in the browser\n\nRendered by **marked**.');
    };
    AppComponent.prototype.formattedMarkdownText = function () {
        var formattedTextToBeMarkedDown = this.textToBeMarkedDown;
        formattedTextToBeMarkedDown = formattedTextToBeMarkedDown
            .replace(/\n$/g, '\n\n')
            .replace(/[A-Z].*?\b/g, '<mark>$&</mark>');
        return formattedTextToBeMarkedDown;
    };
    AppComponent.prototype.getPurifiedHTML = function () {
        var markedHTML = marked__WEBPACK_IMPORTED_MODULE_2___default()(this.textToBeMarkedDown);
        var purifiedHTML = dompurify__WEBPACK_IMPORTED_MODULE_3___default.a.sanitize(markedHTML);
        return purifiedHTML;
    };
    AppComponent.prototype.copyMarkdownToClipboard = function () {
        window.navigator['clipboard'].writeText(this.textToBeMarkedDown);
    };
    AppComponent.prototype.toggleTheme = function () {
        if (this.currentTheme == 0) {
            this.currentTheme = 1;
        }
        else {
            this.currentTheme = 0;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Raxsus\Documents\github\2020-04-11-Markdown-Editor\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map