
import { Component, OnInit, inject, signal } from "@angular/core";

import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';

@Component({
    selector: "app-cart",
    templateUrl: "./cart.component.html",
    styleUrls: ["./cart.component.scss"],
    standalone: true,
    imports: [DataViewModule, CardModule, ButtonModule, DialogModule],
  })
  export class CartComponent implements OnInit {
    // private readonly cartService = inject(CartService);
  
    // public readonly products = this.cartService.products;

  }
