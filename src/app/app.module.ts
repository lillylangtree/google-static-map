import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MapModelService } from './map-model.service';
import { MovieListService } from './movie-list-service';
import { MovieDetailService } from './movie-detail.service';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

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
    MovieDetailComponent
 ],
  imports: [
    BrowserModule,
 	HttpModule,
	FormsModule,
	ReactiveFormsModule,
	appRouterModule
  ],
  providers: [MapModelService,MovieListService,MovieDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
