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

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Consultar ordenes de trabajo'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12\">\r\n\r\n\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">Ordenes de trabajo</div>\r\n        <div class=\"card-body table-responsive\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>Fecha</th>\r\n                <th>Hora</th>\r\n                <th>ID Cliente</th>\r\n                <th>Nombre del cliente</th>\r\n                <th>Vehículo</th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let orden of ordenes | async\">\r\n                <td>{{(orden.data.fecha.seconds)*1000 | date : 'dd/MM/yyyy'}}</td>\r\n                <td>{{(orden.data.fecha.seconds)*1000 | date : 'hh:mm a'}}</td>\r\n                <td>{{orden.data.cliente.cedula}}</td>\r\n                <td>{{orden.data.cliente.nombre}}</td>\r\n                <td>\r\n                  {{orden.data.vehiculo.placa}} - {{orden.data.vehiculo.marca}} - {{orden.data.vehiculo.modelo}}\r\n\r\n                </td>\r\n                <td>\r\n                  <a href=\"/orden/informacionorden/{{orden.id}}\" class=\"btn btn-sm btn-primar\">\r\n                    <i class=\"fa fa-eye\"></i>\r\n                  </a>\r\n                 \r\n                  \r\n                  <button class=\"btn btn-sm btn-danger\">\r\n                    <i class=\"fa fa-trash\"></i>\r\n                  </button>\r\n                </td>\r\n\r\n\r\n              </tr>\r\n\r\n\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n</div>"

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
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _servicios_orden_orden_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../servicios/orden/orden.service */ "./src/app/servicios/orden/orden.service.ts");
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
    function ConsultarOrdenComponent(ordenService) {
        this.ordenService = ordenService;
    }
    ConsultarOrdenComponent.prototype.ngOnInit = function () {
        this.obtenerOrdenes();
    };
    ConsultarOrdenComponent.prototype.obtenerOrdenes = function () {
        this.ordenes = this.ordenService.obtenerOrdenes();
        this.ordenes.forEach(function (element) {
            console.log(element);
        });
    };
    ConsultarOrdenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consultar-orden',
            template: __webpack_require__(/*! ./consultar-orden.component.html */ "./src/app/layout/orden-trabajo/consultar-orden/consultar-orden.component.html"),
            styles: [__webpack_require__(/*! ./consultar-orden.component.scss */ "./src/app/layout/orden-trabajo/consultar-orden/consultar-orden.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_servicios_orden_orden_service__WEBPACK_IMPORTED_MODULE_2__["OrdenService"]])
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

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Crear orden de trabajo'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Información de la orden de trabajo\r\n        </div>\r\n        <div class=\"card-body\" style=\"font-size: 14px\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <label for=\"\">Cliente:</label>\r\n              <form class=\"form\" [formGroup]=\"ClienteForm\" (ngSubmit)=\"seleccionarPersona()\">\r\n                <div class=\"\">\r\n                  <ng-select class=\"form-control\" style=\"font-size: 14px\" autofocus style=\"width: 250px;\" (change)=\"seleccionarPersona()\" class=\"form-control\"\r\n                    [items]=\"personas | async\" bindLabel=\"data.nombre\" formControlName=\"persona\">\r\n                  </ng-select>\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <div *ngIf=\"\">\r\n            </div>\r\n            <div class=\"col\">\r\n              <label for=\"\">Cédula</label>\r\n              <br> {{ (personaSeleccionada)?.data.cedula | uppercase }}\r\n            </div>\r\n            <div class=\"col\">\r\n              <label for=\"\">Dirección</label>\r\n              <br> {{ (personaSeleccionada)?.data.direccion | uppercase }}\r\n            </div>\r\n            <div class=\"col\">\r\n              <label for=\"\">Teléfono</label>\r\n              <br> {{ (personaSeleccionada)?.data.telefono | uppercase }}\r\n            </div>\r\n            <div class=\"col\">\r\n              <label for=\"\">Correo</label>\r\n              <br> {{ (personaSeleccionada)?.data.correo }}\r\n            </div>\r\n            <div class=\"col\">\r\n              <label for=\"\"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </label>\r\n              <button class=\"btn btn-primary \" (click)=\"open(content)\">\r\n                <i class=\"fa fa-plus\"></i> Nuevo\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <label for=\"\">Vehículo:</label>\r\n              <form class=\"form\" [formGroup]=\"VehiculoForm\" (ngSubmit)=\"seleccionarPersona()\">\r\n                <div class=\"\"  >\r\n                  <ng-select class=\"form-control\" autofocus style=\"width: 250px;\" (change)=\"seleccionarVehiculo()\" class=\"form-control\" [items]=\"vehiculos | async\"  \r\n                  bindLabel=\"data.placa\" formControlName=\"vehiculo\" >\r\n                  </ng-select>\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <div class=\"col\">\r\n              <label for=\"\">Placa</label>\r\n              <br> {{ (vehiculoSeleccionado)?.data.placa | uppercase }}\r\n            </div>\r\n            <div class=\"col\">\r\n              <label for=\"\">Marca</label>\r\n              <br> {{ (vehiculoSeleccionado)?.data.marca | uppercase }}\r\n            </div>\r\n            <div class=\"col\">\r\n              <label for=\"\">Modelo</label>\r\n              <br> {{ (vehiculoSeleccionado)?.data.modelo | uppercase }}\r\n            </div>\r\n            <div class=\"col\">\r\n              <label for=\"\">Color</label>\r\n              <br> {{ (vehiculoSeleccionado)?.data.color | uppercase }}\r\n            </div>\r\n            <div class=\"col\">\r\n              <label for=\"\"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </label>\r\n              <button class=\"btn btn-primary \" (click)=\"open(content2)\">\r\n                <i class=\"fa fa-plus\"></i> Nuevo\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Servicios\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            Servicios disponibles:\r\n            <form class=\"form\" [formGroup]=\"ServicioForm\" (ngSubmit)=\"seleccionarServicio()\">\r\n              <div class=\"\">\r\n                <ng-select class=\"form-control\" style=\"width: 250px;\" (change)=\"seleccionarServicio()\" class=\"form-control\" [items]=\"servicios | async\"\r\n                  bindLabel=\"data.descripcion\" formControlName=\"servicio\">\r\n                </ng-select>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <hr>\r\n          <p>\r\n            <strong>Servicios seleccionados: </strong>{{serviciosSeleccionados.length}}</p>\r\n          <table class=\"table table-bordered table-sm\">\r\n            <thead>\r\n              <tr>\r\n                <th></th>\r\n                <th scope=\"col\">Servicio</th>\r\n                <th scope=\"col\">Descripción</th>\r\n                <th scope=\"col\">Tiempo estandar</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let servicio of serviciosSeleccionados;let i = index\">\r\n                <td>\r\n                  <button (click)=\"eliminarServicio(i)\" type=\"button\" class=\"btn btn-danger btn-sm\">\r\n                    <i class=\"fa fa-trash\"></i>\r\n                  </button>\r\n                </td>\r\n                <td *ngIf=\"servicio.data\">{{servicio.data.descripcion}}</td>\r\n                <td *ngIf=\"servicio.data\">{{servicio.data.detalle}}</td>\r\n                <td *ngIf=\"servicio.data\">{{servicio.data.tiempoEstandar}} minutos</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <hr>\r\n\r\n          <button [disabled]=\"serviciosSeleccionados.length==0 || ClienteForm.persona=={} || VehiculoForm.vehiculo=={}\" class=\"btn btn-primary\" (click)=\"guardarOrden()\">Guardar</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <app-crear-persona></app-crear-persona>\r\n  </div>\r\n</ng-template>\r\n<ng-template #content2 let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <app-crear-vehiculo></app-crear-vehiculo>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n  </div>\r\n</ng-template>\r\n<ng-template #content3 let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <app-crear-servicio></app-crear-servicio>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cerrar</button>\r\n  </div>\r\n</ng-template>"

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
/* harmony import */ var _servicios_orden_orden_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../servicios/orden/orden.service */ "./src/app/servicios/orden/orden.service.ts");
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
    function CrearOrdenComponent(personaService, fb, modalService, vehiculoService, servicioService, ordenService) {
        this.personaService = personaService;
        this.fb = fb;
        this.modalService = modalService;
        this.vehiculoService = vehiculoService;
        this.servicioService = servicioService;
        this.ordenService = ordenService;
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
        this.personas = this.personaService.obtenerClientes();
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
    CrearOrdenComponent.prototype.guardarOrden = function () {
        var confirmacion = confirm("¿Está seguro que desea guardar la orden");
        if (confirmacion) {
            var vehiculo = {
                placa: this.vehiculoSeleccionado.data.placa,
                marca: this.vehiculoSeleccionado.data.marca,
                modelo: this.vehiculoSeleccionado.data.modelo,
                color: this.vehiculoSeleccionado.data.color,
                numeroMotor: this.vehiculoSeleccionado.data.numeroMotor,
                numeroChasis: this.vehiculoSeleccionado.data.numeroChasis
            };
            var cliente = {
                cedula: this.personaSeleccionada.data.cedula,
                nombre: this.personaSeleccionada.data.nombre,
                direccion: this.personaSeleccionada.data.direccion,
                telefono: this.personaSeleccionada.data.direccion,
                correo: this.personaSeleccionada.data.correo
            };
            var servicios = [];
            this.serviciosSeleccionados.forEach(function (servicio) {
                servicios.push({ codigo: servicio.data.codigo, descripcion: servicio.data.descripcion, detalle: servicio.data.detalle, tiempoEstandar: servicio.data.tiempoEstandar, estado: 'CITA/RECEPCION' });
            });
            var orden = {
                cliente: cliente,
                vehiculo: vehiculo,
                servicios: servicios,
                fecha: new Date()
            };
            this.ordenService.crearOrden(orden, servicios);
            this.reiniciar();
        }
    };
    CrearOrdenComponent.prototype.reiniciar = function () {
        this.personaSeleccionada = null;
        this.vehiculoSeleccionado = null;
        this.serviciosSeleccionados = [];
        this.ClienteForm = this.fb.group({
            persona: [{}, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.VehiculoForm = this.fb.group({
            vehiculo: [{}, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
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
            _servicios_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_6__["ServicioService"],
            _servicios_orden_orden_service__WEBPACK_IMPORTED_MODULE_7__["OrdenService"]])
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

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Información vehículo'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Información de la orden de trabajo\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <table class=\"table table-sm table-bordered\">\r\n\r\n            <tbody>\r\n              <tr>\r\n                <th>Fecha </th>\r\n                <td>{{ (orden | async)?.fecha.seconds*1000 | date : 'dd/MM/yyyy hh:mm a' }}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>ID Cliente</th>\r\n                <td>{{ (orden | async)?.cliente.cedula }}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Nombre cliente</th>\r\n                <td>{{ (orden | async)?.cliente.nombre }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Vehículo</th>\r\n                <td>{{ (orden | async)?.vehiculo.placa }} - {{ (orden | async)?.vehiculo.marca }} - {{ (orden | async)?.vehiculo.modelo\r\n                  }}\r\n                </td>\r\n              </tr>\r\n\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Servicios\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <table class=\"table table-bordered\">\r\n        <thead>\r\n          <tr>\r\n            <th>Servicio</th>\r\n            <th>Descripcioón</th>\r\n            <th>Tiempo estandar</th>\r\n            <th>Estado</th>\r\n            <th>Operador asignado</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let servicio of servicios let index = index\">\r\n            <td>{{servicio.descripcion}}</td>\r\n            <td>{{servicio.detalle}}</td>\r\n            <td>{{servicio.tiempoEstandar}} minutos</td>\r\n            <td>{{servicio.estado}}</td>\r\n            <td>\r\n\r\n              <div class=\"\">\r\n                <ng-select class=\"form-control\" style=\"font-size: 14px\" [(ngModel)]=\"servicio.operador\" autofocus style=\"width: 250px;\"\r\n                  class=\"form-control\" [items]=\"personas | async\" bindLabel=\"data.nombre\"  (change)=\"seleccionarPersona(servicio, index)\">\r\n                </ng-select>\r\n              </div>\r\n\r\n            </td>\r\n\r\n          </tr>\r\n\r\n\r\n\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n</div>"

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
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_orden_orden_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servicios/orden/orden.service */ "./src/app/servicios/orden/orden.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _servicios_persona_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../servicios/persona.service */ "./src/app/servicios/persona.service.ts");
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
    function InformacionOrdenComponent(route, ordenService, fb, personaService) {
        var _this = this;
        this.route = route;
        this.ordenService = ordenService;
        this.fb = fb;
        this.personaService = personaService;
        this.PersonaForm = this.fb.group({
            persona: [{}, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.servicios = [];
        this.id = this.route.snapshot.paramMap.get('id');
        this.orden = this.ordenService.obtenerUnaOrden(this.id);
        this.orden.subscribe(function (res) {
            _this.servicios = res.servicios;
            console.log(_this.servicios);
        });
        this.personas = this.personaService.obtenerUsuarios();
    }
    InformacionOrdenComponent.prototype.seleccionarPersona = function (servicio, index) {
        console.log(this.servicios[index]);
        this.servicios[index].operador = servicio.operador;
        this.servicios[index].estado = 'EN ESPERA DE PRODUCCIÓN';
        this.ordenService.modificarServicio(this.id, { servicios: this.servicios, estado: 'EN ESPERA DE PRODUCCIÓN' });
    };
    InformacionOrdenComponent.prototype.ngOnInit = function () {
    };
    InformacionOrdenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-informacion-orden',
            template: __webpack_require__(/*! ./informacion-orden.component.html */ "./src/app/layout/orden-trabajo/informacion-orden/informacion-orden.component.html"),
            styles: [__webpack_require__(/*! ./informacion-orden.component.scss */ "./src/app/layout/orden-trabajo/informacion-orden/informacion-orden.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _servicios_orden_orden_service__WEBPACK_IMPORTED_MODULE_3__["OrdenService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _servicios_persona_service__WEBPACK_IMPORTED_MODULE_5__["PersonaService"]])
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
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
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



/***/ }),

/***/ "./src/app/servicios/orden/orden.service.ts":
/*!**************************************************!*\
  !*** ./src/app/servicios/orden/orden.service.ts ***!
  \**************************************************/
/*! exports provided: OrdenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenService", function() { return OrdenService; });
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



var OrdenService = /** @class */ (function () {
    function OrdenService(afs) {
        this.afs = afs;
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    }
    OrdenService.prototype.crearOrden = function (orden, servicios) {
        var id = this.afs.createId();
        return this.empresa.collection('ordenes').doc(id).set(orden);
    };
    OrdenService.prototype.obtenerOrdenes = function () {
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
        return this.empresa.collection('ordenes').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return { id: id, data: data };
        }); }));
    };
    OrdenService.prototype.obtenerUnaOrden = function (id) {
        return this.empresa.collection('ordenes').doc(id).valueChanges();
    };
    OrdenService.prototype.obtenerServicios = function (id) {
        return this.empresa.collection('ordenes').doc(id).collection('ordenServicios').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return { id: id, data: data };
        }); }));
    };
    OrdenService.prototype.modificarServicio = function (orden, datos) {
        return this.empresa.collection('ordenes').doc(orden).update(datos);
    };
    OrdenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], OrdenService);
    return OrdenService;
}());



/***/ })

}]);
//# sourceMappingURL=orden-trabajo-orden-trabajo-module.js.map