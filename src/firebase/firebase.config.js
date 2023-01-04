// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBKDcWUZXF4kRZHhH0iQR4hV8DouygmkpI",
//   authDomain: "car-genius-36dfd.firebaseapp.com",
//   projectId: "car-genius-36dfd",
//   storageBucket: "car-genius-36dfd.appspot.com",
//   messagingSenderId: "999118877291",
//   appId: "1:999118877291:web:197b290ebd309aea60772e"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;