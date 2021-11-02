export function createListElement(listID, editID) {
  const taskContainer = document.createElement('div');
  taskContainer.setAttribute('class', 'task-container');
  taskContainer.setAttribute('data-id', listID);
  taskContainer.setAttribute('data-edit', editID);
  return taskContainer;
}
