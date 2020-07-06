import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBnYNZ6C_MMGa0i0vvsUIziyVxPhmZ4i4g",
    authDomain: "quiz-app-ed006.firebaseapp.com",
    databaseURL: "https://quiz-app-ed006.firebaseio.com",
    projectId: "quiz-app-ed006",
    storageBucket: "quiz-app-ed006.appspot.com",
    messagingSenderId: "48374165844",
    appId: "1:48374165844:web:6f9ed3e069ae78b5c758c1",
    measurementId: "G-9X2EPVD1VL"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;