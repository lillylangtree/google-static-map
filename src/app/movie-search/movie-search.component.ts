import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../movie-list-service';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-movie-search',
  templateUrl: '../movie-list/movie-list.component.html',
  styleUrls: ['../movie-list/movie-list.component.css']
})
export class MovieSearchComponent implements OnInit {

  search=""; 
  movieList = [];
  loading = true;
  errorMessage= "";
  category = '';
  page=1;
  pages=0;
  url = '';
  myMovieConfig = {
			"moviesEndpoint" : "https://api.themoviedb.org/3/movie",
			"moviesSearchEndpoint" : "https://api.themoviedb.org/3/search/movie?query=",
			"apiKey": "35e16679c616a21b9ddebb66272c5902",
			"omdbApiKey": "45e2e591",
			"rottenUri" : "https://www.omdbapi.com/",
			"googleStaticMapApi": "AIzaSyD83VjfQVoZZblHeYSG2LqtAunkSuS8uBE",
			"posterPath": "http://image.tmdb.org/t/p/w370/",
		   // "moviesSearchEndpoint": "https://www.omdbapi.com/",
			"myDataRef" : 'https://moviesci.firebaseio.com/',
			"noPoster" : "images/no-poster-w370-v2.png",
			"myapifilmtoken" : "ca8e141b-b14a-4767-a784-14b403e95c22" ,
			"movieDetailsEndPoint" : "http://api.myapifilms.com/imdb/idIMDB?idIMDB=",
			"moviesTrailerEndPoint": "http://api.myapifilms.com/trailerAddict/taapi?idIMDB="
		}
  constructor(private movieService:MovieListService,private route: ActivatedRoute) {
	this.route.params.subscribe( params => {
											console.log(params);
											if (params['movieTitle']) { //we are searching for movies
												this.search = params['movieTitle'];
												this.category = 'search'; 
												this.url = this.myMovieConfig.moviesSearchEndpoint + this.search + '&page=' + this.page + '&api_key=' +   this.myMovieConfig.apiKey;
											
											}	
											this.getMovies();
											}
									);
  }

	getMovies() {
		this.movieService.getHttpList(this.url)
		   .then( 
				movies => {	this.movieList = movies.results;
							this.movieList.forEach(function(movie){
									movie.poster_path = "http://image.tmdb.org/t/p/w370/" + movie.poster_path;
							});
							this.page= movies.page;
							this.pages= movies.total_pages;
							this.loading = false;},
				 error =>  this.errorMessage = <any>error
			 );
	}
  ngOnInit() {
  }

}
