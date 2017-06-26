import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth  } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

import { environment } from '../environments/environment';

import { MapModelService } from './map-model.service';
import { MovieListService } from './movie-list-service';
import { MovieDetailService } from './movie-detail.service';
import { FirebaseServiceService } from './firebase-service.service';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FavouritesComponent } from './favourites/favourites.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/about' to the google static map
  {
    path: 'about',
    component: MapComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
   {
    path: 'movies/favourites',
    component: FavouritesComponent,
  },
  {
    path: 'movies/:category',
    component: MovieListComponent,
  },
  {
    path: 'movies/search/:movieTitle',
    component: MovieListComponent,
  },
  {
    path: 'movies/:movieId/:category',
    component: MovieDetailComponent,
  },
   {
    path: 'movies/:movieId/:category/:searchString',
    component: MovieDetailComponent,
  },
  // map '/' to '/home' as our default route
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];
export const appRouterModule = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    MovieListComponent,
    MovieDetailComponent,
    FavouritesComponent
 ],
  imports: [
    BrowserModule,
 	HttpModule,
	FormsModule,
	ReactiveFormsModule,
	appRouterModule,
	AngularFireModule.initializeApp(environment.firebase), // 
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features

  ],
  providers: [MapModelService,MovieListService,MovieDetailService,FirebaseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { 
	 
	 constructor() {
		
		}
  }
