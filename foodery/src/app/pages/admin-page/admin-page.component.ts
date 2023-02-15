import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {
  addProductForm!: FormGroup;
  allProducts!: Product[];
  productName!: string;
  productIngredients!: string;
  productImage!: string;
  productPrice!: number;

  constructor(private db: AngularFireDatabase) { this.getStarted(); }

  ngOnInit(): void {
    //Form initialization
    this.addProductForm = new FormGroup({
      productName: new FormControl('', Validators.required),
      productIngredients: new FormControl('', [Validators.required]),
      productImage: new FormControl('', Validators.required),
      productPrice: new FormControl('', Validators.required),
    });

  }

  async getStarted() {

    var products: Product[];
    products = [];

    await this.getProduct().then((value) => {
      products = value as Product[];
    });

    this.allProducts = [...products];

    var details: string[];
    details = [];
    await this.getProduct().then((value) => {
      details = value as string[];
    });

  }

  addProduct() {
    if (this.addProductForm.valid) {
      this.productName = this.addProductForm.value.productName;
      this.productIngredients = this.addProductForm.value.productIngredients;
      this.productImage = this.addProductForm.value.productImage;
      this.productPrice = this.addProductForm.value.productPrice;

      let addProductFormData = {
        name: this.productName,
        ingredients: this.productIngredients,
        image: this.productImage,
        price: this.productPrice,
      };
      this.allProducts.push(addProductFormData);
      this.db
        .object('products/products')
        .set({ products: this.allProducts });

      this.getStarted();
    } else {
      return;
    }
  }


  getProduct() {
    return new Promise((resolve, reject) => {
      this.db
        .list('products/products')
        .valueChanges()
        .subscribe((value) => {
          resolve(value);
        });
    });
  }

}

class Product {
  name!: string;
  ingredients!: string;
  image!: string;
  price!: number;
}
