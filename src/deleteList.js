export function deleteList(listID) {
  const lists = document.querySelectorAll('.task-container');
  const listsArr = [...lists];

  const listToDel = listsArr.find(list => list.dataset.id === listID);

  listToDel.remove();
}
