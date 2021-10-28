const taskSection = document.querySelector('.task-section');
const submitBtn = document.getElementById('submitBtn');
const createListBtn = document.querySelector('.newListBtn');
const selectMenu = document.querySelector('select');
const input = document.querySelector('#todoTask');

function deleteTask(itemID) {
  const items = [];
  const tasks = document.querySelectorAll('.task-item');
  items.push(...tasks);

  const task = items.find(item => item.dataset.id === itemID);

  task.remove();
}
function createListElement(listID) {
  const taskContainer = document.createElement('div');
  taskContainer.setAttribute('class', 'task-container');
  taskContainer.setAttribute('data-id', listID);
  return taskContainer;
}

function createDeleteListButton(listID) {
  const removeBtn = document.createElement('i');
  removeBtn.setAttribute('class', 'fas fa-times-circle removeList');
  removeBtn.setAttribute('data-id', listID);
  return removeBtn;
}

function createTaskList(listID) {
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'task-list');
  ul.setAttribute('data-id', listID);
  return ul;
}

function createOption(listID) {
  const option = document.createElement('option');
  option.setAttribute('data-id', listID);
  option.setAttribute('value', listID);
  option.innerText = 'New list';
  return option;
}

function createList() {
  // Create a task container
  let createID = dayjs().valueOf();
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

function createTaskItem(id) {
  const task = document.createElement('li');
  task.setAttribute('data-id', id);
  task.setAttribute('class', 'task-item');
  return task;
}

function createDeleteTaskButton(itemID) {
  const span = document.createElement('span');
  span.setAttribute('class', 'btns');

  const removeBtn = document.createElement('i');
  removeBtn.setAttribute('class', 'fas fa-times-circle removeBtn');
  removeBtn.setAttribute('data-id', itemID);
  removeBtn.addEventListener('click', function (e) {
    const element = e.target.dataset.id;
    console.log(element);
    deleteTask(element);
  });
  span.appendChild(removeBtn);
  return span;
}

function addTask(text) {
  let createID = dayjs().valueOf();
  // Create a task
  const task = createTaskItem(createID);
  // Create the remove button
  const span = createDeleteTaskButton(createID);

  // Add to DOM
  task.textContent = text;
  task.appendChild(span);

  if (text) return task;
}

submitBtn.onclick = function (e) {
  e.preventDefault();
  const liste = [];
  const lists = document.querySelectorAll('.task-container');
  liste.push(...lists);

  const selectedValue = selectMenu.value;

  const element = liste.find(list => list.dataset.id === selectedValue);
  const task = addTask(input.value);

  if (task) element.children[1].appendChild(task);

  input.value = '';
};

createListBtn.onclick = function () {
  createList();
};
