import { deleteTask } from './deleteTask';
import { saveLS } from './saveLS';

export function getIdAndRemove(e) {
  const elementID = e.target.dataset.id;
  deleteTask(elementID);
  saveLS();
}
