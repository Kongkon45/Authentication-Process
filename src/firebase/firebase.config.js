// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0MUiyw-KToB6lUynfYCrg8mn6JrBZ1ak",
  authDomain: "auth-bb9d3.firebaseapp.com",
  projectId: "auth-bb9d3",
  storageBucket: "auth-bb9d3.appspot.com",
  messagingSenderId: "25219918253",
  appId: "1:25219918253:web:cda246d7e21a96f7cd5924"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth