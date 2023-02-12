import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  public products: Product[] = [
    {
      name: "Gyros la farfurie",
      ingredients: "Carne puișor sau amestec viţel, purcel şi berbecuţ, Cartofi, Varză albă, Salată verde, Roşii, Castraveţi muraţi, Ceapă roşie, Sos de usturoi, Sos dulce-acrişor, Sos de măsline, Sos de legume, Sos tzatziki, Pita.",
      image: "https://www.lalena.ro/images/uploaded/1920x_Gyros-grecesc-de-pui-la-farfurie-551.jpg",
      price: 30.99
    },
    {
      name: "Gyros",
      ingredients: "Carne puișor sau amestec viţel, purcel şi berbecuţ, Lipie, Cartofi, Varză albă, Castraveţi muraţi, Ceapă roşie, Roşii, Salată verde, Sos de usturoi, Sos de măsline, Sos dulce-acrişor, Sos de legume.",
      image: "https://sodelicious.ro/wp-content/uploads/2020/05/gyros-cu-vita-si-tzatziki-720x720.jpg",
      price: 35.99
    },
    {
      name: "SALATA FRESH",
      ingredients: "Carne puișor sau amestec viţel, purcel şi berbecuţ, Salată verde, Ceapă roşie, Ardei kapia, Roşii, Măsline, Castravete verde, Specialitate daneză Del Delis sau Thassos, Sos tzatziki, Pita.",
      image: "https://www.panemar.ro/img/fresh/salata/salata.jpg",
      price: 32.99
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}


class Product {
  name!: string;
  ingredients!: string;
  image!: string;
  price!: number;
}
