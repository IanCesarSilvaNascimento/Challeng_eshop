import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {  Store } from '@ngrx/store';
import { CartModel } from 'src/app/models/cart.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cart$: Observable<CartModel>;

  constructor(
    private store: Store<{cart: CartModel}>
  ) {
    this.cart$ = store.select(('cart'));
  }

  ngOnInit() {
  }

}
