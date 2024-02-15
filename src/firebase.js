// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUJWzn4VrNOANE1Qus93_Bx4iecdOS7GA",
  authDomain: "react-user-auth-5cd87.firebaseapp.com",
  projectId: "react-user-auth-5cd87",
  storageBucket: "react-user-auth-5cd87.appspot.com",
  messagingSenderId: "989817178682",
  appId: "1:989817178682:web:c4fe02c8c4e660ea16c303",
  measurementId: "G-CVBGZ4KMWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
//const analytics = getAnalytics(app);