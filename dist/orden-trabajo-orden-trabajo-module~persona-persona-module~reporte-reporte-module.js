(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orden-trabajo-orden-trabajo-module~persona-persona-module~reporte-reporte-module"],{

/***/ "./src/app/layout/persona/app-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/persona/app-routing.module.ts ***!
  \******************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _crear_persona_crear_persona_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crear-persona/crear-persona.component */ "./src/app/layout/persona/crear-persona/crear-persona.component.ts");
/* harmony import */ var _consultar_persona_consultar_persona_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consultar-persona/consultar-persona.component */ "./src/app/layout/persona/consultar-persona/consultar-persona.component.ts");
/* harmony import */ var _informacion_persona_informacion_persona_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./informacion-persona/informacion-persona.component */ "./src/app/layout/persona/informacion-persona/informacion-persona.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'crearpersona/:id',
        component: _crear_persona_crear_persona_component__WEBPACK_IMPORTED_MODULE_2__["CrearPersonaComponent"]
    },
    {
        path: 'consultarpersona',
        component: _consultar_persona_consultar_persona_component__WEBPACK_IMPORTED_MODULE_3__["ConsultarPersonaComponent"]
    },
    {
        path: 'informacionpersona/:id',
        component: _informacion_persona_informacion_persona_component__WEBPACK_IMPORTED_MODULE_4__["InformacionPersonaComponent"]
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

/***/ "./src/app/layout/persona/consultar-persona/consultar-persona.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/persona/consultar-persona/consultar-persona.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Consultar persona'\"  (myEvent)=\"imprimirReporte($event)\" [pdf]=\"true\" [nuevo]=\"'/persona/crearpersona/nuevo'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12\">\r\n\r\n\r\n\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">Personas</div>\r\n        <div class=\"card-body table-responsive\">\r\n          <table id=\"example-datatable\" class=\"table\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n            <thead>\r\n              <tr>\r\n                <th></th>\r\n      \r\n                <th>Identificación</th>\r\n                <th style=\"width: 50%\">Nombre</th>\r\n   \r\n                <th>Correo</th>\r\n                <th>Teléfono</th>\r\n  \r\n\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let persona of personas\">\r\n                <td>\r\n                  <div class=\"btn-group\">\r\n                      <a title=\"Editar persona\" routerLink=\"/persona/crearpersona/{{persona.id}}\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-pencil\"></i></a>\r\n                      <button title=\"Eliminar persona\" class=\"btn btn-danger btn-sm\" (click)=\"eliminarPersona(persona)\"><i class=\"fa fa-trash\"></i></button>\r\n                  </div>\r\n                  \r\n                </td>\r\n         \r\n                <td>{{persona.data.cedula}}</td>\r\n                <td>\r\n                  <a title=\"Ver información\" routerLink=\"/persona/informacionpersona/{{persona.id}}\">{{persona.data.nombre}}</a>\r\n                 <br>\r\n                 <p>\r\n                 <small [class.text-danger]=\"persona.data.estado=='Inactivo'\" [class.text-success]=\"persona.data.estado=='Activo'\"> <i [class.fa-check-square]=\"persona.data.estado=='Activo'\" [class.fa-minus-square]=\"persona.data.estado=='Inactivo'\" class=\"fa\"></i> {{persona.data.estado}} </small> <small> - </small>\r\n                 <small><i class=\"fa fa-user\"></i> {{persona.data.tipo}} </small> <small> - </small>\r\n                  <small *ngIf=\"persona.data.cliente\"> Cliente </small> \r\n                  <small *ngIf=\"persona.data.empleado\"> Empleado </small> \r\n                </p>\r\n                </td>\r\n  \r\n                <td>{{persona.data.correo }}</td>\r\n                <td>{{persona.data.telefono}}</td>\r\n   \r\n              </tr>\r\n\r\n\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/persona/consultar-persona/consultar-persona.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/persona/consultar-persona/consultar-persona.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/persona/consultar-persona/consultar-persona.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/persona/consultar-persona/consultar-persona.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ConsultarPersonaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarPersonaComponent", function() { return ConsultarPersonaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _servicios_persona_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../servicios/persona.service */ "./src/app/servicios/persona.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _servicios_reporte_reporte_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../servicios/reporte/reporte.service */ "./src/app/servicios/reporte/reporte.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConsultarPersonaComponent = /** @class */ (function () {
    function ConsultarPersonaComponent(personaService, reporteService) {
        this.personaService = personaService;
        this.reporteService = reporteService;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            autoWidth: true,
            responsive: true,
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
    ConsultarPersonaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personaService.obtenerPersonas()
            .subscribe(function (res) {
            $('#example-datatable').DataTable().destroy();
            _this.personas = res;
            _this.dtTrigger.next();
        });
    };
    ConsultarPersonaComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    ConsultarPersonaComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            _this.dtTrigger.next();
        });
    };
    ConsultarPersonaComponent.prototype.llenarTabla = function () {
        this.dtOptions = {
            pagingType: 'full_numbers'
        };
    };
    ConsultarPersonaComponent.prototype.imprimirReporte = function () {
        this.reporteService.reporteDatos(this.personas, 'Personas');
    };
    ConsultarPersonaComponent.prototype.eliminarPersona = function (persona) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: 'Está seguro?',
            text: "¿Está seguro que desea eliminar la persona: " + persona.data.nombre + "?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
        }).then(function (result) {
            if (result.value) {
                _this.personaService.eliminarPersona(persona.id);
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Eliminado!', 'El registro ha sido eliminado.', 'success');
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", Array)
    ], ConsultarPersonaComponent.prototype, "personas", void 0);
    ConsultarPersonaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consultar-persona',
            template: __webpack_require__(/*! ./consultar-persona.component.html */ "./src/app/layout/persona/consultar-persona/consultar-persona.component.html"),
            styles: [__webpack_require__(/*! ./consultar-persona.component.scss */ "./src/app/layout/persona/consultar-persona/consultar-persona.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_servicios_persona_service__WEBPACK_IMPORTED_MODULE_2__["PersonaService"], _servicios_reporte_reporte_service__WEBPACK_IMPORTED_MODULE_6__["ReporteService"]])
    ], ConsultarPersonaComponent);
    return ConsultarPersonaComponent;
}());



/***/ }),

/***/ "./src/app/layout/persona/crear-persona/crear-persona.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/persona/crear-persona/crear-persona.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Crear persona'\"  [icon]=\"'fa-edit'\"></app-page-header>\r\n\r\n    \r\n\r\n\r\n    <div *ngIf=\"!existePersona\" class=\"alert alert-info\" role=\"alert\">\r\n        Persona no encontrada\r\n    </div>\r\n\r\n\r\n\r\n    <div *ngIf=\"existePersona\" class=\"card\">\r\n\r\n        <div class=\"card-header\" >\r\n            Información de la persona\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"personaForm\" (ngSubmit)=\"guardarPersona()\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"staticEmail2\" class=\"\">Estado</label>\r\n\r\n                                    <select class=\"form-control form-control-sm\" formControlName=\"estado\" name=\"\" id=\"\">\r\n                                        <option value=\"Activo\">Activo</option>\r\n                                        <option value=\"Inactivo\">Inactivo</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"staticEmail2\" class=\"\">Tipo</label>\r\n\r\n                                    <select class=\"form-control form-control-sm\" formControlName=\"tipo\" name=\"\" id=\"\">\r\n                                        <option value=\"Natural\">Natural</option>\r\n                                        <option value=\"Juridica\">Juridica</option>\r\n                                        <option value=\"Sin Ruc\">Sin Ruc</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n\r\n                        <div class=\"form-group form-group-sm\">\r\n                            <label for=\"inputPassword2\" class=\"\">Cédula / RUC <span style=\"color: red\">*</span></label>\r\n                            <input autofocus type=\"text\" maxlength=\"15\" class=\"form-control form-control-sm\" formControlName=\"cedula\" id=\"inputPassword2\" placeholder=\"Cédula o RUC\">\r\n                        </div>\r\n\r\n                        <div class=\"form-group \">\r\n                            <label for=\"inputPassword2\" class=\"\">Nombre <span style=\"color: red\">*</span></label>\r\n                            <input type=\"text\" maxlength=\"30\" class=\"form-control form-control-sm\" formControlName=\"nombre\" id=\"inputPassword2\" placeholder=\"Nombre\">\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputPassword2\" class=\"\">Dirección</label>\r\n                            <textarea maxlength=\"100\" class=\"form-control form-control-sm\" formControlName=\"direccion\" cols=\"30\" rows=\"4\" placeholder=\"Dirección\"></textarea>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputPassword2\" class=\"\">Teléfono</label>\r\n                            <input maxlength=\"30\" type=\"text\" class=\"form-control form-control-sm\" formControlName=\"telefono\" id=\"inputPassword2\" placeholder=\"Teléfono\">\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputPassword2\" class=\"\">Correo <span style=\"color: red\">*</span></label>\r\n                            <input maxlength=\"50\" type=\"text\" class=\"form-control form-control-sm\" formControlName=\"correo\" id=\"inputPassword2\" placeholder=\"Correo\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Roles de la persona en la empresa</label>\r\n                            <div class=\"checkbox\">\r\n                                <label>\r\n                                    <input type=\"checkbox\" formControlName=\"cliente\"> Cliente\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"checkbox\">\r\n                                <label>\r\n                                    <input type=\"checkbox\" formControlName=\"empleado\"> Empleado\r\n                                </label>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div *ngIf=\"existePersona\" class=\"alert alert-info\" role=\"alert\">\r\n                            Todos los campos marcados con <strong>(*)</strong> son obligatorios\r\n                        </div>\r\n\r\n\r\n                        <button title=\"Guardar Persona\" type=\"submit\" class=\"btn btn-primary mb-2\">Guardar Persona</button>\r\n\r\n\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <form class=\"form\" [formGroup]=\"personaForm\" (ngSubmit)=\"guardarPersona()\">\r\n            <div class=\"col-lg-12\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/layout/persona/crear-persona/crear-persona.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/layout/persona/crear-persona/crear-persona.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/persona/crear-persona/crear-persona.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/persona/crear-persona/crear-persona.component.ts ***!
  \*************************************************************************/
/*! exports provided: CrearPersonaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearPersonaComponent", function() { return CrearPersonaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _servicios_persona_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servicios/persona.service */ "./src/app/servicios/persona.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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







var CrearPersonaComponent = /** @class */ (function () {
    function CrearPersonaComponent(fb, personaService, route) {
        var _this = this;
        this.fb = fb;
        this.personaService = personaService;
        this.route = route;
        this.existePersona = false;
        this.personaForm = this.fb.group({
            estado: ['Activo', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tipo: ['Natural', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cedula: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            direccion: ['', []],
            telefono: ['', []],
            correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            cliente: [false],
            empleado: [false],
            roles: { Administrador: false, Asesor: false, Operador: false }
        });
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id != 'nuevo' && this.id != null) {
            this.persona = this.personaService.obtenerUnaPersona(this.id);
            this.persona.subscribe(function (persona) {
                if (persona != null) {
                    _this.existePersona = true;
                    _this.personaForm = _this.fb.group({
                        estado: ['Activo', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        tipo: ['Natural', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        cedula: [persona.cedula, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        nombre: [persona.nombre, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        direccion: [persona.direccion, []],
                        telefono: [persona.telefono, []],
                        correo: [persona.correo, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                        cliente: [persona.cliente],
                        empleado: [persona.empleado]
                    });
                }
                else {
                    _this.existePersona = false;
                }
            });
        }
        else {
            this.existePersona = true;
        }
    }
    CrearPersonaComponent.prototype.ngOnInit = function () {
    };
    CrearPersonaComponent.prototype.guardarPersona = function () {
        var _this = this;
        if (this.id == 'nuevo' || this.id == null) {
            if (this.personaForm.value.cedula.trim() == '') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Existió un error', 'El número de Cédula/RUC es obligatorio', 'error');
            }
            else {
                this.personaForm.value.cedula = this.personaForm.value.cedula.trim();
                if (this.personaForm.value.nombre.trim() == '') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Existió un error', 'El nombre es obligatorio', 'error');
                }
                else {
                    this.personaForm.value.nombre = this.personaForm.value.nombre.trim();
                    if (this.personaForm.value.correo.trim() == '') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Existió un error', 'El correo es obligatorio', 'error');
                    }
                    else {
                        this.personaForm.value.correo = this.personaForm.value.correo.trim();
                        if (!this.validarEmail(this.personaForm.value.correo.trim())) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Existió un error', 'El correo ingresado no tiene el formato correcto', 'error');
                        }
                        else {
                            if (!this.personaForm.value.cliente && !this.personaForm.value.empleado) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Existió un error', 'Debe seleccionar al menos un rol', 'error');
                            }
                            else {
                                this.personaService.crearPersona(this.personaForm.value).then(function (res) {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Listo!', 'Persona guardada exitosamente', 'success');
                                    _this.personaForm = _this.fb.group({
                                        estado: ['Activo', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                        tipo: ['Natural', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                        cedula: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                                        nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                                        direccion: ['', []],
                                        telefono: ['', []],
                                        correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                                        cliente: [false],
                                        empleado: [false],
                                        roles: { Administrador: false, Asesor: false, Operador: false }
                                    });
                                });
                            }
                        }
                    }
                }
            }
        }
        else {
            if (this.personaForm.value.cedula.trim() == '') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Existió un error', 'El número de Cédula/RUC es obligatorio', 'error');
            }
            else {
                this.personaForm.value.cedula = this.personaForm.value.cedula.trim();
                if (this.personaForm.value.nombre.trim() == '') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Existió un error', 'El nombre es obligatorio', 'error');
                }
                else {
                    this.personaForm.value.nombre = this.personaForm.value.nombre.trim();
                    if (this.personaForm.value.correo.trim() == '') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Existió un error', 'El correo es obligatorio', 'error');
                    }
                    else {
                        this.personaForm.value.correo = this.personaForm.value.correo.trim();
                        if (!this.validarEmail(this.personaForm.value.correo.trim())) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Existió un error', 'El correo ingresado no tiene el formato correcto', 'error');
                        }
                        else {
                            if (!this.personaForm.value.cliente && !this.personaForm.value.empleado) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Existió un error', 'Debe seleccionar al menos un rol', 'error');
                            }
                            else {
                                this.personaService.modificarPersona(this.id, this.personaForm.value).then(function (persona) {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Listo!', 'Persona modificada exitosamente', 'success');
                                }, function (error) {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Existió un error', 'Existió un error al modificar la persona', 'error');
                                });
                            }
                        }
                    }
                }
            }
        }
    };
    CrearPersonaComponent.prototype.validarEmail = function (email) {
        var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        return regex.test(email);
    };
    CrearPersonaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crear-persona',
            template: __webpack_require__(/*! ./crear-persona.component.html */ "./src/app/layout/persona/crear-persona/crear-persona.component.html"),
            styles: [__webpack_require__(/*! ./crear-persona.component.scss */ "./src/app/layout/persona/crear-persona/crear-persona.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _servicios_persona_service__WEBPACK_IMPORTED_MODULE_3__["PersonaService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CrearPersonaComponent);
    return CrearPersonaComponent;
}());



/***/ }),

/***/ "./src/app/layout/persona/informacion-persona/informacion-persona.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/persona/informacion-persona/informacion-persona.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Información persona'\" [nuevo]=\"'/persona/crearpersona/nuevo'\" [edicion]=\"'/persona/crearpersona/'+id\" [icon]=\"'fa-edit'\"></app-page-header>\r\n\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Información\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <table class=\"table table-sm table-bordered\">\r\n\r\n            <tbody>\r\n              <tr>\r\n                <th>Tipo</th>\r\n                <td>{{ (persona | async)?.tipo }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Cédula / RUC</th>\r\n                <td>{{ (persona | async)?.cedula }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Nombre / Razón social</th>\r\n                <td>{{ (persona | async)?.nombre }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Dirección</th>\r\n                <td>{{ (persona | async)?.direccion }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Correo</th>\r\n                <td>{{ (persona | async)?.correo }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Teléfono</th>\r\n                <td>{{ (persona | async)?.telefono }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Roles</th>\r\n                <td>\r\n                  <p *ngIf=\"(persona | async)?.cliente\">Cliente</p>\r\n                  <p *ngIf=\"(persona | async)?.empleado\">Empleado</p>\r\n                </td>\r\n              </tr>\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"(persona | async)?.empleado\" class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Opciones de usuario\r\n        </div>\r\n        <div class=\"card-body\">\r\n\r\n          <p>Roles del usuario en la empresa</p>\r\n          <input [checked]=\"personaq.roles.Administrador\" (change)=\"modificarRoles()\" [(ngModel)]=\"personaq.roles.Administrador\" class=\"form-check-input\"\r\n            type=\"checkbox\" value=\"1\" id=\"rol1\">\r\n          <label class=\"form-check-label\" for=\"rol1\">\r\n            Administrador\r\n          </label>\r\n          <br>\r\n\r\n          <input [checked]=\"personaq.roles.Operador\" [(ngModel)]=\"personaq.roles.Operador\" (change)=\"modificarRoles()\" class=\"form-check-input\" type=\"checkbox\"\r\n            value=\"2\" id=\"rol2\">\r\n          <label class=\"form-check-label\" for=\"rol2\">\r\n            Operador\r\n          </label>\r\n          <br>\r\n\r\n\r\n\r\n\r\n\r\n          <input [checked]=\"personaq.roles.Asesor\" [(ngModel)]=\"personaq.roles.Asesor\" (change)=\"modificarRoles()\" class=\"form-check-input\"\r\n            type=\"checkbox\" value=\"3\" id=\"rol3\">\r\n          <label class=\"form-check-label\" for=\"rol3\">\r\n            Asesor de servicio\r\n          </label>\r\n          <br>\r\n          <br>\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/layout/persona/informacion-persona/informacion-persona.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/persona/informacion-persona/informacion-persona.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/persona/informacion-persona/informacion-persona.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/persona/informacion-persona/informacion-persona.component.ts ***!
  \*************************************************************************************/
/*! exports provided: InformacionPersonaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionPersonaComponent", function() { return InformacionPersonaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_persona_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servicios/persona.service */ "./src/app/servicios/persona.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
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







var InformacionPersonaComponent = /** @class */ (function () {
    function InformacionPersonaComponent(route, personaService, auth, db) {
        var _this = this;
        this.route = route;
        this.personaService = personaService;
        this.auth = auth;
        this.db = db;
        this.error = '';
        this.id = this.route.snapshot.paramMap.get('id');
        this.persona = this.personaService.obtenerUnaPersona(this.id);
        this.persona.subscribe(function (res) {
            _this.personaq = res;
        });
    }
    InformacionPersonaComponent.prototype.ngOnInit = function () {
    };
    InformacionPersonaComponent.prototype.generarUsuario = function (persona) {
        var _this = this;
        this.empresa = this.db.doc(localStorage.getItem('empresa'));
        this.auth.auth.createUserWithEmailAndPassword(this.personaq.correo, this.personaq.cedula)
            .then(function (ususario) {
            var id = _this.db.createId();
            _this.user = _this.db.doc('usuario/' + _this.auth.auth.currentUser.uid);
            _this.db.collection('empresaUsuario').doc(id).set({ empresa: _this.empresa.ref, correo: _this.personaq.correo, tipo: 'usuario' })
                .then(function (user) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Listo!', 'Persona guardada exitosamente', 'success');
                _this.empresa.collection('personas').doc(_this.id).update({ usuario: _this.auth.auth.currentUser.uid });
            });
        }, function (err) {
            _this.auth.user.subscribe(function (res) {
            });
            _this.user = _this.db.doc('usuario/' + _this.auth.auth.currentUser.uid);
            _this.db.collection('empresaUsuario', function (query) { return query.where('empresa', '==', _this.empresa.ref).where('email', '==', _this.personaq.correo); }).valueChanges().subscribe(function (res) {
                if (res.length == 0) {
                    var id = _this.db.createId();
                    _this.db.collection('empresaUsuario').doc(id).set({ empresa: _this.empresa.ref, correo: _this.personaq.correo, tipo: 'usuario' })
                        .then(function (user) {
                        _this.empresa.collection('personas').doc(_this.id).update({ usuario: _this.auth.auth.currentUser.uid });
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Listo!', 'Usuario creado correctamente', 'success');
                    });
                }
                else {
                    _this.error = 'Ya existe un usuario con el correo electrónico ingresado';
                }
            });
            //   this.db.collection('usuario').doc(this.auth.auth.currentUser.uid).set({empresa:this.empresa.ref, nombre: this.personaq.nombre,  id: this.auth.auth.currentUser.uid});
            //    
        });
    };
    InformacionPersonaComponent.prototype.enviarCorreoRecuperacion = function (persona) {
        this.auth.auth.sendPasswordResetEmail(persona.correo).then(function (email) {
            alert('Se envió un email de recuperación correctamente');
        }, function (error) {
            alert('Existió un error al enviar el email de recuperación');
        });
    };
    InformacionPersonaComponent.prototype.modificarRoles = function () {
        this.personaService.modificarPersona(this.id, { roles: this.personaq.roles });
    };
    InformacionPersonaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-informacion-persona',
            template: __webpack_require__(/*! ./informacion-persona.component.html */ "./src/app/layout/persona/informacion-persona/informacion-persona.component.html"),
            styles: [__webpack_require__(/*! ./informacion-persona.component.scss */ "./src/app/layout/persona/informacion-persona/informacion-persona.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _servicios_persona_service__WEBPACK_IMPORTED_MODULE_3__["PersonaService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
    ], InformacionPersonaComponent);
    return InformacionPersonaComponent;
}());



/***/ }),

/***/ "./src/app/layout/persona/persona.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/persona/persona.module.ts ***!
  \**************************************************/
/*! exports provided: PersonaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaModule", function() { return PersonaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _crear_persona_crear_persona_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crear-persona/crear-persona.component */ "./src/app/layout/persona/crear-persona/crear-persona.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/layout/persona/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _consultar_persona_consultar_persona_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultar-persona/consultar-persona.component */ "./src/app/layout/persona/consultar-persona/consultar-persona.component.ts");
/* harmony import */ var _informacion_persona_informacion_persona_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./informacion-persona/informacion-persona.component */ "./src/app/layout/persona/informacion-persona/informacion-persona.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PersonaModule = /** @class */ (function () {
    function PersonaModule() {
    }
    PersonaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"]
            ],
            exports: [_crear_persona_crear_persona_component__WEBPACK_IMPORTED_MODULE_2__["CrearPersonaComponent"]],
            declarations: [_crear_persona_crear_persona_component__WEBPACK_IMPORTED_MODULE_2__["CrearPersonaComponent"], _consultar_persona_consultar_persona_component__WEBPACK_IMPORTED_MODULE_6__["ConsultarPersonaComponent"], _informacion_persona_informacion_persona_component__WEBPACK_IMPORTED_MODULE_7__["InformacionPersonaComponent"]]
        })
    ], PersonaModule);
    return PersonaModule;
}());



/***/ })

}]);
//# sourceMappingURL=orden-trabajo-orden-trabajo-module~persona-persona-module~reporte-reporte-module.js.map