// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //authorisation de la connection a la bdd
  firebase: {
    apiKey: "AIzaSyAjsHcqu4U6sgAz-p-udzHK9jwVO6mVLuQ",
    authDomain: "notebook-recipe.firebaseapp.com",
    databaseURL: "https://notebook-recipe-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "notebook-recipe",
    storageBucket: "notebook-recipe.appspot.com",
    messagingSenderId: "160693755596",
    appId: "1:160693755596:web:44968d683d4ff31095ac69",
    measurementId: "G-PYJM8410HQ"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
