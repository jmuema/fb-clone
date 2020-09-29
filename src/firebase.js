import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaa7ZnO9dylrKW4jOrDQISBam7oXriA-o",
  authDomain: "fb-clone-b1910.firebaseapp.com",
  databaseURL: "https://fb-clone-b1910.firebaseio.com",
  projectId: "fb-clone-b1910",
  storageBucket: "fb-clone-b1910.appspot.com",
  messagingSenderId: "893707916997",
  appId: "1:893707916997:web:e587424c31d786a6a5c2ac",
  measurementId: "G-PQ9FF63T2L"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider} ;
  export default db;