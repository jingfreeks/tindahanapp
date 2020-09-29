import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDHIjnEjbZqaCcsbaLcnSFLXYgYCLn1dig",
    authDomain: "tindahan-db.firebaseapp.com",
    databaseURL: "https://tindahan-db.firebaseio.com",
    projectId: "tindahan-db",
    storageBucket: "tindahan-db.appspot.com",
    messagingSenderId: "675490575166",
    appId: "1:675490575166:web:19ff9075867c1d847e326f",
    measurementId: "G-YNKJ9F1S4E"
  };

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;