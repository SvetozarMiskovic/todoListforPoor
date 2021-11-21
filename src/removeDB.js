import { initializeApp } from '@firebase/app';
import { getDatabase, set, ref, remove } from '@firebase/database';
// ----------FIREBASE CONFIG------------
const firebaseConfig = {
  apiKey: 'AIzaSyA5nouHr1CvBjyjDFiEABT5cgzYh2zbCog',
  authDomain: 'todo-list-e8735.firebaseapp.com',
  databaseURL:
    'https://todo-list-e8735-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'todo-list-e8735',
  storageBucket: 'todo-list-e8735.appspot.com',
  messagingSenderId: '237387626426',
  appId: '1:237387626426:web:adbc0d01b6a1c3da460f83',
  measurementId: 'G-27QDMXJPZZ',
};
// ----------FIREBASE CONFIG------------
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function removeDB(id) {
  remove(ref(db, 'Todo/' + id));
}
