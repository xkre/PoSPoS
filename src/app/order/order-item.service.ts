import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { OrderItem } from './order-item';

@Injectable()
export class OrderItemService {
    private orderItemUrl = 'api/orderItems';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor (private http: Http) { }

    getOrderItems(): Promise<OrderItem[]> {
        return this.http.get(this.orderItemUrl)
                .toPromise()
                .then(response=> response.json().data as OrderItem[])
                .catch(this.handleError);

        // return Promise.resolve(orderItems);
    }

    // getOrderItemsByOrder(id: number): Promise<OrderItem[]> {
    //     return this.http.get(this.orderItemUrl)
    //             .toPromise()
    //             .then(response=> response.json().data as OrderItem[])
    //             .then(x=> x.filter(y=> y.orderId == id))
    //             .catch(this.handleError);

        // return Promise.resolve(orderItems);
    // }

    getOrderItem(id: number): Promise<OrderItem>{
        const url = `${this.orderItemUrl}/${id}`;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as OrderItem)
            .catch(this.handleError)

        // return this.getOrderItems()
        //         .then(orderItems=> orderItems.find(oi=> oi.id == id));
    }

    add(orderItem: OrderItem): Promise<OrderItem>{
        return this.http
            .post(this.orderItemUrl, JSON.stringify({menuId: orderItem.menuId, quantity :orderItem.quantity}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(orderItem: OrderItem): Promise<void> {
        const url = `${this.orderItemUrl}/${orderItem.id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}