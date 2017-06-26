import { Component, OnInit } from '@angular/core';
import { MovieDetailService } from '../movie-detail.service';
import { FirebaseServiceService } from '../firebase-service.service';
import { ActivatedRoute} from "@angular/router";
import { Router,Route } from '@angular/router';
import { DomSanitizer } from  "@angular/platform-browser";

class Movie {
	title: string;
	vote_count: number;
	vote_average: number;
    poster: string;
    tagline: string;
	imdbId: string;
    overview: string;
	release_date: string;
	
    constructor(title: string,
				vote_count: number,
				vote_average: number,
				poster: string,
				tagline: string,
				release_date: string,
				imdb_id: string,
				overview: string) {
					this.title = title;
					this.vote_count = vote_count;
					this.vote_average = vote_average;
					this.poster = poster;
					this.tagline = tagline;
					this.imdbId=imdb_id;
					this.overview = overview;
					this.release_date = release_date;
				}
}
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
	
export class MovieDetailComponent implements OnInit {

  id: string;
  category: string;
  title: string;
  movie: Movie;
  errorMessage: string;
  searchString: string;
  fadeIn = 'out';
  trailer=false;
  trailerSrc: any;
  showFav = true;
  authUser; 
  constructor(private router: Router, private dbService: FirebaseServiceService, private movieService:MovieDetailService,
			  private route: ActivatedRoute,private sanitizer: DomSanitizer) {
		
		this.route.params.subscribe( params => {
												this.category = params['category'];
												if (params['searchString']) 
													this.searchString = params['searchString'];
												this.id = params['movieId'];
												this.authUser = this.dbService.getUser();
											    if (this.authUser && this.category != 'favorites') {
													  this.showFav = true;
											   } else {
													  this.showFav = false;
													}
										}
									);
			}
			

  ngOnInit() {  this.title = 'Movie Details';
				this.getMovie(this.id);
			}
 
  getMovie(id: string) {
		this.movieService.getHttpMovie(id)
		   .then( 
				theMovie => {	console.log(theMovie);
								theMovie.poster_path = "http://image.tmdb.org/t/p/w370" + theMovie.poster_path;	
								this.movie = new Movie(theMovie.title,theMovie.vote_count,theMovie.vote_average,theMovie.poster_path,
														theMovie.tagline,theMovie.release_date,theMovie.imdb_id,theMovie.overview);
								console.log(this.movie);
								return theMovie.imdb_id;
							},
				 error =>  this.errorMessage = <any>error
			 )
			 .then( 
				imdbID => { console.log(imdbID);
							this.movieService.getHttpMovieTrailer(imdbID)
							.then( 
								trailerMovie => {	console.log(trailerMovie);
													this.trailer=true;
													this.trailerSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://v.traileraddict.com/" + trailerMovie.trailer_id);
													},
											 
								error =>  this.errorMessage = <any>error
								 )
						 }
				);
			 
	}

	showTrailer = function() {
                      this.fadeIn = 'in'
                    }
    closeModal = function() {
					this.fadeIn = 'out';
					//if I want i can set scope to a specific region
					let myScope = document.getElementById('divScope');      
					//otherwise set scope as the entire document
					//var myScope = document;

					//if there is an iframe inside maybe embedded multimedia video/audio, we should reload so it stops playing
					let iframes = myScope.getElementsByTagName("iframe");
					if (iframes != null) {
						for (var i = 0; i < iframes.length; i++) {
							iframes[i].src = iframes[i].src; //causes a reload so it stops playing, music, video, etc.
						}
					}
                }
	addFavourite(){
				//check logged in etc error handling in .then
		        this.dbService.addFavouriteMovie(this.movie.title,this.movie.imdbId,this.movie.release_date);
				//.then(	res => {
				this.router.navigate(['movies/favourites']); 	
	}

}
