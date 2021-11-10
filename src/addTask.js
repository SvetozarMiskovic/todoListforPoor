import { createTaskItem } from './renderElFunctions/createTaskItem';
import { createDeleteTaskButton } from './renderElFunctions/createDeleteTaskButton';

export function addTask(createID, text) {
  // Create a task
  const task = createTaskItem(createID);
  // Create the remove button
  const span = createDeleteTaskButton(createID);

  // Add to DOM
  task.textContent = text;
  task.appendChild(span);

  if (text) return task;
}
