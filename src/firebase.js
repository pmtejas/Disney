import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyBH-TMsbSNhYMYZ_37Cd9bNpaideAWMoT0",
  authDomain: "disney-clone-a1512.firebaseapp.com",
  projectId: "disney-clone-a1512",
  storageBucket: "disney-clone-a1512.appspot.com",
  messagingSenderId: "315598710247",
  appId: "1:315598710247:web:63648b82388dee2e670942",
  measurementId: "G-H1FX5JD0Y6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// signInWithPopup(auth, provider)
// const provider = new firebase.auth.GoogleAuthProvider();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const storage = getStorage(app)
export { auth,signInWithPopup, provider, storage };
export default db