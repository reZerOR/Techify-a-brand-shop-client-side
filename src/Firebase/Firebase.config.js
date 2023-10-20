// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxbRdaB3EYGHn6SMUMiOM_UlHVnFyt9cY",
  authDomain: "brand-shop-4f7f6.firebaseapp.com",
  projectId: "brand-shop-4f7f6",
  storageBucket: "brand-shop-4f7f6.appspot.com",
  messagingSenderId: "55285568747",
  appId: "1:55285568747:web:2f5abb553d735d82751aae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app