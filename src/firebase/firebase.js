import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore, collection, addDoc } from "firebase/firestore";



const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "idot-quatrain.firebaseapp.com",
    projectId: "idot-quatrain",
    storageBucket: "idot-quatrain.appspot.com",
    messagingSenderId: "251825717004",
    appId: "1:251825717004:web:8253441a62925e72da9329"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const colRef = collection(db, "quatrains");
export const quatrains = [];


export const handleUpload = async(quatrain, title, author) => {

    const docRef = await addDoc(collection(db, "quatrains"), {
        quatrain: quatrain,
        title: title,
        timestamp: new Date(),
        author: author
    });
    console.log("Document written with ID: ", docRef.id);
};