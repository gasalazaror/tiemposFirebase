(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orden-trabajo-orden-trabajo-module~servicio-servicio-module"],{

/***/ "./src/app/layout/servicio/app-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/servicio/app-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _crear_servicio_crear_servicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crear-servicio/crear-servicio.component */ "./src/app/layout/servicio/crear-servicio/crear-servicio.component.ts");
/* harmony import */ var _consultar_servicio_consultar_servicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consultar-servicio/consultar-servicio.component */ "./src/app/layout/servicio/consultar-servicio/consultar-servicio.component.ts");
/* harmony import */ var _informacion_servicio_informacion_servicio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./informacion-servicio/informacion-servicio.component */ "./src/app/layout/servicio/informacion-servicio/informacion-servicio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'crearservicio',
        component: _crear_servicio_crear_servicio_component__WEBPACK_IMPORTED_MODULE_2__["CrearServicioComponent"]
    },
    {
        path: 'consultarservicio',
        component: _consultar_servicio_consultar_servicio_component__WEBPACK_IMPORTED_MODULE_3__["ConsultarServicioComponent"]
    },
    {
        path: 'informacionservicio/:id',
        component: _informacion_servicio_informacion_servicio_component__WEBPACK_IMPORTED_MODULE_4__["InformacionServicioComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/servicio/consultar-servicio/consultar-servicio.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/servicio/consultar-servicio/consultar-servicio.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Consultar servicio'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12\">\r\n\r\n\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">Servicios</div>\r\n        <div class=\"card-body table-responsive\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n        \r\n                <th>Código</th>\r\n                <th>Servicio</th>\r\n                <th>Tiempo estandar</th>\r\n                <th>Categoría</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let servicio of servicios | async\">\r\n            \r\n                <td>{{servicio.data.codigo | uppercase}}</td>\r\n                <td>\r\n                  <a href=\"\">{{servicio.data.descripcion | uppercase}}</a>\r\n                </td>\r\n                <td>{{servicio.data.tiempoEstandar}} minutos</td>\r\n                <td></td>\r\n\r\n              </tr>\r\n\r\n\r\n\r\n            </tbody>\r\n          </table>\r\n\r\n        \r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/layout/servicio/consultar-servicio/consultar-servicio.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/servicio/consultar-servicio/consultar-servicio.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/servicio/consultar-servicio/consultar-servicio.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/servicio/consultar-servicio/consultar-servicio.component.ts ***!
  \************************************************************************************/
/*! exports provided: ConsultarServicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarServicioComponent", function() { return ConsultarServicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _servicios_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../servicios/servicio/servicio.service */ "./src/app/servicios/servicio/servicio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConsultarServicioComponent = /** @class */ (function () {
    function ConsultarServicioComponent(servicioService) {
        this.servicioService = servicioService;
    }
    ConsultarServicioComponent.prototype.ngOnInit = function () {
        this.obtenerServicios();
    };
    ConsultarServicioComponent.prototype.obtenerServicios = function () {
        this.servicios = this.servicioService.obtenerServicios();
        this.servicios.forEach(function (element) {
            console.log(element);
        });
    };
    ConsultarServicioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consultar-servicio',
            template: __webpack_require__(/*! ./consultar-servicio.component.html */ "./src/app/layout/servicio/consultar-servicio/consultar-servicio.component.html"),
            styles: [__webpack_require__(/*! ./consultar-servicio.component.scss */ "./src/app/layout/servicio/consultar-servicio/consultar-servicio.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_servicios_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_2__["ServicioService"]])
    ], ConsultarServicioComponent);
    return ConsultarServicioComponent;
}());



/***/ }),

/***/ "./src/app/layout/servicio/crear-servicio/crear-servicio.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/layout/servicio/crear-servicio/crear-servicio.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Crear servicio'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n\r\n\r\n  <div class=\"row container\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Seleccionar categoría\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div>\r\n                <ul class=\"list-inline border\">\r\n                  <li class=\"list-inline-item\" *ngFor=\"let categoria of categorias | async\">\r\n                    <button type=\"button\" (click)=\"seleccionarCategoria(categoria)\" class=\"btn btn-link\">{{categoria.data.nombre}}</button>\r\n                  </li>\r\n                  <li class=\"list-inline-item\">\r\n                    <button class=\"btn btn-default btn-sm\" (click)=agregarCategoria()>\r\n                      <i class=\"fa fa-plus\"></i>\r\n                    </button>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"categoriaSeleccionada\" class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Información del servicio\r\n        </div>\r\n        <div class=\"card-body\">\r\n\r\n          <p *ngIf=\"categoriaSeleccionada\">\r\n            <strong>Categoria: </strong>{{categoriaSeleccionada.data.nombre}}</p>\r\n          <form class=\"form-inline\" [formGroup]=\"servicioForm\" (ngSubmit)=\"guardarServicio()\">\r\n            <div class=\"form-group mb-2 mx-sm-2\">\r\n              <label for=\"staticEmail2\" class=\"\">Código</label>\r\n              <input autofocus type=\"text\" formControlName=\"codigo\" style=\"max-width: 150px;\" class=\"form-control\" id=\"staticEmail2\">\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group mb-2 mx-sm-2\">\r\n              <label for=\"staticEmail2\" class=\"\">Servicio</label>\r\n              <input type=\"text\" formControlName=\"descripcion\" class=\"form-control\" id=\"staticEmail2\">\r\n            </div>\r\n\r\n            <div class=\"form-group mb-2 mx-sm-2\">\r\n              <label for=\"staticEmail2\" class=\"\">Detalle</label>\r\n              <input type=\"text\" formControlName=\"detalle\" class=\"form-control\" id=\"staticEmail2\">\r\n            </div>\r\n\r\n            <div class=\"form-group mb-2 mx-sm-3\">\r\n              <label for=\"staticEmail2\" class=\"\">Tiempo estandar(min)</label>\r\n              <input type=\"number\" formControlName=\"tiempoEstandar\" style=\"max-width: 100px;\" class=\"form-control\" id=\"staticEmail2\">\r\n            </div>\r\n\r\n            <button type=\"submit\" [disabled]=\"!servicioForm.valid\" class=\"btn btn-primary mb-2\">Guardar</button>\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/servicio/crear-servicio/crear-servicio.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/layout/servicio/crear-servicio/crear-servicio.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/servicio/crear-servicio/crear-servicio.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/servicio/crear-servicio/crear-servicio.component.ts ***!
  \****************************************************************************/
/*! exports provided: CrearServicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearServicioComponent", function() { return CrearServicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../servicios/servicio/servicio.service */ "./src/app/servicios/servicio/servicio.service.ts");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CrearServicioComponent = /** @class */ (function () {
    function CrearServicioComponent(servicioService, fb) {
        this.servicioService = servicioService;
        this.fb = fb;
        this.servicioForm = this.fb.group({
            codigo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tiempoEstandar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            detalle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    CrearServicioComponent.prototype.ngOnInit = function () {
        this.obtenerCategorias();
    };
    CrearServicioComponent.prototype.seleccionarCategoria = function (categoria) {
        this.categoriaSeleccionada = categoria;
        console.log(this.categoriaSeleccionada);
    };
    CrearServicioComponent.prototype.agregarCategoria = function () {
        var categoria = prompt('Ingrese el nombre de la categoría', '');
        if (categoria) {
            this.servicioService.crearCategoria({ nombre: categoria.toUpperCase().trim() }).then(function (categoria) {
            }, function (error) { });
        }
        else {
        }
    };
    CrearServicioComponent.prototype.obtenerCategorias = function () {
        this.categorias = this.servicioService.obtenerCategorias();
    };
    CrearServicioComponent.prototype.guardarServicio = function () {
        var _this = this;
        this.servicioService.crearServicio(this.categoriaSeleccionada.id, this.servicioForm.value)
            .then(function (servicio) {
            console.log(servicio);
            _this.servicioForm.reset();
        }, function (error) {
        });
    };
    CrearServicioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crear-servicio',
            template: __webpack_require__(/*! ./crear-servicio.component.html */ "./src/app/layout/servicio/crear-servicio/crear-servicio.component.html"),
            styles: [__webpack_require__(/*! ./crear-servicio.component.scss */ "./src/app/layout/servicio/crear-servicio/crear-servicio.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_servicios_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CrearServicioComponent);
    return CrearServicioComponent;
}());



/***/ }),

/***/ "./src/app/layout/servicio/informacion-servicio/informacion-servicio.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/servicio/informacion-servicio/informacion-servicio.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  informacion-servicio works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/layout/servicio/informacion-servicio/informacion-servicio.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/servicio/informacion-servicio/informacion-servicio.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/servicio/informacion-servicio/informacion-servicio.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/servicio/informacion-servicio/informacion-servicio.component.ts ***!
  \****************************************************************************************/
/*! exports provided: InformacionServicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionServicioComponent", function() { return InformacionServicioComponent; });
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

var InformacionServicioComponent = /** @class */ (function () {
    function InformacionServicioComponent() {
    }
    InformacionServicioComponent.prototype.ngOnInit = function () {
    };
    InformacionServicioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-informacion-servicio',
            template: __webpack_require__(/*! ./informacion-servicio.component.html */ "./src/app/layout/servicio/informacion-servicio/informacion-servicio.component.html"),
            styles: [__webpack_require__(/*! ./informacion-servicio.component.scss */ "./src/app/layout/servicio/informacion-servicio/informacion-servicio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InformacionServicioComponent);
    return InformacionServicioComponent;
}());



/***/ }),

/***/ "./src/app/layout/servicio/servicio.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/servicio/servicio.module.ts ***!
  \****************************************************/
/*! exports provided: ServicioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioModule", function() { return ServicioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _crear_servicio_crear_servicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crear-servicio/crear-servicio.component */ "./src/app/layout/servicio/crear-servicio/crear-servicio.component.ts");
/* harmony import */ var _consultar_servicio_consultar_servicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consultar-servicio/consultar-servicio.component */ "./src/app/layout/servicio/consultar-servicio/consultar-servicio.component.ts");
/* harmony import */ var _informacion_servicio_informacion_servicio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./informacion-servicio/informacion-servicio.component */ "./src/app/layout/servicio/informacion-servicio/informacion-servicio.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/layout/servicio/app-routing.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ServicioModule = /** @class */ (function () {
    function ServicioModule() {
    }
    ServicioModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"].forRoot(),
            ],
            exports: [_crear_servicio_crear_servicio_component__WEBPACK_IMPORTED_MODULE_2__["CrearServicioComponent"]],
            declarations: [_crear_servicio_crear_servicio_component__WEBPACK_IMPORTED_MODULE_2__["CrearServicioComponent"], _consultar_servicio_consultar_servicio_component__WEBPACK_IMPORTED_MODULE_3__["ConsultarServicioComponent"], _informacion_servicio_informacion_servicio_component__WEBPACK_IMPORTED_MODULE_4__["InformacionServicioComponent"]]
        })
    ], ServicioModule);
    return ServicioModule;
}());



/***/ }),

/***/ "./src/app/servicios/servicio/servicio.service.ts":
/*!********************************************************!*\
  !*** ./src/app/servicios/servicio/servicio.service.ts ***!
  \********************************************************/
/*! exports provided: ServicioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioService", function() { return ServicioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicioService = /** @class */ (function () {
    function ServicioService(afs) {
        this.afs = afs;
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    }
    ServicioService.prototype.crearCategoria = function (categoria) {
        var id = this.afs.createId();
        return this.empresa.collection('categorias').doc(id).set(categoria);
    };
    ServicioService.prototype.crearServicio = function (categoria, servicio) {
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
        var itemDoc = this.afs.doc('categorias/' + categoria);
        var id = this.afs.createId();
        this.empresa.collection('servicios').doc(id).set(servicio);
        return this.empresa.collection('servicios').doc(id).update({ categoria: itemDoc.ref });
    };
    ServicioService.prototype.obtenerCategorias = function () {
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
        return this.empresa.collection('categorias').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return { id: id, data: data };
        }); }));
    };
    ServicioService.prototype.obtenerServicios = function () {
        var _this = this;
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
        return this.empresa.collection('servicios').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            var uid = a.payload.doc.ref.id;
            var ref = _this.afs.collection('categorias').doc(uid);
            return { id: id, data: data, ref: ref };
        }); }));
    };
    ServicioService.prototype.crearVehiculo = function (persona, vehiculo) {
        var itemDoc = this.afs.doc('personas/' + persona);
        var id = this.afs.createId();
        this.empresa.collection('vehiculos').doc(id).set(vehiculo);
        return this.empresa.collection('vehiculos').doc(id).update({ dueno: itemDoc.ref });
    };
    ServicioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ServicioService);
    return ServicioService;
}());



/***/ })

}]);
//# sourceMappingURL=orden-trabajo-orden-trabajo-module~servicio-servicio-module.js.map