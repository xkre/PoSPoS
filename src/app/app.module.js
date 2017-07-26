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
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require("@angular/http");
var ng2_bootstrap_1 = require('ng2-bootstrap');
var app_routing_module_1 = require('./app-routing.module');
var app_component_1 = require('./app.component');
var counter_component_1 = require('./counter/counter.component');
var kitchen_component_1 = require('./kitchen/kitchen.component');
var waiter_component_1 = require('./waiter/waiter.component');
var order_component_1 = require('./order/order.component');
var menu_service_1 = require('./order/menu.service');
var order_service_1 = require('./order/order.service');
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var order_item_service_1 = require("./order/order-item.service");
var order_list_component_1 = require("./order/order-list.component");
var counter_payment_component_1 = require("./counter/counter-payment.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                ng2_bootstrap_1.TabsModule.forRoot(),
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            ],
            declarations: [
                app_component_1.AppComponent,
                kitchen_component_1.KitchenComponent,
                counter_component_1.CounterComponent,
                order_component_1.OrderComponent,
                waiter_component_1.WaiterComponent,
                order_list_component_1.OrderListComponent,
                counter_payment_component_1.CounterPaymentComponent
            ],
            providers: [
                menu_service_1.MenuService,
                order_service_1.OrderService,
                order_item_service_1.OrderItemService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map