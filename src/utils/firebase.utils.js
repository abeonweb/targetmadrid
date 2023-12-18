
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, getDocs, where } from 'firebase/firestore/lite';

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWeY6HXefXCRAcsn69m9iM9uoGPrV4lAc",
  authDomain: "target-aa00c.firebaseapp.com",
  projectId: "target-aa00c",
  storageBucket: "target-aa00c.appspot.com",
  messagingSenderId: "1082126222446",
  appId: "1:1082126222446:web:20ef551d37ebe74308d27f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// used to add data to firestore
export const updateDb = async (docId, objectToAdd) => {
    try{
       await setDoc(doc(db, "presupuesto", docId), objectToAdd)
    } catch(error){
        console.log(error);
    }
}

//get all the documents from firestore
export const getAllDocuments = async () => {
  const docs = []
  const querySnapshot = await getDocs(collection(db, "presupuesto"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      docs.push(doc.data());
    });
    return docs;
}

//get all the documents from firestore
export const getAllNewDocuments = async () => {
  const docs = []
  const querySnapshot = await getDocs(collection(db, "presupuesto"), where("nuevo", "==", true));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      docs.push(doc.data());
    });
    return docs;
}


