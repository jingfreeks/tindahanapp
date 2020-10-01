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

export const createUserProfileDocument=async(userAuth,additionalData)=>{
  if(!userAuth) return;
  
  const userRef=firestore.doc(`users/${userAuth.uid}`)

  const snapShot=await userRef.get()

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    }catch(error){
      console.log('errror In creating User',error.message);
    }
  }

  return userRef;
}
firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;