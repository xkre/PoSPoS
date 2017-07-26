"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var menus = [
            { id: 11, name: 'Nasi Goreng Kampung', price: 5 },
            { id: 12, name: 'Nasi Goreng Belacan', price: 5 },
            { id: 13, name: 'Nasi Goreng Tomyam', price: 5 },
            { id: 14, name: 'Nasi Goreng Thai', price: 5 },
            { id: 15, name: 'Nasi Goreng Ayam Pedas', price: 5 },
            { id: 16, name: 'Nasi Goreng USA', price: 5 },
            { id: 17, name: 'Mee Goreng ', price: 5 },
            { id: 18, name: 'Mee Goreng Mamak', price: 5 },
            { id: 19, name: 'Kuey Teow Goreng', price: 5 },
            { id: 20, name: 'Milo Ais', price: 2 },
            { id: 21, name: 'Kopi Ais', price: 2 },
            { id: 22, name: 'Teh Ais', price: 2 },
            { id: 23, name: 'Horliks Ais', price: 2 }
        ];
        var orders = [
            { id: 10, status: 'kitchen', orderItems: [
                    { id: 10, menuId: 11, quantity: 1 },
                    { id: 11, menuId: 12, quantity: 1 },
                ] },
            { id: 11, status: 'counter', orderItems: [
                    { id: 14, menuId: 16, quantity: 1 },
                    { id: 15, menuId: 17, quantity: 1 },
                    { id: 16, menuId: 18, quantity: 1 },
                ] },
            { id: 12, status: 'done', orderItems: [
                    { id: 12, menuId: 11, quantity: 1 }
                ] },
            { id: 14, status: 'kitchen', orderItems: [
                    { id: 13, menuId: 15, quantity: 1 }
                ] },
        ];
        var orderItems = [
            { id: 10, menuId: 11, quantity: 1 },
            { id: 11, menuId: 12, quantity: 1 },
            { id: 12, menuId: 11, quantity: 1 },
            { id: 13, menuId: 15, quantity: 1 },
            { id: 14, menuId: 16, quantity: 1 },
            { id: 15, menuId: 17, quantity: 1 },
            { id: 16, menuId: 18, quantity: 1 },
        ];
        return { menus: menus, orders: orders, orderItems: orderItems };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map