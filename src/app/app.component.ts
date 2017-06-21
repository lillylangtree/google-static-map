import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular 4 Google Static Map';
  fadeIn = 'out';
  loggedIn = false;
  movieForm: FormGroup;
  movieSearch = "";
  
  constructor(private fb: FormBuilder, private router: Router,){
	this.movieForm = fb.group({
      'movieSearch' : [null, Validators.required]
    });
  }
  movieFind = function (myForm) {
		console.log( myForm);
		this.router.navigate(['movies/search', myForm.movieSearch]);
    }
  registerUser = function() {
     this.loggedIn = true; 
	}
 
  registerModal = function() {
      this.fadeIn = 'in'
  }

  closeModal = function() {
      this.fadeIn = 'out'
  }
}
