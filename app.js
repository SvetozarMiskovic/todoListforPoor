const taskSection = document.querySelector('.task-section');
const submitBtn = document.getElementById('submitBtn');
const createListBtn = document.querySelector('.newListBtn');
const selectMenu = document.querySelector('select');
const input = document.querySelector('#todoTask');
document.addEventListener('DOMContentLoaded', getLS);
function saveLS() {
  const lists = document.querySelectorAll('.task-container');

  let todoList = [];

  lists.forEach(function (list) {
    const task = list.childNodes[1].childNodes;
    let data = { listID: '', items: [] };
    data.listID = list.dataset.id;

    task.forEach(function (t) {
      let taskData = { itemID: '', text: '' };
      // Add item ID to task data
      taskData.itemID = t.dataset.id;
      // Add item text to task data
      taskData.text = t.innerText;
      // Push taskData object to data object
      data.items.push(taskData);
      taskData = { itemID: '', text: '' };
    });

    todoList.push(data);

    data = { listID: '', items: [] };
  });

  localStorage.setItem('TodoLists', JSON.stringify(todoList));
}

function getLS() {
  const lists = JSON.parse(localStorage.getItem('TodoLists'));
  if (lists)
    lists.forEach(function (listLS) {
      createList(listLS.listID);

      listLS.items.forEach(function (taskItem) {
        getElsAndAppend(listLS.listID, taskItem.itemID, taskItem.text);
      });
    });
}

function deleteTask(itemID) {
  const items = [];
  const tasks = document.querySelectorAll('.task-item');
  items.push(...tasks);

  const task = items.find(item => item.dataset.id === itemID);

  task.remove();
}

function deleteList(listID) {
  const listsArr = [];
  const lists = document.querySelectorAll('.task-container');
  listsArr.push(...lists);

  const listToDel = listsArr.find(list => list.dataset.id === listID);

  listToDel.remove();
}

function createListElement(listID) {
  const taskContainer = document.createElement('div');
  taskContainer.setAttribute('class', 'task-container');
  taskContainer.setAttribute('data-id', listID);
  return taskContainer;
}

function getListIdAndRemove(e) {
  const elementID = e.target.dataset.id;

  deleteList(elementID);
  saveLS();
}

function createDeleteListButton(listID) {
  const removeBtn = document.createElement('i');
  removeBtn.setAttribute('class', 'fas fa-times-circle removeList');
  removeBtn.setAttribute('data-id', listID);
  removeBtn.addEventListener('click', getListIdAndRemove);
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

function createList(createID) {
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

function createTaskItem(id) {
  const task = document.createElement('li');
  task.setAttribute('data-id', id);
  task.setAttribute('class', 'task-item');
  return task;
}

function getIdAndRemove(e) {
  const elementID = e.target.dataset.id;
  deleteTask(elementID);
  saveLS();
}

function createDeleteTaskButton(itemID) {
  const span = document.createElement('span');
  span.setAttribute('class', 'btns');

  const removeBtn = document.createElement('i');
  removeBtn.setAttribute('class', 'fas fa-times-circle removeBtn');
  removeBtn.setAttribute('data-id', itemID);

  removeBtn.addEventListener('click', getIdAndRemove);

  span.appendChild(removeBtn);
  return span;
}

function addTask(createID, text) {
  // Create a task
  const task = createTaskItem(createID);
  // Create the remove button
  const span = createDeleteTaskButton(createID);

  // Add to DOM
  task.textContent = text;
  task.appendChild(span);

  if (text) return task;
}

function getElsAndAppend(selectValue, id, inputValue) {
  const liste = [];
  const lists = document.querySelectorAll('.task-container');
  liste.push(...lists);
  const element = liste.find(list => list.dataset.id === selectValue);
  const task = addTask(id, inputValue);

  if ((task, element)) element.children[1].appendChild(task);
}

submitBtn.onclick = function (e) {
  e.preventDefault();
  let createID = dayjs().valueOf();
  const selectedValue = selectMenu.value;

  getElsAndAppend(selectedValue, createID, input.value);

  saveLS();
  input.value = '';
};

createListBtn.onclick = function () {
  let createID = dayjs().valueOf();
  createList(createID);
  saveLS();
};
