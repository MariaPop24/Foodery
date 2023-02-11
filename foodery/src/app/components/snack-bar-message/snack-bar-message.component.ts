import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar-message',
  templateUrl: './snack-bar-message.component.html',
  styleUrls: ['./snack-bar-message.component.scss']
})
export class SnackBarMessageComponent {

  @Input() profileName!: string;

  constructor(private _snackBar: MatSnackBar) {
    this.profileName = "asdfg"
  }

  ngOnInit(): void {
    this.generateAlert();
  }

  generateAlert() {
    setTimeout(() => {
      this._snackBar.open('Welcome, ' + this.profileName, 'Close', {
        duration: 1000,
        verticalPosition: 'top',
      });
    }, 1000)

  }
}
