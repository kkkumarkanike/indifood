import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'


// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCUmPALHdjgNe7BCTS77uX326QzgiuhSOQ",
  authDomain: "indifood-8870f.firebaseapp.com",
  databaseURL: "https://indifood-8870f.firebaseio.com",
  projectId: "indifood-8870f",
  storageBucket: "indifood-8870f.appspot.com",
  messagingSenderId: "405812226082",
  appId: "1:405812226082:web:955bccfbafa2f10bf6c27b",
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

const storage = firebase.storage();
export {storage,firebase as default}
// export default firebase 
