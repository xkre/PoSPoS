import { Menu } from './menu';
import { OrderItem } from "./order-item";

export class Order{
    id: number;
    orderItems?: OrderItem[];
    status: string;

    constructor() {
        this.orderItems = new Array<OrderItem>();
    }
}