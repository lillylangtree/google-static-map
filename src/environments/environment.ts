// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.


export const environment = {
  production: false,
  firebase: {
	apiKey: "AIzaSyAG7xuUvK3k9dnwIqAj55RV4I6L9hgUygQ",
    authDomain: "moviesci.firebaseapp.com",
    databaseURL: "https://moviesci.firebaseio.com",
    projectId: "firebase-moviesci",
    storageBucket: "firebase-moviesci.appspot.com",
    messagingSenderId: "1072122447418"
  }
};
