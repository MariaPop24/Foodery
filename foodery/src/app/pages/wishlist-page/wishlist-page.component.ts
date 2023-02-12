import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.scss']
})
export class WishlistPageComponent implements OnInit {
  public products: Product[] = [
    {
      name: "SALATA FRESH",
      ingredients: "Carne puișor sau amestec viţel, purcel şi berbecuţ, Salată verde, Ceapă roşie, Ardei kapia, Roşii, Măsline, Castravete verde, Specialitate daneză Del Delis sau Thassos, Sos tzatziki, Pita.",
      image: "https://www.panemar.ro/img/fresh/salata/salata.jpg",
      price: 32.99
    },
    {
      name: "MENIU ȘNIȚEL",
      ingredients: "Şniţele, Cartofi, Varză albă, Sos de usturoi, Pita",
      image: "https://www.pizza-delir.ro/wp-content/uploads/2018/02/cartofi-pai-snitel-si-salata_073d003381742a.jpg",
      price: 30.99
    },
    {
      name: "MENIU CRISPY",
      ingredients: "Crispy carne pui, Cartofi, Salată varză, Sos usturoi, Sos dulce-acrișor, Pita",
      image: "https://moaradefoc.ro/livrari-domiciliu/wp-content/uploads/2020/11/Meniu-Crispy.jpg",
      price: 34.99
    },
    {
      name: "LEONIDAS PITA",
      ingredients: "Carne puișor sau amestec viţel, purcel şi berbecuţ, Salată verde, Roşii, Castraveţi muraţi, Ceapă roşie, Sos de usturoi, Sos de măsline, Sos dulce-acrişor, Sos de legume, Pita. ",
      image: "https://ospatarul-images.s3.eu-west-1.amazonaws.com/dynamic/restaurants/f3941dc0-7d9d-11eb-8168-71ab23083547/product-images/SNITEL%20PITA.jpg",
      price: 32.99
    }
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
