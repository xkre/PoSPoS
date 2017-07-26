"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var MenuService = (function () {
    function MenuService(http) {
        this.http = http;
        this.menuUrl = 'api/menus';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    MenuService.prototype.getMenus = function () {
        return this.http.get(this.menuUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
        // return Promise.resolve(menus);
    };
    MenuService.prototype.getMenu = function (id) {
        var url = this.menuUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
        // return this.getMenus()
        //         .then(menus=> menus.find(m=> m.id == id))
    };
    MenuService.prototype.add = function (menu) {
        return this.http
            .post(this.menuUrl, JSON.stringify({ name: menu.name, price: menu.price }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
        // return this.getMenus()
        //         .then((response) => {
        //             response.push(menu);
        //             console.log("Added new menu: " + menu.name + " to the list.")
        //             return menu;
        //         })
        //         .then(x=> {alert(x.id); return x;});
    };
    MenuService.prototype.delete = function (menu) {
        var url = this.menuUrl + "/" + menu.id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    MenuService.prototype.getName = function (id) {
        var url = this.menuUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .then(function (x) { return x.name; })
            .catch(this.handleError);
    };
    MenuService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    MenuService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MenuService);
    return MenuService;
}());
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map