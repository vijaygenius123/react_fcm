(this.webpackJsonpreact_fcm=this.webpackJsonpreact_fcm||[]).push([[0],{20:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n.n(c),r=n(14),i=n.n(r),s=(n(20),n(15)),o=(n(21),n(12));o.a.initializeApp({apiKey:"AIzaSyBtgWEGKUit3hn7g8xdW9T9SzeCIfYmwz8",authDomain:"react-firebase-94740.firebaseapp.com",projectId:"react-firebase-94740",storageBucket:"react-firebase-94740.appspot.com",messagingSenderId:"308234876127",appId:"1:308234876127:web:cda38b424a729326bca56a"});var u=o.a,b=n(7);var f=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=u.messaging();e.requestPermission().then((function(){return e.getToken()})).then((function(e){console.log(e),a(e)}))}),[]),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("h1",{children:"React Firebase Test"})}),Object(b.jsx)("div",{className:"row",children:n&&Object(b.jsx)("p",{children:n})})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.register("./firebase-messaging-sw.js").then((function(e){return console.log("[SW]: SCOPE: ",e.scope),e.scope})).catch((function(e){return e})),g()}},[[27,1,2]]]);
//# sourceMappingURL=main.9a03b4ce.chunk.js.map