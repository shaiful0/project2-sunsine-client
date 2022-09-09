// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeLlLts8EVXAiLTTu3T_Njkig3ZFakWB8",
  authDomain: "project2-sunsine-34c99.firebaseapp.com",
  projectId: "project2-sunsine-34c99",
  storageBucket: "project2-sunsine-34c99.appspot.com",
  messagingSenderId: "718087367526",
  appId: "1:718087367526:web:2f8981a0f235a26259f6a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;