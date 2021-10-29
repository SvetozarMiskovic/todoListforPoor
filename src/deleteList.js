export function deleteList(listID) {
  const listsArr = [];
  const lists = document.querySelectorAll('.task-container');
  listsArr.push(...lists);

  const listToDel = listsArr.find(list => list.dataset.id === listID);

  listToDel.remove();
}
