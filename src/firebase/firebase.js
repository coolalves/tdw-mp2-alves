//import React from "react";
//import axios from "axios";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "idot-quatrain.firebaseapp.com",
    projectId: "idot-quatrain",
    storageBucket: "idot-quatrain.appspot.com",
    messagingSenderId: "251825717004",
    appId: "1:251825717004:web:8253441a62925e72da9329"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export const colRef = collection(db, "quatrains");
export const quatrains = [];

export const getFeed = () => {
    getDocs(colRef)
        .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                quatrains.push({...doc.data(), id: doc.id });
            });
            //console.log(quatrains);
        })
        .catch((err) => {
            console.log(err.message);
        });
}

getDocs(colRef)
    .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            quatrains.push({...doc.data(), id: doc.id });
        });
        //console.log(quatrains);
    })
    .catch((err) => {
        console.log(err.message);
    });

//console.log(quatrains);

export const handleUpload = async(quatrain, title) => {
    const docRef = await addDoc(collection(db, "quatrains"), {
        quatrain: quatrain,
        title: title,
        timestamp: new Date(),
        author: "anonymous",
    });
    console.log("Document written with ID: ", docRef.id);
};

export { auth };