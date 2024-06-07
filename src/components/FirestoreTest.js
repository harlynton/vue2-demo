import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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
const db = getFirestore(app);

async function testFirestore() {
  try {
    console.log("Firebase app initialized:", app);
    console.log("Firestore instance:", db);
    console.log("Fetching data from Firestore...");
    const querySnapshot = await getDocs(collection(db, "config"));
    let data = [];
    console.log("Query Snapshot size: ", querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log("Document ID:", doc.id);
      console.log("Document data: ", doc.data());
      data.push(doc.data());
    });
    console.log("Data fetched:", data);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

testFirestore();
