import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD2yq_rkBmFIvh3C3_q6dHUir-51wlL4vM",
    authDomain: "restaurant-7eba5.firebaseapp.com",
    databaseURL: "https://restaurant-7eba5-default-rtdb.firebaseio.com",
    projectId: "restaurant-7eba5",
    storageBucket: "restaurant-7eba5.appspot.com",
    messagingSenderId: "414702481440",
    appId: "1:414702481440:web:ee544ed70edf7c2745cc45"
};

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage };
