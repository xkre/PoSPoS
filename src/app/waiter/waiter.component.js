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
var menu_1 = require("../order/menu");
var order_1 = require("../order/order");
var menu_service_1 = require("../order/menu.service");
var order_item_1 = require("../order/order-item");
var order_service_1 = require("../order/order.service");
var WaiterComponent = (function () {
    function WaiterComponent(menuService, orderService) {
        this.menuService = menuService;
        this.orderService = orderService;
        this.status = 'waiter';
        this.name = "";
    }
    WaiterComponent.prototype.getMenus = function () {
        var _this = this;
        this.menuService.getMenus().then(function (m) { return _this.menus = m; });
    };
    WaiterComponent.prototype.addToOrder = function (menu) {
        var a = new order_item_1.OrderItem();
        a.menuId = menu.id;
        a.quantity = 1;
        if (this.currentOrder.orderItems.findIndex(function (y) { return y.menuId == menu.id; }) == -1) {
            this.currentOrder.orderItems.push(a);
            console.log(a);
            console.log(this.currentOrder.orderItems);
        }
    };
    WaiterComponent.prototype.addMenu = function () {
        var _this = this;
        var a = new menu_1.Menu();
        a.name = this.name;
        a.price = this.price;
        //TODO: Use observable collection
        this.menuService.add(a).then(function (menu) {
            _this.name = "";
            _this.price = 0;
            _this.menus.push(menu);
        });
    };
    WaiterComponent.prototype.deleteMenu = function (menu) {
        var _this = this;
        this.menuService.delete(menu).then(function () {
            var index = _this.menus.findIndex(function (m) { return m.id == menu.id; });
            _this.menus.splice(index, 1);
            // this.menus.splice(this.menus.find(x=> x.id===id),1)
        });
    };
    WaiterComponent.prototype.ngOnInit = function () {
        this.getMenus();
        this.currentOrder = new order_1.Order();
        this.currentOrder.status = 'kitchen';
        this.currentOrder.orderItems = new Array();
    };
    WaiterComponent.prototype.submit = function () {
        var _this = this;
        this.orderService.add(this.currentOrder).then(function () {
            _this.currentOrder.orderItems = new Array();
        });
    };
    WaiterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-waiter',
            templateUrl: './waiter.component.html',
            styleUrls: ['./waiter.component.css']
        }), 
        __metadata('design:paramtypes', [menu_service_1.MenuService, order_service_1.OrderService])
    ], WaiterComponent);
    return WaiterComponent;
}());
exports.WaiterComponent = WaiterComponent;
//# sourceMappingURL=waiter.component.js.map