import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';



import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import { OrderService } from "../order/order.service";
import { Order } from "../order/order";
import { OrderItem } from "../order/order-item";
import { MenuService } from "../order/menu.service";

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  template: `
    <h3>Payment</h3>

    <div *ngIf="loaded">
        <li *ngFor="let item of order.orderItems">
            RM{{item.menu.price}} - {{item.menu.name}}
        </li>
        Total Price: RM{{totalPrice}}
        <br>
        <input type="text" [(ngModel)]="payAmount" />
        <input type="button" value="Pay" (click)="pay()"/> 
    </div>
  `,
})


export class CounterPaymentComponent implements OnInit {
    constructor (
        private menuService: MenuService,
        private orderService: OrderService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    @Input()
    order: Order;
    payAmount: number = 0;

    loaded:boolean = false;
    i: number = 0;
    totalPrice: number = 0;

    ngOnInit(): void{
        this.route.params
            .switchMap((params: Params) => this.orderService.getOrder(+params['id']))
            .subscribe(order => {
                order.orderItems.forEach(oi => {
                    this.getMenu(oi);
                });
                this.order = order;
                
            });
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.orderService.update(this.order)
            .then(()=> this.goBack());
    }

    getMenu(orderItem: OrderItem): void{
        var a = this.menuService.getMenu(orderItem.menuId);
        a.then(menu => {
            orderItem.menu = menu;
            this.i++;

            if (this.i === this.order.orderItems.length){
                this.loaded = true;
                this.calculatePrice();
            }
        });
    }

    calculatePrice(){
        this.order.orderItems.forEach(oi=>{
            this.totalPrice += oi.menu.price * oi.quantity;
        });
    }

    pay(){
        var balance: number;

        balance = this.payAmount - this.totalPrice;
        if (balance < 0){
            alert('Not enough money');
            return;
        }

        alert('balance is RM ' + balance);
        this.submit();
    }

    submit(): void{
        this.order.status = 'done';
        this.orderService.update(this.order)
            .then(()=> this.goBack());
    }

    

}