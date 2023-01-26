// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdfk9AMvzAlv_h7fz9W5bjPculVUvauCU",
  authDomain: "chatapp-c9dd7.firebaseapp.com",
  projectId: "chatapp-c9dd7",
  storageBucket: "chatapp-c9dd7.appspot.com",
  messagingSenderId: "179888812979",
  appId: "1:179888812979:web:2c60c34efaabe36a1451c6",
  measurementId: "G-HRKP326TEB"
};

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({
  'login_hint': 'user@example.com'
});
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth,analytics,provider}