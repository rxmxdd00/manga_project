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
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environment/environment';
import { AuthService } from './shared/services/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavigationMenuComponent,
    HomePageComponent,
    PopularComponent,
    CardGalleryComponent,
    LatestUpdateComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    CarouselModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
