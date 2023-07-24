import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyBbRalYJgCwgd-jEzfCXIsM_m_SjzKKkVk",
  authDomain: "signin-57dcf.firebaseapp.com",
  projectId: "signin-57dcf",
  storageBucket: "signin-57dcf.appspot.com",
  messagingSenderId: "378094776704",
  appId: "1:378094776704:web:c0c2f54ea87ba78e35d165"
})

const auth = firebase.auth();

function Index() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged(person => {
      if(person){
        setUser(person)
      }
      else{
        setUser(null)
      }
    })
  })

  const signInWithGoogle = async() => {
    try{
      await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
        <button className='google-icon' onClick={signInWithGoogle}> 
        <FontAwesomeIcon icon={faGoogle}/> 
            Signup with Gmail
        </button>
  </div>
  )
}

export default Index