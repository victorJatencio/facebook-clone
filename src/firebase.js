import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPv-KcPcpzhOU66uhgApAGQ1_irqUezsY",
  authDomain: "fb-clone-e4a57.firebaseapp.com",
  databaseURL: "https://fb-clone-e4a57.firebaseio.com",
  projectId: "fb-clone-e4a57",
  storageBucket: "fb-clone-e4a57.appspot.com",
  messagingSenderId: "193491540379",
  appId: "1:193491540379:web:131cf501df990976e5a93e",
  measurementId: "G-9G3WTJ8L3S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
