import { createListElement } from './createListElement';
import { createDeleteListButton } from './createDeleteListButton';
import { createTaskList } from './createTaskList';
import { taskSection } from './app';
import { createOption } from './createOption';
import { selectList } from './app';
import { createListTitle } from './createListTitle';

export function createList(createID, text, editID = '') {
  // Create a task container

  const taskContainer = createListElement(createID, editID);
  const removeBtn = createDeleteListButton(createID);
  const title = createListTitle(createID, text);
  const ul = createTaskList(createID);

  // Add elements to DOM
  taskContainer.appendChild(removeBtn);
  taskContainer.appendChild(title);
  taskContainer.appendChild(ul);
  taskSection.appendChild(taskContainer);

  // Create the select item
  const option = createOption(createID, title.textContent);
  // Add option to DOM
  selectList.appendChild(option);

  return taskContainer;
}
