import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";
import { initializeApp } from "firebase/app";
//import {getAuth, FacebookAuthProvider} from 'firebase.auth';
import { useState, useEffect } from 'react';
import { getAuth, FacebookAuthProvider } from "firebase/auth";


firebase.initializeApp({
    apiKey: "AIzaSyBkHItzE_EAf-USsg67ifMyEg9x4Li86tQ",
    authDomain: "fbsignin-afed8.firebaseapp.com",
    projectId: "fbsignin-afed8",
    storageBucket: "fbsignin-afed8.appspot.com",
    messagingSenderId: "384728389982",
    appId: "1:384728389982:web:f1f2ed95e6484a7f6417cf"
})

const auth = firebase.auth();

function Index() {
    const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(person => {
      if(person){
        setUser(person)
      }
      else{
        setUser(null)
      }
    })
    return() => unsubscribe();
  }, [])

  const signInWithFb = async() => {
    try{
      await auth.signInWithPopup(new firebase.auth.FacebookAuthProvider)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
        <button className='btn-fb' onClick={signInWithFb}>
            <FontAwesomeIcon icon={faFacebook}  />
            Signup with Facebook
        </button>
    </div>
  )
}

export default Index