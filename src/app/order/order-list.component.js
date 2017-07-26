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
require('rxjs/add/operator/switchMap');
var order_item_service_1 = require("./order-item.service");
var OrderListComponent = (function () {
    function OrderListComponent(orderService, menuService, orderItemService, route, location, router) {
        this.orderService = orderService;
        this.menuService = menuService;
        this.orderItemService = orderItemService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    OrderListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.getOrders().then(function (x) {
            _this.orders = x;
            if (status != null) {
                _this.orders = _this.orders.filter(function (x) { return x.status === status; });
            }
        });
    };
    OrderListComponent.prototype.buttonLabel = function () {
        if (status != null && status === 'kitchen')
            return 'Done';
        return 'Pay';
    };
    OrderListComponent.prototype.submit = function (order) {
        var _this = this;
        if (status != null && status === 'kitchen') {
            order.status = 'counter';
            this.orderService.update(order)
                .then(function (theOrder) { return _this.remove(theOrder); });
        }
        else if (status != null && status === 'counter')
            this.router.navigate(['/pay', order.id]);
    };
    OrderListComponent.prototype.remove = function (order) {
        var index = this.orders.findIndex(function (o) { return o.id == order.id; });
        this.orders.splice(index, 1);
    };
    OrderListComponent.prototype.getOrder = function () {
        // if (this.order.id > 0)
        //   this.orderService.getOrder(this.order.id)
        //       .then(x=> this.order = x);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], OrderListComponent.prototype, "status", void 0);
    OrderListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-order-list',
            template: "\n    <ul>\n    <li *ngFor=\"let order of orders\">\n        <app-order [order]=\"order\" [status]=\"status\"></app-order>\n        <br>\n        <input type=\"button\" value=\"{{buttonLabel()}}\" (click)=\"submit(order)\"/> \n    </li>\n    </ul>\n  "
        }), 
        __metadata('design:paramtypes', [order_service_1.OrderService, menu_service_1.MenuService, order_item_service_1.OrderItemService, router_1.ActivatedRoute, common_1.Location, router_1.Router])
    ], OrderListComponent);
    return OrderListComponent;
}());
exports.OrderListComponent = OrderListComponent;
//# sourceMappingURL=order-list.component.js.map