import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBTVPHojCSZS2UoKDWIAnDTdbAGNltm26w",
    authDomain: "macshop-db.firebaseapp.com",
    projectId: "macshop-db",
    storageBucket: "macshop-db.appspot.com",
    messagingSenderId: "34275671922",
    appId: "1:34275671922:web:3dfb719e47e848533467eb",
    measurementId: "G-5NM4Z4D2E8"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => { 
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
      const {displayName , email } = userAuth;
      const createdAt = new Date();
      
      try{
        await userRef.set({ 
          displayName, 
          email,
          createdAt,
          ...additionalData
        })

      }catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
