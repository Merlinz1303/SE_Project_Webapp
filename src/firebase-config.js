import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore" ;

const firebaseConfig = {
    apiKey: "AIzaSyBG2AgnnJ9uLfTBUvcv7aJ-WeQK5lYLymM",
    authDomain: "databasewebapp-75db8.firebaseapp.com",
    projectId: "databasewebapp-75db8",
    storageBucket: "databasewebapp-75db8.appspot.com",
    messagingSenderId: "662004129714",
    appId: "1:662004129714:web:f1b5de816a934a95998eab",
    measurementId: "G-6DP52YQGP0"
    };
    

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app) ;