import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CounterComponent} from './counter/counter.component';  
import {OrderComponent} from './order/order.component';
import {KitchenComponent} from './kitchen/kitchen.component'  
import { WaiterComponent } from './waiter/waiter.component';
import { CounterPaymentComponent } from "./counter/counter-payment.component";


const routes: Routes = [
  { path: '', redirectTo: '/kitchen', pathMatch: 'full' },
  { path: 'kitchen',  component: KitchenComponent },
  { path: 'order', component: OrderComponent },
  { path: 'counter',     component: CounterComponent },
  { path: 'waiter',     component: WaiterComponent },
  { path: 'pay/:id',     component: CounterPaymentComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}