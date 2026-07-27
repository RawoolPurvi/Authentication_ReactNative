// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO0by0VRn9cFptsftfnpxi3KWJEWsrMio",
  authDomain: "react-native-authenticat-a788a.firebaseapp.com",
  projectId: "react-native-authenticat-a788a",
  storageBucket: "react-native-authenticat-a788a.firebasestorage.app",
  messagingSenderId: "442807953394",
  appId: "1:442807953394:web:f2ca816382c23130c16d6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);