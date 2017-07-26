import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Location }          from '@angular/common';
import { ActivatedRoute, Params }    from "@angular/router";

import { OrderService } from "./order.service";
import { MenuService } from "./menu.service";

import { Menu } from "./menu";
import { Order } from "./order";

import 'rxjs/add/operator/switchMap';
import { OrderItemService } from "./order-item.service";
import { OrderItem } from "./order-item";
import * as Q from "Q";


@Component({
  moduleId: module.id,
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(
    private orderService: OrderService, 
    private menuService: MenuService,
    private orderItemService: OrderItemService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  @Input() order: Order;
  @Input() status: String;

  // @Output() myEvent = new EventEmitter();

  ngOnInit() {
    this.getMenus();   
  }

  getOrder(): void{
    // if (this.order.id > 0)
    //   this.orderService.getOrder(this.order.id)
    //       .then(x=> this.order = x);
  }

  add(orderItem: OrderItem): void {
    orderItem.quantity++;
  }

  decrease(orderItem: OrderItem) :void {
    if (orderItem.quantity > 0)
      orderItem.quantity--;
    else
      this.remove(orderItem);
  }

  remove(orderItem: OrderItem): void{
    var index = this.order.orderItems.findIndex(o=> o.menuId == orderItem.menuId);
    this.order.orderItems.splice(index, 1);
  }

  getMenus(){
    if (this.order != null && this.order != undefined ){
      console.log(this.order);

      this.order.orderItems.forEach(x=>{
        if (x!=null)
          this.getMenu(x);

      });
    }
  }

  getMenu(orderItem: OrderItem): void{
    var a = this.menuService.getName(orderItem.menuId);
    a.then(menuName => orderItem.menuName = menuName);
  }

  isWaiter(){
    return this.status === 'waiter';
  }


 

}