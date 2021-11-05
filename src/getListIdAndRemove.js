import { deleteList } from './deleteList';

import { saveLS } from './saveLS';

import { refreshDOM } from './refreshDOM';
export function getListIdAndRemove(e) {
  const elementID = e.target.dataset.id;

  deleteList(elementID);
  saveLS();
  refreshDOM();
}
