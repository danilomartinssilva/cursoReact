import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBZpeLAt3Yn0xg_WHKaEBpE7f0kg_pnqZM",
    authDomain: "novoprojetoreact.firebaseapp.com",
    databaseURL: "https://novoprojetoreact.firebaseio.com",
    projectId: "novoprojetoreact",
    storageBucket: "novoprojetoreact.appspot.com",
    messagingSenderId: "865287709674"
  };
  
firebase.initializeApp(config);

export const database  = firebase.database() .ref('/notes');

export const storageRef = firebase.storage();

export const auth = firebase.auth();

export const googleProvider =  new firebase.auth.GoogleAuthProvider();




  