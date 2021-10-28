const taskSection = document.querySelector('.task-section');
const submitBtn = document.getElementById('submitBtn');
const createListBtn = document.querySelector('.newListBtn');
const selectMenu = document.querySelector('select');
const input = document.querySelector('#todoTask');
const deleteTaskBtn = document.querySelector('.removeBtn');

function createList() {
  // Create a task container
  let createID = dayjs().valueOf();
  const taskContainer = document.createElement('div');
  taskContainer.setAttribute('class', 'task-container');
  taskContainer.setAttribute('data-id', createID);
  const removeBtn = document.createElement('i');
  removeBtn.setAttribute('class', 'fas fa-times-circle removeList');
  removeBtn.setAttribute('data-id', createID);
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'task-list');
  ul.setAttribute('data-id', createID);
  taskContainer.appendChild(removeBtn);
  taskContainer.appendChild(ul);
  taskSection.appendChild(taskContainer);

  // Create the select item

  const option = document.createElement('option');
  option.setAttribute('data-id', createID);
  option.setAttribute('value', option.dataset.id);
  option.innerText = 'New list';
  selectMenu.appendChild(option);
}

function addTask(text) {
  let createID = dayjs().valueOf();
  // Create a task
  const task = document.createElement('li');
  task.setAttribute('data-id', createID);
  // Create the remove button
  const span = document.createElement('span');
  span.setAttribute('class', 'btns');
  const removeBtn = document.createElement('i');
  removeBtn.setAttribute('class', 'fas fa-times-circle removeBtn');
  removeBtn.setAttribute('data-id', task.dataset.id);

  span.appendChild(removeBtn);
  task.textContent = text;
  task.appendChild(span);
  removeBtn.addEventListener('click', function (e) {
    const delBtn = e.target;
    console.log(delBtn.parentElement.parentElement);
  });
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

if (deleteTaskBtn)
  deleteTaskBtn.addEventListener('click', function (e) {
    console.log(e.target);
  });
