// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXPSSjFum3y8LhrfxvTvJ8nmlHH6VaXU4",
  authDomain: "inventory-management-657ca.firebaseapp.com",
  projectId: "inventory-management-657ca",
  storageBucket: "inventory-management-657ca.appspot.com",
  messagingSenderId: "1043626564251",
  appId: "1:1043626564251:web:fb8f626f9a96bbee71c43e",
  measurementId: "G-R06DJ304EQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export {firestore}