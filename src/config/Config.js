import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import keys from '../keys';

// Your web app's Firebase configuration
const config = {
  apiKey: keys.apiKey,
  authDomain: keys.authDomain,
  databaseURL: keys.databaseURL,
  projectId: keys.projectId,
  storageBucket: keys.storageBucket,
  messagingSenderId: keys.messagingSenderId,
  appId: keys.appId,
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

const storage = firebase.storage();
export { storage, firebase as default };
// export default firebase
