import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {
  public profileName: string;

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
