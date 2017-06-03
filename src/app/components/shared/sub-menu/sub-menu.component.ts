import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html'
})
export class SubMenuComponent implements OnInit {

  public totalItems: number = 0;

  constructor(private cartService: CartService) { 
    this.cartService.cartChange.subscribe((data) => {
      this.totalItems = data.length;
    });
  }

  ngOnInit() {
  }

  addItem() {
    this.cartService.addItem({title: 'teste'});
  }

}
