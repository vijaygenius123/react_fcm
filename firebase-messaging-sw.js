
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBtgWEGKUit3hn7g8xdW9T9SzeCIfYmwz8",
    authDomain: "react-firebase-94740.firebaseapp.com",
    projectId: "react-firebase-94740",
    storageBucket: "react-firebase-94740.appspot.com",
    messagingSenderId: "308234876127",
    appId: "1:308234876127:web:cda38b424a729326bca56a"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
