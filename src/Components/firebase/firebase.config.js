
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4ZzECE3M8pbqMk8BDqc-cClvLPS_y9w8",
  authDomain: "my-real-estate-project-64c70.firebaseapp.com",
  projectId: "my-real-estate-project-64c70",
  storageBucket: "my-real-estate-project-64c70.appspot.com",
  messagingSenderId: "849548786588",
  appId: "1:849548786588:web:47275b8052a7bcc188e659"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth