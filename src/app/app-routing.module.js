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
var counter_component_1 = require('./counter/counter.component');
var order_component_1 = require('./order/order.component');
var kitchen_component_1 = require('./kitchen/kitchen.component');
var waiter_component_1 = require('./waiter/waiter.component');
var counter_payment_component_1 = require("./counter/counter-payment.component");
var routes = [
    { path: '', redirectTo: '/kitchen', pathMatch: 'full' },
    { path: 'kitchen', component: kitchen_component_1.KitchenComponent },
    { path: 'order', component: order_component_1.OrderComponent },
    { path: 'counter', component: counter_component_1.CounterComponent },
    { path: 'waiter', component: waiter_component_1.WaiterComponent },
    { path: 'pay/:id', component: counter_payment_component_1.CounterPaymentComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map