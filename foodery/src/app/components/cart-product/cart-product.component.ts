import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {
  public product!: Product;

  constructor() {
  }

  ngOnInit(): void {
  }

  increaseQuantity() {
    if (this.product.quantity)
      this.product.quantity += 1;
  }

  decreaseQuantity() {
    if (this.product.quantity)
      this.product.quantity -= 1;
  }

}

class Product {
  name: string | undefined;
  ingredients: string[] | undefined;
  image: string | undefined;
  price: number | undefined;
  quantity: number | undefined;
}
