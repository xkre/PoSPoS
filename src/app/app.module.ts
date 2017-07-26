import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { TabsModule } from 'ng2-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { CounterComponent } from './counter/counter.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { WaiterComponent } from './waiter/waiter.component';
import { OrderComponent } from './order/order.component';

import { MenuService } from './order/menu.service';
import { OrderService } from './order/order.service';

import { Order } from './order/order';
import { Menu } from './order/menu';

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
import { OrderItemService } from "./order/order-item.service";
import { OrderListComponent } from "./order/order-list.component";
import { CounterPaymentComponent } from "./counter/counter-payment.component";


@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TabsModule.forRoot(),
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [ 
    AppComponent,
    KitchenComponent,
    CounterComponent,
    OrderComponent,
    WaiterComponent,
    OrderListComponent,
    CounterPaymentComponent
  ],
  providers:[
    MenuService,
    OrderService,
    OrderItemService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
