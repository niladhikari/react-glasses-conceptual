
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpgarp3w5XKiRcnXCMyR6nvgEL-aDWy80",
  authDomain: "react-glasses-conceptual.firebaseapp.com",
  projectId: "react-glasses-conceptual",
  storageBucket: "react-glasses-conceptual.appspot.com",
  messagingSenderId: "863241939408",
  appId: "1:863241939408:web:7d863c3f4fa6a8f759f1d5",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
