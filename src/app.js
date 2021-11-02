import './style.css';
import { getElsAndAppend } from './getElsAndAppend';
import { saveLS } from './saveLS';
import { getLS } from './getLS';
import { createList } from './createList';
import { recordEditID } from './recordEditID';
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

    const element = getElsAndAppend(selectedValue, createID, input.value);
    recordEditID(element);
    saveLS();
  } else {
    if (input.value) {
      const listPrompt = prompt('Please name your list!', 'New List');
      if (!listPrompt) {
        input.value = '';
        return;
      } else {
        const element = createList(createID, listPrompt);
        getElsAndAppend(createID, createID + 1, input.value);
        recordEditID(element);
        saveLS();
      }
    }
  }
  input.value = '';
};

createListBtn.onclick = function () {
  let createID = dayjs().valueOf();

  const listPrompt = prompt('Please name your list!', 'New List');
  if (!listPrompt) {
    input.value = '';
    return;
  } else {
    createList(createID, listPrompt);
    saveLS();
  }
};
