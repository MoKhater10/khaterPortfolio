import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1-6sZ79OCcw13vOTyzSAaTuz8_0ZC5Yw",
  authDomain: "khaterportfolio.firebaseapp.com",
  projectId: "khaterportfolio",
  storageBucket: "khaterportfolio.appspot.com",
  messagingSenderId: "842815380282",
  appId: "1:842815380282:web:8f4f70267877d414f30e03"
};
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const storage =getStorage(app)
export default app