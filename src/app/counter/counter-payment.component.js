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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
var order_service_1 = require("../order/order.service");
var order_1 = require("../order/order");
var menu_service_1 = require("../order/menu.service");
var CounterPaymentComponent = (function () {
    function CounterPaymentComponent(menuService, orderService, route, location) {
        this.menuService = menuService;
        this.orderService = orderService;
        this.route = route;
        this.location = location;
        this.payAmount = 0;
        this.loaded = false;
        this.i = 0;
        this.totalPrice = 0;
    }
    CounterPaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.orderService.getOrder(+params['id']); })
            .subscribe(function (order) {
            order.orderItems.forEach(function (oi) {
                _this.getMenu(oi);
            });
            _this.order = order;
        });
    };
    CounterPaymentComponent.prototype.goBack = function () {
        this.location.back();
    };
    CounterPaymentComponent.prototype.save = function () {
        var _this = this;
        this.orderService.update(this.order)
            .then(function () { return _this.goBack(); });
    };
    CounterPaymentComponent.prototype.getMenu = function (orderItem) {
        var _this = this;
        var a = this.menuService.getMenu(orderItem.menuId);
        a.then(function (menu) {
            orderItem.menu = menu;
            _this.i++;
            if (_this.i === _this.order.orderItems.length) {
                _this.loaded = true;
                _this.calculatePrice();
            }
        });
    };
    CounterPaymentComponent.prototype.calculatePrice = function () {
        var _this = this;
        this.order.orderItems.forEach(function (oi) {
            _this.totalPrice += oi.menu.price * oi.quantity;
        });
    };
    CounterPaymentComponent.prototype.pay = function () {
        var balance;
        balance = this.payAmount - this.totalPrice;
        if (balance < 0) {
            alert('Not enough money');
            return;
        }
        alert('balance is RM ' + balance);
        this.submit();
    };
    CounterPaymentComponent.prototype.submit = function () {
        var _this = this;
        this.order.status = 'done';
        this.orderService.update(this.order)
            .then(function () { return _this.goBack(); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', order_1.Order)
    ], CounterPaymentComponent.prototype, "order", void 0);
    CounterPaymentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-hero-detail',
            template: "\n    <h3>Payment</h3>\n\n    <div *ngIf=\"loaded\">\n        <li *ngFor=\"let item of order.orderItems\">\n            RM{{item.menu.price}} - {{item.menu.name}}\n        </li>\n        Total Price: RM{{totalPrice}}\n        <br>\n        <input type=\"text\" [(ngModel)]=\"payAmount\" />\n        <input type=\"button\" value=\"Pay\" (click)=\"pay()\"/> \n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [menu_service_1.MenuService, order_service_1.OrderService, router_1.ActivatedRoute, common_1.Location])
    ], CounterPaymentComponent);
    return CounterPaymentComponent;
}());
exports.CounterPaymentComponent = CounterPaymentComponent;
//# sourceMappingURL=counter-payment.component.js.map