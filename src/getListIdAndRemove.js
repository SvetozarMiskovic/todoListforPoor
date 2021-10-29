import { deleteList } from './deleteList';
import { saveLS } from './saveLS';
export function getListIdAndRemove(e) {
  const elementID = e.target.dataset.id;

  deleteList(elementID);
  saveLS();
  location.reload();
}
