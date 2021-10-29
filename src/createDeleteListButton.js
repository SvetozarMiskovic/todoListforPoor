import { getListIdAndRemove } from './getListIdAndRemove';

export function createDeleteListButton(listID) {
  const removeBtn = document.createElement('i');
  removeBtn.setAttribute('class', 'fas fa-times-circle removeList');
  removeBtn.setAttribute('data-id', listID);
  removeBtn.addEventListener('click', getListIdAndRemove);
  return removeBtn;
}
