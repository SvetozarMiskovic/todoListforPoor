import './style.css';
import { getElsAndAppend } from './getElsAndAppend';
import { saveLS } from './saveLS';
import { getLS } from './getLS';
import { createList } from './createList';
export const taskSection = document.querySelector('.task-section');
export const selectMenu = document.querySelector('select');

const submitBtn = document.getElementById('submitBtn');
const createListBtn = document.querySelector('.newListBtn');

const input = document.querySelector('#todoTask');
document.addEventListener('DOMContentLoaded', getLS);

submitBtn.onclick = function (e) {
  e.preventDefault();
  const elNum = document.querySelectorAll('.task-container').length;
  let createID = dayjs().valueOf();
  if (elNum > 0) {
    const selectedValue = selectMenu.value;
    getElsAndAppend(selectedValue, createID, input.value);
    saveLS();
    input.value = '';
  } else {
    let newTaskID = dayjs().valueOf() + 1;
    if (input.value != '') {
      createList(createID);
      getElsAndAppend(createID, newTaskID, input.value);
      saveLS();
      input.value = '';
    }
  }
};

createListBtn.onclick = function () {
  let createID = dayjs().valueOf();
  createList(createID);
  saveLS();
};
