import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist-product',
  templateUrl: './wishlist-product.component.html',
  styleUrls: ['./wishlist-product.component.scss']
})
export class WishlistProductComponent {
  public product!: Product;
  public isRemoved!: boolean;
  public isAddedToCart!: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.isAddedToCart = true;
  }

  removeItemFromCart() {
    this.isRemoved = true;
  }

}

class Product {
  name: string | undefined;
  ingredients: string[] | undefined;
  image: string | undefined;
  price: number | undefined;
  quantity: number | undefined;
}
