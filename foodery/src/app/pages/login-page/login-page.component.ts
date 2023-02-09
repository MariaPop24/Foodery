import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  firebaseErrorMessage: string;
  public isLoading = false;
  public displayValidationMessage = false;
  activeUser: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });

    this.firebaseErrorMessage = '';
    try {
      this.checkAutoLogin();
    } catch { }
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.displayValidationMessage = true;
      this.isLoading = false;
      return;
    }
    this.isLoading = true;
    this.displayValidationMessage = false;
    this.authService
      .loginUser(this.loginForm.value.email, this.loginForm.value.password)
      .then((result) => {
        if (result == null) {
          let username = this.loginForm.value.email.replace(/[^a-z0-9]/gi, '');
          localStorage.setItem('user', username);
          this.isLoading = false;
          this.router.navigate(['../catalog']);
        } else {
          this.isLoading = false;
        }
      });
  }

  async checkAutoLogin() {
    try {
      this.activeUser = (await this.afAuth.currentUser)?.email;
    } catch { }
    if (this.activeUser) {
      this.router.navigate(['./catalog']);
    }
  }

  switchToSignUp() {
    this.router.navigate(['./signup']);
  }
}
