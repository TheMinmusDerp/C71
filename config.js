import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCQJ4tVP8AE4aSgbvyt13avQyDfhhZD7E0",
  authDomain: "wili-app-fdd1f.firebaseapp.com",
  projectId: "wili-app-fdd1f",
  storageBucket: "wili-app-fdd1f.appspot.com",
  messagingSenderId: "366769668093",
  appId: "1:366769668093:web:32b3dbc067083b5b4c6394"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();