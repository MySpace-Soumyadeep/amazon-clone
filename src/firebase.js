import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDls6dt98Rc0MlgJrC3Yp15yEmn98TOMSw",
    authDomain: "clone-dc30d.firebaseapp.com",
    projectId: "clone-dc30d",
    storageBucket: "clone-dc30d.appspot.com",
    messagingSenderId: "639318726245",
    appId: "1:639318726245:web:fd6b25bb39214011ea188c",
    measurementId: "G-MMP5TQT6G8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth};