import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdWZesVOo81v8_qsBejHXlS87hiaXe8gM",
  authDomain: "slack-clone-challenge-97925.firebaseapp.com",
  projectId: "slack-clone-challenge-97925",
  storageBucket: "slack-clone-challenge-97925.appspot.com",
  messagingSenderId: "734260659228",
  appId: "1:734260659228:web:c396240e0ca79291378bd9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
