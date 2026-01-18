/* Archivo: firebase-messaging-sw.js */
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyDbZAPtQioiXZzkiiIRrkrBkEPF440NMaE",
    authDomain: "qaxi-93d6d.firebaseapp.com",
    projectId: "qaxi-93d6d",
    storageBucket: "qaxi-93d6d.firebasestorage.app",
    messagingSenderId: "137240859996",
    appId: "1:137240859996:web:73e14d28c77233be965d99"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'icon2.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});