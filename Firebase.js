// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ GoogleAuthProvider,getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5pfVQZ3wpmnxyOXDJqxTFklMetnS-Nvw",
  authDomain: "uber-clone123-55d6a.firebaseapp.com",
  projectId: "uber-clone123-55d6a",
  storageBucket: "uber-clone123-55d6a.appspot.com",
  messagingSenderId: "603500675865",
  appId: "1:603500675865:web:06263941112086f91d7b88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}