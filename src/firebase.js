import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDj21GoVwPAcRganDdD_QTOKrM0_1ND4bg",
  authDomain: "vue2-demo-3b507.firebaseapp.com",
  projectId: "vue2-demo-3b507",
  storageBucket: "vue2-demo-3b507.appspot.com",
  messagingSenderId: "404539118758",
  appId: "1:404539118758:web:25f080fdc86da877d8d067",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, storage, ref, uploadBytes, db };
