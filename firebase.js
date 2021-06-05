import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB_IEFL7CbAqTzvR4fCjzeB1ET_YDQgINo',
  authDomain: 'clone-54b99.firebaseapp.com',
  projectId: 'clone-54b99',
  storageBucket: 'clone-54b99.appspot.com',
  messagingSenderId: '379135482141',
  appId: '1:379135482141:web:a2590dfbe659858e8ea9f4',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
