import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,Route } from '@angular/router';
import { FirebaseServiceService } from './firebase-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseServiceService]
})
export class AppComponent {

  title = 'Angular 4 Google Static Map';
  fadeIn = 'out';
  loggedIn = false;
  movieForm: FormGroup;
  registerForm: FormGroup;
  movieSearch = "";
  authUser;
  user; 
  registeredUser;
  titleAlert:string = 'Correctly formatted email is required';  
  
  
  constructor(private fb: FormBuilder, private router: Router,private dbService: FirebaseServiceService){
	this.resetUser();
	
	
	this.movieForm = fb.group({
      'movieSearch' : [null, Validators.required]
    });
	
	this.registerForm = fb.group({
      'email' : [null, Validators.compose([Validators.required,Validators.pattern("[^ @]*@[^ @]*") ])],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])]
          });

	if (dbService.getUser()) {
          this.loggedIn = true;
	} else {
          this.loggedIn = false;
        }
	}
	
 	movieFind = function (myForm) {
		console.log( myForm);
		this.router.navigate(['movies/search', myForm.movieSearch]);
    }
	
	loginUser(){
		console.log(this.user);
		this.dbService.loginWithEmail(this.user.email, this.user.password).then(
			res => { if(res.code || res.message) {
						alert(res.code + " " + res.message)
						this.loggedIn=false;
						this.resetUser();
						this.authUser=null;
						}
					else {	
						this.loggedIn=true;
						this.authUser= res }
						},
			error => { alert(error);}		 
			)
	
	}
	
	logoutUser(){
		console.log(this.user);
		this.loggedIn=false;
		this.authUser= null;
		this.resetUser();
		this.dbService.signOut();
		this.router.navigate(['']);
	}
	
	registerUser = function(value) {
	 console.log(value); 
	 this.dbService.registerUser(value.email, value.password).then(
			res => { if(res.code || res.message) {
						alert(res.code + " " + res.message)
						this.loggedIn=false;
						this.resetUser();
						this.authUser=null;
						}
					else {	
						this.loggedIn=true;
						this.authUser= res }
						},
			error => { alert(error);}		 
			)	
     //this.loggedIn = true; 
	}
 
	resetUser(){
		this.user={email: "",password:""};
	}
	registerModal = function() {
      this.fadeIn = 'in'
	}

	closeModal = function() {
	  console.log(this.registerForm);
	  this.registerForm.reset();
      this.fadeIn = 'out'
  }
}
