import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCj_hqGllIsB4ZQzwBMarZ-9Ydt9tI0o64",
  authDomain: "prime-flix-23.firebaseapp.com",
  projectId: "prime-flix-23",
  storageBucket: "prime-flix-23.firebasestorage.app",
  messagingSenderId: "895249874736",
  appId: "1:895249874736:web:e281cc6d8ec09152ba92f5",
  measurementId: "G-QJD849WTWY",
};
const fireBase = initializeApp(firebaseConfig);

export const Db = getFirestore(fireBase);
export const auth = getAuth(fireBase);
