import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './templates/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import { NavigationMenuComponent } from './templates/navigation-menu/navigation-menu.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PopularComponent } from './components/popular/popular.component';
import { CardGalleryComponent } from './templates/card-gallery/card-gallery.component';
import { LatestUpdateComponent } from './components/latest-update/latest-update.component';
import { CarouselModule } from './components/carousel/carousel.module';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavigationMenuComponent,
    HomePageComponent,
    PopularComponent,
    CardGalleryComponent,
    LatestUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
