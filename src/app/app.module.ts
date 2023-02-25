import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomePageBannerComponent } from './pages/home/home-page-banner/home-page-banner.component';
import { HomePageFeaturesComponent } from './pages/home/home-page-features/home-page-features.component';
import { HomePageHowWeWorkComponent } from './pages/home/home-page-how-we-work/home-page-how-we-work.component';
import { HomePageKeyFeaturesComponent } from './pages/home/home-page-key-features/home-page-key-features.component';
import { HomePageContactUsComponent } from './pages/home/home-page-contact-us/home-page-contact-us.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageBannerComponent,
    HomePageFeaturesComponent,
    HomePageHowWeWorkComponent,
    HomePageKeyFeaturesComponent,
    HomePageContactUsComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    BlogComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
