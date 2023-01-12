import { initializeApp } from "firebase/app";
import * as fbAuth  from "firebase/auth";



 const FacebookProvider = new fbAuth.FacebookAuthProvider()

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn4lKr-HeKpn7xmVGz8ZfoeFq2-zx0mAU",
  authDomain: "u-can-cinema.firebaseapp.com",
  projectId: "u-can-cinema",
  storageBucket: "u-can-cinema.appspot.com",
  messagingSenderId: "778736938366",
  appId: "1:778736938366:web:9368269409c4e4143cd72f",
  measurementId: "G-H0GXC58EFT"
};

initializeApp(firebaseConfig)
const auth = fbAuth.getAuth();

export {auth, fbAuth, FacebookProvider}