import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
