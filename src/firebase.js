// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZGo_EIzGHZ9Jl12c_oTPaTGkhRvwOFW0",
  authDomain: "react-pokemon-8f2ca.firebaseapp.com",
  projectId: "react-pokemon-8f2ca",
  storageBucket: "react-pokemon-8f2ca.firebasestorage.app",
  messagingSenderId: "818444017585",
  appId: "1:818444017585:web:296148724d1444fe2ca790",
  measurementId: "G-21M3CQHPDK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
