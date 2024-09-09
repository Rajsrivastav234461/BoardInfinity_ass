 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
 
  const firebaseConfig = {
  apiKey: "AIzaSyAq_c91IiYanTuwiP7ZPDCfA5L8XyQfaH0",
  authDomain: "biardinfinity.firebaseapp.com",
  projectId: "biardinfinity",
  storageBucket: "biardinfinity.appspot.com",
  messagingSenderId: "589561284696",
  appId: "1:589561284696:web:bda9017972d0f100e9622d",
  measurementId: "G-FNWQWV46YQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
