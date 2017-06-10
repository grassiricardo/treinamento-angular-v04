import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CartService {
    public items: any[] = [];
    cartChange: Observable<any>;
    cartChangeObserver: Observer<any>;

    constructor(){
        this.cartChange = new Observable((observer: Observer<any>) => {
            this.cartChangeObserver = observer;
        })
    }

    addItem(item) {
        this.getItems();
        if(this.hasItem(item.id)) {
            this.updateQuantity(item.id, 1);
        } else {
            this.items.push(item);
        }
        this.save();
        this.cartServiceChange();
        console.log()
    }

    updateQuantity(id, quantity) {
        for(let i of this.items) {
            if(i.id == id) {
                i.quantity += quantity;
            }
        }
        this.cartServiceChange();
    }

    hasItem(id): boolean {
        for (let i of this.items) {
            if(i.id == id) {
                return true;
            }
        }
        this.cartServiceChange();
        return false;
    }

    getItems(): any[] {
        var data = localStorage.getItem('mws.cart');
        if(data) {
            this.items = JSON.parse(data);
        }
        this.cartServiceChange();
        return this.items;
    }

    save() {
        localStorage.setItem('mws.cart', JSON.stringify(this.items));
    }

    load() {
        var data = localStorage.getItem('mws.cart');
        if(data) {
            this.items = JSON.parse(data);
        }

        this.cartServiceChange();
    }

    removeItem(id: string) {
        for(var item of this.items) {
            if(item.id == id) {
                var index = this.items.indexOf(item);
                this.items.splice(index, 1);
            }
        }
        localStorage.setItem('mws.cart', JSON.stringify(this.items));
        this.cartServiceChange();
    }

    getSubTotal(): number  {
        var result: number = 0;
        for(let i of this.items) {
            result += (i.price * i.quantity);
        }
        this.cartServiceChange();
        return result;
    }

    cartServiceChange() {
        this.cartChangeObserver.next(this.items);
    }

    clear() {
        this.items = [];
        localStorage.removeItem('mws.cart');
        this.cartServiceChange();
    }
}