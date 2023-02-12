import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  public isFavorite!: boolean;
  public isAddedToCart!: boolean;
  public isAddedToWishlist!: boolean;
  @Input() productName!: string;
  @Input() productIngredients!: string;
  @Input() productImage!: string;
  @Input() productPrice!: number;

  constructor() { }

  ngOnInit(): void {
  }

  addToFavorites() {
    this.isFavorite = !this.isFavorite;
  }

  addToCart() {
    this.isAddedToCart = true;
  }

  addToWishlist() {
    this.isAddedToWishlist = true;
  }

  removeFromWishlist() {
    this.isAddedToWishlist = false;
  }

}
