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
