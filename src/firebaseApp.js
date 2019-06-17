import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCLOEpGHSr8Ppbgoys-P12KtB_R7rE8Nbo",
  authDomain: "turnout-vue-bc163.firebaseapp.com",
  databaseURL: "https://turnout-vue-bc163.firebaseio.com",
  projectId: "turnout-vue-bc163",
  storageBucket: "turnout-vue-bc163.appspot.com",
  messagingSenderId: "261920050650",
  appId: "1:261920050650:web:a204e2efb40320cc"
};

export const firebaseApp = firebase.initializeApp(config);