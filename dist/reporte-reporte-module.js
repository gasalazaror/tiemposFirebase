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

module.exports = "<div [@routerTransition]>\n  <app-page-header [heading]=\"'Reportes'\" [icon]=\"'fa-edit'\"></app-page-header>\n   <div class=\"row\">\n    <div class=\"col col-xl-12 col-lg-12\">\n       <div class=\"card mb-3\">\n        <div class=\"card-header\">Reportes</div>\n         <div class=\"card-body \">\n           <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"card\">\n                \n                    <div class=\"card-body\">\n                      <p><strong>Eficiencia</strong></p>\n                      <div class=\"row\">\n                        <div class=\"col\" class=\"table-success\" style=\"width: 15px\"></div>\n                        <div class=\"col\">Muy buena</div>\n                      </div>\n      \n                      <div class=\"row\">\n                        <div class=\"col\" class=\"table-warning\" style=\"width: 15px\"></div>\n                        <div class=\"col\">Buena</div>\n                      </div>\n      \n                      <div class=\"row\">\n                        <div class=\"col\" class=\"table-danger\" style=\"width: 15px\"></div>\n                        <div class=\"col\">Regular</div>\n                      </div>\n                    </div>\n                  </div>\n            </div>\n           \n          </div>\n           <br>\n           <table class=\"table table-bordered table-sm table-responsive\">\n            <thead>\n               <tr>\n                 <th>Cliente</th>\n                <th>Vehículo</th>\n                <th>Servicio</th>\n                <th>Operador</th>\n                <th>Tiempo Estandar</th>\n                <th>Lead Time</th>\n                <th>Tiempo Real</th>\n                <th>Eficiencia</th>\n               </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let servicio of tareas \" [class.table-success]=\"servicio.servicio.eficiencia>=100\" [class.table-warning]=\"servicio.servicio.eficiencia>=80 && servicio.servicio.eficiencia<100\"\n                [class.table-danger]=\"servicio.servicio.eficiencia<80\">\n                 <td>\n                  {{servicio.cliente.nombre}}\n                </td>\n                <td>\n                  {{servicio.vehiculo.placa}} - {{servicio.vehiculo.marca}} - {{servicio.vehiculo.modelo}}\n                </td>\n                <td>\n                  {{servicio.servicio.descripcion}}\n                </td>\n                <td>\n                  {{servicio.servicio.operador.data.nombre}}\n                </td>\n                <td>\n                  {{servicio.servicio.tiempoEstandarFor}}\n                </td>\n                <td>\n                  {{servicio.servicio.leadTime}}\n                </td>\n                <td>\n                  {{servicio.servicio.tiempoReal}}\n                </td>\n                <td>\n                  {{servicio.servicio.eficiencia}}%\n                </td>\n               </tr>\n            </tbody>\n          </table>\n         </div>\n      </div>\n     </div>\n  </div>\n </div> "

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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
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
    function ReporteComponent(ordenService) {
        this.ordenService = ordenService;
        this.tareas = [];
    }
    ReporteComponent.prototype.ngOnInit = function () {
        this.obtenerOrdenes();
    };
    ReporteComponent.prototype.obtenerOrdenes = function () {
        var _this = this;
        this.ordenes = this.ordenService.obtenerOrdenes();
        this.ordenes.subscribe(function (res) {
            _this.tareas = [];
            res.forEach(function (element) {
                element.data.servicios.forEach(function (servicio) {
                    if (servicio.estado == 'POR FACTURAR') {
                        var fecha1 = moment__WEBPACK_IMPORTED_MODULE_3__(servicio.horaInicio.seconds, 'X');
                        var fecha2 = moment__WEBPACK_IMPORTED_MODULE_3__(servicio.horaFin.seconds, 'X');
                        var diff = fecha2.diff(fecha1, 's');
                        servicio.leadTimesec = diff;
                        var leadTime = moment__WEBPACK_IMPORTED_MODULE_3__["utc"](diff * 1000).format('HH:mm:ss');
                        servicio.leadTime = leadTime;
                        var formatted = moment__WEBPACK_IMPORTED_MODULE_3__["utc"]((servicio.tiempoEstandar * 60) * 1000).format('HH:mm:ss');
                        servicio.tiempoEstandarFor = formatted;
                        var pausas = 0;
                        if (servicio.pausas) {
                            servicio.pausas.forEach(function (pausa) {
                                var fecha1 = moment__WEBPACK_IMPORTED_MODULE_3__(pausa.horaInicio.seconds, 'X');
                                var fecha2 = moment__WEBPACK_IMPORTED_MODULE_3__(pausa.horaFin.seconds, 'X');
                                var diff = fecha2.diff(fecha1, 's');
                                pausas += diff;
                            });
                        }
                        console.log(servicio.leadTimesec);
                        console.log(pausas);
                        var tiempoReal = servicio.leadTimesec - pausas;
                        servicio.tiempoReal = moment__WEBPACK_IMPORTED_MODULE_3__["utc"]((tiempoReal * 60) * 1000).format('HH:mm:ss');
                        var eficiencia = ((servicio.tiempoEstandar * 60) / tiempoReal) * 100;
                        servicio.eficiencia = eficiencia.toFixed(2);
                        _this.tareas.push({ cliente: element.data.cliente, servicio: servicio, vehiculo: element.data.vehiculo });
                    }
                });
            });
        });
    };
    ReporteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reporte',
            template: __webpack_require__(/*! ./reporte.component.html */ "./src/app/layout/reporte/reporte.component.html"),
            styles: [__webpack_require__(/*! ./reporte.component.scss */ "./src/app/layout/reporte/reporte.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_servicios_orden_orden_service__WEBPACK_IMPORTED_MODULE_2__["OrdenService"]])
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
            ],
            declarations: [_reporte_component__WEBPACK_IMPORTED_MODULE_3__["ReporteComponent"]]
        })
    ], ReporteModule);
    return ReporteModule;
}());



/***/ })

}]);
//# sourceMappingURL=reporte-reporte-module.js.map