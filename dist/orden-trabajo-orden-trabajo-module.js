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
/* harmony import */ var _operacion_operacion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operacion/operacion.component */ "./src/app/layout/orden-trabajo/operacion/operacion.component.ts");
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
    },
    {
        path: 'operaciones',
        component: _operacion_operacion_component__WEBPACK_IMPORTED_MODULE_5__["OperacionComponent"]
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

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Consultar ordenes de trabajo'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12\">\r\n\r\n\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">Ordenes de trabajo</div>\r\n        <div class=\"card-body table-responsive\">\r\n          <table class=\"table table-bordered\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n            <thead>\r\n              <tr>\r\n                  <th></th>\r\n                <th>Fecha</th>\r\n                <th>Hora</th>\r\n                <th>ID Cliente</th>\r\n                <th>Nombre del cliente</th>\r\n                <th>Vehículo</th>\r\n          \r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let orden of ordenes | async\">\r\n                  <td>\r\n                      <a href=\"/orden/informacionorden/{{orden.id}}\" class=\"btn btn-sm btn-primary\">\r\n                        <i class=\"fa fa-eye\"></i>\r\n                      </a>\r\n                     \r\n                   \r\n                    </td>\r\n    \r\n                <td>{{(orden.data.fecha.seconds)*1000 | date : 'dd/MM/yyyy'}}</td>\r\n                <td>{{(orden.data.fecha.seconds)*1000 | date : 'hh:mm a'}}</td>\r\n                <td>{{orden.data.cliente.cedula}}</td>\r\n                <td>{{orden.data.cliente.nombre}}</td>\r\n                <td>\r\n                  {{orden.data.vehiculo.placa}} - {{orden.data.vehiculo.marca}} - {{orden.data.vehiculo.modelo}}\r\n\r\n                </td>\r\n\r\n              \r\n               \r\n\r\n              </tr>\r\n\r\n\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n</div>"

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
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ConsultarOrdenComponent.prototype.ngOnInit = function () {
        this.obtenerOrdenes();
    };
    ConsultarOrdenComponent.prototype.obtenerOrdenes = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            autoWidth: true,
        };
        this.ordenes = this.ordenService.obtenerOrdenes();
        this.ordenes.subscribe(function (res) {
            _this.dtTrigger.next();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], ConsultarOrdenComponent.prototype, "dtElement", void 0);
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

module.exports = "<div [@routerTransition]>\n  <app-page-header [heading]=\"'Crear orden de trabajo'\" [icon]=\"'fa-edit'\"></app-page-header>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Información de la orden de trabajo\n        </div>\n        <div class=\"card-body\" style=\"font-size: 14px\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <label for=\"\">Cliente:</label>\n              <form class=\"form\" [formGroup]=\"ClienteForm\" (ngSubmit)=\"seleccionarPersona()\">\n                <div class=\"row\">\n                  <div class=\"col-md-10 col-sm-10 col-xs-10\">\n                    <ng-select class=\"form-control\" style=\"font-size: 14px\" autofocus style=\"width: 250px;\" (change)=\"seleccionarPersona()\" class=\"form-control\"\n                      [items]=\"personas | async\" bindLabel=\"data.nombre\" formControlName=\"persona\">\n                    </ng-select>\n                  </div>\n                  <div class=\"col-md-2 col-sm-2 col-xs-2\">\n                    <button class=\"btn btn-white disabled\"><i class=\"fa fa-search\"></i></button>\n                  </div>\n\n\n                </div>\n\n              </form>\n            </div>\n            <div *ngIf=\"\">\n            </div>\n            <div class=\"col\">\n              <label for=\"\">Cédula</label>\n              <br> {{ (personaSeleccionada)?.data.cedula | uppercase }}\n            </div>\n            <div class=\"col\">\n              <label for=\"\">Dirección</label>\n              <br> {{ (personaSeleccionada)?.data.direccion | uppercase }}\n            </div>\n            <div class=\"col\">\n              <label for=\"\">Teléfono</label>\n              <br> {{ (personaSeleccionada)?.data.telefono | uppercase }}\n            </div>\n            <div class=\"col\">\n              <label for=\"\">Correo</label>\n              <br> {{ (personaSeleccionada)?.data.correo }}\n            </div>\n            <div class=\"col\">\n              <label for=\"\"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </label>\n              <button class=\"btn btn-primary \" (click)=\"open(content)\">\n                <i class=\"fa fa-plus\"></i> Nuevo\n              </button>\n            </div>\n          </div>\n          <hr>\n          <div class=\"row\">\n            <div class=\"col\">\n              <label for=\"\">Vehículo:</label>\n              <form class=\"form\" [formGroup]=\"VehiculoForm\" (ngSubmit)=\"seleccionarPersona()\">\n                <div class=\"row\">\n                  <div class=\"col-md-10 col-sm-10 col-xs-10\">\n                    <ng-select class=\"form-control\" autofocus style=\"width: 250px;\" (change)=\"seleccionarVehiculo()\" class=\"form-control\" [items]=\"vehiculos | async\"\n                      bindLabel=\"data.placa\" formControlName=\"vehiculo\">\n                    </ng-select>\n                  </div>\n\n                  <div class=\"col-md-2 col-sm-2 col-xs-2\">\n                    <div class=\"\">\n                      <button class=\"btn btn-white disabled\"><i class=\"fa fa-search\"></i></button>\n                    </div>\n                  </div>\n\n                </div>\n              </form>\n            </div>\n            <div class=\"col\">\n              <label for=\"\">Placa</label>\n              <br> {{ (vehiculoSeleccionado)?.data.placa | uppercase }}\n            </div>\n            <div class=\"col\">\n              <label for=\"\">Marca</label>\n              <br> {{ (vehiculoSeleccionado)?.data.marca | uppercase }}\n            </div>\n            <div class=\"col\">\n              <label for=\"\">Modelo</label>\n              <br> {{ (vehiculoSeleccionado)?.data.modelo | uppercase }}\n            </div>\n            <div class=\"col\">\n              <label for=\"\">Color</label>\n              <br> {{ (vehiculoSeleccionado)?.data.color | uppercase }}\n            </div>\n            <div class=\"col\">\n              <label for=\"\"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </label>\n              <button class=\"btn btn-primary \" (click)=\"open(content2)\">\n                <i class=\"fa fa-plus\"></i> Nuevo\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Servicios\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            Servicios disponibles:\n            <form class=\"form\" [formGroup]=\"ServicioForm\" (ngSubmit)=\"seleccionarServicio()\">\n              <div class=\"row\">\n                <div class=\"col-md-8\">\n                  <ng-select class=\"form-control\" style=\"width: 250px;\" (change)=\"seleccionarServicio()\" class=\"form-control\" [items]=\"servicios | async\"\n                    bindLabel=\"data.descripcion\" formControlName=\"servicio\">\n                  </ng-select>\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"\">\n                    <button class=\"btn btn-white disabled\"><i class=\"fa fa-search\"></i></button>\n                  </div>\n                </div>\n\n              </div>\n            </form>\n            <button class=\"btn btn-primary \" (click)=\"open(contentServicio)\">\n              <i class=\"fa fa-plus\"></i> Nuevo\n            </button>\n          </div>\n          <hr>\n          <p>\n            <strong>Servicios seleccionados: </strong>{{serviciosSeleccionados.length}}</p>\n          <table class=\"table table-bordered table-sm\">\n            <thead>\n              <tr>\n                <th></th>\n                <th scope=\"col\">Servicio</th>\n                <th scope=\"col\">Descripción</th>\n                <th scope=\"col\">Tiempo estandar</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let servicio of serviciosSeleccionados;let i = index\">\n                <td>\n                  <button (click)=\"eliminarServicio(i)\" type=\"button\" class=\"btn btn-danger btn-sm\">\n                    <i class=\"fa fa-trash\"></i>\n                  </button>\n                </td>\n                <td *ngIf=\"servicio.data\">{{servicio.data.descripcion}}</td>\n                <td *ngIf=\"servicio.data\">{{servicio.data.detalle}}</td>\n                <td *ngIf=\"servicio.data\">{{servicio.data.tiempoEstandar}} minutos</td>\n              </tr>\n            </tbody>\n          </table>\n          <hr>\n\n          <button [disabled]=\"serviciosSeleccionados.length==0 || ClienteForm.persona=={} || VehiculoForm.vehiculo=={}\" class=\"btn btn-primary\"\n            (click)=\"guardarOrden()\">Guardar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-crear-persona></app-crear-persona>\n  </div>\n</ng-template>\n<ng-template #content2 let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-crear-vehiculo [id]=\"nuevo\"></app-crear-vehiculo>\n  </div>\n  <div class=\"modal-footer\">\n  </div>\n</ng-template>\n\n\n<ng-template #contentServicio let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-crear-servicio></app-crear-servicio>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cerrar</button>\n  </div>\n</ng-template>"

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
        // this.VehiculoForm = this.fb.group({
        //   vehiculo: [{}, Validators.required]
        // })
        // this.vehiculos = this.personaService.obtenerVehiculos(this.personaSeleccionada.id)
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

module.exports = "<div [@routerTransition]>\n  <app-page-header [heading]=\"'Información vehículo'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Información de la orden de trabajo\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <table class=\"table table-sm table-bordered\">\n\n            <tbody>\n              <tr>\n                <th>Fecha </th>\n                <td>{{ (orden | async)?.fecha.seconds*1000 | date : 'dd/MM/yyyy hh:mm a' }}</td>\n              </tr>\n\n              <tr>\n                <th>ID Cliente</th>\n                <td>{{ (orden | async)?.cliente.cedula }}</td>\n              </tr>\n\n              <tr>\n                <th>Nombre cliente</th>\n                <td>{{ (orden | async)?.cliente.nombre }}</td>\n              </tr>\n              <tr>\n                <th>Vehículo</th>\n                <td>{{ (orden | async)?.vehiculo.placa }} - {{ (orden | async)?.vehiculo.marca }} - {{ (orden | async)?.vehiculo.modelo\n                  }}\n                </td>\n              </tr>\n\n\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Servicios\n    </div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>Servicio</th>\n            <th>Descripcioón</th>\n            <th>Tiempo estandar</th>\n            <th>Estado</th>\n            <th>Operador asignado</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let servicio of servicios let index = index\">\n            <td>{{servicio.descripcion}}</td>\n            <td>{{servicio.detalle}}</td>\n            <td>{{servicio.tiempoEstandar}} minutos</td>\n            <td>{{servicio.estado}}</td>\n            <td>\n\n              <div class=\"\">\n                <ng-select class=\"form-control\" style=\"font-size: 14px\" [(ngModel)]=\"servicio.operador\" autofocus style=\"width: 250px;\"\n                  class=\"form-control\" [items]=\"personas | async\" bindLabel=\"data.nombre\"  (change)=\"seleccionarPersona(servicio, index)\">\n                </ng-select>\n              </div>\n\n            </td>\n\n          </tr>\n\n\n\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n\n\n\n\n</div>"

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

/***/ "./src/app/layout/orden-trabajo/operacion/operacion.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/operacion/operacion.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Operaciones'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12\">\r\n\r\n\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Ordenes de trabajo</div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <div class=\"card\">\r\n\r\n              <div class=\"card-body\">\r\n                <p><strong>Estado</strong></p>\r\n                <div class=\"row\">\r\n                  <div class=\"col\" class=\"table-success\" style=\"width: 15px\"></div>\r\n                  <div class=\"col\">POR FACTURAR</div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col\" class=\"table-warning\" style=\"width: 15px\"></div>\r\n                  <div class=\"col\">EN PRODUCCIÓN</div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col\" class=\"table-danger\" style=\"width: 15px\"></div>\r\n                  <div class=\"col\">CITA/RECEPCIÓN-EN ESPERA</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <br><br>\r\n            <a target=\"_blank\" class=\"btn btn-primary\" href=\"https://kanban-mobil.firebaseapp.com/\">Ir a operaciones</a>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"card-body table-responsive\">\r\n\r\n          <table class=\"table table-bordered table-sm table-responsive-sm\">\r\n            <thead>\r\n\r\n              <tr>\r\n\r\n                <th>Cliente</th>\r\n                <th>Vehículo</th>\r\n                <th>Servicio</th>\r\n                <th>T. estandar</th>\r\n                <th>Estado</th>\r\n                <th>Operador</th>\r\n\r\n\r\n\r\n\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let servicio of tareas \" [class.table-warning]=\"servicio.servicio.estado=='EN PRODUCCIÓN' || servicio.servicio.estado=='EN PRODUCCIÓN - PAUSADO'\"\r\n                [class.table-danger]=\"servicio.servicio.estado=='CITA/RECEPCION' || servicio.servicio.estado=='EN ESPERA DE PRODUCCIÓN'\"\r\n                [class.table-success]=\"servicio.servicio.estado=='POR FACTURAR'\">\r\n\r\n                <td>\r\n                  {{servicio.cliente.nombre}}\r\n                </td>\r\n                <td>\r\n                  {{servicio.vehiculo.placa}} - {{servicio.vehiculo.marca}} - {{servicio.vehiculo.modelo}}\r\n                </td>\r\n                <td>\r\n                  {{servicio.servicio.descripcion}}\r\n                </td>\r\n                <td>\r\n                  {{servicio.servicio.tiempoEstandar}} minutos\r\n                </td>\r\n                <td>\r\n                  {{servicio.servicio.estado}}\r\n                  <div *ngIf=\"servicio.servicio.estado=='EN PRODUCCIÓN - PAUSADO'\">\r\n           \r\n                    <p><strong>Motivo: </strong>{{servicio.servicio.motivo}}</p>\r\n                  </div>\r\n                 \r\n                </td>\r\n\r\n                <td>\r\n                  {{servicio.servicio.operador.data.nombre}}\r\n                </td>\r\n\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/layout/orden-trabajo/operacion/operacion.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/operacion/operacion.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/orden-trabajo/operacion/operacion.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/operacion/operacion.component.ts ***!
  \***********************************************************************/
/*! exports provided: OperacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperacionComponent", function() { return OperacionComponent; });
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



var OperacionComponent = /** @class */ (function () {
    function OperacionComponent(ordenService) {
        this.ordenService = ordenService;
    }
    OperacionComponent.prototype.ngOnInit = function () {
        this.obtenerOrdenes();
    };
    OperacionComponent.prototype.obtenerOrdenes = function () {
        var _this = this;
        this.ordenes = this.ordenService.obtenerOrdenes();
        this.ordenes.subscribe(function (res) {
            _this.tareas = [];
            res.forEach(function (element) {
                element.data.servicios.forEach(function (servicio) {
                    if (!servicio.operador) {
                        servicio.operador = { data: { nombre: '' } };
                    }
                    var motivo = '';
                    if (servicio.pausas) {
                        servicio.pausas.forEach(function (pausa) {
                            if (pausa.id == servicio.pausaActual) {
                                servicio.motivo = pausa.motivo.motivo;
                            }
                        });
                    }
                    _this.tareas.push({ cliente: element.data.cliente, servicio: servicio, vehiculo: element.data.vehiculo });
                });
                console.log(_this.tareas);
            });
        });
    };
    OperacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operacion',
            template: __webpack_require__(/*! ./operacion.component.html */ "./src/app/layout/orden-trabajo/operacion/operacion.component.html"),
            styles: [__webpack_require__(/*! ./operacion.component.scss */ "./src/app/layout/orden-trabajo/operacion/operacion.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_servicios_orden_orden_service__WEBPACK_IMPORTED_MODULE_2__["OrdenService"]])
    ], OperacionComponent);
    return OperacionComponent;
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
/* harmony import */ var _operacion_operacion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./operacion/operacion.component */ "./src/app/layout/orden-trabajo/operacion/operacion.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
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
                _servicio_servicio_module__WEBPACK_IMPORTED_MODULE_12__["ServicioModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_14__["DataTablesModule"]
            ],
            declarations: [_crear_orden_crear_orden_component__WEBPACK_IMPORTED_MODULE_3__["CrearOrdenComponent"], _consultar_orden_consultar_orden_component__WEBPACK_IMPORTED_MODULE_4__["ConsultarOrdenComponent"], _informacion_orden_informacion_orden_component__WEBPACK_IMPORTED_MODULE_5__["InformacionOrdenComponent"], _operacion_operacion_component__WEBPACK_IMPORTED_MODULE_13__["OperacionComponent"]]
        })
    ], OrdenTrabajoModule);
    return OrdenTrabajoModule;
}());



/***/ })

}]);
//# sourceMappingURL=orden-trabajo-orden-trabajo-module.js.map