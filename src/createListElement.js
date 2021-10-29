export function createListElement(listID) {
  const taskContainer = document.createElement('div');
  taskContainer.setAttribute('class', 'task-container');
  taskContainer.setAttribute('data-id', listID);
  return taskContainer;
}
