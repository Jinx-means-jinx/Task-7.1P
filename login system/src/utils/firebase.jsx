import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import{getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCAX5ec4AU55S5akave9Lo3itS_GQ8gvsQ",
    authDomain: "task7-1p-fa178.firebaseapp.com",
    projectId: "task7-1p-fa178",
    storageBucket: "task7-1p-fa178.appspot.com",
    messagingSenderId: "47837396667",
    appId: "1:47837396667:web:63bdcc01d1b234aa33739e"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
        prompt:"select_account"
    });

export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider)
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInformation ={}) =>{
    if(!userAuth) return;
    
    const userDocRef = doc (db, 'users', userAuth.uid)
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists())

    if (! userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createAt = new Date();

    try{
        await setDoc(userDocRef,{
            displayName,
            email,
            createAt,
            ...additionalInformation
        })
    }
    catch(error){
        console.log('error in creating ', error.message)
    }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!email || !password) return;
return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!email || !password) return;
return await signInWithEmailAndPassword(auth, email, password)
}