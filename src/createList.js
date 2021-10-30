import { createListElement } from './createListElement';
import { createDeleteListButton } from './createDeleteListButton';
import { createTaskList } from './createTaskList';
import { taskSection } from './app';
import { createOption } from './createOption';
import { selectMenu } from './app';

export function createList(createID) {
  // Create a task container

  const taskContainer = createListElement(createID);
  const removeBtn = createDeleteListButton(createID);
  const ul = createTaskList(createID);

  // Add elements to DOM
  taskContainer.appendChild(removeBtn);
  taskContainer.appendChild(ul);
  taskSection.appendChild(taskContainer);

  // Create the select item
  const option = createOption(createID);
  // Add option to DOM
  selectMenu.appendChild(option);
}
