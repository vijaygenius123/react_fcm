import {useState, useEffect} from "react";
import './App.css';
import firebase from "./config/firebase";


function App() {

  useEffect( () => {
      const messaging = firebase.messaging()
      messaging.requestPermission().then(() => {
          return messaging.getToken()
      }).then(token => {
        console.log(token)
      })
  }, [])

  return (
    <div className="App">
     <h1>React Firebase Test</h1>
    </div>
  );
}

export default App;
