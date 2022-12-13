//import React from "react";
//import axios from "axios";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "tdw-mp2-alves.firebaseapp.com",
  projectId: "tdw-mp2-alves",
  storageBucket: "tdw-mp2-alves.appspot.com",
  messagingSenderId: "702149781364",
  appId: "1:702149781364:web:7d0bb1828e403a5a4bee21",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export const colRef = collection(db, "quatrains");
export const quatrains = [];

getDocs(colRef)
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      quatrains.push({ ...doc.data(), id: doc.id });
    });
    //console.log(quatrains);
  })
  .catch((err) => {
    console.log(err.message);
  });
console.log(quatrains);

export const handleUpload = async (quatrain, title) => {
  const docRef = await addDoc(collection(db, "quatrains"), {
    quatrain: quatrain,
    title: title,
    timestamp: new Date(),
    author: "anonymous",
  });
  console.log("Document written with ID: ", docRef.id);
};

export { auth };
