(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reporte-reporte-module"],{

/***/ "./src/app/layout/reporte/app-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/reporte/app-routing.module.ts ***!
  \******************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reporte_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reporte.component */ "./src/app/layout/reporte/reporte.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _reporte_component__WEBPACK_IMPORTED_MODULE_2__["ReporteComponent"]
    },
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

/***/ "./src/app/layout/reporte/reporte.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/reporte/reporte.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Reportes'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">Filtros de búsqueda</div>\r\n        <div class=\"card-body \">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <table class=\"table table-sm table-bordered\">\r\n                <tr>\r\n                  <td>\r\n                    <div class=\"radio\">\r\n                      <label><input type=\"radio\" [(ngModel)]=\"filtro\" value=\"1\">Por Orden de Tabajo</label>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <select class=\"form-control\" [(ngModel)]=\"ordenSeleccionada\" *ngIf=\"filtro=='1'\">\r\n                      <option value=\"\">Seleccionar...</option>\r\n                      <option *ngFor=\"let orden of ordenes | async\" value=\"{{orden.id}}\">OT-{{orden.data.numero | anadirCeros:5}}</option>\r\n                    </select>\r\n\r\n                  \r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    <div class=\"radio\">\r\n\r\n                      <label><input type=\"radio\" [(ngModel)]=\"filtro\" value=\"2\">Por Operador</label>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <select class=\"form-control\" *ngIf=\"filtro=='2'\">\r\n                      <option>Seleccionar...</option>\r\n                      <option *ngFor=\"let operador of operadores | async\">{{operador.data.nombre}}</option>\r\n                    </select>\r\n                  </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>\r\n                    <div class=\"radio\">\r\n                      <label><input type=\"radio\" [(ngModel)]=\"filtro\" value=\"3\">Por Servicio</label>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <select class=\"form-control\" *ngIf=\"filtro=='3'\">\r\n                      <option>Seleccionar...</option>\r\n                      <option *ngFor=\"let servicio of servicios | async\">{{servicio.data.descripcion}}</option>\r\n                    </select>\r\n                  </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>Desde:</td>\r\n                  <td>\r\n                    <div class=\"btn-group\">\r\n                      <input [disabled]=\"filtro=='1'\" type=\"date\" [(ngModel)]=\"filtroTiempo.inicio\" class=\"form-control\"> <input type=\"time\" [disabled]=\"filtro=='1'\" [(ngModel)]=\"filtroTiempo.iniciohora\"\r\n                        class=\"form-control\">\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Hasta:</td>\r\n                    <td>\r\n                      <div class=\"btn-group\">\r\n                        <input [disabled]=\"filtro=='1'\" type=\"date\" [(ngModel)]=\"filtroTiempo.fin\" class=\"form-control\"> <input [disabled]=\"filtro=='1'\" type=\"time\" [(ngModel)]=\"filtroTiempo.finhora\"\r\n                          class=\"form-control\">\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td></td>\r\n                    <td>\r\n                      <button (click)=\"buscar()\" class=\"btn btn-primary\">Buscar</button>\r\n                    </td>\r\n                  </tr>\r\n              </table>\r\n            </div>\r\n            <div class=\"col-md-6\"></div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/reporte/reporte.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/reporte/reporte.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/reporte/reporte.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/reporte/reporte.component.ts ***!
  \*****************************************************/
/*! exports provided: ReporteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteComponent", function() { return ReporteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _servicios_orden_orden_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/orden/orden.service */ "./src/app/servicios/orden/orden.service.ts");
/* harmony import */ var _servicios_persona_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/persona.service */ "./src/app/servicios/persona.service.ts");
/* harmony import */ var _servicios_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/servicio/servicio.service */ "./src/app/servicios/servicio/servicio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReporteComponent = /** @class */ (function () {
    function ReporteComponent(ordenService, personaService, servicioService) {
        this.ordenService = ordenService;
        this.personaService = personaService;
        this.servicioService = servicioService;
        this.filtro = "1";
        this.fechaInicio = new Date;
        this.ordenSeleccionada = "";
        this.filtroTiempo = { inicio: this.convertir(Date.now()), iniciohora: '00:00', fin: this.convertir(Date.now()), finhora: '23:59' };
        this.ordenes = ordenService.obtenerOrdenes();
        this.operadores = personaService.obtenerUsuarios();
        this.servicios = servicioService.obtenerServicios();
    }
    ReporteComponent.prototype.convertir = function (fecha) {
        var local = new Date(fecha);
        local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
        return local.toJSON().slice(0, 10);
    };
    ReporteComponent.prototype.ngOnInit = function () {
    };
    ReporteComponent.prototype.obtenerOrdenes = function () {
    };
    ReporteComponent.prototype.buscar = function () {
        switch (this.filtro) {
            case "1":
                this.buscarPorOrden();
                break;
            case "2":
                this.buscarPorOperador();
                break;
            case "3":
                this.buscarPorServicio();
                break;
            default:
                break;
        }
    };
    ReporteComponent.prototype.buscarPorOrden = function () {
        console.log('orden');
        console.log(this.ordenSeleccionada);
    };
    ReporteComponent.prototype.buscarPorOperador = function () {
        console.log('operador');
    };
    ReporteComponent.prototype.buscarPorServicio = function () {
        console.log('servicio');
    };
    ReporteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reporte',
            template: __webpack_require__(/*! ./reporte.component.html */ "./src/app/layout/reporte/reporte.component.html"),
            styles: [__webpack_require__(/*! ./reporte.component.scss */ "./src/app/layout/reporte/reporte.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_servicios_orden_orden_service__WEBPACK_IMPORTED_MODULE_2__["OrdenService"], _servicios_persona_service__WEBPACK_IMPORTED_MODULE_3__["PersonaService"], _servicios_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_4__["ServicioService"]])
    ], ReporteComponent);
    return ReporteComponent;
}());



/***/ }),

/***/ "./src/app/layout/reporte/reporte.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/reporte/reporte.module.ts ***!
  \**************************************************/
/*! exports provided: ReporteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteModule", function() { return ReporteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/layout/reporte/app-routing.module.ts");
/* harmony import */ var _reporte_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reporte.component */ "./src/app/layout/reporte/reporte.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _orden_trabajo_orden_trabajo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../orden-trabajo/orden-trabajo.module */ "./src/app/layout/orden-trabajo/orden-trabajo.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ReporteModule = /** @class */ (function () {
    function ReporteModule() {
    }
    ReporteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _orden_trabajo_orden_trabajo_module__WEBPACK_IMPORTED_MODULE_7__["OrdenTrabajoModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"]
            ],
            declarations: [_reporte_component__WEBPACK_IMPORTED_MODULE_3__["ReporteComponent"]]
        })
    ], ReporteModule);
    return ReporteModule;
}());



/***/ })

}]);
//# sourceMappingURL=reporte-reporte-module.js.map