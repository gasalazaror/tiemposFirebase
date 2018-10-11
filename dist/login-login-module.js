(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"es\">\r\n\r\n<head>\r\n\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n    <meta name=\"description\" content=\"\">\r\n    <meta name=\"author\" content=\"\">\r\n\r\n    <title>Landing Page - Start Bootstrap Theme</title>\r\n\r\n    <!-- Bootstrap core CSS -->\r\n    <!-- <link href=\"vendor/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\"> -->\r\n\r\n    <!-- Custom fonts for this template -->\r\n    <!-- <link href=\"vendor/font-awesome/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\">\r\n    <link href=\"vendor/simple-line-icons/css/simple-line-icons.css\" rel=\"stylesheet\" type=\"text/css\">\r\n    <link href=\"https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic\" rel=\"stylesheet\" type=\"text/css\"> -->\r\n\r\n    <!-- Custom styles for this template -->\r\n    <!--     <link href=\"css/landing-page.min.css\" rel=\"stylesheet\"> -->\r\n\r\n</head>\r\n\r\n<body>\r\n\r\n\r\n\r\n    <!-- Masthead -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <header class=\"masthead text-white text-center\">\r\n                <div class=\"overlay\"></div>\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-9 mx-auto\">\r\n                            <h1 class=\"mb-5\">Control de Tiempos</h1>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </header>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"form-signin\">\r\n                <br> <br>\r\n\r\n                <form [formGroup]=\"personaForm\" (ngSubmit)=\"onLoggedin2()\">\r\n\r\n\r\n\r\n                    <img src=\"assets/images/kanban.png\" width=\"100%\" alt=\"\"><br><br><br>\r\n                    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n                    <input type=\"email\" id=\"inputEmail\" autofocus type=\"text\" formControlName=\"email\" class=\"form-control\"\r\n                        placeholder=\"Correo electrónico\" required autofocus>\r\n                    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n                    <input type=\"password\" id=\"inputPassword\" type=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                        placeholder=\"Contraseña\" required>\r\n                    <div *ngIf=\"error!=''\" class=\"alert alert-danger\" role=\"alert\">\r\n                        <strong>Error: </strong> {{error}}\r\n                    </div>\r\n                    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Iniciar sesión</button>\r\n                </form>\r\n                <a href=\"/recuperacion\">¿No puede acceder a su cuenta?</a>\r\n\r\n\r\n                <div *ngIf=\"listaEmpresas.length>0\">\r\n                    <hr> Empresas:\r\n                    <select *ngIf=\"listaEmpresas.length>0\" [(ngModel)]=\"empresaSeleccionada\" class=\"form-control\"\r\n                        (change)=\"seleccionarEmpresa()\">\r\n                        <option value=\"\">Seleccionar...</option>\r\n                        <option *ngFor=\"let empresa of listaEmpresas\" value=\"{{empresa.path}}\">{{empresa.nombre}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <!-- Footer -->\r\n    <footer class=\"footer bg-light\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 h-100 text-center text-lg-left my-auto\">\r\n                    <ul class=\"list-inline mb-2\">\r\n                        <li class=\"list-inline-item\">\r\n                            <a href=\"http://kanban.cokaizen.com/\">Acerca de</a>\r\n                        </li>\r\n                        <li class=\"list-inline-item\">&sdot;</li>\r\n\r\n                    </ul>\r\n                    <p class=\"text-muted small mb-4 mb-lg-0\">&copy; Kanban Technologies 2018.</p>\r\n                    \r\n                </div>\r\n                <div class=\"col-lg-6 h-100 text-center text-lg-right my-auto\">\r\n                    <ul class=\"list-inline mb-0\">\r\n                        <li class=\"list-inline-item mr-3\">\r\n                            <a href=\"https://www.facebook.com/Kanban-Technologies-400018097072474/\">\r\n                                <i class=\"fa fa-facebook fa-2x fa-fw\"></i>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"list-inline-item mr-3\">\r\n                            <a href=\"https://www.linkedin.com/in/kanban-technologies-21ab76166/\">\r\n                                <i class=\"fa fa-linkedin   fa-2x fa-fw\"></i>\r\n                            </a>\r\n                        </li>\r\n\r\n                        <li class=\"list-inline-item mr-3\">\r\n                                <a href=\"https://twitter.com/KaizenMkt1\">\r\n                                    <i class=\"fa fa-twitter   fa-2x fa-fw\"></i>\r\n                                </a>\r\n                            </li>\r\n\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n\r\n    <!-- Bootstrap core JavaScript -->\r\n    <!-- <script src=\"vendor/jquery/jquery.min.js\"></script>\r\n    <script src=\"vendor/bootstrap/js/bootstrap.bundle.min.js\"></script> -->\r\n\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700; }\n\nheader.masthead {\n  position: relative;\n  background-color: #343a40;\n  background: url(\"/assets/images/bg-masthead.jpg\") no-repeat center center;\n  background-size: cover;\n  padding-top: 8rem;\n  padding-bottom: 8rem; }\n\nheader.masthead .overlay {\n  position: absolute;\n  background-color: #212529;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0.3; }\n\nheader.masthead h1 {\n  font-size: 2rem; }\n\n@media (min-width: 768px) {\n  header.masthead {\n    padding-top: 12rem;\n    padding-bottom: 12rem; }\n  header.masthead h1 {\n    font-size: 3rem; } }\n\n.showcase .showcase-text {\n  padding: 3rem; }\n\n.showcase .showcase-img {\n  min-height: 30rem;\n  background-size: cover; }\n\n@media (min-width: 768px) {\n  .showcase .showcase-text {\n    padding: 7rem; } }\n\n.features-icons {\n  padding-top: 7rem;\n  padding-bottom: 7rem; }\n\n.features-icons .features-icons-item {\n  max-width: 20rem; }\n\n.features-icons .features-icons-item .features-icons-icon {\n  height: 7rem; }\n\n.features-icons .features-icons-item .features-icons-icon i {\n  font-size: 4.5rem; }\n\n.features-icons .features-icons-item:hover .features-icons-icon i {\n  font-size: 5rem; }\n\n.testimonials {\n  padding-top: 7rem;\n  padding-bottom: 7rem; }\n\n.testimonials .testimonial-item {\n  max-width: 18rem; }\n\n.testimonials .testimonial-item img {\n  max-width: 12rem;\n  box-shadow: 0px 5px 5px 0px #adb5bd; }\n\n.call-to-action {\n  position: relative;\n  background-color: #343a40;\n  background: url(\"/assets/images/bg-masthead.jpg\") no-repeat center center;\n  background-size: cover;\n  padding-top: 7rem;\n  padding-bottom: 7rem; }\n\n.call-to-action .overlay {\n  position: absolute;\n  background-color: #212529;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0.3; }\n\nfooter.footer {\n  padding-top: 4rem;\n  padding-bottom: 4rem; }\n\n.form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, afAuth, db) {
        this.fb = fb;
        this.router = router;
        this.afAuth = afAuth;
        this.db = db;
        this.usuario = { email: '', password: '' };
        this.personaForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.error = '';
        this.listaEmpresas = [];
        this.empresaSeleccionada = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoggedin = function () {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(this.usuario.email, this.usuario.password)
            .then(function (usuario) {
            _this.itemDoc = _this.db.doc('usuario/' + _this.afAuth.auth.currentUser.uid);
            _this.item = _this.itemDoc.valueChanges();
            _this.item.subscribe(function (usuario) {
                localStorage.setItem('usuario', usuario.nombre);
                localStorage.setItem('empresa', usuario.empresa.path);
                localStorage.setItem('isLoggedin', 'true');
                _this.router.navigate(['/']);
            });
        }, function (error) {
            _this.error = 'Usuario o contraseña incorrectos';
        });
    };
    LoginComponent.prototype.onLoggedin2 = function () {
        // this.afAuth.auth.setPersistence('none').then(usuario => {
        var _this = this;
        // })
        this.afAuth.auth.signInWithEmailAndPassword(this.personaForm.value.email, this.personaForm.value.password)
            .then(function (usuario) {
            _this.error = '';
            _this.itemDoc = _this.db.doc('usuario/' + _this.afAuth.auth.currentUser.uid);
            _this.empresas = _this.db.collection('empresaUsuario', function (query) { return query.where('correo', '==', _this.personaForm.value.email).where('tipo', '==', 'usuario'); }).valueChanges();
            _this.empresas.subscribe(function (res) {
                if (res.length == 1) {
                    _this.empresaSeleccionada = res[0].empresa.path;
                    _this.seleccionarEmpresa();
                }
                else {
                    _this.listaEmpresas = [];
                    res.forEach(function (elemento) {
                        _this.itemDoc = _this.db.doc(elemento.empresa.path);
                        _this.itemDoc.valueChanges().subscribe(function (res) {
                            res.path = elemento.empresa.path;
                            _this.listaEmpresas.push(res);
                        });
                    });
                }
            });
        }, function (error) {
            _this.error = 'Correo o contraseña incorrectos';
        });
    };
    LoginComponent.prototype.seleccionarEmpresa = function () {
        localStorage.setItem('empresa', this.empresaSeleccionada);
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function routerTransition() {
    return slideToTop();
}
function slideToRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map