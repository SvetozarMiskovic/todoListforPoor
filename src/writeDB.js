import { initializeApp } from '@firebase/app';
import { getDatabase, set, ref } from '@firebase/database';
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

export function writeDB() {
  const lists = document.querySelectorAll('.task-container');
  const liste = [...lists];
  const db = getDatabase(app);

  liste.forEach(function (lista) {
    // GET IDS AND INFORMATION
    const tasks = lista.childNodes[2].childNodes;
    const lid = lista.dataset.id;
    const eid = lista.dataset.edit;
    const title = lista.childNodes[1].textContent;
    let item = {
      itemID: '',
      text: '',
    };
    let items = [];
    tasks.forEach(function (task) {
      item.itemID = task.dataset.id;
      item.text = task.textContent;
      items.push(item);
      item = {
        itemID: '',
        text: '',
      };
    });
    // WRITE TO FIREBASE DATABASE
    set(ref(db, 'Todo/' + lid), {
      editID: eid,
      title: title,
      items: items,
    });
  });
}
