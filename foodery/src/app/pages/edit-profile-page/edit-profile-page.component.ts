import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.scss']
})
export class EditProfilePageComponent implements OnInit {
  public profileDetails: ProfileInfo;
  public profileName: string;
  public profileEmail: string | undefined | null;
  public avatarURL: string;
  editForm!: FormGroup;
  public vld: Boolean;


  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
    this.profileDetails = { fullName: "" };
    this.profileName = ""
    this.profileEmail = ""
    this.avatarURL = ""
    this.vld = false;
  }

  ngOnInit(): void {
    this.getStarted();
    //Form initialization
    this.editForm = new FormGroup({
      name: new FormControl('', Validators.required),
    });
    this.vld = true;
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

  //Router navigate functions
  goToProfilePage() {
    this.router.navigate(['./profile']);
  }

  editProfile() {
    if (this.editForm.valid) {
      this.vld = true;
      var editformData = {
        name: this.editForm.value.name,
      };
      let username = localStorage.getItem('user');
      this.db.object('users/' + username + '/info').set(editformData);
      this.router.navigate(['./profile']);
    } else {
      this.vld = false;
      return;
    }
  }
}

class ProfileInfo {
  fullName: string | undefined;
}
