  import { Component, OnInit } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { CartService } from 'app/products/data-access/cart.service'
  
  @Component({
    selector: 'app-cart',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
  })
  
  export class CartComponent implements OnInit {
    cartItems: any[] = [];
  
    constructor(private cartService: CartService) {}
  
    ngOnInit() {
      this.cartService.getCartItems().subscribe(items => {
        this.cartItems = items;
      });
    }

  }