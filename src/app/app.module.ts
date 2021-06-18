import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { BannerPromoComponent } from './components/banner-promo/banner-promo.component';
import { TopCategoriesComponent } from './components/top-categories/top-categories.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { BrandsComponent } from './components/brands/brands.component';
import { BestProductsComponent } from './components/best-products/best-products.component';
import { LatestComponent } from './components/latest/latest.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopHeaderComponent,
    NavBarComponent,
    BannerComponent,
    BannerPromoComponent,
    TopCategoriesComponent,
    NewsletterComponent,
    BrandsComponent,
    BestProductsComponent,
    LatestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
