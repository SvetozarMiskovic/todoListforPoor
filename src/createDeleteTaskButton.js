import { getIdAndRemove } from './getIdAndRemove';

export function createDeleteTaskButton(itemID) {
  const span = document.createElement('span');
  span.setAttribute('class', 'btns');

  const removeBtn = document.createElement('i');
  removeBtn.setAttribute('class', 'fas fa-times-circle removeBtn');
  removeBtn.setAttribute('data-id', itemID);

  removeBtn.addEventListener('click', getIdAndRemove);

  span.appendChild(removeBtn);
  return span;
}
