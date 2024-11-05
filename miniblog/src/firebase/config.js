import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAaxEbyjdfexBLZ-983y4-0iSmmf2ywHMo",
  authDomain: "miniblog-18401.firebaseapp.com",
  projectId: "miniblog-18401",
  storageBucket: "miniblog-18401.firebasestorage.app",
  messagingSenderId: "723747483922",
  appId: "1:723747483922:web:a01a95c74c815415d543cb"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }