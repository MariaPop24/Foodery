import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { WishlistPageComponent } from './pages/wishlist-page/wishlist-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { EditProfilePageComponent } from 'src/app/pages/edit-profile-page/edit-profile-page.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackBarMessageComponent } from './components/snack-bar-message/snack-bar-message.component';
import { WishlistProductComponent } from './components/wishlist-product/wishlist-product.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    LoadingSpinnerComponent,
    NavigationBarComponent,
    HomePageComponent,
    CatalogPageComponent,
    CartPageComponent,
    WishlistPageComponent,
    ProductCardComponent,
    ProfilePageComponent,
    EditProfilePageComponent,
    CartProductComponent,
    SnackBarMessageComponent,
    WishlistProductComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
