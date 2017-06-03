import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
import { HeadbarComponent } from './components/shared/headbar/headbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SubMenuComponent } from './components/shared/sub-menu/sub-menu.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

import { Routing, RoutingProviders } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    SubMenuComponent,
    ProductListComponent,
    FooterComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    Routing
  ],
  providers: [CartService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
