import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})

export class NavigationBarComponent implements OnInit {
  public avatarURL: string | undefined;
  public profileName: string | undefined;
  public isLoggedIn: boolean;

  constructor(private afAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) {
    this.isLoggedIn = true;
  }

  ngOnInit(): void {
    this.getStarted();
  }

  //Function to get user profile name and use it for the avatar
  async getStarted() {
    var details: string[];
    details = [];
    await this.getDetails().then((value) => {
      details = value as string[];
    });

    this.profileName = details[0];

    if (this.profileName) {
      let names = this.profileName.split(" ");

      if (names.length > 1) {
        this.avatarURL = "https://ui-avatars.com/api/?name=" + names[0] + "+" + names[names.length - 1] + "&background=FF8126&color=fff";
      } else {
        this.avatarURL = "https://ui-avatars.com/api/?name=" + names[0] + "&background=FF8126&color=fff&uppercase=true";
      }
    }
  }

  //Function to fetch from the database
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

  //Function for logout
  logout(): void {
    this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['./home']);
  }

  //Functions that can be used for routing navigation
  goToHomePage() {
    this.router.navigate(['./home']);
  }

  goToCatalog() {
    this.router.navigate(['./catalog']);
  }

  goToCart() {
    this.router.navigate(['./cart']);
  }

  goToWishlist() {
    this.router.navigate(['./wishlist']);
  }

  goToProfilePage() {
    this.router.navigate(['./profile']);
  }



}
