
import { useState } from "react";
import Routes from "./src/routes"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { initializeApp } from "firebase/app";
import { StatusBar } from "expo-status-bar";
import GlobalStyle from "./src/globalStyle/GlobalStyle";


library.add(fas);

export default function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyDsEuxwwIhZped9K2cyqrTWKjwMtFPykHs",
    authDomain: "reactnativegrupo3.firebaseapp.com",
    databaseURL: "https://reactnativegrupo3-default-rtdb.firebaseio.com",
    projectId: "reactnativegrupo3",
    storageBucket: "reactnativegrupo3.appspot.com",
    messagingSenderId: "459987536050",
    appId: "1:459987536050:web:beeae4e0b293e36228a1ab"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);



  
  return (
    <>
      <Routes />
      <StatusBar style="inverted" backgroundColor={GlobalStyle.azul.color} />
    </>
  )
}
