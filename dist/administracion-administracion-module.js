(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administracion-administracion-module"],{

/***/ "./src/app/layout/administracion/administracion.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/administracion/administracion.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  hola\n</p>\n"

/***/ }),

/***/ "./src/app/layout/administracion/administracion.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/administracion/administracion.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/administracion/administracion.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/administracion/administracion.component.ts ***!
  \*******************************************************************/
/*! exports provided: AdministracionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministracionComponent", function() { return AdministracionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdministracionComponent = /** @class */ (function () {
    function AdministracionComponent() {
    }
    AdministracionComponent.prototype.ngOnInit = function () {
    };
    AdministracionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-administracion',
            template: __webpack_require__(/*! ./administracion.component.html */ "./src/app/layout/administracion/administracion.component.html"),
            styles: [__webpack_require__(/*! ./administracion.component.scss */ "./src/app/layout/administracion/administracion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdministracionComponent);
    return AdministracionComponent;
}());



/***/ }),

/***/ "./src/app/layout/administracion/administracion.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/administracion/administracion.module.ts ***!
  \****************************************************************/
/*! exports provided: AdministracionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministracionModule", function() { return AdministracionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/layout/administracion/app-routing.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _administracion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./administracion.component */ "./src/app/layout/administracion/administracion.component.ts");
/* harmony import */ var _empresa_empresa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./empresa/empresa.component */ "./src/app/layout/administracion/empresa/empresa.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AdministracionModule = /** @class */ (function () {
    function AdministracionModule() {
    }
    AdministracionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"]
            ],
            declarations: [_administracion_component__WEBPACK_IMPORTED_MODULE_4__["AdministracionComponent"], _empresa_empresa_component__WEBPACK_IMPORTED_MODULE_5__["EmpresaComponent"]]
        })
    ], AdministracionModule);
    return AdministracionModule;
}());



/***/ }),

/***/ "./src/app/layout/administracion/app-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/administracion/app-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _administracion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./administracion.component */ "./src/app/layout/administracion/administracion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _administracion_component__WEBPACK_IMPORTED_MODULE_2__["AdministracionComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/administracion/empresa/empresa.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/layout/administracion/empresa/empresa.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  empresa works!\n</p>\n"

/***/ }),

/***/ "./src/app/layout/administracion/empresa/empresa.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/layout/administracion/empresa/empresa.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/administracion/empresa/empresa.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/administracion/empresa/empresa.component.ts ***!
  \********************************************************************/
/*! exports provided: EmpresaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresaComponent", function() { return EmpresaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmpresaComponent = /** @class */ (function () {
    function EmpresaComponent() {
    }
    EmpresaComponent.prototype.ngOnInit = function () {
    };
    EmpresaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-empresa',
            template: __webpack_require__(/*! ./empresa.component.html */ "./src/app/layout/administracion/empresa/empresa.component.html"),
            styles: [__webpack_require__(/*! ./empresa.component.scss */ "./src/app/layout/administracion/empresa/empresa.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmpresaComponent);
    return EmpresaComponent;
}());



/***/ })

}]);
//# sourceMappingURL=administracion-administracion-module.js.map