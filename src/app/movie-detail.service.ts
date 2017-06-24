import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response }          from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MovieDetailService {

  constructor(private http: Http) { }
  
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
		
  getHttpMovie(id: string) {
	let url = this.myMovieConfig.moviesEndpoint + '/' + id + '?api_key=' + this.myMovieConfig.apiKey;
	return this.http.get(url)
                  .toPromise()
                  .then(this.extractData)
                  .catch(this.handleError);
  }
  getHttpMovieTrailer(imdbID: string) {
	let url = this.myMovieConfig.moviesTrailerEndPoint  + imdbID + '&token=' + this.myMovieConfig.myapifilmtoken;
            return this.http.get('https://moviedbtrailers.herokuapp.com/movieTrailer', {   //url   to node server acting as proxy
                params: {url: url}            
            }).toPromise()
              .then(this.extractTrailerData)
              .catch(this.handleError);
  }
  
  private extractData(res: Response) {
		let body = res.json();
		console.log(body);
		return body || { };
	}
	
	  private extractTrailerData(res: Response) {
		let body = res.json();
		console.log(body.data.trailer[0]);
		return body.data.trailer[0] || { };
	}
 
	private handleError (error: Response | any) {
		// In a real world app, you might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
		  const body = error.json() || '';
		  const err = body.error || JSON.stringify(body);
		  errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
		  errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Promise.reject(errMsg);
	}

}
