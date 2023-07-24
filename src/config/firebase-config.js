import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";


// dev
// const firebaseConfig = {
//   apiKey: "AIzaSyDaDvwNMO3IdF-T7vIKhErd-cvOIexkuJY",
//   authDomain: "elitestopwatchdevelop.firebaseapp.com",
//   projectId: "elitestopwatchdevelop",
//   storageBucket: "elitestopwatchdevelop.appspot.com",
//   messagingSenderId: "561880562880",
//   appId: "1:561880562880:web:310e45341788e6b5af4125",
//   measurementId: "G-W11503HWEK",
// };


// real
const firebaseConfig = {
    apiKey: "AIzaSyDrQ189WFroE5MUq9eOq9W4y8gSGtVyanI",
    authDomain: "elitestopwatch-dba1d.firebaseapp.com",
    projectId: "elitestopwatch-dba1d",
    storageBucket: "elitestopwatch-dba1d.appspot.com",
    messagingSenderId: "607762563760",
    appId: "1:607762563760:web:052671c377b495aea0b175",
    measurementId: "G-4X3BY120D9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
