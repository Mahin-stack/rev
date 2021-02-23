import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    /*apiKey: "AIzaSyASyOjOtJla-X-b3io2eLoaUc_bIRFSIIc",
    authDomain: "book-santa-app.firebaseapp.com",
    databaseURL: "https://book-santa-app.firebaseio.com",
    projectId: "book-santa-app",
    storageBucket: "book-santa-app.appspot.com",
    messagingSenderId: "69634746716",
    appId: "1:69634746716:web:6fbbfc110fb4475365f999",
    measurementId: "G-DLB7XC0JPL"

    apiKey: "AIzaSyBJsTqwL8yjTWW8mrCWgrBird7HI944SIw",
    authDomain: "book-santa.firebaseapp.com",
    databaseURL: "https://book-santa.firebaseio.com",
    projectId: "book-santa",
    storageBucket: "book-santa.appspot.com",
    messagingSenderId: "546422247592",
    appId: "1:546422247592:web:a82af183e05f978755f29d",
    measurementId: "G-MLCQNSGDLH"
  };
  var firebaseConfig = {*/
    apiKey: "AIzaSyBnmmDbxOExEJ4-ubfOLbhAJiqpWT-eG_M",
    authDomain: "booksanta-d1ab6.firebaseapp.com",
    databaseURL: "https://booksanta-d1ab6.firebaseio.com",
    projectId: "booksanta-d1ab6",
    storageBucket: "booksanta-d1ab6.appspot.com",
    messagingSenderId: "378203536268",
    appId: "1:378203536268:web:9b7eabe1fb2db0711b34a9"
  };
  // Initialize Firebase
 // firebase.initializeApp(firebaseConfig)

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
