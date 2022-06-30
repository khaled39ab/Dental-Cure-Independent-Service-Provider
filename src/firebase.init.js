// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRIUe2U17A7swBj8dZxRhug31FYvZ0QSw",
  authDomain: "independent-service-prov-296b0.firebaseapp.com",
  projectId: "independent-service-prov-296b0",
  storageBucket: "independent-service-prov-296b0.appspot.com",
  messagingSenderId: "712571992428",
  appId: "1:712571992428:web:e1677cdd413fc77e1f5b49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;