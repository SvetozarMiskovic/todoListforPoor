import { getElsAndAppend } from './getElsAndAppend';
import { createList } from './renderElFunctions/createList';

export function getLS() {
  const lists = JSON.parse(localStorage.getItem('TodoLists'));
  if (lists)
    lists.forEach(function (listLS) {
      createList(listLS.listID, listLS.title, listLS.editID);

      listLS.items.forEach(function (taskItem) {
        getElsAndAppend(listLS.listID, taskItem.itemID, taskItem.text);
      });
    });
}
