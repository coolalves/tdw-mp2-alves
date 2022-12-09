//import React from "react";
//import axios from "axios";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
