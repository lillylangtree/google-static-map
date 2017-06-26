import { Injectable } from '@angular/core';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth  } from 'angularfire2/auth';
 
import { environment } from '../environments/environment';

class FavouriteMovie {
            
            Title: string;
            imdbID: string;
            Year: string;

            constructor(title:string,imdbId: string,released: string){
					this.Title=title;
					this.imdbID=imdbId;
					this.Year=released;
				}

        }

@Injectable()
export class FirebaseServiceService {
  user;
  constructor(private db: AngularFireDatabase, private dbAuth: AngularFireAuth) { 
	dbAuth.authState.subscribe(userRes => {
      if (!userRes) {
        this.user = null;        
        return;
      }
      this.user = userRes; 
      console.log(userRes);	  
    });
  }
  
  getUser() {
	return this.user;
  }
  getDatabase(){
    console.log(this.db,this.dbAuth);
	return this.db;
  }
  
  getAuth(){
	return this.dbAuth.auth;
  }
  
  	getFavouriteMovies(){
		return this.getDatabase().list('/'+ this.user.uid + '/movies');
	}
	
	addFavouriteMovie(title: string,imdbId: string,year:string){
		let movie = new FavouriteMovie(title,imdbId,year); 
		let movies = this.getFavouriteMovies();
		let error = false;

		let found=false;
		 
		(movies).subscribe(
				snapshots => { 
					snapshots.forEach(favMovie => {
							if (favMovie.imdbID === imdbId) { //use the imdbID as the key
								found = true;
							}
						});
						 
				}
		)
		
		if (!found)    {    // false if not in existing favourite list*/
			this.getFavouriteMovies().push(movie);
			}// add new movie data to favorites list
		//else
		//	return new Promise<void>(resolve => resolve());
			//return Promise.resolve("all ready favourite");
	}
	
  
  registerUser(email, password) {
  
    return this.getAuth().createUserWithEmailAndPassword(email,password)
	.then( res => { return res } )
	.catch(error => {return(error);});
	}  
 /**
   * Logs the user in using their Email/Password combo
   * @param email
   * @param password
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
	loginWithEmail(email, password) {
		return this.getAuth().signInWithEmailAndPassword(email, password)
		.then( res => { return res } )
		.catch(error => { return error}
				);
	}
	
	signOut() {
			this.user = null;
			this.getAuth().signOut();
	}

}
