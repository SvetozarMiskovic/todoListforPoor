export function createTaskList(listID) {
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'task-list');
  ul.setAttribute('data-id', listID);
  return ul;
}
