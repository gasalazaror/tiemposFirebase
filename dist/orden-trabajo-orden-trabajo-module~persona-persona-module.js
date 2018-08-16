(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orden-trabajo-orden-trabajo-module~persona-persona-module"],{

/***/ "./node_modules/angular-datatables/index.js":
/*!**************************************************!*\
  !*** ./node_modules/angular-datatables/index.js ***!
  \**************************************************/
/*! exports provided: DataTableDirective, DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"]; });

/* harmony import */ var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/angular-datatables.module */ "./node_modules/angular-datatables/src/angular-datatables.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"]; });

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.directive.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
  \*****************************************************************************/
/*! exports provided: DataTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return DataTableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */


var DataTableDirective = /** @class */ (function () {
    function DataTableDirective(el) {
        this.el = el;
        /**
           * The DataTable option you pass to configure your table.
           */
        this.dtOptions = {};
    }
    DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dtTrigger) {
            this.dtTrigger.subscribe(function () {
                _this.displayTable();
            });
        }
        else {
            this.displayTable();
        }
    };
    DataTableDirective.prototype.ngOnDestroy = function () {
        if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
        }
        if (this.dt) {
            this.dt.destroy(true);
        }
    };
    DataTableDirective.prototype.displayTable = function () {
        var _this = this;
        this.dtInstance = new Promise(function (resolve, reject) {
            Promise.resolve(_this.dtOptions).then(function (dtOptions) {
                // Using setTimeout as a "hack" to be "part" of NgZone
                setTimeout(function () {
                    _this.dt = $(_this.el.nativeElement).DataTable(dtOptions);
                    resolve(_this.dt);
                });
            });
        });
    };
    DataTableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[datatable]'
                },] },
    ];
    /** @nocollapse */
    DataTableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    DataTableDirective.propDecorators = {
        "dtOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dtTrigger": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return DataTableDirective;
}());

//# sourceMappingURL=angular-datatables.directive.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.module.js":
/*!**************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
  \**************************************************************************/
/*! exports provided: DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return DataTablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */



var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule
        };
    };
    DataTablesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
                    exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
                },] },
    ];
    return DataTablesModule;
}());

//# sourceMappingURL=angular-datatables.module.js.map

/***/ }),

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
        path: 'crearpersona',
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

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Consultar persona'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12\">\r\n\r\n\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">Personas</div>\r\n        <div class=\"card-body table-responsive\">\r\n\r\n      \r\n          <table class=\"table table-bordered\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n            <thead>\r\n              <tr>\r\n                <th></th>\r\n                <th>Tipo</th>\r\n                <th>Cédula</th>\r\n                <th>Nombre</th>\r\n                <th>Dirección</th>\r\n                <th>Correo</th>\r\n                <th>Teléfono</th>\r\n                <th>Roles</th>\r\n\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let persona of personas | async\">\r\n                <td>\r\n                  <button (click)=\"verPersona(persona)\">ver</button>\r\n                </td>\r\n                <td>{{persona.data.tipo | uppercase}}</td>\r\n                <td>{{persona.data.cedula | uppercase}}</td>\r\n                <td><a href=\"/persona/informacionpersona/{{persona.id}}\">{{persona.data.nombre | uppercase}}</a></td>\r\n                <td>{{persona.data.direccion | uppercase}}</td>\r\n                <td>{{persona.data.correo }}</td>\r\n                <td>{{persona.data.telefono}}</td>\r\n                <td>\r\n                  <p *ngIf=\"persona.data.cliente\">Cliente</p>\r\n                  <p *ngIf=\"persona.data.empleado\">Empleado</p>\r\n                </td>\r\n              </tr>\r\n\r\n\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _servicios_persona_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servicios/persona.service */ "./src/app/servicios/persona.service.ts");
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






var ConsultarPersonaComponent = /** @class */ (function () {
    function ConsultarPersonaComponent(personaService) {
        this.personaService = personaService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ConsultarPersonaComponent.prototype.ngOnInit = function () {
        this.obtenerPersonas();
    };
    ConsultarPersonaComponent.prototype.obtenerPersonas = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            autoWidth: true,
        };
        this.personas = this.personaService.obtenerPersonas();
        this.personas.subscribe(function (res) {
            if (_this.dtElement) {
                _this.dtElement.dtInstance.then(function (dtInstance) {
                    // Destroy the table first
                    dtInstance.destroy();
                    // Call the dtTrigger to rerender again
                    _this.dtTrigger.next();
                });
            }
            else {
                _this.dtTrigger.next();
            }
        });
    };
    ConsultarPersonaComponent.prototype.rerender = function () {
    };
    ConsultarPersonaComponent.prototype.llenarTabla = function () {
        this.dtOptions = {
            pagingType: 'full_numbers'
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], ConsultarPersonaComponent.prototype, "personas", void 0);
    ConsultarPersonaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consultar-persona',
            template: __webpack_require__(/*! ./consultar-persona.component.html */ "./src/app/layout/persona/consultar-persona/consultar-persona.component.html"),
            styles: [__webpack_require__(/*! ./consultar-persona.component.scss */ "./src/app/layout/persona/consultar-persona/consultar-persona.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_servicios_persona_service__WEBPACK_IMPORTED_MODULE_3__["PersonaService"]])
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

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Crear persona'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n\r\n    <div class=\"card\">\r\n        <div class=\"card-header\">\r\n            Información de la persona\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"personaForm\" (ngSubmit)=\"guardarPersona()\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"staticEmail2\" class=\"\">Estado</label>\r\n\r\n                            <select class=\"form-control\" formControlName=\"estado\" name=\"\" id=\"\">\r\n                                <option value=\"Activo\">Activo</option>\r\n                                <option value=\"Inactivo\">Inactivo</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label for=\"staticEmail2\" class=\"\">Tipo</label>\r\n\r\n                            <select class=\"form-control\" formControlName=\"tipo\" name=\"\" id=\"\">\r\n                                <option value=\"Natural\">Natural</option>\r\n                                <option value=\"Juridica\">Juridica</option>\r\n                                <option value=\"Sin Ruc\">Sin Ruc</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputPassword2\" class=\"\">Cédula / RUC</label>\r\n                            <input autofocus type=\"text\" class=\"form-control\" formControlName=\"cedula\" id=\"inputPassword2\" placeholder=\"Cédula o RUC\">\r\n                        </div>\r\n\r\n                        <div class=\"form-group \">\r\n                            <label for=\"inputPassword2\" class=\"\">Nombre</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"nombre\" id=\"inputPassword2\" placeholder=\"Nombre\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputPassword2\" class=\"\">Dirección</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"direccion\" id=\"inputPassword2\" placeholder=\"Dirección\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputPassword2\" class=\"\">Teléfono</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"telefono\" id=\"inputPassword2\" placeholder=\"Teléfono\">\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputPassword2\" class=\"\">Correo</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"correo\" id=\"inputPassword2\" placeholder=\"Correo\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Roles de la persona en la empresa</label>\r\n                            <div class=\"checkbox\">\r\n                                <label>\r\n                                    <input type=\"checkbox\" formControlName=\"cliente\"> Cliente\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"checkbox\">\r\n                                <label>\r\n                                    <input type=\"checkbox\" formControlName=\"empleado\"> Empleado\r\n                                </label>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <button [disabled]=\"!personaForm.valid\" type=\"submit\" class=\"btn btn-primary mb-2\">Guardar Persona</button>\r\n\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <form class=\"form\" [formGroup]=\"personaForm\" (ngSubmit)=\"guardarPersona()\">\r\n            <div class=\"col-lg-12\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n\r\n\r\n</div>"

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
    function CrearPersonaComponent(fb, personaService) {
        this.fb = fb;
        this.personaService = personaService;
        this.personaForm = this.fb.group({
            estado: ['Activo', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tipo: ['Natural', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cedula: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(13)]],
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            direccion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            cliente: [false],
            empleado: [false]
        });
    }
    CrearPersonaComponent.prototype.ngOnInit = function () {
    };
    CrearPersonaComponent.prototype.guardarPersona = function () {
        var _this = this;
        console.log(this.personaForm.value);
        this.personaService.crearPersona(this.personaForm.value).then(function (persona) {
            _this.personaForm.reset();
        }, function (error) {
            console.log('existió un error');
        });
    };
    CrearPersonaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crear-persona',
            template: __webpack_require__(/*! ./crear-persona.component.html */ "./src/app/layout/persona/crear-persona/crear-persona.component.html"),
            styles: [__webpack_require__(/*! ./crear-persona.component.scss */ "./src/app/layout/persona/crear-persona/crear-persona.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _servicios_persona_service__WEBPACK_IMPORTED_MODULE_3__["PersonaService"]])
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

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Información persona'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <table class=\"table table-sm table-bordered\">\r\n\r\n        <tbody>\r\n          <tr>\r\n            <th>Tipo</th>\r\n            <td>{{ (persona | async)?.tipo }}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Cédula / RUC</th>\r\n            <td>{{ (persona | async)?.cedula }}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Nombre / Razón social</th>\r\n            <td>{{ (persona | async)?.nombre }}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Dirección</th>\r\n            <td>{{ (persona | async)?.direccion }}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Correo</th>\r\n            <td>{{ (persona | async)?.correo }}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Teléfono</th>\r\n            <td>{{ (persona | async)?.telefono }}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Roles</th>\r\n            <td>\r\n              <p *ngIf=\"(persona | async)?.cliente\">Cliente</p>\r\n              <p *ngIf=\"(persona | async)?.empleado\">Empleado</p>\r\n            </td>\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</div>"

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
    function InformacionPersonaComponent(route, personaService) {
        this.route = route;
        this.personaService = personaService;
        this.id = this.route.snapshot.paramMap.get('id');
        this.persona = this.personaService.obtenerUnaPersona(this.id);
        console.log(this.persona);
    }
    InformacionPersonaComponent.prototype.ngOnInit = function () {
    };
    InformacionPersonaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-informacion-persona',
            template: __webpack_require__(/*! ./informacion-persona.component.html */ "./src/app/layout/persona/informacion-persona/informacion-persona.component.html"),
            styles: [__webpack_require__(/*! ./informacion-persona.component.scss */ "./src/app/layout/persona/informacion-persona/informacion-persona.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _servicios_persona_service__WEBPACK_IMPORTED_MODULE_3__["PersonaService"]])
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
//# sourceMappingURL=orden-trabajo-orden-trabajo-module~persona-persona-module.js.map