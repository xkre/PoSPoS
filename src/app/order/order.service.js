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
var order_item_service_1 = require("./order-item.service");
// import { orders } from './mock-order';
var OrderService = (function () {
    function OrderService(http, orderItemService) {
        this.http = http;
        this.orderItemService = orderItemService;
        this.orderUrl = 'api/orders';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    OrderService.prototype.getOrders = function () {
        return this.http.get(this.orderUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
        // return Promise.resolve(orders);
    };
    OrderService.prototype.getOrder = function (id) {
        var url = this.orderUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
        // return this.getOrders()
        //             .then(orders=> orders.find(o=> o.id == id));
    };
    OrderService.prototype.add = function (order) {
        var _this = this;
        var a = this.http
            .post(this.orderUrl, JSON.stringify({
            orderItems: order.orderItems,
            status: order.status
        }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; });
        a.then(function (x) { return x.orderItems.forEach(function (y) {
            _this.orderItemService.add(y)
                .then(function (oi) { return y.id = oi.id; });
        }); }).catch(this.handleError);
        return a;
    };
    OrderService.prototype.delete = function (order) {
        var url = this.orderUrl + "/" + order.id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    OrderService.prototype.update = function (order) {
        var url = this.orderUrl + "/" + order.id;
        return this.http
            .put(url, JSON.stringify(order), { headers: this.headers })
            .toPromise()
            .then(function () { return order; })
            .catch(this.handleError);
    };
    OrderService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    OrderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, order_item_service_1.OrderItemService])
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map