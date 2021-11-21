import { deleteList } from './deleteList';
import { writeDB } from './writeDB';
import { saveLS } from './saveLS';
import { removeDB } from './removeDB';
import { refreshDOM } from './refreshDOM';
export function getListIdAndRemove(e) {
  const elementID = e.target.dataset.id;

  deleteList(elementID);
  removeDB(elementID);
  writeDB();
  saveLS();
  refreshDOM();
}
