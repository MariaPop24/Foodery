import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar-message',
  templateUrl: './snack-bar-message.component.html',
  styleUrls: ['./snack-bar-message.component.scss']
})
export class SnackBarMessageComponent {

  @Input() profileName!: string;
  @Input() isRemoveMessage!: boolean;
  @Input() isAddedToCart!: boolean;
  @Input() isAddedToWishlist!: boolean;

  constructor(private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.generateAlert();
  }

  generateAlert() {
    setTimeout(() => {
      if (this.profileName) {
        this._snackBar.open('Welcome, ' + this.profileName, 'Close', {
          duration: 1000,
          verticalPosition: 'top',
        });
      }
    }, 1000)

    if (this.isRemoveMessage) {
      setTimeout(() => {
        this._snackBar.open('Item removed!', 'Close', {
          duration: 1000,
          verticalPosition: 'top',
        });
      }, 0)
    }

    if (this.isAddedToCart) {
      setTimeout(() => {
        this._snackBar.open('Item added to cart!', 'Close', {
          duration: 1000,
          verticalPosition: 'top',
        });
      }, 0)
    }

    if (this.isAddedToWishlist) {
      setTimeout(() => {
        this._snackBar.open('Item added to wishlist!', 'Close', {
          duration: 1000,
          verticalPosition: 'top',
        });
      }, 0)
    }
  }
}
