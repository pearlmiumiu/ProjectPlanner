
import firebase from 'firebase/app' //basic feature of fb
import 'firebase/firestore'
import 'firebase/auth'




//initilize firebase
var config = {
    apiKey: "AIzaSyAlBP7xejfF3dpIVUHBtPqE5kqbggo8WAU",
    authDomain: "project-management-99d4d.firebaseapp.com",
    databaseURL: "https://project-management-99d4d.firebaseio.com",
    projectId: "project-management-99d4d",
    storageBucket: "project-management-99d4d.appspot.com",
    messagingSenderId: "953872372828"
  };
  firebase.initializeApp(config);

  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;