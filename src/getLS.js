import { getElsAndAppend } from "./getElsAndAppend";
import {createList } from "./createList"

export function getLS() {
  const lists = JSON.parse(localStorage.getItem('TodoLists'));
  if (lists)
    lists.forEach(function (listLS) {
      createList(listLS.listID);

      listLS.items.forEach(function (taskItem) {
        getElsAndAppend(listLS.listID, taskItem.itemID, taskItem.text);
      });
    });
}