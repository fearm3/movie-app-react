import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Add firebase keys in .env files
const firebaseConfig = {
  apiKey: "AIzaSyBvRe85kKWp3Y96P3Cp1ovu8wNmw_zpVSo",
  authDomain: "movie-app-github.firebaseapp.com",
  projectId: "movie-app-github",
  storageBucket: "movie-app-github.appspot.com ",
  messagingSenderId: "658320230436",
  appId: "1:658320230436:web:32fa9cd8b65e391a5c30b1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
