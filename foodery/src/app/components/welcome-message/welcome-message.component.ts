import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.scss']
})
export class WelcomeMessageComponent implements OnInit {

  @Input() profileName!: string;

  constructor(private _snackBar: MatSnackBar) {
    this.profileName = "asdfg"
    // this.profileName = "";
    // console.log("232232444", this.profileName)
  }

  ngOnInit(): void {
    this.generateAlert();
  }

  generateAlert() {
    this._snackBar.open('Snackbar message', 'Close', {
      duration: 2000,
    });

    console.log("232232", this.profileName)
    // alert("Welcome back, " + this.profileName);
    // setTimeout(() => { alert("Welcome back, " + this.profileName); }, 2000);
  }

}
