import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGp0UHVqubYXlMhZ3DJjOFqLON0X-hW8g",
  authDomain: "coder-2e30b.firebaseapp.com",
  projectId: "coder-2e30b",
  storageBucket: "coder-2e30b.appspot.com",
  messagingSenderId: "464648961137",
  appId: "1:464648961137:web:5b707a699e6654c6ce2fd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
