(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about-me/about-me.component */ "./src/app/components/about-me/about-me.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");







const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__["AboutMeComponent"] },
    { path: 'skills', component: _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"] },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/navbar/navbar.component */ "./src/app/common/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "app-container-main"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".app-container-main[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding-left: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWNvbnRhaW5lci1tYWluIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/navbar/navbar.component */ "./src/app/common/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about-me/about-me.component */ "./src/app/components/about-me/about-me.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__["AboutMeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__["AboutMeComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/common/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 31, vars: 0, consts: [[1, "nav-main", "navbar-expand-lg", "navbar-dark"], ["data-toggle", "collapse", "data-target", "#collapsibleNavbar", 1, "border-0"], ["src", "../../../assets/fontawesome-free-5.15.2-web/svgs/solid/bars.svg", "alt", "", 1, "more-options", "logo-svg5"], [1, ""], ["src", "../../../assets/20200801_143327.png", "alt", "", 1, "logo"], ["id", "collapsibleNavbar", 1, "align-items-start"], [1, "flex", "flex-column", "w-100", "p-0", "m-0"], ["routerLink", "/"], ["src", "../../../assets/fontawesome-free-5.15.2-web/svgs/solid/home.svg", "alt", "", 1, "logo", "logo-svg1"], ["routerLink", "/about"], ["src", "../../../assets/fontawesome-free-5.15.2-web/svgs/solid/user-tie.svg", "alt", "", 1, "logo", "logo-svg2"], ["routerLink", "/skills"], ["src", "../../../assets/fontawesome-free-5.15.2-web/svgs/solid/keyboard.svg", "alt", "", 1, "logo", "logo-svg3"], ["routerLink", "./work"], ["src", "../../../assets/fontawesome-free-5.15.2-web/svgs/solid/briefcase.svg", "alt", "", 1, "logo", "logo-svg3"], ["href", "https://www.linkedin.com/in/apoorvdodiya", "target", "_blank", 1, "logo"], ["src", "../../../assets/svg/031-linkedin.svg", "alt", ""], ["href", "https://github.com/apoorvdodiya", "target", "_blank", 1, "logo"], ["src", "../../../assets/svg/039-github.svg", "alt", ""], ["href", "https://www.instagram.com/im.appy/", "target", "_blank", 1, "logo"], ["src", "../../../assets/svg/034-instagram.svg", "alt", ""], ["href", "https://twitter.com/apoorvdodiya", "target", "_blank", 1, "logo"], ["src", "../../../assets/svg/013-twitter-1.svg", "alt", ""], ["href", "https://wa.me/+919824584733", "target", "_blank", 1, "logo"], ["src", "../../../assets/svg/007-whatsapp.svg", "alt", ""], ["href", "https://www.facebook.com/apoorv.panchal.77", "target", "_blank", 1, "logo"], ["src", "../../../assets/svg/043-facebook-1.svg", "alt", ""], ["href", "tel:+919824584733", "target", "_blank", 1, "logo"], ["src", "../../../assets/fontawesome-free-5.15.2-web/svgs/solid/phone-alt.svg", "alt", "", 1, "logo-svg4"], ["href", "mailto:apoorvdodiya@gmail.com", "target", "_blank", 1, "logo"], ["src", "../../../assets/fontawesome-free-5.15.2-web/svgs/solid/at.svg", "alt", "", 1, "logo-svg5"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".navbar-collapse[_ngcontent-%COMP%] {\n  flex-grow: unset !important;\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  width: inherit;\n}\n\n.nav-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: 0;\n  width: 50px;\n  background-color: black;\n  height: 100vh;\n  display: flex;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.nav-main[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n\n\n.nav-main[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;  \n  scrollbar-width: none;  \n}\n\n.border-white[_ngcontent-%COMP%] {\n  border: 1px solid white;\n}\n\n.more-options[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 10px;\n  height: 50px;\n  width: 50px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 10px;\n  height: 50px;\n  width: 50px;\n  transition-duration: 0.5s;\n}\n\n.logo-svg1[_ngcontent-%COMP%] {\n  -webkit-filter: invert(48%) sepia(79%) saturate(1389%) hue-rotate(0deg) brightness(100%) contrast(119%);\n          filter: invert(48%) sepia(79%) saturate(1389%) hue-rotate(0deg) brightness(100%) contrast(119%);\n}\n\n.logo-svg2[_ngcontent-%COMP%] {\n  -webkit-filter: invert(48%) sepia(79%) saturate(1389%) hue-rotate(4000deg) brightness(100%) contrast(119%);\n          filter: invert(48%) sepia(79%) saturate(1389%) hue-rotate(4000deg) brightness(100%) contrast(119%);\n}\n\n.logo-svg3[_ngcontent-%COMP%] {\n  -webkit-filter: invert(48%) sepia(79%) saturate(1389%) hue-rotate(668deg) brightness(100%) contrast(119%);\n          filter: invert(48%) sepia(79%) saturate(1389%) hue-rotate(668deg) brightness(100%) contrast(119%);\n}\n\n.logo-svg4[_ngcontent-%COMP%] {\n  -webkit-filter: invert(48%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(119%);\n          filter: invert(48%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(119%);\n}\n\n.logo-svg5[_ngcontent-%COMP%] {\n  -webkit-filter: invert(60%) sepia(40%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(119%);\n          filter: invert(60%) sepia(40%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(119%);\n}\n\n.logo[_ngcontent-%COMP%]:hover {\n  padding: 0px;\n  border: 0;\n  transition-duration: 0.5s;\n}\n\n.logo[_ngcontent-%COMP%]:hover    + .logo[_ngcontent-%COMP%] {\n  padding: 7px;\n  transition-duration: 0.5s;\n}\n\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::after, [_ngcontent-%COMP%]::before {\n    box-sizing: border-box;\n}\n\n@media (min: 600px) {\n  overflow[_ngcontent-%COMP%]:   scroll[_ngcontent-%COMP%];\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsNENBQTRDOztBQUM1QztFQUNFLHdCQUF3QixHQUFHLGdCQUFnQjtFQUMzQyxxQkFBcUIsR0FBRyxZQUFZO0FBQ3RDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVHQUErRjtVQUEvRiwrRkFBK0Y7QUFDakc7O0FBQ0E7RUFDRSwwR0FBa0c7VUFBbEcsa0dBQWtHO0FBQ3BHOztBQUNBO0VBQ0UseUdBQWlHO1VBQWpHLGlHQUFpRztBQUNuRzs7QUFDQTtFQUNFLG1HQUEyRjtVQUEzRiwyRkFBMkY7QUFDN0Y7O0FBQ0E7RUFDRSxzR0FBOEY7VUFBOUYsOEZBQThGO0FBQ2hHOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItY29sbGFwc2Uge1xuICBmbGV4LWdyb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItdG9nZ2xlciB7XG4gIHdpZHRoOiBpbmhlcml0O1xufVxuXG4ubmF2LW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4ubmF2LW1haW46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXG4ubmF2LW1haW4ge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXG59XG5cbi5ib3JkZXItd2hpdGUge1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLm1vcmUtb3B0aW9ucyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLmxvZ28ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG59XG5cbi5sb2dvLXN2ZzEge1xuICBmaWx0ZXI6IGludmVydCg0OCUpIHNlcGlhKDc5JSkgc2F0dXJhdGUoMTM4OSUpIGh1ZS1yb3RhdGUoMGRlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMTklKTtcbn1cbi5sb2dvLXN2ZzIge1xuICBmaWx0ZXI6IGludmVydCg0OCUpIHNlcGlhKDc5JSkgc2F0dXJhdGUoMTM4OSUpIGh1ZS1yb3RhdGUoNDAwMGRlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMTklKTtcbn1cbi5sb2dvLXN2ZzMge1xuICBmaWx0ZXI6IGludmVydCg0OCUpIHNlcGlhKDc5JSkgc2F0dXJhdGUoMTM4OSUpIGh1ZS1yb3RhdGUoNjY4ZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDExOSUpO1xufVxuLmxvZ28tc3ZnNCB7XG4gIGZpbHRlcjogaW52ZXJ0KDQ4JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDBkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTE5JSk7XG59XG4ubG9nby1zdmc1IHtcbiAgZmlsdGVyOiBpbnZlcnQoNjAlKSBzZXBpYSg0MCUpIHNhdHVyYXRlKDEwMCUpIGh1ZS1yb3RhdGUoMGRlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMTklKTtcbn1cblxuLmxvZ286aG92ZXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlcjogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbn1cblxuLmxvZ286aG92ZXIgKyAubG9nbyB7XG4gIHBhZGRpbmc6IDdweDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbn1cblxuKiwgOjphZnRlciwgOjpiZWZvcmUge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbkBtZWRpYSAobWluOiA2MDBweCkge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/about-me/about-me.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-me/about-me.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutMeComponent {
    constructor() {
        this.years = (new Date()).getFullYear() - 2020;
    }
    ngOnInit() {
    }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 12, vars: 2, consts: [["unselectable", "on", "onselectstart", "return false;", "onmousedown", "return false;", 1, "container-main"], [1, "animated-title", "animated-title-direct"], [1, "text-top"], [1, "text-bottom"]], template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Apart from profession, my Interests are exploring new technologies and gadgets. I spend my holidays traveling or going for hiking. I like to read life-improving articles and books. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Hi, am Apoorv Dodiya. I am a fulltime Web Developer and I specialized in developing efficient reactive apps and CSS & HTML that just works across all platforms and browsers. I have been in the field for nearly ", ctx.years, " ", ctx.years === 1 ? "year" : "years", ", and have been loving every minute of it. I am a problem solver, developer, tech\u00A0enthusiast, and overall thinker. ");
    } }, styles: [".profile-photo[_ngcontent-%COMP%] {\n  height: 50%;\n  width: 100%;\n}\n\n.profile-photo[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  bottom: 50px;\n  height: 200px;\n  height: 200px;\n  opacity: 0;\n  -webkit-animation: fade 2s;\n          animation: fade 2s;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsVUFBVTtFQUNWLDBCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixxQ0FBNkI7VUFBN0IsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtcGhvdG8ge1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9maWxlLXBob3RvPmltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiA1MHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGUgMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-me',
                templateUrl: './about-me.component.html',
                styleUrls: ['./about-me.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() {
        this.message = '_';
        this.name = 'Apoorv';
        this.i = 0;
    }
    ngOnInit() {
        this.startTyping();
    }
    startTyping() {
        if (this.i < this.name.length) {
            setTimeout(() => {
                this.message = this.message.substr(0, this.message.length - 1) + this.name[this.i] + '_';
                this.i++;
                this.startTyping();
            }, 333);
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 13, vars: 0, consts: [["unselectable", "on", "onselectstart", "return false;", "onmousedown", "return false;", 1, "container-main"], [1, "animated-title-home"], [1, "profile-photo"], ["src", "../../../assets/20200801_143327.png", 1, "rounded-circle"], [1, "text-top"], [1, "text-bottom"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hi,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "I'm Apoorv!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "I am a software developer in Gujarat, India.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  cursor: default;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -o-user-select: none;\n}\n\n.profile-photo[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  bottom: 50px;\n  height: 200px;\n  height: 200px;\n  opacity: 0;\n  -webkit-animation: fade 2s;\n          animation: fade 2s;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.animated-title-home[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Roboto, Arial, sans-serif;\n  height: 100vh;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 70%;\n}\n\n.animated-title-home[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n  height: 50%;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n}\n\n.animated-title-home[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 12vmin;\n  padding: 2vmin 0;\n  position: absolute;\n}\n\n.animated-title-home[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.animated-title-home[_ngcontent-%COMP%] > div.text-top[_ngcontent-%COMP%] {\n  border-bottom: 1vmin solid #000;\n  top: 0;\n}\n\n.animated-title-home[_ngcontent-%COMP%] > div.text-top[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  -webkit-animation: showTopTextHome 1s;\n          animation: showTopTextHome 1s;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  bottom: 0;\n  transform: translate(0, 100%);\n}\n\n.animated-title-home[_ngcontent-%COMP%] > div.text-top[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #767676;\n}\n\n.animated-title-home[_ngcontent-%COMP%] > div.text-bottom[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n\n.animated-title-home[_ngcontent-%COMP%] > div.text-bottom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  -webkit-animation: showBottomTextHome 0.5s;\n          animation: showBottomTextHome 0.5s;\n  -webkit-animation-delay: 1.75s;\n          animation-delay: 1.75s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  top: 0;\n  transform: translate(0, -100%);\n}\n\n@media (max-width: 600px) {\n  .animated-title-home[_ngcontent-%COMP%] {\n    left: calc(50% + 25px);\n    overflow: hidden;\n    width: calc(100% - 50px);\n  }\n  .animated-title-home[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n    position: absolute;\n    overflow: hidden;\n    padding-right: 50px;\n    width: 100%;\n    height: 50%;\n  }\n  .animated-title-home[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 12vmin;\n    padding: 2vmin 0;\n    padding-left: 15px;\n    padding-right: 15px;\n    position: absolute;\n  }s[_ngcontent-%COMP%]   .profile-photo[_ngcontent-%COMP%] {\n    height: 50%;\n    width: 100%;\n  }\n\n  .profile-photo[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 20%;\n    bottom: 50%;\n    height: 100px;\n    height: 100px;\n  }\n}\n\n@-webkit-keyframes showTopTextHome {\n  0% {\n    transform: translate3d(0, 100%, 0);\n  }\n\n  40%,\n  60% {\n    transform: translate3d(0, 50%, 0);\n  }\n\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes showTopTextHome {\n  0% {\n    transform: translate3d(0, 100%, 0);\n  }\n\n  40%,\n  60% {\n    transform: translate3d(0, 50%, 0);\n  }\n\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@-webkit-keyframes showBottomTextHome {\n  0% {\n    transform: translate3d(0, -100%, 0);\n  }\n\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes showBottomTextHome {\n  0% {\n    transform: translate3d(0, -100%, 0);\n  }\n\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@-webkit-keyframes fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixVQUFVO0VBQ1YsMEJBQWtCO1VBQWxCLGtCQUFrQjtFQUNsQiwyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHFDQUE2QjtVQUE3Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixnQ0FBZ0M7RUFDaEMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLE1BQU07QUFDUjs7QUFFQTtFQUNFLHFDQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQixxQ0FBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsMENBQWtDO1VBQWxDLGtDQUFrQztFQUNsQyw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHFDQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IsTUFBTTtFQUNOLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXO0VBQ2I7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEIsQ0FBQzs7O0lBR0MsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0NBQWtDO0VBQ3BDOztFQUVBOztJQUVFLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLCtCQUErQjtFQUNqQztBQUNGOztBQWJBO0VBQ0U7SUFDRSxrQ0FBa0M7RUFDcEM7O0VBRUE7O0lBRUUsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UsK0JBQStCO0VBQ2pDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLCtCQUErQjtFQUNqQztBQUNGOztBQVJBO0VBQ0U7SUFDRSxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSwrQkFBK0I7RUFDakM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBUkE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ucHJvZmlsZS1waG90bz5pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogNTBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWRlIDJzO1xuICBhbmltYXRpb24tZGVsYXk6IDJzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmFuaW1hdGVkLXRpdGxlLWhvbWUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTAwdmg7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5hbmltYXRlZC10aXRsZS1ob21lPmRpdiB7XG4gIGhlaWdodDogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYW5pbWF0ZWQtdGl0bGUtaG9tZT5kaXYgZGl2IHtcbiAgZm9udC1zaXplOiAxMnZtaW47XG4gIHBhZGRpbmc6IDJ2bWluIDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmFuaW1hdGVkLXRpdGxlLWhvbWU+ZGl2IGRpdiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hbmltYXRlZC10aXRsZS1ob21lPmRpdi50ZXh0LXRvcCB7XG4gIGJvcmRlci1ib3R0b206IDF2bWluIHNvbGlkICMwMDA7XG4gIHRvcDogMDtcbn1cblxuLmFuaW1hdGVkLXRpdGxlLWhvbWU+ZGl2LnRleHQtdG9wIGRpdiB7XG4gIGFuaW1hdGlvbjogc2hvd1RvcFRleHRIb21lIDFzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBib3R0b206IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwMCUpO1xufVxuXG4uYW5pbWF0ZWQtdGl0bGUtaG9tZT5kaXYudGV4dC10b3AgZGl2IHNwYW46Zmlyc3QtY2hpbGQge1xuICBjb2xvcjogIzc2NzY3Njtcbn1cblxuLmFuaW1hdGVkLXRpdGxlLWhvbWU+ZGl2LnRleHQtYm90dG9tIHtcbiAgYm90dG9tOiAwO1xufVxuXG4uYW5pbWF0ZWQtdGl0bGUtaG9tZT5kaXYudGV4dC1ib3R0b20gZGl2IHtcbiAgYW5pbWF0aW9uOiBzaG93Qm90dG9tVGV4dEhvbWUgMC41cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjc1cztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwMCUpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmFuaW1hdGVkLXRpdGxlLWhvbWUge1xuICAgIGxlZnQ6IGNhbGMoNTAlICsgMjVweCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XG4gIH1cbiAgLmFuaW1hdGVkLXRpdGxlLWhvbWU+ZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICB9XG4gIC5hbmltYXRlZC10aXRsZS1ob21lPmRpdiBkaXYge1xuICAgIGZvbnQtc2l6ZTogMTJ2bWluO1xuICAgIHBhZGRpbmc6IDJ2bWluIDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9c1xuXG4gIC5wcm9maWxlLXBob3RvIHtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wcm9maWxlLXBob3RvPmltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMCU7XG4gICAgYm90dG9tOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2hvd1RvcFRleHRIb21lIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cblxuICA0MCUsXG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1MCUsIDApO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNob3dCb3R0b21UZXh0SG9tZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/skills/skills.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 29, vars: 0, consts: [["unselectable", "on", "onselectstart", "return false;", "onmousedown", "return false;", 1, "container-main"], [1, "page-content"], [1, "animated-title", "animated-title-direct"], [1, "text-top"], [1, "text-bottom"], [1, "skills"], [1, "skill"], ["src", "../../../assets/LOGOS/JavaScript-logo.png", "alt", ""], ["src", "../../../assets/LOGOS/angular.png", "alt", ""], ["src", "../../../assets/LOGOS/Amazon-Web-Services-1.png", "alt", ""], ["src", "../../../assets/LOGOS/ionic.png", "alt", ""], ["src", "../../../assets/LOGOS/nodejs.png", "alt", ""], ["src", "../../../assets/LOGOS/google_firebase-2-512.webp", "alt", ""], ["src", "../../../assets/LOGOS/mysql.png", "alt", ""], ["src", "../../../assets/LOGOS/800px-React-icon.svg.png", "alt", ""], ["src", "../../../assets/LOGOS/mongodb.png", "alt", ""]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "I have worked in many technologies in my work span like JS, TS, Angular, IONIC, NodeJS, MongoDB, AWS, firebase etc. I have worked on many projects to create and enhance the features and performance of the same. I keep myself updated with most of the technologies as in life we never stop learning.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".skills[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  height: 100vh;\n  width: 45%;\n  overflow: hidden;\n  flex-direction: row;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.skill[_ngcontent-%COMP%] {\n  width: 33.33%;\n  height: 33.33%;\n  background-color: darkslategray;\n  padding: 20px;\n  -webkit-animation: zoomIn;\n          animation: zoomIn;\n  -webkit-animation-delay: 1.75s;\n          animation-delay: 1.75s;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  display: flex;\n}\n\nimg[_ngcontent-%COMP%] {\n  align-self: center;\n  display: block;\n  width: 100%;\n  transition-duration: 0.7s;\n}\n\nimg[_ngcontent-%COMP%]:hover {\n  transition-duration: 1s;\n  transform: scale(1.1);\n}\n\n@media (max-width: 600px) {\n  .container-main[_ngcontent-%COMP%] {\n    overflow: hidden;\n  }\n\n  .skills[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: calc(100% - 50px);\n    top: 70%;\n    height: 30%;\n    align-content: flex-start;\n    overflow: scroll;\n  }\n  .skill[_ngcontent-%COMP%] {\n    padding: 10px;\n    width: 25%;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n  }\n\n}\n\n@-webkit-keyframes zoomIn {\n  0% {\n    transform: scale(0);\n  }\n\n  70% {\n    transform: scale(1.1);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes zoomIn {\n  0% {\n    transform: scale(0);\n  }\n\n  70% {\n    transform: scale(1.1);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n@-webkit-keyframes zoomInOnce {\n  0% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(1.1);\n  }\n}\n\n@keyframes zoomInOnce {\n  0% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(1.1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLGFBQWE7RUFDYix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsZ0NBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QixpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixRQUFRO0lBQ1IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7SUFDYixVQUFVO0lBQ1YsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7RUFDckI7O0FBRUY7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQVpBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBUkE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGxzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDQ1JTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uc2tpbGwge1xuICB3aWR0aDogMzMuMzMlO1xuICBoZWlnaHQ6IDMzLjMzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcbiAgcGFkZGluZzogMjBweDtcbiAgYW5pbWF0aW9uOiB6b29tSW47XG4gIGFuaW1hdGlvbi1kZWxheTogMS43NXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43cztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaW1nIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuN3M7XG59XG5cbmltZzpob3ZlciB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyLW1haW4ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuc2tpbGxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgICB0b3A6IDcwJTtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gIH1cbiAgLnNraWxsIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiAyNSU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgfVxuXG59XG5cbkBrZXlmcmFtZXMgem9vbUluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cblxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB6b29tSW5PbmNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.css']
            }]
    }], function () { return []; }, null); })();


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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/apoorv/dev/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map