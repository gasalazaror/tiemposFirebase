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
/* harmony import */ var _categoria_categoria_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categoria/categoria.component */ "./src/app/layout/servicio/categoria/categoria.component.ts");
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
    },
    {
        path: 'categorias',
        component: _categoria_categoria_component__WEBPACK_IMPORTED_MODULE_5__["CategoriaComponent"]
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

/***/ "./src/app/layout/servicio/categoria/categoria.component.html":
/*!********************************************************************!*\
  !*** ./src/app/layout/servicio/categoria/categoria.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [heading]=\"'Gestión de categorías'\" [icon]=\"'fa-edit'\"></app-page-header>\n  <div class=\"row\">\n    <div class=\"col col-xl-12 col-lg-12\">\n      <div class=\"card mb-3\">\n        <div class=\"card-header\">Categorías</div>\n        <div class=\"card-body table-responsive\">\n          <table id=\"example-datatable\"  class=\"table\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n            <thead>\n              <tr>\n                <th></th>\n                <th>Categoría</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let categoria of categorias | async\">\n                <td>\n                  <div class=\"btn-group\">\n                    <button class=\"btn btn-primary btn-sm disabled\" (click)=\"modificarCategoria(categoria)\" > <i class=\"fa fa-pencil\"></i> </button>\n                      <button title=\"Eliminar Servicio\"  class=\"btn btn-danger btn-sm\" (click)=\"eliminarCategoria(categoria)\" (click)=\"eliminarServicio(categoria)\"><i class=\"fa fa-trash\"></i></button>\n                  </div>\n                </td>\n                <td>\n                    {{categoria.data.nombre}}\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <br>\n          <button class=\"btn btn-primary\" (click)=\"agregarCategoria()\"><i class=\"fa fa-plus\"></i> Agregar elemento</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/layout/servicio/categoria/categoria.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/layout/servicio/categoria/categoria.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/servicio/categoria/categoria.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/servicio/categoria/categoria.component.ts ***!
  \******************************************************************/
/*! exports provided: CategoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaComponent", function() { return CategoriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _servicios_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../servicios/servicio/servicio.service */ "./src/app/servicios/servicio/servicio.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoriaComponent = /** @class */ (function () {
    function CategoriaComponent(servicioService) {
        this.servicioService = servicioService;
        this.dtOptions = {
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
        this.obtenerServicios();
    }
    CategoriaComponent.prototype.ngOnInit = function () {
    };
    CategoriaComponent.prototype.obtenerServicios = function () {
        var _this = this;
        this.categorias = this.servicioService.obtenerCategorias();
        this.categorias.subscribe(function (res) {
            $('#example-datatable').DataTable().destroy();
            _this.dtTrigger.next();
        });
    };
    CategoriaComponent.prototype.eliminarCategoria = function (categoria) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: 'Está seguro?',
            text: "Desea eliminar la categoría: " + categoria.data.nombre,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, eliminar!'
        }).then(function (result) {
            if (result.value) {
                _this.servicioService.eliminarCategoria(categoria.id);
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Listo!', 'La categoría ha sido eliminada.', 'success');
            }
        });
    };
    CategoriaComponent.prototype.modificarCategoria = function (categoria) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: 'Ingrese el nombre de la categoría',
            input: 'text',
            inputValue: categoria.data.nombre,
            inputAttributes: {
                autocapitalize: 'on'
            },
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            showLoaderOnConfirm: true,
            allowOutsideClick: function () { return !sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.isLoading(); }
        }).then(function (result) {
            if (result.value) {
                var categoriaInput = result.value;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: 'Está seguro?',
                    text: "Está seguro que deseas guardar la categoría: " + result.value,
                    type: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    cancelButtonText: 'Cancelar',
                    confirmButtonText: 'Si!'
                }).then(function (result) {
                    if (result.value) {
                        _this.servicioService.modificarCategoria(categoria.id, { nombre: categoriaInput }).then(function (res) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Listo!', 'Categoría guardada exitosamente', 'success');
                        });
                    }
                });
            }
        });
    };
    CategoriaComponent.prototype.agregarCategoria = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: 'Ingrese el nombre de la categoría',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'on'
            },
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            showLoaderOnConfirm: true,
            allowOutsideClick: function () { return !sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.isLoading(); }
        }).then(function (result) {
            if (result.value) {
                var categoria = result.value;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: 'Está seguro?',
                    text: "Está seguro que deseas guardar la categoría: " + result.value,
                    type: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    cancelButtonText: 'Cancelar',
                    confirmButtonText: 'Si!'
                }).then(function (result) {
                    if (result.value) {
                        _this.servicioService.crearCategoria({ nombre: categoria }).then(function (res) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Listo!', 'Categoría guardada exitosamente', 'success');
                        });
                    }
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], CategoriaComponent.prototype, "dtElement", void 0);
    CategoriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categoria',
            template: __webpack_require__(/*! ./categoria.component.html */ "./src/app/layout/servicio/categoria/categoria.component.html"),
            styles: [__webpack_require__(/*! ./categoria.component.scss */ "./src/app/layout/servicio/categoria/categoria.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_servicios_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_2__["ServicioService"]])
    ], CategoriaComponent);
    return CategoriaComponent;
}());



/***/ }),

/***/ "./src/app/layout/servicio/consultar-servicio/consultar-servicio.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/servicio/consultar-servicio/consultar-servicio.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Consultar servicio'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12\">\r\n\r\n\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">Servicios</div>\r\n        <div class=\"card-body table-responsive\">\r\n          <table id=\"example-datatable\"  class=\"table\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n            <thead>\r\n              <tr>\r\n                <th></th>\r\n                <th>Código</th>\r\n                <th>Servicio</th>\r\n                <th>Tiempo estándar</th>\r\n            \r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let servicio of servicios | async\">\r\n\r\n                <td>\r\n                  <div class=\"btn-group\">\r\n                      <a title=\"Editar Servicio\"  href=\"/vehiculo/crearvehiculo/{{servicio.id}}\" class=\"btn btn-primary btn-sm disabled\"><i class=\"fa fa-pencil\"></i></a>\r\n                      <button title=\"Eliminar Servicio\"  class=\"btn btn-danger btn-sm\" (click)=\"eliminarServicio(servicio)\"><i class=\"fa fa-trash\"></i></button>\r\n                  </div>\r\n                   \r\n                </td>\r\n            \r\n                <td>{{servicio.data.codigo}}</td>\r\n                <td>\r\n                    {{servicio.data.descripcion}}\r\n                </td>\r\n                <td>{{servicio.data.tiempoEstandar*60 | formatTime}}</td>\r\n            \r\n\r\n              </tr>\r\n\r\n\r\n\r\n            </tbody>\r\n          </table>\r\n\r\n        \r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>"

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
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
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
        this.dtOptions = {
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
        this.obtenerServicios();
    }
    ConsultarServicioComponent.prototype.ngOnInit = function () {
    };
    ConsultarServicioComponent.prototype.obtenerServicios = function () {
        var _this = this;
        this.servicios = this.servicioService.obtenerServicios();
        this.servicios.subscribe(function (res) {
            $('#example-datatable').DataTable().destroy();
            _this.dtTrigger.next();
        });
    };
    ConsultarServicioComponent.prototype.eliminarServicio = function (servicio) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: 'Está seguro?',
            text: "¿Está seguro que desea eliminar el servicio: " + servicio.data.descripcion + "?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
        }).then(function (result) {
            if (result.value) {
                _this.servicioService.eliminarServicio(servicio).then(function (res) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Eliminado!', 'El registro ha sido eliminado.', 'success');
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], ConsultarServicioComponent.prototype, "dtElement", void 0);
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

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Crear servicio'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n\r\n\r\n  <div class=\"row container\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Manejo de categorías y subcategorías\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div>\r\n                <p>Seleccionar una categoría</p>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <ul class=\"list-inline border\">\r\n                      <li class=\"list-inline-item\" *ngFor=\"let categoria of categorias | async\">\r\n                        <button title=\"Seleccionar categoría\" type=\"button\" (click)=\"seleccionarCategoria(categoria)\" class=\"btn btn-link\">{{categoria.data.nombre}}</button>\r\n                      </li>\r\n                      <li class=\"list-inline-item\">\r\n                   \r\n                      </li>\r\n                    </ul>\r\n                    <a href=\"/servicio/categorias\" class=\"btn btn-sm btn-primary\">Gestión de categorías</a>\r\n                  </div>\r\n                 \r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"categoriaSeleccionada\" class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Generación de productos o servicios\r\n        </div>\r\n        <div class=\"card-body\">\r\n\r\n        \r\n          <div class=\"btn-group\">\r\n              <h5 *ngIf=\"categoriaSeleccionada\">\r\n\r\n                  <strong>Categoría: </strong>{{categoriaSeleccionada.data.nombre}}</h5>\r\n\r\n                 \r\n        \r\n          </div>\r\n          <br>\r\n          <br><br>\r\n\r\n         \r\n          <form class=\"form-inline\" [formGroup]=\"servicioForm\" (ngSubmit)=\"guardarServicio()\">\r\n            <div class=\"form-group mb-2 mx-sm-2\">\r\n              <label for=\"staticEmail2\" class=\"\">Código <span style=\"color: red\">* &nbsp; &nbsp; &nbsp;</span></label>\r\n              <input autofocus type=\"text\" maxlength=\"14\" formControlName=\"codigo\" style=\"max-width: 150px;\" class=\"form-control\" id=\"staticEmail2\">\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group mb-2 mx-sm-2\">\r\n              <label for=\"staticEmail2\" class=\"\">Servicio <span style=\"color: red\">* &nbsp; &nbsp; &nbsp;</span></label>\r\n              <input type=\"text\" maxlength=\"40\" formControlName=\"descripcion\" class=\"form-control\" id=\"staticEmail2\">\r\n            </div>\r\n\r\n            <div class=\"form-group mb-2 mx-sm-3\">\r\n              <label for=\"staticEmail2\" class=\"\">Tiempo estándar(min) <span style=\"color: red\">* &nbsp; &nbsp; &nbsp;</span></label>\r\n              <input type=\"number\" formControlName=\"tiempoEstandar\" style=\"max-width: 100px;\" class=\"form-control\" id=\"staticEmail2\">\r\n            </div>\r\n\r\n            <div class=\"form-group mb-2 mx-sm-2\">\r\n              <label for=\"staticEmail2\" class=\"\">Detalle &nbsp; &nbsp; &nbsp; &nbsp;</label>\r\n\r\n              <textarea formControlName=\"detalle\" maxlength=\"50\" cols=\"26\" class=\"form-control\"></textarea>\r\n            </div>\r\n\r\n\r\n\r\n            <button title=\"Guardar Servicio\" type=\"submit\"  class=\"btn btn-primary mb-2\">Guardar Servicio</button>\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
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
            detalle: [''],
        });
    }
    CrearServicioComponent.prototype.ngOnInit = function () {
        this.obtenerCategorias();
    };
    CrearServicioComponent.prototype.seleccionarCategoria = function (categoria) {
        this.categoriaSeleccionada = categoria;
    };
    CrearServicioComponent.prototype.agregarCategoria = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Ingrese el nombre de la categoría',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'on'
            },
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            showLoaderOnConfirm: true,
            allowOutsideClick: function () { return !sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.isLoading(); }
        }).then(function (result) {
            if (result.value) {
                var categoria = result.value.toUpperCase();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: 'Está seguro?',
                    text: "Está seguro que deseas guardar la categoría: " + result.value.toUpperCase(),
                    type: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    cancelButtonText: 'Cancelar',
                    confirmButtonText: 'Si!'
                }).then(function (result) {
                    if (result.value) {
                        _this.servicioService.obtenerUnaCategoria(categoria).subscribe(function (res) {
                            if (res.length > 0) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Existió un error!', 'Ya existe la categoría ingresada', 'error');
                            }
                            else {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Listo!', 'Categoría guardada exitosamente', 'success');
                                _this.servicioService.crearCategoria({ nombre: categoria }).then(function (res) {
                                });
                            }
                        });
                    }
                });
            }
        });
    };
    CrearServicioComponent.prototype.obtenerCategorias = function () {
        this.categorias = this.servicioService.obtenerCategorias();
    };
    CrearServicioComponent.prototype.guardarServicio1 = function () {
    };
    CrearServicioComponent.prototype.guardarServicio = function () {
        var _this = this;
        if (this.servicioForm.value.codigo == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Existió un error', 'El código es obligatorio', 'error');
        }
        else if (this.servicioForm.value.descripcion == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Existió un error', 'El servicio es obligatorio', 'error');
        }
        else if (this.servicioForm.value.tiempoEstandar <= 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Existió un error', 'El tiempo estándar no puede ser negativo o nulo', 'error');
        }
        else {
            this.servicioService.validarServicio('codigo', this.servicioForm.value.codigo).subscribe(function (res) {
                if (res.length > 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Existió un error', 'El código ingresado ya existe en la base de datos', 'error');
                }
                else {
                    _this.servicioService.validarServicio('descripcion', _this.servicioForm.value.descripcion).subscribe(function (res) {
                        if (res.length > 0) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Existió un error', 'El servicio ingresado ya existe en la base de datos', 'error');
                        }
                        else {
                            _this.servicioService.crearServicio(_this.categoriaSeleccionada.id, _this.servicioForm.value)
                                .then(function (servicio) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Listo!', 'Servicio guardado exitosamente', 'success');
                                _this.servicioForm = _this.fb.group({
                                    codigo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                                    descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                                    tiempoEstandar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                                    detalle: [''],
                                });
                            }, function (error) {
                            });
                        }
                    });
                }
            });
        }
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
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _pipes_format_time_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/format-time.pipe */ "./src/app/pipes/format-time.pipe.ts");
/* harmony import */ var _categoria_categoria_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./categoria/categoria.component */ "./src/app/layout/servicio/categoria/categoria.component.ts");
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
                angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"]
            ],
            exports: [_crear_servicio_crear_servicio_component__WEBPACK_IMPORTED_MODULE_2__["CrearServicioComponent"], _pipes_format_time_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatTimePipe"]],
            declarations: [_crear_servicio_crear_servicio_component__WEBPACK_IMPORTED_MODULE_2__["CrearServicioComponent"], _consultar_servicio_consultar_servicio_component__WEBPACK_IMPORTED_MODULE_3__["ConsultarServicioComponent"], _informacion_servicio_informacion_servicio_component__WEBPACK_IMPORTED_MODULE_4__["InformacionServicioComponent"], _pipes_format_time_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatTimePipe"], _categoria_categoria_component__WEBPACK_IMPORTED_MODULE_11__["CategoriaComponent"]]
        })
    ], ServicioModule);
    return ServicioModule;
}());



/***/ }),

/***/ "./src/app/pipes/format-time.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/format-time.pipe.ts ***!
  \*******************************************/
/*! exports provided: FormatTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatTimePipe", function() { return FormatTimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FormatTimePipe = /** @class */ (function () {
    function FormatTimePipe() {
    }
    FormatTimePipe.prototype.transform = function (value) {
        return moment__WEBPACK_IMPORTED_MODULE_1__["utc"](value * 1000).format('HH:mm:ss');
    };
    FormatTimePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'formatTime'
        })
    ], FormatTimePipe);
    return FormatTimePipe;
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
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
        var id = this.afs.createId();
        return this.empresa.collection('categorias').doc(id).set(categoria);
    };
    ServicioService.prototype.modificarCategoria = function (id, categoria) {
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
        return this.empresa.collection('categorias').doc(id).update(categoria);
    };
    ServicioService.prototype.crearServicio = function (categoria, servicio) {
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
        var itemDoc = this.afs.doc('categorias/' + categoria);
        var id = this.afs.createId();
        this.empresa.collection('servicios').doc(id).set(servicio);
        return this.empresa.collection('servicios').doc(id).update({ categoria: itemDoc.ref });
    };
    ServicioService.prototype.eliminarServicio = function (servicio) {
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
        return this.empresa.collection('servicios').doc(servicio.id).delete();
    };
    ServicioService.prototype.validarServicio = function (campo, valor) {
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
        return this.empresa.collection('servicios', function (query) { return query.where(campo, '==', valor); }).valueChanges();
    };
    ServicioService.prototype.obtenerCategorias = function () {
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
        return this.empresa.collection('categorias', function (query) { return query.orderBy('nombre'); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return { id: id, data: data };
        }); }));
    };
    ServicioService.prototype.obtenerUnaCategoria = function (categoria) {
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
        return this.empresa.collection('categorias', function (query) { return query.where('nombre', '==', categoria); }).valueChanges();
    };
    ServicioService.prototype.eliminarCategoria = function (idCategoria) {
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
        return this.empresa.collection('categorias').doc(idCategoria).delete();
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