import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from 'src/app/pages/cart-page/cart-page.component';
import { CatalogPageComponent } from 'src/app/pages/catalog-page/catalog-page.component';
import { EditProfilePageComponent } from 'src/app/pages/edit-profile-page/edit-profile-page.component';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { LoginPageComponent } from 'src/app/pages/login-page/login-page.component';
import { ProfilePageComponent } from 'src/app/pages/profile-page/profile-page.component';
import { SignupPageComponent } from 'src/app/pages/signup-page/signup-page.component';
import { WishlistPageComponent } from 'src/app/pages/wishlist-page/wishlist-page.component';
import { AuthGuard } from 'src/app/services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'catalog', component: CatalogPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'wishlist', component: WishlistPageComponent },
  { path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard] },
  { path: 'profile/edit', component: EditProfilePageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
