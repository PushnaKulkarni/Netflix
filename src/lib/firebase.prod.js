import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


//import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBzbT30I7NoZTuoUKoPxsI5uzqAyDAhEbs",
  authDomain: "netflix-firebase-58f3f.firebaseapp.com",
  projectId: "netflix-firebase-58f3f",
  storageBucket: "netflix-firebase-58f3f.appspot.com",
  messagingSenderId: "352029999126",
  appId: "1:352029999126:web:3cf7d82208de2d2f6c3537"
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);


export { firebase };
