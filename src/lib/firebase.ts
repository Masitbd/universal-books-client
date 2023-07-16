import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

interface IConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig: IConfig = {
  apiKey: "AIzaSyC91RSfhdyAqYqJQlE3s8z8EqNyYBzNAG0",
  authDomain: "universal-books-35224.firebaseapp.com",
  projectId: "universal-books-35224",
  storageBucket: "universal-books-35224.appspot.com",
  messagingSenderId: "530923847292",
  appId: "1:530923847292:web:f968d33c5b85622ef313f9",
};

const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
