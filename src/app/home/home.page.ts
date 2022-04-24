import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CartModel } from '../models/cart.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cart$: Observable<CartModel>;

  constructor(private store: Store<{ cart: CartModel }>) {
    this.cart$ = store.select(('cart'));
  }

}
