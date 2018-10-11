(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configuracion-configuracion-module"],{

/***/ "./src/app/layout/configuracion/app-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/configuracion/app-routing.module.ts ***!
  \************************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuario/usuario.component */ "./src/app/layout/configuracion/usuario/usuario.component.ts");
/* harmony import */ var _empresa_empresa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empresa/empresa.component */ "./src/app/layout/configuracion/empresa/empresa.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/configuracion/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"]
    },
    {
        path: 'usuario',
        component: _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_2__["UsuarioComponent"]
    },
    {
        path: 'empresa',
        component: _empresa_empresa_component__WEBPACK_IMPORTED_MODULE_3__["EmpresaComponent"]
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

/***/ "./src/app/layout/configuracion/configuracion.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/configuracion/configuracion.module.ts ***!
  \**************************************************************/
/*! exports provided: ConfiguracionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionModule", function() { return ConfiguracionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/layout/configuracion/app-routing.module.ts");
/* harmony import */ var _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario/usuario.component */ "./src/app/layout/configuracion/usuario/usuario.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _empresa_empresa_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empresa/empresa.component */ "./src/app/layout/configuracion/empresa/empresa.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/configuracion/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ConfiguracionModule = /** @class */ (function () {
    function ConfiguracionModule() {
    }
    ConfiguracionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            declarations: [_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_3__["UsuarioComponent"], _empresa_empresa_component__WEBPACK_IMPORTED_MODULE_6__["EmpresaComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"]]
        })
    ], ConfiguracionModule);
    return ConfiguracionModule;
}());



/***/ }),

/***/ "./src/app/layout/configuracion/empresa/empresa.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/configuracion/empresa/empresa.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\">\n  <div class=\"card-header\">\n    Configuraciones de la empresa\n  </div>\n  <div class=\" card-body\">\n    <div class=\"ror\">\n      <div class=\"col-md-12\">\n        <form [formGroup]=\"formularioEmpresa\" (ngSubmit)=\"guardarEmpresa()\">\n\n\n          <div class=\"form-group row\">\n            <label for=\"ruc\" class=\"col-2 col-form-label\">RUC</label>\n            <div class=\"col-10\">\n              <input class=\"form-control\" type=\"text\" formControlName=\"ruc\" id=\"ruc\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"razon\" class=\"col-2 col-form-label\">Razón social</label>\n            <div class=\"col-10\">\n              <input  class=\"form-control\" type=\"text\" formControlName=\"nombre\" id=\"razon\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"correo\" class=\"col-2 col-form-label\">Correo</label>\n            <div class=\"col-10\">\n              <input  class=\"form-control\" type=\"text\" formControlName=\"correo\" id=\"correo\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"direccion\" class=\"col-2 col-form-label\">Dirección</label>\n            <div class=\"col-10\">\n              <input  class=\"form-control\" type=\"text\" formControlName=\"direccion\" id=\"direccion  \">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"telefono\" class=\"col-2 col-form-label\">Teléfono</label>\n            <div class=\"col-10\">\n              <input class=\"form-control\" type=\"text\" formControlName=\"telefono\" id=\"direccion  \">\n            </div>\n          </div>\n\n   \n\n          <hr>\n\n          <div class=\"form-group row\">\n            <label for=\"imagen\" class=\"col-2 col-form-label\">Imagen</label>\n            <div class=\"col-10\">\n              <img src=\"{{formularioEmpresa.value.foto}}\" width=\"250px\" id=\"imagen\" alt=\"\">\n             <br> <input type=\"file\" (change)=\"uploadFile($event)\" accept=\"image/*\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"button\" class=\"col-2 col-form-label\"></label>\n            <div class=\"col-10\">\n              <input class=\"btn btn-primary\" value=\"Guardar\" type=\"submit\">\n\n            </div>\n          </div>\n\n\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/configuracion/empresa/empresa.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/configuracion/empresa/empresa.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/configuracion/empresa/empresa.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/configuracion/empresa/empresa.component.ts ***!
  \*******************************************************************/
/*! exports provided: EmpresaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresaComponent", function() { return EmpresaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_persona_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../servicios/persona.service */ "./src/app/servicios/persona.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
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





var EmpresaComponent = /** @class */ (function () {
    function EmpresaComponent(configuracionService, fb, storage) {
        var _this = this;
        this.configuracionService = configuracionService;
        this.fb = fb;
        this.storage = storage;
        this.empresa = {};
        this.formularioEmpresa = this.fb.group({
            ruc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            correo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            direccion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            foto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        configuracionService.obtenerEmpresa().valueChanges().subscribe(function (empresa) {
            _this.empresa = empresa;
            _this.formularioEmpresa = _this.fb.group({
                ruc: [empresa.ruc, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                nombre: [empresa.nombre, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                correo: [empresa.correo, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                direccion: [empresa.direccion, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                telefono: [empresa.telefono, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                foto: [empresa.foto, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        });
    }
    EmpresaComponent.prototype.ngOnInit = function () {
    };
    EmpresaComponent.prototype.handleUpload = function (e) {
        console.log(e.target.value);
        this.formularioEmpresa.value.foto = e.target.value;
    };
    EmpresaComponent.prototype.uploadFile = function (event) {
        var _this = this;
        if (event.target.files[0]) {
            var file = event.target.files[0];
            console.log(file.size);
            if (file.size > 1000000) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Existió un error', 'El tamaño de la imagen no puede ser mayor a 1mb', 'error');
            }
            else {
                var filePath = file.name;
                var ref_1 = this.storage.ref(filePath);
                var task = ref_1.put(file);
                task.then(function (res) {
                    ref_1.getDownloadURL().subscribe(function (ref) {
                        _this.formularioEmpresa.value.foto = ref;
                    });
                });
            }
        }
    };
    EmpresaComponent.prototype.guardarEmpresa = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Está seguro?',
            text: "Desea modificar la información de la empresa!",
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, modificar!'
        }).then(function (result) {
            if (result.value) {
                _this.configuracionService.modificarEmpresa(_this.formularioEmpresa.value).then(function (res) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Modificado!', 'la información de la empresa ha sido modificada correctamente.', 'success');
                });
            }
        });
    };
    EmpresaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-empresa',
            template: __webpack_require__(/*! ./empresa.component.html */ "./src/app/layout/configuracion/empresa/empresa.component.html"),
            styles: [__webpack_require__(/*! ./empresa.component.scss */ "./src/app/layout/configuracion/empresa/empresa.component.scss")],
        }),
        __metadata("design:paramtypes", [_servicios_persona_service__WEBPACK_IMPORTED_MODULE_1__["PersonaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]])
    ], EmpresaComponent);
    return EmpresaComponent;
}());



/***/ }),

/***/ "./src/app/layout/configuracion/layout/layout.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/configuracion/layout/layout.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Configuración'\" [pdf]=\"false\" [icon]=\"'fa-edit'\"></app-page-header>\n  \n    <ngb-tabset>\n        <ngb-tab title=\"General\">\n            <ng-template ngbTabContent>\n               <div class=\"container mb-3\">\n                 <br>\n                 <app-empresa></app-empresa>\n               </div>\n            </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n            <ng-template ngbTabTitle><b>Usuarios</b></ng-template>\n            <ng-template ngbTabContent>\n              \n            </ng-template>\n        </ngb-tab>\n        \n    </ngb-tabset>\n  </div>"

/***/ }),

/***/ "./src/app/layout/configuracion/layout/layout.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/configuracion/layout/layout.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/configuracion/layout/layout.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/configuracion/layout/layout.component.ts ***!
  \*****************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/configuracion/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/configuracion/layout/layout.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/configuracion/usuario/usuario.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/configuracion/usuario/usuario.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [heading]=\"'Configuración usuario'\" [pdf]=\"false\" [icon]=\"'fa-edit'\"></app-page-header>\n\n  <div class=\"card mb-3\">\n    <div class=\"card-header\">Cambio de contraseña</div>\n    <div class=\"card-body\">\n\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label for=\"txtAnterior\">Contraseña anterior</label>\n            <input [(ngModel)]=\"anterior\" id=\"txtAnterior\" class=\"form-control\" type=\"password\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"txtNueva\">Contraseña nueva</label>\n            <input [(ngModel)]=\"nueva\" id=\"txtNueva\" class=\"form-control\" type=\"password\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"txtConfirmacion\">Confirmar contraseña</label>\n            <input [(ngModel)]=\"confirmacion\" id=\"txtConfirmacion\" class=\"form-control\" type=\"password\">\n          </div>\n\n          <div class=\"form-group\">\n            <button class=\"btn btn-primary\" (click)=\"cambiarContrasena()\">Guardar</button>\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/configuracion/usuario/usuario.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/configuracion/usuario/usuario.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/configuracion/usuario/usuario.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/configuracion/usuario/usuario.component.ts ***!
  \*******************************************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent() {
        this.anterior = '';
        this.nueva = '';
        this.confirmacion = '';
    }
    UsuarioComponent.prototype.ngOnInit = function () {
    };
    UsuarioComponent.prototype.cambiarContrasena = function () {
    };
    UsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! ./usuario.component.html */ "./src/app/layout/configuracion/usuario/usuario.component.html"),
            styles: [__webpack_require__(/*! ./usuario.component.scss */ "./src/app/layout/configuracion/usuario/usuario.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], UsuarioComponent);
    return UsuarioComponent;
}());



/***/ })

}]);
//# sourceMappingURL=configuracion-configuracion-module.js.map