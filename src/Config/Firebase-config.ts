// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3XUQ2-s_CzM5fzngIZr4CwbeM2PpgvgA",
  authDomain: "parkpal-ba55b.firebaseapp.com",
  projectId: "parkpal-ba55b",
  storageBucket: "parkpal-ba55b.appspot.com",
  messagingSenderId: "818560169629",
  appId: "1:818560169629:web:acceb86c2e2f7c1b1dc674",
  measurementId: "G-S0DBBTQGMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);