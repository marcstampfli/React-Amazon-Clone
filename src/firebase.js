import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAkUlQ_mpyKXhzZVJK6BvkMSS5fD0Esjz8",
  authDomain: "clone-666e1.firebaseapp.com",
  databaseURL: "https://clone-666e1.firebaseio.com",
  projectId: "clone-666e1",
  storageBucket: "clone-666e1.appspot.com",
  messagingSenderId: "604458205886",
  appId: "1:604458205886:web:09150f03d74df6aae854ef",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
