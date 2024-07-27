import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyDHoqDUmqprp4omrtqAfT_e0uen4EnyURQ",
  authDomain: "feedback-e45cf.firebaseapp.com",
  databaseURL: "https://feedback-e45cf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "feedback-e45cf",
  storageBucket: "feedback-e45cf.appspot.com",
  messagingSenderId: "555069410815",
  appId: "1:555069410815:web:0f53bc44ba090017372bca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;