(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/servicios/orden/orden.service.ts":
/*!**************************************************!*\
  !*** ./src/app/servicios/orden/orden.service.ts ***!
  \**************************************************/
/*! exports provided: OrdenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenService", function() { return OrdenService; });
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



var OrdenService = /** @class */ (function () {
    function OrdenService(afs) {
        this.afs = afs;
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    }
    OrdenService.prototype.crearOrden = function (orden, servicios) {
        var id = this.afs.createId();
        this.empresa.collection('ordenes').doc(id).set(orden);
        return id;
    };
    OrdenService.prototype.modificarOrden = function (id, orden) {
        this.empresa.collection('ordenes').doc(id).update(orden);
        return id;
    };
    OrdenService.prototype.eliminarOrden = function (id) {
        return this.empresa.collection('ordenes').doc(id).delete();
    };
    OrdenService.prototype.agregarDetalle = function () {
    };
    OrdenService.prototype.obtenerOrdenes = function () {
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
        return this.empresa.collection('ordenes', function (query) { return query.orderBy('numero', 'desc'); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return { id: id, data: data };
        }); }));
    };
    OrdenService.prototype.obtenerUltimaOrden = function () {
        this.empresa = this.afs.doc(localStorage.getItem('empresa'));
        return this.empresa.collection('ordenes', function (query) { return query.orderBy('numero', 'desc').limit(1); }).valueChanges();
    };
    OrdenService.prototype.obtenerUnaOrden = function (id) {
        return this.empresa.collection('ordenes').doc(id).valueChanges();
    };
    OrdenService.prototype.obtenerServicios = function (id) {
        return this.empresa.collection('ordenes').doc(id).collection('ordenServicios').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return { id: id, data: data };
        }); }));
    };
    OrdenService.prototype.modificarServicio = function (orden, datos) {
        return this.empresa.collection('ordenes').doc(orden).update(datos);
    };
    OrdenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], OrdenService);
    return OrdenService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map