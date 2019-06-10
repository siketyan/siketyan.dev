import * as firebase from "firebase/app";

const config = {
    apiKey: "api-key",
    authDomain: "siketyan-dev.firebaseapp.com",
    databaseURL: "https://siketyan-dev.firebaseio.com",
    projectId: "siketyan-dev",
    storageBucket: "siketyan-dev.appspot.com",
    messagingSenderId: "sender-id",
    appID: "app-id",
};

firebase.initializeApp(config);
