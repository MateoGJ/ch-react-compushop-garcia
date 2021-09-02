import * as firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCafRgZsIzp9I0rvhdRuLXJH6SegWyZf0Q",
  authDomain: "coderhouse-compushop.firebaseapp.com",
  projectId: "coderhouse-compushop",
  storageBucket: "coderhouse-compushop.appspot.com",
  messagingSenderId: "683611435167",
  appId: "1:683611435167:web:0b77144d2f927f2e3fb2aa"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}
