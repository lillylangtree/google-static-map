import { Component, OnInit } from '@angular/core';
import { MovieDetailService } from '../movie-detail.service';
import { ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  id = "";
  category = "";
  title = 'Movie Details';
  movie = {};
  errorMessage = "";
  searchString: string;
  constructor(private movieService:MovieDetailService,private route: ActivatedRoute) {
		this.route.params.subscribe( params => {
											console.log(params);
											this.category = params['category'];
											if (params['searchString'])
												this.searchString = params['searchString'];
											this.id = params['movieId'];
											this.getMovie(this.id);
											
										}
									);}

  ngOnInit() {
  }
  
  getMovie(id: string) {
		this.movieService.getHttpMovie(id)
		   .then( 
				movie => {	this.movie = movie;
							console.log(this.movie);
							//this.movieList.forEach(function(movie){
							movie.poster_path = "http://image.tmdb.org/t/p/w370/" + movie.poster_path;
							//});
							},
				 error =>  this.errorMessage = <any>error
			 );
	}


}
