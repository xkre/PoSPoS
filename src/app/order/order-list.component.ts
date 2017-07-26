import { Component, OnInit, Input } from '@angular/core';
import { Location }          from '@angular/common';
import { ActivatedRoute, Params, Router } from "@angular/router";

import { OrderService } from "./order.service";
import { MenuService } from "./menu.service";

import { Menu } from "./menu";
import { Order } from "./order";

import 'rxjs/add/operator/switchMap';
import { OrderItemService } from "./order-item.service";
import { OrderItem } from "./order-item";


@Component({
  moduleId: module.id,
  selector: 'app-order-list',
  template: `
    <ul>
    <li *ngFor="let order of orders">
        <app-order [order]="order" [status]="status"></app-order>
        <br>
        <input type="button" value="{{buttonLabel()}}" (click)="submit(order)"/> 
    </li>
    </ul>
  `
})
export class OrderListComponent implements OnInit {

  constructor(
    private orderService: OrderService, 
    private menuService: MenuService,
    private orderItemService: OrderItemService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  @Input()
  status: string;

  orders: Order[];

  ngOnInit() {
    this.orderService.getOrders().then(x=>{ 
        this.orders = x;
      
        if (status != null){
          this.orders = this.orders.filter(x=> x.status === status);
        }
    });

  
  }

  buttonLabel(){
    if (status!=null && status === 'kitchen')
      return 'Done';
    return 'Pay';
  }

  submit(order: Order): void{
    if (status!=null && status === 'kitchen'){

      order.status = 'counter';
      this.orderService.update(order)
        .then((theOrder)=> this.remove(theOrder));
    }
    else if (status!=null && status === 'counter')
      this.router.navigate(['/pay', order.id]);
  }

  remove(order: Order): void{
    var index = this.orders.findIndex(o=> o.id == order.id);
    this.orders.splice(index, 1);
  }

  getOrder(): void{
    // if (this.order.id > 0)
    //   this.orderService.getOrder(this.order.id)
    //       .then(x=> this.order = x);
  }
  
}