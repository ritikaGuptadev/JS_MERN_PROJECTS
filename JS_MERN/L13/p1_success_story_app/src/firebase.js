// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAJd5gzED8-cg0euI08MUTMPwO0aR6HwKg",
  authDomain: "successstory-6f3c4.firebaseapp.com",
  databaseURL: "https://successstory-6f3c4-default-rtdb.firebaseio.com",
  projectId: "successstory-6f3c4",
  storageBucket: "successstory-6f3c4.appspot.com",
  messagingSenderId: "903068984049",
  appId: "1:903068984049:web:4c5301e1bc5eea30e73f50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;