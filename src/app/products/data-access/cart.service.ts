import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();

  constructor() {}

  getCartCount() {
    return this.cartItems$.pipe(map(items => items.length)); 
  }

  addToCart(product: any) {
    const currentCart = this.cartItems.value;
    currentCart.push(product);
    this.cartItems.next([...currentCart]);
  }

  removeFromCart(product: any) {
    const currentCart = this.cartItems.value.filter(item => item.id !== product.id);
    this.cartItems.next([...currentCart]);
  }

  clearCart() {
    this.cartItems.next([]);
  }

  getCartItems() {
    return this.cartItems$;
  }
}
