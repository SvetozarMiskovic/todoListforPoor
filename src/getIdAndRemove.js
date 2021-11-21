import { deleteTask } from './deleteTask';
import { removeDB } from './removeDB';
import { saveLS } from './saveLS';

export function getIdAndRemove(e) {
  const elementID = e.target.dataset.id;
  deleteTask(elementID);
  removeDB(elementID);

  saveLS();
}
