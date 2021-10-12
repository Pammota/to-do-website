import './App.css';
import { useState, useRef, useEffect } from 'react';
import TodoList from './components/TodoList';
import 'tachyons';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp({
  apiKey: "AIzaSyBgohcvmJRFXegr8LYkcxE2UxG6lbL7uOk",
  authDomain: "to-do-app-acf4d.firebaseapp.com",
  projectId: "to-do-app-acf4d",
  storageBucket: "to-do-app-acf4d.appspot.com",
  messagingSenderId: "509009553420",
  appId: "1:509009553420:web:6643c2116db0c6b8d52629"
});

const firestore = firebase.firestore();
const auth = firebase.auth();


const App = ()=> {

  const [user] = useAuthState(auth);

  return (
    <div className="todo-app">

      <header>

      <div className="f2 f1-l fw2 white-90 mb0 lh-title">
          <div className="logo-banner-pair">
              <img alt="logo" className="logo-img" src="https://img.icons8.com/color/48/000000/chat--v1.png"/>
              <div className="app-banner">To Do App</div>
          </div>
      </div>

      <SignOut />

      </header>

      <section>

        {user ? <TodoList/> : <SignIn />}

      </section>
    </div>
  );
}

const SignIn = () => {

  const signInWithGoogle = () =>{
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
  } 

  return(
      <>
      <button className="f2 f1-l fw2 white-90 mb0 lh-title sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p className="p2 center">Do not violate the guidelines or you will be banned!</p>
      </>
  );
}

const SignOut = () => {
  return auth.currentUser && (
     <div className="button-margin"> <button className="sign-out" onClick={()=>auth.signOut()}> Sign Out </button></div>
  );
}

export default App;
