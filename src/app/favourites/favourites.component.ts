import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { Router,Route } from '@angular/router';
import { FirebaseServiceService } from '../firebase-service.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})

export class FavouritesComponent implements OnInit {

	movieList;
	user;
	title = 'My Favourites';
	category = 'favourites';
	loading: boolean;
	
	constructor(private router: Router,private route: ActivatedRoute,private dbService: FirebaseServiceService) { 
		this.user = dbService.getUser();
		if (!this.user)
			this.router.navigate(['/']);
		this.loading=true;	
		console.log(this.user);
		
  }

  ngOnInit() {
	this.dbService.getDatabase().list('/'+ this.user.uid + '/movies', { preserveSnapshot: true})
		.subscribe(
			snapshots=>{console.log(snapshots);
						let movieArray = new Array();
						snapshots.forEach(snapshot => {
							console.log(snapshot.key, snapshot.val());
							movieArray.push(snapshot);
						});
						this.loading=false;
						this.movieList = movieArray;
						console.log(this.movieList);
	 
		})

	}
	
	deleteFavourite(key: string){
		this.dbService.getDatabase().list('/'+ this.user.uid + '/movies').remove(key)
		.then(	res => {this.router.navigate(['movies/favourites']) } );
	}
}	