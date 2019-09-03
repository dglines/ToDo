import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDLreXnoECBrP1qo48m8giaXVcTZEFqmV0",
  authDomain: "todo-3cfe7.firebaseapp.com",
  databaseURL: "https://todo-3cfe7.firebaseio.com",
  projectId: "todo-3cfe7",
  storageBucket: "todo-3cfe7.appspot.com",
  messagingSenderId: "754770515304",
  appId: "1:754770515304:web:69f5da4d4aa458fc"
})

export { firebaseConfig as firebase }
