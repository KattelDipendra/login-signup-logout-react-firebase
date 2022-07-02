import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBZB9PBLcz1cwlupDGGxyqILUabFKeNt1Y",
    authDomain: "jagga-98a5d.firebaseapp.com",
    projectId: "jagga-98a5d",
    storageBucket: "jagga-98a5d.appspot.com",
    messagingSenderId: "1041479009960",
    appId: "1:1041479009960:web:47c6c3dbed0626c3fd249d"
  };
  const fire=firebase.initializeApp(firebaseConfig);
  const db = fire.firestore();
const auth = firebase.auth();

export default fire;