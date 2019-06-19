import firebase from 'firebase';
import { config } from './config';


export const firebaseApp = firebase.initializeApp(config);

export const eventsRef = firebase.database().ref().child('events')