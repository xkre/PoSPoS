import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Menu } from './menu';

@Injectable()
export class MenuService {
    private menuUrl = 'api/menus';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor (private http: Http) { }

    getMenus(): Promise<Menu[]> {
        return this.http.get(this.menuUrl)
                .toPromise()
                .then(response=> response.json().data as Menu[])
                .catch(this.handleError);

        // return Promise.resolve(menus);
    }

    getMenu(id: number): Promise<Menu>{
        const url = `${this.menuUrl}/${id}`;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Menu)
            .catch(this.handleError)

        // return this.getMenus()
        //         .then(menus=> menus.find(m=> m.id == id))
    }

    add(menu: Menu): Promise<Menu> {
        return this.http
            .post(this.menuUrl, JSON.stringify({name: menu.name, price:menu.price}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);

        // return this.getMenus()
        //         .then((response) => {
        //             response.push(menu);
        //             console.log("Added new menu: " + menu.name + " to the list.")
        //             return menu;
        //         })
        //         .then(x=> {alert(x.id); return x;});
    }

    delete(menu: Menu): Promise<void> {
        const url = `${this.menuUrl}/${menu.id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    getName(id: Number): Promise<String>{
        const url = `${this.menuUrl}/${id}`;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Menu)
            .then(x=> x.name)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    
}