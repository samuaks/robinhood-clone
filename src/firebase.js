import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAVfBJMb_1y47junEJnZhjwhm4AeiLbHuU",
    authDomain: "robinhood-clone-d9ca1.firebaseapp.com",
    projectId: "robinhood-clone-d9ca1",
    storageBucket: "robinhood-clone-d9ca1.appspot.com",
    messagingSenderId: "142589369676",
    appId: "1:142589369676:web:d3ce15dc37b16d754203e9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export { db }