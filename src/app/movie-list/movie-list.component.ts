import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../movie-list-service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {


	myMovieConfig = {
			"moviesEndpoint" : "https://api.themoviedb.org/3/movie",
			"moviesSearchEndpoint" : "https://api.themoviedb.org/3/search/movie?query=",
			"apiKey": "35e16679c616a21b9ddebb66272c5902",
			"posterPath": "http://image.tmdb.org/t/p/w370/"
		};
		
	location: Location;	
	constructor(private movieService:MovieListService,private route: ActivatedRoute) { 
	
		this.route.params.subscribe( params => {
											if (params['movieTitle']) { //we are searching for movies
												this.searchString = params['movieTitle'];
												this.category = 'search';
												this.search=true;
												this.title = 'Searching for ' + this.searchString + ' Movies'; 
											}	else { // we are listing from movies menu
													this.category = params['category'];
													this.title = params['category'].replace("_"," ").toUpperCase();
											}
											this.getMovies(this.getRoute());
										}
									);
		
	}

	ngOnInit() {
			
	}
  
	loading = true;
	title = "";
	category="";
	page=1;
	pages=0;
	movieList = [];
	errorMessage = "";
	searchString: string;
	search=false;
	getMovies(url: string) {
		this.movieService.getHttpList(url)
		   .then( 
				movies => {	this.movieList = movies.results;
							this.movieList.forEach(function(movie){
								movie.poster_path = "http://image.tmdb.org/t/p/w370/" + movie.poster_path;
							});
							this.page=movies.page;
							this.pages=movies.total_pages;
							this.loading = false;},
				 error =>  this.errorMessage = <any>error
			 );
	}

	nextPage = function(){
	  this.page++;
	  this.getMovies(this.getRoute());
	  };
	prevPage = function(){
	  this.page--;
	  this.getMovies(this.getRoute());
	  };

	  getRoute(){
		if (this.search)
			return this.myMovieConfig.moviesSearchEndpoint + this.searchString + '&page=' + this.page + '&api_key=' +   this.myMovieConfig.apiKey;
		else
			return this.myMovieConfig.moviesEndpoint + '/' + this.category  + '?page='+ this.page + '&api_key=' + this.myMovieConfig.apiKey;
	  }
	  
}


