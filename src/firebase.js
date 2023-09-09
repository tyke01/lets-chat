// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
/*
const firebaseConfig = {
  apiKey: " AIzaSyBuE5wqvOfvk5Xj5VUDZNxcyAHJIyb_LMs",
  authDomain: "chat-e4be5.firebaseapp.com",
  projectId: "chat-e4be5",
  storageBucket: "chat-e4be5.appspot.com",
  messagingSenderId: "84018881477",
  appId: "1:84018881477:web:e662d736497232d5bd61ac",
  measurementId: "G-HW0WE0N82M",
}; */


const firebaseConfig = {
  apiKey: "AIzaSyDBMLzv4GAee5UVTSm7gcmsfovh9gyOqn0",
  authDomain: "lets-chat-d2390.firebaseapp.com",
  projectId: "lets-chat-d2390",
  storageBucket: "lets-chat-d2390.appspot.com",
  messagingSenderId: "717476080109",
  appId: "1:717476080109:web:b3df7edcb03d25a1255fe4",
  measurementId: "G-WP5RV7671F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();



