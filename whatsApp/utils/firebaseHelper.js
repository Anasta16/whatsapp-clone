// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyAXjRyh9zeFw02jXo4qDHkqV5fQaIGrArU",
        authDomain: "whatsapp-41460.firebaseapp.com",
        projectId: "whatsapp-41460",
        storageBucket: "whatsapp-41460.appspot.com",
        messagingSenderId: "393203031789",
        appId: "1:393203031789:web:6802a695e38355671d36e4",
        measurementId: "G-MFC4KLTTN6"
    };
    
    // Initialize Firebase
    return initializeApp(firebaseConfig);
}