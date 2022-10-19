import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import 'dotenv/config';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "casamientogabilucas.firebaseapp.com",
  projectId: "casamientogabilucas",
  storageBucket: "casamientogabilucas.appspot.com",
  messagingSenderId: "136175664201",
  appId: "1:136175664201:web:106caca6d795e3fd27d398"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);