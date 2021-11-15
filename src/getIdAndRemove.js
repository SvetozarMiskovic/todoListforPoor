import { deleteTask } from './deleteTask';
import { saveLS } from './saveLS';
import { writeDB } from './writeDB';

export function getIdAndRemove(e) {
  const elementID = e.target.dataset.id;
  deleteTask(elementID);
  writeDB();
  saveLS();
}
