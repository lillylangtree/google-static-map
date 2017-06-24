import { Component, OnInit } from '@angular/core';
import { MovieDetailService } from '../movie-detail.service';
import { ActivatedRoute} from "@angular/router";
import { DomSanitizer } from  "@angular/platform-browser";

class Movie {
	title: string;
	vote_count: number;
	vote_average: number;
    poster: string;
    tagline: string;
    overview: string;
	release_date: string;
	
    constructor(title: string,
				vote_count: number,
				vote_average: number,
				poster: string,
				tagline: string,
				release_date: string,
				overview: string) {
					this.title = title;
					this.vote_count = vote_count;
					this.vote_average = vote_average;
					this.poster = poster;
					this.tagline = tagline;
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
 
  constructor(private movieService:MovieDetailService,private route: ActivatedRoute,private sanitizer: DomSanitizer) {
		
		this.route.params.subscribe( params => {
											this.category = params['category'];
											if (params['searchString']) 
												this.searchString = params['searchString'];
											this.id = params['movieId'];
											
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
														theMovie.tagline,theMovie.release_date,theMovie.overview);
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
                      this.fadeIn = 'out'
                    }


}
