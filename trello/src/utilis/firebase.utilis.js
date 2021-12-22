import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDg2xdSq2S1GT5ljubLVRwTbxNvUW4948Y",
  authDomain: "cwrn-db-5bcbf.firebaseapp.com",
  databaseURL: "https://cwrn-db-5bcbf-default-rtdb.firebaseio.com",
  projectId: "cwrn-db-5bcbf",
  storageBucket: "cwrn-db-5bcbf.appspot.com",
  messagingSenderId: "1097450342851",
  appId: "1:1097450342851:web:729af72c6d47b4d98e5576",
  measurementId: "G-7LQENWYRRX"
};

export const creatUserProfileDocument = async (email, password) => {
  const createdAt = new Date();
    
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      email,
      password,
      createdAt
    });
  } catch(error) {
    console.log('error creating user', error.message);
  }
};

export const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch(error) {
    console.log('error creating user', error.message);
  }
};

export const logOut = () => {
  auth.signOut();
}

export const signinWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db.collection("users").where("uid", "==", user.uid).get();
    
    if(query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email
      });
    }

  } catch(error) {
    console.log('error creating user', error.message);
  }
}

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;

export {auth};