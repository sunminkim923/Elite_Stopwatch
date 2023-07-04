import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaDvwNMO3IdF-T7vIKhErd-cvOIexkuJY",
  authDomain: "elitestopwatchdevelop.firebaseapp.com",
  projectId: "elitestopwatchdevelop",
  storageBucket: "elitestopwatchdevelop.appspot.com",
  messagingSenderId: "561880562880",
  appId: "1:561880562880:web:310e45341788e6b5af4125",
  measurementId: "G-W11503HWEK",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
