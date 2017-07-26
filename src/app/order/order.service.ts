import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Order } from './order';
import { OrderItem } from "./order-item";
import { OrderItemService } from "./order-item.service";

// import { orders } from './mock-order';

@Injectable()
export class OrderService {
    private orderUrl = 'api/orders';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor (private http: Http, private orderItemService: OrderItemService) { }

    getOrders(): Promise<Order[]> {
        return this.http.get(this.orderUrl)
                .toPromise()
                .then(response=> response.json().data as Order[])
                .catch(this.handleError);

        // return Promise.resolve(orders);
    }

    getOrder(id: number): Promise<Order>{
        const url = `${this.orderUrl}/${id}`;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Order)
            .catch(this.handleError)

        // return this.getOrders()
        //             .then(orders=> orders.find(o=> o.id == id));
    }

    add(order: Order): Promise<Order>{
        var a = this.http
            .post(this.orderUrl, JSON.stringify({
                orderItems: order.orderItems, 
                status: order.status
              }), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Order)
            

            a.then(x=> x.orderItems.forEach(y=>{
                this.orderItemService.add(y)
                    .then(oi => y.id = oi.id);
            })).catch(this.handleError);

            return a;
    }

    delete(order: Order): Promise<void> {
        const url = `${this.orderUrl}/${order.id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    update(order:Order): Promise<Order>{
        const url = `${this.orderUrl}/${order.id}`;
        return this.http
            .put(url, JSON.stringify(order), {headers: this.headers})
            .toPromise()
            .then(() => order)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}


