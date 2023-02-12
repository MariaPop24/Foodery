import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {
  public profileName: string;
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

  constructor(private db: AngularFireDatabase) {
    this.profileName = "";
  }

  ngOnInit(): void {
    this.getStarted();
  }

  async getStarted() {
    var details: string[];
    details = [];
    await this.getDetails().then((value) => {
      details = value as string[];
    });

    this.profileName = details[0];
  }

  getDetails() {
    return new Promise((resolve, reject) => {
      this.db
        .list('users/' + localStorage.getItem('user') + '/info')
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
