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


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
