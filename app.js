const taskSection = document.querySelector('.task-section');
const submitBtn = document.getElementById('submitBtn');
const createListBtn = document.querySelector('.newListBtn');
const selectMenu = document.querySelector('select');
const input = document.querySelector('#todoTask');

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

function createListItem(id) {
  const task = document.createElement('li');
  task.setAttribute('data-id', id);
  return task;
}

function createDeleteItemButton(itemID) {
  const span = document.createElement('span');
  span.setAttribute('class', 'btns');

  const removeBtn = document.createElement('i');
  removeBtn.setAttribute('class', 'fas fa-times-circle removeBtn');
  removeBtn.setAttribute('data-id', itemID);
  span.appendChild(removeBtn);
  return span;
}
function addTask(text) {
  let createID = dayjs().valueOf();
  // Create a task
  const task = createListItem(createID);
  // Create the remove button
  const span = createDeleteItemButton(createID);

  // Add to DOM
  task.textContent = text;
  task.appendChild(span);

  if (text) return task;
}
submitBtn.onclick = function (e) {
  e.preventDefault();
  const lists = document.querySelectorAll('.task-container');
  const selectedValue = selectMenu.value;

  lists.forEach(function (list) {
    const listID = list.dataset.id;
    if (selectedValue === listID) {
      const element = addTask(input.value);
      console.log(input.value, element);
      const ul = list.children[1];

      if (element) ul.appendChild(element);
    }
  });
  input.value = '';
};

createListBtn.onclick = function () {
  createList();
};
