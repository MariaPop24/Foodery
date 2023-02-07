import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  public isFavorite: boolean;

  constructor() {
    this.isFavorite = true;
  }

  ngOnInit(): void {
  }

  addToFavorites() {
    this.isFavorite = !this.isFavorite;
  }

}
