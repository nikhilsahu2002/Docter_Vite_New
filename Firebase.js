// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbIH6Czn6nDZi6En5AO0smbBmOSFLJ7ME",
    authDomain: "doctor-appoinment-4994c.firebaseapp.com",
    databaseURL: "https://doctor-appoinment-4994c-default-rtdb.firebaseio.com",
    projectId: "doctor-appoinment-4994c",
    storageBucket: "doctor-appoinment-4994c.appspot.com",
    messagingSenderId: "14803018822",
    appId: "1:14803018822:web:52b4b9079fdb7e3754d647"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);