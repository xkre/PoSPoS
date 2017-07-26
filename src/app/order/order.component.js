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
var common_1 = require('@angular/common');
var router_1 = require("@angular/router");
var order_service_1 = require("./order.service");
var menu_service_1 = require("./menu.service");
var order_1 = require("./order");
require('rxjs/add/operator/switchMap');
var order_item_service_1 = require("./order-item.service");
var OrderComponent = (function () {
    function OrderComponent(orderService, menuService, orderItemService, route, location) {
        this.orderService = orderService;
        this.menuService = menuService;
        this.orderItemService = orderItemService;
        this.route = route;
        this.location = location;
    }
    // @Output() myEvent = new EventEmitter();
    OrderComponent.prototype.ngOnInit = function () {
        this.getMenus();
    };
    OrderComponent.prototype.getOrder = function () {
        // if (this.order.id > 0)
        //   this.orderService.getOrder(this.order.id)
        //       .then(x=> this.order = x);
    };
    OrderComponent.prototype.add = function (orderItem) {
        orderItem.quantity++;
    };
    OrderComponent.prototype.decrease = function (orderItem) {
        if (orderItem.quantity > 0)
            orderItem.quantity--;
        else
            this.remove(orderItem);
    };
    OrderComponent.prototype.remove = function (orderItem) {
        var index = this.order.orderItems.findIndex(function (o) { return o.menuId == orderItem.menuId; });
        this.order.orderItems.splice(index, 1);
    };
    OrderComponent.prototype.getMenus = function () {
        var _this = this;
        if (this.order != null && this.order != undefined) {
            console.log(this.order);
            this.order.orderItems.forEach(function (x) {
                if (x != null)
                    _this.getMenu(x);
            });
        }
    };
    OrderComponent.prototype.getMenu = function (orderItem) {
        var a = this.menuService.getName(orderItem.menuId);
        a.then(function (menuName) { return orderItem.menuName = menuName; });
    };
    OrderComponent.prototype.isWaiter = function () {
        return this.status === 'waiter';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', order_1.Order)
    ], OrderComponent.prototype, "order", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], OrderComponent.prototype, "status", void 0);
    OrderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-order',
            templateUrl: './order.component.html',
            styleUrls: ['./order.component.css']
        }), 
        __metadata('design:paramtypes', [order_service_1.OrderService, menu_service_1.MenuService, order_item_service_1.OrderItemService, router_1.ActivatedRoute, common_1.Location])
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=order.component.js.map