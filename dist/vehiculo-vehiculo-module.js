(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehiculo-vehiculo-module"],{

/***/ "./src/app/servicios/persona.service.ts":
/*!**********************************************!*\
  !*** ./src/app/servicios/persona.service.ts ***!
  \**********************************************/
/*! exports provided: PersonaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaService", function() { return PersonaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonaService = /** @class */ (function () {
    function PersonaService(afs, afAuth) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.personasCollection = afs.collection('persona');
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    }
    PersonaService.prototype.crearPersona = function (persona) {
        var id = this.afs.createId();
        return this.empresa.collection('personas').doc(id).set(persona);
    };
    PersonaService.prototype.comprobar = function (valor, campo) {
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
        return this.empresa.collection('personas', function (query) { return query.where(valor, '==', campo); }).stateChanges();
    };
    PersonaService.prototype.modificarPersona = function (id, persona) {
        return this.empresa.collection('personas').doc(id).update(persona);
    };
    PersonaService.prototype.modificarEmpresa = function (empresa) {
        return this.afs.doc(localStorage.getItem('empresa')).update(empresa);
    };
    PersonaService.prototype.eliminarPersona = function (idPersona) {
        return this.empresa.collection('personas').doc(idPersona).delete();
    };
    PersonaService.prototype.obtenerPersonas = function () {
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
        return this.empresa.collection('personas', function (query) { return query.orderBy('nombre'); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return { id: id, data: data };
        }); }));
    };
    PersonaService.prototype.obtenerEmpresas = function () {
        return this.afs.collection('empresa').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return { id: id, data: data };
        }); }));
    };
    PersonaService.prototype.obtenerUsuarios = function () {
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
        return this.empresa.collection('personas', function (query) { return query.where('empleado', '==', true); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return { id: id, data: data };
        }); }));
    };
    PersonaService.prototype.obtenerClientes = function () {
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
        return this.empresa.collection('personas', function (query) { return query.where('cliente', '==', true).where('estado', '==', 'Activo'); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return { id: id, data: data };
        }); }));
    };
    PersonaService.prototype.obtenerVehiculos = function (uid) {
        var userRef = this.afs.collection('personas').doc(uid);
        return this.empresa.collection('vehiculos', function (query) { return query.where('dueno', '==', userRef.ref); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return { id: id, data: data };
        }); }));
    };
    PersonaService.prototype.obtenerUnaPersona = function (id) {
        return this.empresa.collection('personas').doc(id).valueChanges();
    };
    PersonaService.prototype.obtenerUsuario = function () {
        return this.afAuth.user;
    };
    PersonaService.prototype.obtenerEmpresa = function () {
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
        return this.empresa;
    };
    PersonaService.prototype.editarNumeracionInicial = function (otInicio) {
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
        return this.empresa.update({ otInicio: otInicio });
    };
    PersonaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], PersonaService);
    return PersonaService;
}());



/***/ })

}]);
//# sourceMappingURL=vehiculo-vehiculo-module.js.map