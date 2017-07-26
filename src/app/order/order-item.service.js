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
var OrderItemService = (function () {
    function OrderItemService(http) {
        this.http = http;
        this.orderItemUrl = 'api/orderItems';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    OrderItemService.prototype.getOrderItems = function () {
        return this.http.get(this.orderItemUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
        // return Promise.resolve(orderItems);
    };
    // getOrderItemsByOrder(id: number): Promise<OrderItem[]> {
    //     return this.http.get(this.orderItemUrl)
    //             .toPromise()
    //             .then(response=> response.json().data as OrderItem[])
    //             .then(x=> x.filter(y=> y.orderId == id))
    //             .catch(this.handleError);
    // return Promise.resolve(orderItems);
    // }
    OrderItemService.prototype.getOrderItem = function (id) {
        var url = this.orderItemUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
        // return this.getOrderItems()
        //         .then(orderItems=> orderItems.find(oi=> oi.id == id));
    };
    OrderItemService.prototype.add = function (orderItem) {
        return this.http
            .post(this.orderItemUrl, JSON.stringify({ menuId: orderItem.menuId, quantity: orderItem.quantity }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    OrderItemService.prototype.delete = function (orderItem) {
        var url = this.orderItemUrl + "/" + orderItem.id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    OrderItemService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    OrderItemService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OrderItemService);
    return OrderItemService;
}());
exports.OrderItemService = OrderItemService;
//# sourceMappingURL=order-item.service.js.map