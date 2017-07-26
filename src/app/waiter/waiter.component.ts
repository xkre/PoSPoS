import { Component, OnInit } from '@angular/core';

import { Menu } from "../order/menu";
import { Order } from "../order/order";
import { MenuService } from "../order/menu.service";
import { OrderItem } from "../order/order-item";
import { OrderService } from "../order/order.service";

@Component({
  moduleId: module.id,
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {

  menus: Menu[];
  currentOrder: Order;

  status: String = 'waiter';
  name: string = "";
  price: number;

  constructor(
    private menuService: MenuService,
    private orderService: OrderService
  ) { }

  getMenus(): void {
    this.menuService.getMenus().then(m=> this.menus = m);
  }

  addToOrder(menu: Menu):void {
    var a = new OrderItem();
    a.menuId = menu.id;
    a.quantity = 1;
    
    if(this.currentOrder.orderItems.findIndex(y=> y.menuId == menu.id) == -1){
      this.currentOrder.orderItems.push(a);
      console.log(a);
      console.log(this.currentOrder.orderItems);
    }
  }

  addMenu(): void{
    var a = new Menu();
    a.name = this.name;
    a.price = this.price;

    //TODO: Use observable collection
    this.menuService.add(a).then((menu) =>{ 
      this.name="";
      this.price = 0;
      this.menus.push(menu);
    });
  }

  deleteMenu(menu: Menu): void {
    this.menuService.delete(menu).then(()=> {
      var index = this.menus.findIndex(m=> m.id == menu.id);
      this.menus.splice(index, 1);
      // this.menus.splice(this.menus.find(x=> x.id===id),1)
    });
  }

  ngOnInit() {
    this.getMenus();
    this.currentOrder = new Order();
    this.currentOrder.status = 'kitchen';
    this.currentOrder.orderItems = new Array<OrderItem>();
  }

  submit():void{
    this.orderService.add(this.currentOrder).then(()=> {
      this.currentOrder.orderItems = new Array<OrderItem>();
    });
  }

}