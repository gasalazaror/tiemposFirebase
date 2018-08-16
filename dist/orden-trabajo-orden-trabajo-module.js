(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orden-trabajo-orden-trabajo-module"],{

/***/ "./src/app/layout/orden-trabajo/app-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/app-routing.module.ts ***!
  \************************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _crear_orden_crear_orden_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crear-orden/crear-orden.component */ "./src/app/layout/orden-trabajo/crear-orden/crear-orden.component.ts");
/* harmony import */ var _consultar_orden_consultar_orden_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consultar-orden/consultar-orden.component */ "./src/app/layout/orden-trabajo/consultar-orden/consultar-orden.component.ts");
/* harmony import */ var _informacion_orden_informacion_orden_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./informacion-orden/informacion-orden.component */ "./src/app/layout/orden-trabajo/informacion-orden/informacion-orden.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'crearorden',
        component: _crear_orden_crear_orden_component__WEBPACK_IMPORTED_MODULE_2__["CrearOrdenComponent"]
    },
    {
        path: 'consultarorden',
        component: _consultar_orden_consultar_orden_component__WEBPACK_IMPORTED_MODULE_3__["ConsultarOrdenComponent"]
    },
    {
        path: 'informacionorden/:id',
        component: _informacion_orden_informacion_orden_component__WEBPACK_IMPORTED_MODULE_4__["InformacionOrdenComponent"]
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

/***/ "./src/app/layout/orden-trabajo/consultar-orden/consultar-orden.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/consultar-orden/consultar-orden.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  consultar-orden works!\n</p>\n"

/***/ }),

/***/ "./src/app/layout/orden-trabajo/consultar-orden/consultar-orden.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/consultar-orden/consultar-orden.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/orden-trabajo/consultar-orden/consultar-orden.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/consultar-orden/consultar-orden.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ConsultarOrdenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarOrdenComponent", function() { return ConsultarOrdenComponent; });
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

var ConsultarOrdenComponent = /** @class */ (function () {
    function ConsultarOrdenComponent() {
    }
    ConsultarOrdenComponent.prototype.ngOnInit = function () {
    };
    ConsultarOrdenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consultar-orden',
            template: __webpack_require__(/*! ./consultar-orden.component.html */ "./src/app/layout/orden-trabajo/consultar-orden/consultar-orden.component.html"),
            styles: [__webpack_require__(/*! ./consultar-orden.component.scss */ "./src/app/layout/orden-trabajo/consultar-orden/consultar-orden.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConsultarOrdenComponent);
    return ConsultarOrdenComponent;
}());



/***/ }),

/***/ "./src/app/layout/orden-trabajo/crear-orden/crear-orden.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/crear-orden/crear-orden.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [heading]=\"'Crear orden de trabajo'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Información del cliente\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <button class=\"btn btn-light btn-sm\" (click)=\"open(content)\">\n                <i class=\"fa fa-plus\"></i> Nuevo\n              </button>\n              <hr>\n              <table class=\"table table-sm table-bordered table-sm\n              \">\n                <tbody>\n                  <tr>\n                    <th>Buscar</th>\n                    <td>\n                      <form class=\"form\" [formGroup]=\"ClienteForm\" (ngSubmit)=\"seleccionarPersona()\">\n                        <div class=\"\">\n                          <ng-select class=\"form-control\" autofocus style=\"width: 250px;\" (change)=\"seleccionarPersona()\" class=\"form-control\" [items]=\"personas | async\"\n                            bindLabel=\"data.nombre\" formControlName=\"persona\">\n                          </ng-select>\n                        </div>\n                      </form>\n\n                    </td>\n                  </tr>\n                  <tr>\n                    <th>Cédula / RUC</th>\n                    <td>{{ (personaSeleccionada)?.data.cedula | uppercase }}</td>\n                  </tr>\n                  <tr>\n                    <th>Nombre / Razón social</th>\n                    <td>{{ (personaSeleccionada)?.data.nombre | uppercase }}</td>\n                  </tr>\n                  <tr>\n                    <th>Dirección</th>\n                    <td>{{ (personaSeleccionada)?.data.direccion | uppercase }}</td>\n                  </tr>\n                  <tr>\n                    <th>Correo</th>\n                    <td>{{ (personaSeleccionada)?.data.correo }}</td>\n                  </tr>\n                  <tr>\n                    <th>Teléfono</th>\n                    <td>{{ (personaSeleccionada)?.data.telefono | uppercase }}</td>\n                  </tr>\n\n\n                </tbody>\n              </table>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Información del vehículo\n        </div>\n        <div class=\"card-body\">\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <button class=\"btn btn-light btn-sm\" (click)=\"open(content2)\">\n                <i class=\"fa fa-plus\"></i> Nuevo\n              </button>\n              <hr>\n              <table class=\"table table-sm table-bordered table-sm\">\n                <tbody>\n                  <tr>\n                    <th>Buscar</th>\n                    <td>\n                      <form class=\"form\" [formGroup]=\"VehiculoForm\" (ngSubmit)=\"seleccionarPersona()\">\n                        <div class=\"\">\n                          <ng-select class=\"form-control\" autofocus style=\"width: 250px;\" (change)=\"seleccionarVehiculo()\" class=\"form-control\" [items]=\"vehiculos | async\"\n                            bindLabel=\"data.placa\" formControlName=\"vehiculo\">\n                          </ng-select>\n                        </div>\n                      </form>\n\n                    </td>\n                  </tr>\n                  <tr>\n                    <th>ID / Placa</th>\n                    <td>{{ (vehiculoSeleccionado)?.data.placa | uppercase }}</td>\n                  </tr>\n                  <tr>\n                    <th>Marca</th>\n                    <td>{{ (vehiculoSeleccionado)?.data.marca | uppercase }}</td>\n                  </tr>\n                  <tr>\n                    <th>Modelo</th>\n                    <td>{{ (vehiculoSeleccionado)?.data.modelo | uppercase }}</td>\n                  </tr>\n                  <tr>\n                    <th>Color</th>\n                    <td>{{ (vehiculoSeleccionado)?.data.color }}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Servicios\n        </div>\n        <div class=\"card-body\">\n          <button class=\"btn btn-light btn-sm\" (click)=\"open(content3)\">\n            <i class=\"fa fa-plus\"></i> Nuevo\n          </button>\n          <hr> Servicios disponibles:\n          <form class=\"form\" [formGroup]=\"ServicioForm\" (ngSubmit)=\"seleccionarServicio()\">\n            <div class=\"\">\n              <ng-select class=\"form-control\" style=\"width: 250px;\" (change)=\"seleccionarServicio()\" class=\"form-control\" [items]=\"servicios | async\"\n                bindLabel=\"data.descripcion\" formControlName=\"servicio\">\n              </ng-select>\n            </div>\n          </form>\n          <hr>\n          <p><strong>Servicios seleccionados: </strong>{{serviciosSeleccionados.length}}</p>\n          <table class=\"table table-bordered table-sm\">\n            <thead>\n              <tr>\n                <th></th>\n                <th scope=\"col\">Servicio</th>\n                <th scope=\"col\">Descripción</th>\n                <th scope=\"col\">Tiempo estandar</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let servicio of serviciosSeleccionados;let i = index\">\n                <td>\n                    <button (click)=\"eliminarServicio(i)\" type=\"button\" class=\"btn btn-danger btn-sm\">\n                        <i class=\"fa fa-trash\"></i>\n                      </button>\n                </td>\n                <td *ngIf=\"servicio.data\">{{servicio.data.descripcion}}</td>\n                <td *ngIf=\"servicio.data\">{{servicio.data.detalle}}</td>\n                <td *ngIf=\"servicio.data\">{{servicio.data.tiempoEstandar}} minutos</td>\n              </tr>\n\n            </tbody>\n          </table>\n          <hr>\n\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n</div>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n\n  <div class=\"modal-header\">\n\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n\n    <app-crear-persona></app-crear-persona>\n  </div>\n\n</ng-template>\n\n<ng-template #content2 let-c=\"close\" let-d=\"dismiss\">\n\n  <div class=\"modal-header\">\n\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n\n    <app-crear-vehiculo></app-crear-vehiculo>\n  </div>\n  <div class=\"modal-footer\">\n   \n  </div>\n</ng-template>\n\n<ng-template #content3 let-c=\"close\" let-d=\"dismiss\">\n\n  <div class=\"modal-header\">\n\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n\n    <app-crear-servicio></app-crear-servicio>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cerrar</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/layout/orden-trabajo/crear-orden/crear-orden.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/crear-orden/crear-orden.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/orden-trabajo/crear-orden/crear-orden.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/crear-orden/crear-orden.component.ts ***!
  \***************************************************************************/
/*! exports provided: CrearOrdenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearOrdenComponent", function() { return CrearOrdenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _servicios_persona_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../servicios/persona.service */ "./src/app/servicios/persona.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _servicios_vehiculo_vehiculo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../servicios/vehiculo/vehiculo.service */ "./src/app/servicios/vehiculo/vehiculo.service.ts");
/* harmony import */ var _servicios_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../servicios/servicio/servicio.service */ "./src/app/servicios/servicio/servicio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CrearOrdenComponent = /** @class */ (function () {
    function CrearOrdenComponent(personaService, fb, modalService, vehiculoService, servicioService) {
        this.personaService = personaService;
        this.fb = fb;
        this.modalService = modalService;
        this.vehiculoService = vehiculoService;
        this.servicioService = servicioService;
        this.ClienteForm = this.fb.group({
            persona: [{}, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.ServicioForm = this.fb.group({
            servicio: [{}, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.VehiculoForm = this.fb.group({
            vehiculo: [{}, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.vehiculos = this.vehiculoService.obtenerVehiculos();
        this.serviciosSeleccionados = [];
    }
    CrearOrdenComponent.prototype.ngOnInit = function () {
        this.obtenerPersonas();
        this.obtenerServicios();
    };
    CrearOrdenComponent.prototype.obtenerPersonas = function () {
        this.personas = this.personaService.obtenerPersonas();
    };
    CrearOrdenComponent.prototype.obtenerServicios = function () {
        this.servicios = this.servicioService.obtenerServicios();
    };
    CrearOrdenComponent.prototype.seleccionarPersona = function () {
        this.personaSeleccionada = this.ClienteForm.value.persona;
        this.VehiculoForm = this.fb.group({
            vehiculo: [{}, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.vehiculos = this.personaService.obtenerVehiculos(this.personaSeleccionada.id);
    };
    CrearOrdenComponent.prototype.seleccionarServicio = function () {
        if (this.ServicioForm.value.servicio.data) {
            this.serviciosSeleccionados.push(this.ServicioForm.value.servicio);
        }
    };
    CrearOrdenComponent.prototype.eliminarServicio = function (indice) {
        this.serviciosSeleccionados.splice(indice, 1);
    };
    CrearOrdenComponent.prototype.seleccionarVehiculo = function () {
        this.vehiculoSeleccionado = this.VehiculoForm.value.vehiculo;
    };
    CrearOrdenComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
        });
    };
    CrearOrdenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crear-orden',
            template: __webpack_require__(/*! ./crear-orden.component.html */ "./src/app/layout/orden-trabajo/crear-orden/crear-orden.component.html"),
            styles: [__webpack_require__(/*! ./crear-orden.component.scss */ "./src/app/layout/orden-trabajo/crear-orden/crear-orden.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_servicios_persona_service__WEBPACK_IMPORTED_MODULE_2__["PersonaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _servicios_vehiculo_vehiculo_service__WEBPACK_IMPORTED_MODULE_5__["VehiculoService"],
            _servicios_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_6__["ServicioService"]])
    ], CrearOrdenComponent);
    return CrearOrdenComponent;
}());



/***/ }),

/***/ "./src/app/layout/orden-trabajo/informacion-orden/informacion-orden.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/informacion-orden/informacion-orden.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  informacion-orden works!\n</p>\n"

/***/ }),

/***/ "./src/app/layout/orden-trabajo/informacion-orden/informacion-orden.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/informacion-orden/informacion-orden.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/orden-trabajo/informacion-orden/informacion-orden.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/informacion-orden/informacion-orden.component.ts ***!
  \***************************************************************************************/
/*! exports provided: InformacionOrdenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionOrdenComponent", function() { return InformacionOrdenComponent; });
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

var InformacionOrdenComponent = /** @class */ (function () {
    function InformacionOrdenComponent() {
    }
    InformacionOrdenComponent.prototype.ngOnInit = function () {
    };
    InformacionOrdenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-informacion-orden',
            template: __webpack_require__(/*! ./informacion-orden.component.html */ "./src/app/layout/orden-trabajo/informacion-orden/informacion-orden.component.html"),
            styles: [__webpack_require__(/*! ./informacion-orden.component.scss */ "./src/app/layout/orden-trabajo/informacion-orden/informacion-orden.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InformacionOrdenComponent);
    return InformacionOrdenComponent;
}());



/***/ }),

/***/ "./src/app/layout/orden-trabajo/orden-trabajo.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/orden-trabajo.module.ts ***!
  \**************************************************************/
/*! exports provided: OrdenTrabajoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenTrabajoModule", function() { return OrdenTrabajoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/layout/orden-trabajo/app-routing.module.ts");
/* harmony import */ var _crear_orden_crear_orden_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-orden/crear-orden.component */ "./src/app/layout/orden-trabajo/crear-orden/crear-orden.component.ts");
/* harmony import */ var _consultar_orden_consultar_orden_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consultar-orden/consultar-orden.component */ "./src/app/layout/orden-trabajo/consultar-orden/consultar-orden.component.ts");
/* harmony import */ var _informacion_orden_informacion_orden_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./informacion-orden/informacion-orden.component */ "./src/app/layout/orden-trabajo/informacion-orden/informacion-orden.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _persona_persona_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../persona/persona.module */ "./src/app/layout/persona/persona.module.ts");
/* harmony import */ var _vehiculo_vehiculo_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../vehiculo/vehiculo.module */ "./src/app/layout/vehiculo/vehiculo.module.ts");
/* harmony import */ var _servicio_servicio_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../servicio/servicio.module */ "./src/app/layout/servicio/servicio.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var OrdenTrabajoModule = /** @class */ (function () {
    function OrdenTrabajoModule() {
    }
    OrdenTrabajoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["PageHeaderModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"].forRoot(),
                _persona_persona_module__WEBPACK_IMPORTED_MODULE_10__["PersonaModule"],
                _vehiculo_vehiculo_module__WEBPACK_IMPORTED_MODULE_11__["VehiculoModule"],
                _servicio_servicio_module__WEBPACK_IMPORTED_MODULE_12__["ServicioModule"]
            ],
            declarations: [_crear_orden_crear_orden_component__WEBPACK_IMPORTED_MODULE_3__["CrearOrdenComponent"], _consultar_orden_consultar_orden_component__WEBPACK_IMPORTED_MODULE_4__["ConsultarOrdenComponent"], _informacion_orden_informacion_orden_component__WEBPACK_IMPORTED_MODULE_5__["InformacionOrdenComponent"]]
        })
    ], OrdenTrabajoModule);
    return OrdenTrabajoModule;
}());



/***/ })

}]);
//# sourceMappingURL=orden-trabajo-orden-trabajo-module.js.map