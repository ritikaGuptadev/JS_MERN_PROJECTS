import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCXxBf8zP-Ih0SQRD7cpLwAjv4x61oqG8w",
  authDomain: "authapp-e9edb.firebaseapp.com",
  databaseURL: "https://authapp-e9edb-default-rtdb.firebaseio.com",
  projectId: "authapp-e9edb",
  storageBucket: "authapp-e9edb.appspot.com",
  messagingSenderId: "376436191231",
  appId: "1:376436191231:web:5795000c38eb791daa81ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
