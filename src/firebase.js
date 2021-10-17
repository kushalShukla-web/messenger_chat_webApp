import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseApp =initializeApp({
    apiKey: "AIzaSyBA__sYU6z4poIJfLta-8VIPipeK9t4dTA",
    authDomain: "messenger-2e1d4.firebaseapp.com",
    projectId: "messenger-2e1d4",
    storageBucket: "messenger-2e1d4.appspot.com",
    messagingSenderId: "213456346564",
    appId: "1:213456346564:web:bc052a2ae78230c5771891",
    measurementId: "G-T8SDJD2BCG"
  });

  const db = getFirestore(firebaseApp);
  export default db;
