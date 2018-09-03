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
/* harmony import */ var _mis_ordenes_mis_ordenes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mis-ordenes/mis-ordenes.component */ "./src/app/layout/orden-trabajo/mis-ordenes/mis-ordenes.component.ts");
/* harmony import */ var _detalleOrden_detalle_orden_detalle_orden_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detalleOrden/detalle-orden/detalle-orden.component */ "./src/app/layout/orden-trabajo/detalleOrden/detalle-orden/detalle-orden.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'crearorden/:id',
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
        path: 'detalleorden/:id',
        component: _detalleOrden_detalle_orden_detalle_orden_component__WEBPACK_IMPORTED_MODULE_7__["DetalleOrdenComponent"]
    },
    {
        path: 'operaciones',
        component: _operacion_operacion_component__WEBPACK_IMPORTED_MODULE_5__["OperacionComponent"]
    },
    {
        path: 'misoperaciones',
        component: _mis_ordenes_mis_ordenes_component__WEBPACK_IMPORTED_MODULE_6__["MisOrdenesComponent"]
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

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Consultar ordenes de trabajo'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12\">\r\n\r\n\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">Ordenes de trabajo</div>\r\n        <div class=\"card-body table-responsive\">\r\n          <table  class=\"table \" datatable id=\"example-datatable\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n            <thead>\r\n              <tr>\r\n                <th></th>\r\n                <th>No. OT</th>\r\n                <th>Fecha OT</th>\r\n                <th>Hora</th>\r\n                <th>ID Cliente</th>\r\n                <th>Nombre del cliente</th>\r\n                <th>ID/Placa</th>\r\n     \r\n\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let orden of ordenes | async\">\r\n                <td>\r\n                  <div class=\"btn-group\">\r\n                    <a title=\"Editar Orden de trabajo\" href=\"/orden/crearorden/{{orden.id}}\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-pencil\"></i></a>\r\n                    <button title=\"Eliminar orden de trabajo\"  class=\"btn btn-danger btn-sm\" (click)=\"eliminarOrden(orden)\"><i class=\"fa fa-trash\"></i></button>\r\n                    <a title=\"Operaciones\" href=\"/orden/detalleorden/{{orden.id}}\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-clock-o\"></i></a>\r\n                  </div>\r\n\r\n                </td>\r\n\r\n\r\n                <td><a href=\"/orden/informacionorden/{{orden.id}}\">OT-{{orden.data.numero | anadirCeros:5}}</a></td>\r\n                <td>{{(orden.data.fecha.seconds)*1000 | date : 'dd/MM/yyyy'}}</td>\r\n                <td>{{(orden.data.fecha.seconds)*1000 | date : 'HH:mm'}}</td>\r\n                <td>{{orden.data.cliente.cedula}}</td>\r\n                <td>{{orden.data.cliente.nombre}}</td>\r\n\r\n                <td>\r\n                  {{orden.data.vehiculo.placa}}\r\n\r\n                </td>\r\n\r\n                \r\n\r\n\r\n\r\n\r\n              </tr>\r\n\r\n\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n</div>"

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
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
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
    function ConsultarOrdenComponent(ordenService, aFaut) {
        this.ordenService = ordenService;
        this.aFaut = aFaut;
        this.dtOptions = this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            autoWidth: true,
            language: {
                processing: "Procesando...",
                search: "Buscar:",
                lengthMenu: "Mostrar _MENU_ elementos",
                info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
                infoEmpty: "Mostrando ningún elemento.",
                infoFiltered: "(filtrado _MAX_ elementos total)",
                infoPostFix: "",
                loadingRecords: "Cargando registros...",
                zeroRecords: "No se encontraron registros",
                emptyTable: "No hay datos disponibles en la tabla",
                paginate: {
                    first: "Primero",
                    previous: "Anterior",
                    next: "Siguiente",
                    last: "Último"
                },
                aria: {
                    sortAscending: ": Activar para ordenar la tabla en orden ascendente",
                    sortDescending: ": Activar para ordenar la tabla en orden descendente"
                }
            }
        };
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ;
    ConsultarOrdenComponent.prototype.ngOnInit = function () {
        this.obtenerOrdenes();
    };
    ConsultarOrdenComponent.prototype.obtenerOrdenes = function () {
        var _this = this;
        this.ordenes = this.ordenService.obtenerOrdenes();
        this.ordenes.subscribe(function (res) {
            console.log(res);
            $('#example-datatable').DataTable().destroy();
            _this.dtTrigger.next();
        });
    };
    ConsultarOrdenComponent.prototype.eliminarOrden = function (orden) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: 'Está seguro?',
            text: "Está seguro que desea eliminar la orden seleccionada",
            type: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then(function (result) {
            if (result.value) {
                _this.ordenService.eliminarOrden(orden.id).then(function (res) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Listo!', 'Orden de trabajo eliminada correctamente.', 'success');
                });
            }
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
        __metadata("design:paramtypes", [_servicios_orden_orden_service__WEBPACK_IMPORTED_MODULE_2__["OrdenService"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]])
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

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Crear orden de trabajo'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n \r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n\r\n      <hr>\r\n      <h5>OT-{{numeroOrden | anadirCeros:5}}</h5>\r\n      <hr>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">Informacion del cliente <span style=\"color: red\">*</span></div>\r\n\r\n            <div class=\"card-body\">\r\n              <table class=\"table table-sm table-bordered\">\r\n                <tr>\r\n                  <th>Buscar:</th>\r\n                  <td>\r\n\r\n                    <div class=\"btn-group\">\r\n                      <form class=\"form\" [formGroup]=\"ClienteForm\" (ngSubmit)=\"seleccionarPersona()\">\r\n                        <ng-select class=\"form-control\" style=\"font-size: 14px\" autofocus style=\"width: 250px;\" (change)=\"seleccionarPersona()\" class=\"form-control\"\r\n                          [items]=\"personas | async\" bindLabel=\"data.nombre\" formControlName=\"persona\">\r\n                        </ng-select>\r\n                      </form>\r\n                      <button class=\"btn btn-white btn-sm\" (click)=\"open(content)\"><i class=\"fa fa-plus\"></i></button>\r\n                    </div>\r\n\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>Nombre:</th>\r\n                  <td>\r\n                    {{ (personaSeleccionada)?.data.nombre }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>Cédula/RUC:</th>\r\n                  <td>{{ (personaSeleccionada)?.data.cedula }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <th>Dirección:</th>\r\n                  <td>{{ (personaSeleccionada)?.data.direccion}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <th>Teléfono:</th>\r\n                  <td>{{ (personaSeleccionada)?.data.telefono }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <th>Correo:</th>\r\n                  <td>{{ (personaSeleccionada)?.data.correo }}</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">Información del vehículo <span style=\"color: red\">*</span></div>\r\n            <div class=\"card-body\">\r\n\r\n              <table class=\"table table-sm table-bordered\">\r\n                <tr>\r\n                  <th>Buscar:</th>\r\n                  <td>\r\n                    <div class=\"btn-group\">\r\n                      <form class=\"form\" [formGroup]=\"VehiculoForm\" (ngSubmit)=\"seleccionarPersona()\">\r\n                        <ng-select class=\"form-control\" autofocus style=\"width: 250px;\" (change)=\"seleccionarVehiculo()\" class=\"form-control\" [items]=\"vehiculos | async\"\r\n                          bindLabel=\"data.placa\" formControlName=\"vehiculo\">\r\n                        </ng-select>\r\n                      </form>\r\n                      <button class=\"btn btn-white btn-sm\" (click)=\"open(content2)\"><i class=\"fa fa-plus\"></i></button>\r\n                    </div>\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>ID/Placa:</th>\r\n                  <td>\r\n                    {{ (vehiculoSeleccionado)?.data.placa }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>Marca:</th>\r\n                  <td>\r\n                    {{ (vehiculoSeleccionado)?.data.marca }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>Modelo:</th>\r\n                  <td>\r\n                    {{ (vehiculoSeleccionado)?.data.modelo }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>Color:</th>\r\n                  <td>\r\n                    {{ (vehiculoSeleccionado)?.data.color }}\r\n                  </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <th>Motor:</th>\r\n                  <td>\r\n                    {{ (vehiculoSeleccionado)?.data.numeroMotor }}\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Registro de productos o servicios <span style=\"color: red\">*</span>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"btn-group\">\r\n              <p>Escoja producto o servicio: &nbsp;&nbsp;</p>\r\n              <form class=\"form\" [formGroup]=\"ServicioForm\" (ngSubmit)=\"seleccionarServicio()\">\r\n                  <ng-select class=\"form-control\" style=\"width: 250px;\" (change)=\"seleccionarServicio()\" class=\"form-control\" [items]=\"servicios | async\"\r\n                  bindLabel=\"data.descripcion\" formControlName=\"servicio\">\r\n                </ng-select>\r\n              </form>\r\n              <button class=\"btn btn-white btn-sm\" (click)=\"open(contentServicio)\">\r\n                <i class=\"fa fa-plus\"></i>\r\n              </button>\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n          <hr>\r\n\r\n          <p>\r\n            <strong>Servicios seleccionados: </strong>{{serviciosSeleccionados.length}}</p>\r\n          <table class=\"table table-bordered table-responsive-sm table-sm\">\r\n            <thead>\r\n              <tr>\r\n                <th></th>\r\n                <th scope=\"col\">Cantidad</th>\r\n                <th scope=\"col\">Código</th>\r\n                <th scope=\"col\">Servicio</th>\r\n\r\n                <th scope=\"col\">Tiempo estándar</th>\r\n                <th scope=\"col\">Estado</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let servicio of serviciosSeleccionados;let i = index\">\r\n                <td>\r\n                  <button [disabled]=\"servicio.data.estado=='POR FACTURAR'|| servicio.data.estado=='EN PRODUCCIÓN' || servicio.data.estado=='EN PRODUCCIÓN - PAUSADO'\" (click)=\"eliminarServicio(i)\" type=\"button\" class=\"btn btn-danger btn-sm\">\r\n                    <i class=\"fa fa-trash\"></i>\r\n                  </button>\r\n                </td>\r\n                <td *ngIf=\"servicio.data\"><input [disabled]=\"servicio.data.estado=='POR FACTURAR'|| servicio.data.estado=='EN PRODUCCIÓN' || servicio.data.estado=='EN PRODUCCIÓN - PAUSADO'\" style=\"max-width: 60px\" class=\"form-control\" type=\"number\" min=\"1\" [(ngModel)]=\"servicio.data.cantidad\"></td>\r\n                <td *ngIf=\"servicio.data\">{{servicio.data.codigo}}</td>\r\n                <td *ngIf=\"servicio.data\">{{servicio.data.descripcion}}</td>\r\n\r\n                <td *ngIf=\"servicio.data\">{{servicio.data.tiempoEstandar*60 | formatTime}}</td>\r\n                <td *ngIf=\"servicio.data\">{{servicio.data.estado}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <hr>\r\n\r\n          <button  class=\"btn btn-primary\"\r\n            (click)=\"guardarOrden()\">Guardar</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <app-crear-persona></app-crear-persona>\r\n  </div>\r\n</ng-template>\r\n<ng-template #content2 let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <app-crear-vehiculo [id]=\"nuevo\"></app-crear-vehiculo>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<ng-template #contentServicio let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <app-crear-servicio></app-crear-servicio>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cerrar</button>\r\n  </div>\r\n</ng-template>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
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
    function CrearOrdenComponent(personaService, fb, modalService, router, vehiculoService, servicioService, ordenService, route) {
        var _this = this;
        this.personaService = personaService;
        this.fb = fb;
        this.modalService = modalService;
        this.router = router;
        this.vehiculoService = vehiculoService;
        this.servicioService = servicioService;
        this.ordenService = ordenService;
        this.route = route;
        this.numeroOrden = 0;
        this.ClienteForm = this.fb.group({
            persona: [{}, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.ServicioForm = this.fb.group({
            servicio: [{}, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.VehiculoForm = this.fb.group({
            vehiculo: [{}, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.id = this.route.snapshot.paramMap.get('id');
        this.serviciosSeleccionados = [];
        if (this.id != 'nuevo') {
            this.orden = this.ordenService.obtenerUnaOrden(this.id);
            this.orden.subscribe(function (res) {
                _this.personaSeleccionada = { data: res.cliente };
                _this.vehiculoSeleccionado = { data: res.vehiculo };
                _this.serviciosRes = res.servicios;
                _this.serviciosSeleccionados = [];
                _this.serviciosRes.forEach(function (element) {
                    _this.serviciosSeleccionados.push({ data: element });
                    _this.numeroOrden = res.numero;
                });
            });
        }
        else {
            this.ultimaOrden = this.ordenService.obtenerUltimaOrden();
            this.ultimaOrden.subscribe(function (res) {
                _this.numeroOrden = res[0].numero + 1;
            });
        }
        this.vehiculos = this.vehiculoService.obtenerVehiculos();
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
            this.ServicioForm.value.servicio.data.estado = 'CITA/RECEPCION';
            this.ServicioForm.value.servicio.data.cantidad = 1;
            this.serviciosSeleccionados.push(this.ServicioForm.value.servicio);
        }
    };
    CrearOrdenComponent.prototype.guardarOrden = function () {
        var _this = this;
        if (!this.personaSeleccionada) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()('Existió un error!', 'Debe seleccionar un cliente', 'error');
        }
        else if (!this.vehiculoSeleccionado) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()('Existió un error!', 'Debe seleccionar un vehículo', 'error');
        }
        else if (this.serviciosSeleccionados.length <= 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()('Existió un error!', 'Debe seleccionar al menos un servicio', 'error');
        }
        else {
            if (this.id == 'nuevo') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                    title: 'Está seguro?',
                    text: "Está seguro que desea guardar la Orden de Trabajo",
                    type: 'question',
                    showCancelButton: true,
                    cancelButtonText: 'Cancelar',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, guardar!'
                }).then(function (result) {
                    if (result.value) {
                        var vehiculo = {
                            placa: _this.vehiculoSeleccionado.data.placa,
                            marca: _this.vehiculoSeleccionado.data.marca,
                            modelo: _this.vehiculoSeleccionado.data.modelo,
                            color: _this.vehiculoSeleccionado.data.color,
                            numeroMotor: _this.vehiculoSeleccionado.data.numeroMotor,
                            numeroChasis: _this.vehiculoSeleccionado.data.numeroChasis
                        };
                        var cliente = {
                            cedula: _this.personaSeleccionada.data.cedula,
                            nombre: _this.personaSeleccionada.data.nombre,
                            direccion: _this.personaSeleccionada.data.direccion,
                            telefono: _this.personaSeleccionada.data.telefono,
                            correo: _this.personaSeleccionada.data.correo
                        };
                        var servicios = [];
                        _this.serviciosSeleccionados.forEach(function (servicio) {
                            if (!servicio.data.operador) {
                                servicio.data.operador = { id: '', data: {} };
                            }
                            servicios.push({ cantidad: servicio.data.cantidad, operador: servicio.data.operador, codigo: servicio.data.codigo, estado: servicio.data.estado, descripcion: servicio.data.descripcion, detalle: servicio.data.detalle, tiempoEstandar: servicio.data.tiempoEstandar });
                        });
                        var orden = {
                            numero: _this.numeroOrden,
                            cliente: cliente,
                            vehiculo: vehiculo,
                            servicios: servicios,
                            fecha: new Date()
                        };
                        var id = _this.ordenService.crearOrden(orden, servicios);
                        _this.reiniciar();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()('Listo!', 'Orden de Trabajo creada exitosamente.', 'success');
                        _this.router.navigate(['/orden/informacionorden/' + id]);
                    }
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                    title: 'Está seguro?',
                    text: "Está seguro que desea modifica la Orden de Trabajo",
                    type: 'question',
                    showCancelButton: true,
                    cancelButtonText: 'Cancelar',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, eliminar!'
                }).then(function (result) {
                    if (result.value) {
                        var vehiculo = {
                            placa: _this.vehiculoSeleccionado.data.placa,
                            marca: _this.vehiculoSeleccionado.data.marca,
                            modelo: _this.vehiculoSeleccionado.data.modelo,
                            color: _this.vehiculoSeleccionado.data.color,
                            numeroMotor: _this.vehiculoSeleccionado.data.numeroMotor,
                            numeroChasis: _this.vehiculoSeleccionado.data.numeroChasis
                        };
                        var cliente = {
                            cedula: _this.personaSeleccionada.data.cedula,
                            nombre: _this.personaSeleccionada.data.nombre,
                            direccion: _this.personaSeleccionada.data.direccion,
                            telefono: _this.personaSeleccionada.data.telefono,
                            correo: _this.personaSeleccionada.data.correo
                        };
                        var servicios = [];
                        console.log(_this.serviciosSeleccionados);
                        _this.serviciosSeleccionados.forEach(function (servicio) {
                            if (!servicio.data.operador) {
                                servicio.data.operador = { id: '', data: {} };
                            }
                            servicios.push(servicio.data);
                        });
                        var orden = {
                            numero: _this.numeroOrden,
                            cliente: cliente,
                            vehiculo: vehiculo,
                            servicios: servicios,
                            fecha: new Date()
                        };
                        _this.ordenService.modificarOrden(_this.id, orden);
                        _this.reiniciar();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()('Listo!', 'Orden de Trabajo modificada exitosamente.', 'success');
                        _this.router.navigate(['/orden/informacionorden/' + _this.id]);
                    }
                });
            }
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
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
            title: 'Esta seguro?',
            text: "Está seguro que desea eliminar el servicio seleccionado",
            type: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then(function (result) {
            if (result.value) {
                _this.serviciosSeleccionados.splice(indice, 1);
                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()('Listo!', 'Servicio eliminado correctamente', 'success');
            }
        });
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
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _servicios_vehiculo_vehiculo_service__WEBPACK_IMPORTED_MODULE_5__["VehiculoService"],
            _servicios_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_6__["ServicioService"],
            _servicios_orden_orden_service__WEBPACK_IMPORTED_MODULE_7__["OrdenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], CrearOrdenComponent);
    return CrearOrdenComponent;
}());



/***/ }),

/***/ "./src/app/layout/orden-trabajo/detalle-tarea/detalle-tarea.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/detalle-tarea/detalle-tarea.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  detalle-tarea works!\n</p>\n"

/***/ }),

/***/ "./src/app/layout/orden-trabajo/detalle-tarea/detalle-tarea.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/detalle-tarea/detalle-tarea.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/orden-trabajo/detalle-tarea/detalle-tarea.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/detalle-tarea/detalle-tarea.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DetalleTareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleTareaComponent", function() { return DetalleTareaComponent; });
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

var DetalleTareaComponent = /** @class */ (function () {
    function DetalleTareaComponent() {
    }
    DetalleTareaComponent.prototype.ngOnInit = function () {
    };
    DetalleTareaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalle-tarea',
            template: __webpack_require__(/*! ./detalle-tarea.component.html */ "./src/app/layout/orden-trabajo/detalle-tarea/detalle-tarea.component.html"),
            styles: [__webpack_require__(/*! ./detalle-tarea.component.scss */ "./src/app/layout/orden-trabajo/detalle-tarea/detalle-tarea.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DetalleTareaComponent);
    return DetalleTareaComponent;
}());



/***/ }),

/***/ "./src/app/layout/orden-trabajo/detalleOrden/detalle-orden/detalle-orden.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/detalleOrden/detalle-orden/detalle-orden.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Detalle orden'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Información de la orden de trabajo\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <table class=\"table table-sm table-bordered\">\r\n\r\n            <tbody>\r\n              <tr>\r\n                <th>No. OT </th>\r\n                <td>OT-{{(orden | async)?.numero | anadirCeros:5}}</td>\r\n              </tr>\r\n\r\n\r\n              <tr>\r\n                <th>Fecha OT </th>\r\n                <td>{{ (orden | async)?.fecha.seconds*1000 | date : 'dd/MM/yyyy HH:mm' }}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>ID Cliente</th>\r\n                <td>{{ (orden | async)?.cliente.cedula }}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Nombre cliente</th>\r\n                <td>{{ (orden | async)?.cliente.nombre }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Vehículo</th>\r\n                <td>{{ (orden | async)?.vehiculo.placa }} - {{ (orden | async)?.vehiculo.marca }} - {{ (orden | async)?.vehiculo.modelo\r\n                  }}\r\n                </td>\r\n              </tr>\r\n\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <table class=\"table table-sm\">\r\n\r\n            <tbody>\r\n              <tr>\r\n                <th>Operaciones finalizadas </th>\r\n                <td>{{finalizadas}} de {{ servicios.length }}</td>\r\n              </tr>\r\n\r\n             \r\n\r\n             \r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Operaciones\r\n    </div>\r\n    <div class=\"card-body\">\r\n\r\n\r\n\r\n\r\n      <ngb-tabset>\r\n        <ngb-tab title=\"Operaciones\">\r\n          <ng-template ngbTabContent>\r\n            <table class=\"table table-bordered table-responsive-sm table-sm\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Acciones</th>\r\n                  <th>Cantidad</th>\r\n                  <th>Código</th>\r\n                  <th>Servicio</th>\r\n\r\n                  <th>T.E.</th>\r\n                  <th>Estado</th>\r\n                  <th>Operador asignado</th>\r\n\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let servicio of servicios let index = index\">\r\n                  <td>\r\n                    <button *ngIf=\"servicio.estado=='EN ESPERA DE PRODUCCIÓN'\" (click)=\"iniciarServicio(index)\" class=\"btn btn-success btn-sm\" title=\"Iniciar\">\r\n                      <i class=\"fa fa-play\"></i>\r\n\r\n                    </button>\r\n\r\n                    <button *ngIf=\"servicio.estado=='EN PRODUCCIÓN'\" (click)=\"open(content, index)\" class=\"btn btn-warning btn-sm\" title=\"Pausar\">\r\n                      <i class=\"fa fa-pause\"></i>\r\n                    </button>\r\n\r\n                    <button *ngIf=\"servicio.estado=='EN PRODUCCIÓN'\" (click)=\"finalizarServicio(index)\" title=\"Detener\" class=\"btn btn-danger btn-sm\">\r\n                      <i class=\"fa fa-stop\"></i>\r\n                    </button>\r\n                    <button *ngIf=\"servicio.estado=='EN PRODUCCIÓN - PAUSADO'\" (click)=\"reanudarServicio(index)\" class=\"btn btn-success btn-sm text-white\" title=\"Reanudar\">\r\n                      <i class=\"fa fa-play\"></i>\r\n                    </button>\r\n\r\n                    <button *ngIf=\"servicio.estado=='POR FACTURAR'\" (click)=\"open2(content2, index)\" class=\"btn btn-primary btn-sm\">\r\n                      <i class=\"fa fa-eye\"></i>\r\n                    </button>\r\n                  </td>\r\n                  <td>{{servicio.cantidad}}</td>\r\n                  <td>{{servicio.codigo}}</td>\r\n                  <td>{{servicio.descripcion}}</td>\r\n\r\n                  <td>{{servicio.tiempoEstandar*60*servicio.cantidad | formatTime}}</td>\r\n                  <td>\r\n                    {{servicio.estado}}\r\n                    <p *ngIf=\"servicio.estado=='EN PRODUCCIÓN - PAUSADO'\"> <strong>Motivo: </strong>{{servicio.motivoPausa}}</p>\r\n                  </td>\r\n                  <td>\r\n                    <p *ngIf=\"servicio.operador\">{{servicio.operador.data.nombre}}</p>\r\n                  </td>\r\n\r\n\r\n                </tr>\r\n\r\n\r\n\r\n              </tbody>\r\n            </table>\r\n          </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab>\r\n          <ng-template ngbTabTitle><b>Resumen</b></ng-template>\r\n          <ng-template ngbTabContent>\r\n\r\n\r\n\r\n            <hr>\r\n\r\n            <table id=\"example-datatable\" class=\"table table-bordered table-responsive-sm table-sm\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Cantidad</th>\r\n                  <th>Código</th>\r\n                  <th>Servicio</th>\r\n                  <th>Operador</th>\r\n                  <th>Tiempo Estándar</th>\r\n                  <th>Lead Time</th>\r\n                  <th>Tiempo Real</th>\r\n                  <th>Eficiencia</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n\r\n                <ng-container *ngFor=\"let servicio of servicios \">\r\n                  <tr *ngIf=\"servicio.estado=='POR FACTURAR'\" [class.table-success]=\"servicio.eficiencia>=100\" [class.table-warning]=\"servicio.eficiencia>=80 && servicio.eficiencia<100\"\r\n                    [class.table-danger]=\"servicio.eficiencia<80\">\r\n                   <td>{{servicio.cantidad}}</td>\r\n                    <td>\r\n                      {{servicio.codigo}}\r\n                    </td>\r\n                    <td>\r\n                      {{servicio.descripcion}}\r\n                    </td>\r\n                    <td>\r\n                      {{servicio.operador.data.nombre}}\r\n                    </td>\r\n                    <td>\r\n                      {{servicio.estadisticas.tiempoEstandar | formatTime}}\r\n                    </td>\r\n                    <td>\r\n                      {{servicio.estadisticas.leadTime | formatTime}}\r\n                    </td>\r\n                    <td>\r\n                      {{servicio.estadisticas.tiempoReal | formatTime}}\r\n                    </td>\r\n                    <td>\r\n                      {{servicio.estadisticas.eficiencia}}%\r\n                    </td>\r\n                  </tr>\r\n                </ng-container>\r\n\r\n              </tbody>\r\n            </table>\r\n\r\n          </ng-template>\r\n        </ngb-tab>\r\n\r\n      </ngb-tabset>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n      <h5>Pausar operación</h5>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <p><strong>Servicio: </strong>{{servicioSeleccionado.descripcion}}</p>\r\n      <p><strong>Motivo pausa:</strong>\r\n        <select [(ngModel)]=\"pausa.motivo\">\r\n          <option value=\"\">Seleccionar un motivo...</option>\r\n          <option value=\"FALTA DE AUTORIZACIÓN\">FALTA DE AUTORIZACIÓN</option>\r\n          <option value=\"FALTA DE REPUESTOS\">FALTA DE REPUESTOS</option>\r\n          <option value=\"TRABAJOS DE TERCEROS\">TRABAJOS DE TERCEROS</option>\r\n          <option value=\"OTRO TRABAJO\">OTRO TRABAJO</option>\r\n          <option value=\"BREAK\">BREAK</option>\r\n          <option value=\"ALMUERZO\">ALMUERZO</option>\r\n          <option value=\"FINALIZACIÓN DE JORNADA LABORAL\">FINALIZACIÓN DE JORNADA LABORAL</option>\r\n        </select></p>\r\n\r\n      <p><strong>Observación:</strong> <input [(ngModel)]=\"pausa.observacion\" type=\"text\"></p>\r\n      <p><button [disabled]=\"pausa.motivo==''\" class=\"btn btn-primary\" (click)=\"pausar(); c('Close click')\">Guardar</button></p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cerrar</button>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #content2 let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n      <h5>Detalle de la operación</h5>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">información</div>\r\n        <div class=\"card-body\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <table class=\"table table-bordered table-sm\">\r\n                <tr>\r\n                  <th>Servicio:</th>\r\n                  <td>{{servicioSeleccionado.descripcion}}</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <th>Operador:</th>\r\n                  <td>{{servicioSeleccionado.operador.data.nombre}}</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <th>Hora Inicio </th>\r\n                  <td>{{ servicioSeleccionado.horaInicio.seconds*1000 | date : 'dd/MM/yyyy HH:mm' }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <th>Hora Fin </th>\r\n                  <td>{{ servicioSeleccionado.horaFin.seconds*1000 | date : 'dd/MM/yyyy HH:mm' }}</td>\r\n                </tr>\r\n\r\n              </table>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <table class=\"table table-bordered table-sm\">\r\n\r\n                <tr>\r\n                  <th>Tiempo estándar</th>\r\n                  <td>{{ servicioSeleccionado.estadisticas.tiempoEstandar | formatTime}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <th>LeadTime</th>\r\n                  <td>{{ servicioSeleccionado.estadisticas.leadTime | formatTime}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <th>Pausas</th>\r\n                  <td>{{ servicioSeleccionado.estadisticas.pausas | formatTime}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <th>Tiempo real</th>\r\n                  <td>{{ servicioSeleccionado.estadisticas.tiempoReal | formatTime}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <th>Eficiencia</th>\r\n                  <td>{{ servicioSeleccionado.estadisticas.eficiencia }}%</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Pausas\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>Hora inicio</th>\r\n                <th>Hora fin</th>\r\n                <th>Motivo</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let pausa of servicioSeleccionado.pausas\">\r\n                <td>{{ pausa.horaInicio.seconds*1000 | date : 'dd/MM/yyyy HH:mm' }}</td>\r\n                <td>{{ pausa.horaFin.seconds*1000 | date : 'dd/MM/yyyy HH:mm' }}</td>\r\n                <td>{{pausa.motivo.motivo}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cerrar</button>\r\n    </div>\r\n  </ng-template>\r\n\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/layout/orden-trabajo/detalleOrden/detalle-orden/detalle-orden.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/detalleOrden/detalle-orden/detalle-orden.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/orden-trabajo/detalleOrden/detalle-orden/detalle-orden.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/detalleOrden/detalle-orden/detalle-orden.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DetalleOrdenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleOrdenComponent", function() { return DetalleOrdenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_orden_orden_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../servicios/orden/orden.service */ "./src/app/servicios/orden/orden.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DetalleOrdenComponent = /** @class */ (function () {
    function DetalleOrdenComponent(route, modalService, ordenService, db) {
        var _this = this;
        this.route = route;
        this.modalService = modalService;
        this.ordenService = ordenService;
        this.db = db;
        this.tiempoEstandar = 0;
        this.tiempoReal = 0;
        this.finalizadas = 0;
        this.pausa = {
            motivo: '',
            observacion: ''
        };
        this.servicios = [];
        this.id = this.route.snapshot.paramMap.get('id');
        this.orden = this.ordenService.obtenerUnaOrden(this.id);
        this.orden.subscribe(function (res) {
            _this.servicios = res.servicios;
            _this.tiempoEstandar = 0;
            _this.finalizadas = 0;
            _this.tiempoReal = 0;
            _this.servicios.forEach(function (element) {
            });
        });
    }
    DetalleOrdenComponent.prototype.ngOnInit = function () {
    };
    DetalleOrdenComponent.prototype.iniciarServicio = function (index) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
            title: 'Está seguro?',
            text: "Desea inicia la tarea seleccionada!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonText: 'Cancelar',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, iniciar!'
        }).then(function (result) {
            if (result.value) {
                _this.servicios[index].estado = 'EN PRODUCCIÓN';
                _this.servicios[index].horaInicio = new Date();
                _this.ordenService.modificarServicio(_this.id, { servicios: _this.servicios })
                    .then(function (res) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()('Listo!', 'La tarea ha sido iniciada', 'success');
                });
            }
        });
    };
    DetalleOrdenComponent.prototype.calcularEstadisticas = function (index) {
        console.log('ESTADISTICAS');
        console.log(this.servicios[index]);
        //tiempo estandar
        var tiempoEstandar = moment__WEBPACK_IMPORTED_MODULE_6__["utc"]((this.servicios[index].tiempoEstandar * 60) * 1000).format('HH:mm:ss');
        var tiempoEstandarSec = (this.servicios[index].tiempoEstandar * 60) * this.servicios[index].cantidad;
        console.log(tiempoEstandarSec);
        //leadtim
        var fecha1 = moment__WEBPACK_IMPORTED_MODULE_6__(this.servicios[index].horaInicio.seconds, 'X');
        var fecha2 = moment__WEBPACK_IMPORTED_MODULE_6__(this.servicios[index].horaFin.seconds, 'X');
        var diff = fecha2.diff(fecha1, 's');
        var lead = fecha2.diff(fecha1, 's');
        var leadTime = moment__WEBPACK_IMPORTED_MODULE_6__["utc"](diff * 1000).format('HH:mm:ss');
        console.log(lead);
        //pausas
        var pausas = 0;
        if (this.servicios[index].pausas) {
            this.servicios[index].pausas.forEach(function (pausa) {
                var fecha1 = moment__WEBPACK_IMPORTED_MODULE_6__(pausa.horaInicio.seconds, 'X');
                var fecha2 = moment__WEBPACK_IMPORTED_MODULE_6__(pausa.horaFin.seconds, 'X');
                var diff2 = fecha2.diff(fecha1, 's');
                pausas += diff2;
            });
        }
        else {
        }
        console.log(pausas);
        var pausasTime = moment__WEBPACK_IMPORTED_MODULE_6__["utc"](pausas * 1000).format('HH:mm:ss');
        //tiempo real
        var real = lead - pausas;
        var tiempoReal = moment__WEBPACK_IMPORTED_MODULE_6__["utc"](real * 1000).format('HH:mm:ss');
        console.log(real);
        var eficiencia = (((this.servicios[index].tiempoEstandar * 60) / real) * 100).toFixed(2);
        console.log(eficiencia);
        return {
            eficiencia: eficiencia,
            tiempoReal: real,
            pausas: pausas,
            leadTime: lead,
            tiempoEstandar: tiempoEstandarSec
        };
    };
    DetalleOrdenComponent.prototype.finalizarServicio = function (index) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
            title: 'Está seguro?',
            text: "Desea finalizar la tarea seleccionada?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonText: 'Cancelar',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, finalizar!'
        }).then(function (result) {
            if (result.value) {
                _this.servicios[index].estado = 'POR FACTURAR';
                _this.servicios[index].horaFin = new Date();
                _this.ordenService.modificarServicio(_this.id, { servicios: _this.servicios }).then(function (res) {
                    _this.servicios[index].estadisticas = _this.calcularEstadisticas(index);
                    _this.ordenService.modificarServicio(_this.id, { servicios: _this.servicios }).then(function (res) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()('Listo!', 'La tarea ha sido finalizada', 'success');
                    });
                });
            }
        });
    };
    DetalleOrdenComponent.prototype.open = function (content, index) {
        var _this = this;
        this.servicioSeleccionado = this.servicios[index];
        // const leadTime = moment.utc(diff * 1000).format('HH:mm:ss');
        this.newIndex = index;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
        });
    };
    DetalleOrdenComponent.prototype.open2 = function (content, index) {
        var _this = this;
        this.servicioSeleccionado = this.servicios[index];
        this.newIndex = index;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
        });
    };
    DetalleOrdenComponent.prototype.pausar = function () {
        var _this = this;
        var id = this.db.createId();
        if (!this.servicios[this.newIndex].pausas) {
            this.servicios[this.newIndex].pausas = [];
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
            title: 'Está seguro?',
            text: "Desea pausar la tarea seleccionada!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonText: 'Cancelar',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, pausar!'
        }).then(function (result) {
            if (result.value) {
                _this.servicios[_this.newIndex].estado = 'EN PRODUCCIÓN - PAUSADO';
                _this.servicios[_this.newIndex].pausaActual = id;
                _this.servicios[_this.newIndex].motivoPausa = _this.pausa.motivo;
                _this.servicios[_this.newIndex].pausas.push({ horaInicio: new Date(), motivo: _this.pausa, id: id });
                _this.ordenService.modificarServicio(_this.id, { servicios: _this.servicios })
                    .then(function (res) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()('Listo!', 'La tarea ha sido pausada', 'success');
                });
            }
        });
    };
    DetalleOrdenComponent.prototype.reanudarServicio = function (indice) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
            title: 'Está seguro?',
            text: "Desea reanudar la tarea seleccionada?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonText: 'Cancelar',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, reanudar!'
        }).then(function (result) {
            if (result.value) {
                _this.servicios[indice].estado = 'EN PRODUCCIÓN';
                _this.servicios[indice].pausas.forEach(function (pausa) {
                    if (pausa.id == _this.servicios[indice].pausaActual) {
                        pausa.horaFin = new Date();
                    }
                });
                _this.ordenService.modificarServicio(_this.id, { servicios: _this.servicios }).then(function (res) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()('Listo!', 'La tarea ha sido reanudada', 'success');
                });
            }
        });
    };
    DetalleOrdenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalle-orden',
            template: __webpack_require__(/*! ./detalle-orden.component.html */ "./src/app/layout/orden-trabajo/detalleOrden/detalle-orden/detalle-orden.component.html"),
            styles: [__webpack_require__(/*! ./detalle-orden.component.scss */ "./src/app/layout/orden-trabajo/detalleOrden/detalle-orden/detalle-orden.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_5__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _servicios_orden_orden_service__WEBPACK_IMPORTED_MODULE_2__["OrdenService"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], DetalleOrdenComponent);
    return DetalleOrdenComponent;
}());



/***/ }),

/***/ "./src/app/layout/orden-trabajo/informacion-orden/informacion-orden.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/informacion-orden/informacion-orden.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Información Orden de trabajo'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Información de la orden de trabajo\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <table class=\"table table-sm table-bordered\">\r\n\r\n            <tbody>\r\n              <tr>\r\n                <th>Número </th>\r\n                <td>OT-{{(orden | async)?.numero | anadirCeros:5}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Fecha OT </th>\r\n                <td>{{ (orden | async)?.fecha.seconds*1000 | date : 'dd/MM/yyyy HH:mm' }}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>ID Cliente</th>\r\n                <td>{{ (orden | async)?.cliente.cedula }}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Nombre cliente</th>\r\n                <td>{{ (orden | async)?.cliente.nombre }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Vehículo</th>\r\n                <td>{{ (orden | async)?.vehiculo.placa }} - {{ (orden | async)?.vehiculo.marca }} - {{ (orden | async)?.vehiculo.modelo\r\n                  }}\r\n                </td>\r\n              </tr>\r\n\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Asignación de operadores\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <table class=\"table  table-responsive-sm\">\r\n        <thead>\r\n          <tr>\r\n            <th></th>\r\n            <th>Cantidad</th>\r\n            <th>Código</th>\r\n            <th>Servicio</th>\r\n            <th>Tiempo estándar</th>\r\n            <th>Estado</th>\r\n            <th>Operador asignado</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let servicio of servicios let index = index\">\r\n            <td>\r\n              <button [disabled]=\"servicio.estado=='POR FACTURAR'|| servicio.estado=='EN PRODUCCIÓN' || servicio.estado=='EN PRODUCCIÓN - PAUSADO'\" title=\"Guardar cambios\" class=\"btn btn-sm btn-primary\" (click)=\"seleccionarPersona(servicio, index)\"><i class=\"fa fa-floppy-o \"></i></button>\r\n            </td>\r\n            <td>{{servicio.cantidad}}</td>\r\n            <td>{{servicio.codigo}}</td>\r\n            <td>{{servicio.descripcion}}</td>\r\n            <td>{{servicio.tiempoEstandar*servicio.cantidad*60 | formatTime}}</td>\r\n            <td>{{servicio.estado}}</td>\r\n            <td>\r\n\r\n              <div class=\"\">\r\n                <div class=\"row\">\r\n                  <ng-select [disabled]=\"servicio.estado=='POR FACTURAR'|| servicio.estado=='EN PRODUCCIÓN' || servicio.estado=='EN PRODUCCIÓN - PAUSADO'\"  class=\"form-control\" style=\"font-size: 14px\" [(ngModel)]=\"servicio.operador\" autofocus style=\"width: 230px;\" class=\"form-control\"\r\n                    [items]=\"personas | async\" bindLabel=\"data.nombre\">\r\n                  </ng-select>\r\n\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </td>\r\n\r\n          </tr>\r\n\r\n\r\n\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n</div>"

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
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
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
        var _this = this;
        console.log(servicio.operador);
        if (servicio.operador.id == "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Existió un error', 'Debe seleccionar un operador', 'error');
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                title: 'Está seguro?',
                text: "Desea asignar al operador: " + servicio.operador.data.nombre + " al servicio: " + servicio.descripcion,
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Si, asignar!'
            }).then(function (result) {
                if (result.value) {
                    _this.servicios[index].operador = servicio.operador;
                    _this.servicios[index].estado = 'EN ESPERA DE PRODUCCIÓN';
                    _this.ordenService.modificarServicio(_this.id, { servicios: _this.servicios, estado: 'EN ESPERA DE PRODUCCIÓN' })
                        .then(function (res) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Listo!', 'El operador ha sido asignado correctamente.', 'success');
                    });
                }
            });
        }
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

/***/ "./src/app/layout/orden-trabajo/mis-ordenes/mis-ordenes.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/mis-ordenes/mis-ordenes.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [heading]=\"'Operaciones'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n  <div class=\"row\">\n    <div class=\"col col-xl-12 col-lg-12\">\n\n\n      <div class=\"card mb-4\">\n        <div class=\"card-header\">Ordenes de trabajo</div>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <div class=\"card\">\n\n              <div class=\"card-body\">\n                <p><strong>Estado</strong></p>\n                <div class=\"row\">\n                  <div class=\"col\" class=\"table-success\" style=\"width: 15px\"></div>\n                  <div class=\"col\">POR FACTURAR</div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col\" class=\"table-warning\" style=\"width: 15px\"></div>\n                  <div class=\"col\">EN PRODUCCIÓN</div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col\" class=\"table-danger\" style=\"width: 15px\"></div>\n                  <div class=\"col\">CITA/RECEPCIÓN-EN ESPERA</div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n\n        </div>\n        <div class=\"card-body table-responsive\">\n\n          <table class=\"table table-bordered table-sm table-responsive-sm\">\n            <thead>\n\n              <tr>\n\n                <th>Cliente</th>\n                <th>Vehículo</th>\n                <th>Servicio</th>\n                <th>T. estandar</th>\n                <th>Estado</th>\n     \n\n\n\n\n              </tr>\n            </thead>\n            <tbody>\n\n\n              <ng-container *ngFor=\"let servicio of tareas\">\n                <tr *ngIf=\"servicio.servicio.operador.data.usuario == usuarioid\" [class.table-warning]=\"servicio.servicio.estado=='EN PRODUCCIÓN' || servicio.servicio.estado=='EN PRODUCCIÓN - PAUSADO'\"\n                  [class.table-danger]=\"servicio.servicio.estado=='CITA/RECEPCION' || servicio.servicio.estado=='EN ESPERA DE PRODUCCIÓN'\"\n                  [class.table-success]=\"servicio.servicio.estado=='POR FACTURAR'\">\n\n                  <td>\n                    {{servicio.cliente.nombre}}\n                  </td>\n                  <td>\n                    {{servicio.vehiculo.placa}} - {{servicio.vehiculo.marca}} - {{servicio.vehiculo.modelo}}\n                  </td>\n                  <td>\n                    {{servicio.servicio.descripcion}}\n                  </td>\n                  <td>\n                    {{servicio.servicio.tiempoEstandar}} minutos\n                  </td>\n                  <td>\n                    {{servicio.servicio.estado}}\n                    <div *ngIf=\"servicio.servicio.estado=='EN PRODUCCIÓN - PAUSADO'\">\n\n                      <p><strong>Motivo: </strong>{{servicio.servicio.motivo}}</p>\n                    </div>\n\n                  </td>\n\n                \n\n\n                </tr>\n              </ng-container>\n\n\n\n            </tbody>\n          </table>\n\n\n\n\n\n\n\n\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/layout/orden-trabajo/mis-ordenes/mis-ordenes.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/mis-ordenes/mis-ordenes.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/orden-trabajo/mis-ordenes/mis-ordenes.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/mis-ordenes/mis-ordenes.component.ts ***!
  \***************************************************************************/
/*! exports provided: MisOrdenesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisOrdenesComponent", function() { return MisOrdenesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _servicios_orden_orden_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servicios/orden/orden.service */ "./src/app/servicios/orden/orden.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MisOrdenesComponent = /** @class */ (function () {
    function MisOrdenesComponent(afAuth, ordenService) {
        this.afAuth = afAuth;
        this.ordenService = ordenService;
        this.usuarioid = '';
    }
    MisOrdenesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.obtenerOrdenes();
        this.afAuth.user.subscribe(function (res) {
            _this.usuarioid = res.uid;
        });
    };
    MisOrdenesComponent.prototype.obtenerOrdenes = function () {
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
    MisOrdenesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mis-ordenes',
            template: __webpack_require__(/*! ./mis-ordenes.component.html */ "./src/app/layout/orden-trabajo/mis-ordenes/mis-ordenes.component.html"),
            styles: [__webpack_require__(/*! ./mis-ordenes.component.scss */ "./src/app/layout/orden-trabajo/mis-ordenes/mis-ordenes.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _servicios_orden_orden_service__WEBPACK_IMPORTED_MODULE_3__["OrdenService"]])
    ], MisOrdenesComponent);
    return MisOrdenesComponent;
}());



/***/ }),

/***/ "./src/app/layout/orden-trabajo/operacion/operacion.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/operacion/operacion.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Ordenes de trabajo'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12\">\r\n\r\n\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">Ordenes de trabajo</div>\r\n        <div class=\"card-body table-responsive\">\r\n          <table class=\"table\" datatable id=\"example-datatable\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n            <thead>\r\n              <tr>\r\n                <th></th>\r\n                <th>No. OT</th>\r\n                <th>Fecha OT</th>\r\n                <th>Hora</th>\r\n                <th>ID Cliente</th>\r\n                <th>Nombre del cliente</th>\r\n                <th>Vehículo</th>\r\n               \r\n\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let orden of ordenes | async\">\r\n                  <td>\r\n                      <div class=\"btn-group\">\r\n                        <a href=\"/vehiculo/crearvehiculo/{{orden.id}}\" class=\"btn btn-primary btn-sm disabled\"><i class=\"fa fa-pencil\"></i></a>\r\n                        <button disabled class=\"btn btn-danger btn-sm\" (click)=\"eliminarVehiculo(orden)\"><i class=\"fa fa-trash\"></i></button>\r\n                      </div>\r\n    \r\n                    </td>\r\n                <td><a href=\"/orden/detalleorden/{{orden.id}}\">OT-{{orden.data.numero | anadirCeros:5}}</a> </td>\r\n                <td>{{(orden.data.fecha.seconds)*1000 | date : 'dd/MM/yyyy'}}</td>\r\n                <td>{{(orden.data.fecha.seconds)*1000 | date : 'HH:mm'}}</td>\r\n                <td>{{orden.data.cliente.cedula}}</td>\r\n                <td>{{orden.data.cliente.nombre}}</td>\r\n\r\n                <td>\r\n                  {{orden.data.vehiculo.placa}} - {{orden.data.vehiculo.marca}} - {{orden.data.vehiculo.modelo}}\r\n\r\n                </td>\r\n\r\n\r\n\r\n\r\n              </tr>\r\n\r\n\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n</div>"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _servicios_orden_orden_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servicios/orden/orden.service */ "./src/app/servicios/orden/orden.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
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
        this.dtOptions = this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            autoWidth: true,
            language: {
                processing: "Procesando...",
                search: "Buscar:",
                lengthMenu: "Mostrar _MENU_ elementos",
                info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
                infoEmpty: "Mostrando ningún elemento.",
                infoFiltered: "(filtrado _MAX_ elementos total)",
                infoPostFix: "",
                loadingRecords: "Cargando registros...",
                zeroRecords: "No se encontraron registros",
                emptyTable: "No hay datos disponibles en la tabla",
                paginate: {
                    first: "Primero",
                    previous: "Anterior",
                    next: "Siguiente",
                    last: "Último"
                },
                aria: {
                    sortAscending: ": Activar para ordenar la tabla en orden ascendente",
                    sortDescending: ": Activar para ordenar la tabla en orden descendente"
                }
            }
        };
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ;
    OperacionComponent.prototype.ngOnInit = function () {
        this.obtenerOrdenes();
    };
    OperacionComponent.prototype.obtenerOrdenes = function () {
        var _this = this;
        this.ordenes = this.ordenService.obtenerOrdenes();
        this.ordenes.subscribe(function (res) {
            $('#example-datatable').DataTable().destroy();
            _this.dtTrigger.next();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], OperacionComponent.prototype, "dtElement", void 0);
    OperacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operacion',
            template: __webpack_require__(/*! ./operacion.component.html */ "./src/app/layout/orden-trabajo/operacion/operacion.component.html"),
            styles: [__webpack_require__(/*! ./operacion.component.scss */ "./src/app/layout/orden-trabajo/operacion/operacion.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_servicios_orden_orden_service__WEBPACK_IMPORTED_MODULE_3__["OrdenService"]])
    ], OperacionComponent);
    return OperacionComponent;
}());



/***/ }),

/***/ "./src/app/layout/orden-trabajo/orden-trabajo.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/orden-trabajo.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  orden-trabajo works!\n</p>\n"

/***/ }),

/***/ "./src/app/layout/orden-trabajo/orden-trabajo.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/orden-trabajo.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/orden-trabajo/orden-trabajo.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/orden-trabajo/orden-trabajo.component.ts ***!
  \*****************************************************************/
/*! exports provided: OrdenTrabajoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenTrabajoComponent", function() { return OrdenTrabajoComponent; });
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

var OrdenTrabajoComponent = /** @class */ (function () {
    function OrdenTrabajoComponent() {
    }
    OrdenTrabajoComponent.prototype.ngOnInit = function () {
    };
    OrdenTrabajoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orden-trabajo',
            template: __webpack_require__(/*! ./orden-trabajo.component.html */ "./src/app/layout/orden-trabajo/orden-trabajo.component.html"),
            styles: [__webpack_require__(/*! ./orden-trabajo.component.scss */ "./src/app/layout/orden-trabajo/orden-trabajo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OrdenTrabajoComponent);
    return OrdenTrabajoComponent;
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
/* harmony import */ var _orden_trabajo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./orden-trabajo.component */ "./src/app/layout/orden-trabajo/orden-trabajo.component.ts");
/* harmony import */ var _mis_ordenes_mis_ordenes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mis-ordenes/mis-ordenes.component */ "./src/app/layout/orden-trabajo/mis-ordenes/mis-ordenes.component.ts");
/* harmony import */ var _detalleOrden_detalle_orden_detalle_orden_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./detalleOrden/detalle-orden/detalle-orden.component */ "./src/app/layout/orden-trabajo/detalleOrden/detalle-orden/detalle-orden.component.ts");
/* harmony import */ var _detalle_tarea_detalle_tarea_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./detalle-tarea/detalle-tarea.component */ "./src/app/layout/orden-trabajo/detalle-tarea/detalle-tarea.component.ts");
/* harmony import */ var _pipes_anadir_ceros_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../pipes/anadir-ceros.pipe */ "./src/app/pipes/anadir-ceros.pipe.ts");
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
                angular_datatables__WEBPACK_IMPORTED_MODULE_14__["DataTablesModule"],
                _servicio_servicio_module__WEBPACK_IMPORTED_MODULE_12__["ServicioModule"]
            ],
            declarations: [_crear_orden_crear_orden_component__WEBPACK_IMPORTED_MODULE_3__["CrearOrdenComponent"], _consultar_orden_consultar_orden_component__WEBPACK_IMPORTED_MODULE_4__["ConsultarOrdenComponent"], _informacion_orden_informacion_orden_component__WEBPACK_IMPORTED_MODULE_5__["InformacionOrdenComponent"], _operacion_operacion_component__WEBPACK_IMPORTED_MODULE_13__["OperacionComponent"], _orden_trabajo_component__WEBPACK_IMPORTED_MODULE_15__["OrdenTrabajoComponent"], _mis_ordenes_mis_ordenes_component__WEBPACK_IMPORTED_MODULE_16__["MisOrdenesComponent"], _detalleOrden_detalle_orden_detalle_orden_component__WEBPACK_IMPORTED_MODULE_17__["DetalleOrdenComponent"], _detalle_tarea_detalle_tarea_component__WEBPACK_IMPORTED_MODULE_18__["DetalleTareaComponent"], _pipes_anadir_ceros_pipe__WEBPACK_IMPORTED_MODULE_19__["AnadirCerosPipe"]]
        })
    ], OrdenTrabajoModule);
    return OrdenTrabajoModule;
}());



/***/ }),

/***/ "./src/app/pipes/anadir-ceros.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/anadir-ceros.pipe.ts ***!
  \********************************************/
/*! exports provided: AnadirCerosPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnadirCerosPipe", function() { return AnadirCerosPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AnadirCerosPipe = /** @class */ (function () {
    function AnadirCerosPipe() {
    }
    AnadirCerosPipe.prototype.transform = function (number, width) {
        var numberOutput = Math.abs(number); /* Valor absoluto del número */
        var length = number.toString().length; /* Largo del número */
        var zero = "0"; /* String de cero */
        if (width <= length) {
            if (number < 0) {
                return ("-" + numberOutput.toString());
            }
            else {
                return numberOutput.toString();
            }
        }
        else {
            if (number < 0) {
                return ("-" + (zero.repeat(width - length)) + numberOutput.toString());
            }
            else {
                return ((zero.repeat(width - length)) + numberOutput.toString());
            }
        }
    };
    AnadirCerosPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'anadirCeros'
        })
    ], AnadirCerosPipe);
    return AnadirCerosPipe;
}());



/***/ })

}]);
//# sourceMappingURL=orden-trabajo-orden-trabajo-module.js.map