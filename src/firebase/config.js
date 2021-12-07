import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCs8EC9XTk_5kmD_tKSk0YnHrH3BSs6CTc",
    authDomain: "scadmin-system.firebaseapp.com",
    projectId: "scadmin-system",
    storageBucket: "scadmin-system.appspot.com",
    messagingSenderId: "849080741469",
    appId: "1:849080741469:web:5076bebef784269ec427b4",
    measurementId: "G-KN5JTSNNQ5"
  };

//   init firebase
firebase.initializeApp(firebaseConfig)

// initialize service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()


export {projectFirestore, projectAuth}

export {projectFirestore}

