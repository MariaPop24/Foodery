import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  public profileDetails: ProfileInfo;
  public profileName: string;
  public profileEmail: string | undefined | null;
  public avatarURL: string;


  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router, private location: Location) {
    this.profileDetails = { fullName: "", email: "" };
    this.profileName = ""
    this.profileEmail = ""
    this.avatarURL = ""
  }

  ngOnInit(): void {
    this.getStarted();
  }

  //Function to get user profile info and use it for the avatar and display
  async getStarted() {
    var details: string[];
    details = [];
    await this.getDetails().then((value) => {
      details = value as string[];
    });

    try {
      this.profileEmail = (await this.afAuth.currentUser)?.email;
    } catch { }

    if (details.length >= 1) {
      this.profileName = details[0];
      let names = this.profileName.split(" ");
      if (names.length > 1) {
        this.avatarURL = "https://ui-avatars.com/api/?name=" + names[0] + "+" + names[names.length - 1] + "&background=FF8126&color=fff";
      } else {
        this.avatarURL = "https://ui-avatars.com/api/?name=" + names[0] + "&background=FF8126&color=fff&uppercase=true";
      }
    }
  }


  //Function to fetch user info from the database
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
    localStorage.removeItem("user");
    this.router.navigate(['./home']);
  }

  //Router navigate functions
  switchToEdit() {
    this.router.navigate(['./profile/edit']);
  }

  goToCatalogPage() {
    this.router.navigate(['./catalog']);
  }
}

class ProfileInfo {
  fullName: string | undefined;
  email: string | undefined;
}
