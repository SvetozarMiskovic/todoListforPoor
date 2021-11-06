import './style.css';
import { getElsAndAppend } from './getElsAndAppend';
import { saveLS } from './saveLS';
import { getLS } from './getLS';
import { createList } from './createList';
import { recordEditID } from './recordEditID';
import { sortByNewest } from './sortByNewest';
import { sortByOldest } from './sortByOldest';
import { sortByChange } from './sortByChange';
import { refreshDOM } from './refreshDOM';
export const taskSection = document.querySelector('.task-section');
export const selectList = document.getElementById('select-list');
export const selectSort = document.getElementById('sort');

const submitBtn = document.getElementById('submitBtn');
const createListBtn = document.querySelector('.newListBtn');

const input = document.querySelector('#todoTask');
document.addEventListener('DOMContentLoaded', getLS);

submitBtn.onclick = function (e) {
  e.preventDefault();
  const elNum = document.querySelectorAll('.task-container').length;
  const sortValue = selectSort.value;
  let createID = dayjs().valueOf();

  if (elNum > 0) {
    const selectedValue = selectList.value;

    const element = getElsAndAppend(selectedValue, createID, input.value);
    const editEl = recordEditID(element);
    if (sortValue == 'Newest updates') {
      sortByNewest(editEl);
    } else if (sortValue == 'Oldest updates') {
      sortByOldest(editEl);
    }
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
        const editEl = recordEditID(element);
        if (sortValue == 'Newest updates') {
          sortByNewest(editEl);
        } else if (sortValue == 'Oldest updates') {
          sortByOldest(editEl);
        }
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

function compareAsc(a, b) {
  return b.dataset.edit - a.dataset.edit;
}

function compareDesc(a, b) {
  return a.dataset.edit - b.dataset.edit;
}
selectSort.onchange = function () {
  const lists = document.querySelectorAll('.task-container');
  const liste = [...lists];
  if (selectSort.value === 'Newest updates') {
    const sorted = liste.sort(compareAsc);
    console.log(sorted);
    refreshDOM(sorted);
  } else {
    const sorted = liste.sort(compareDesc);
    console.log(sorted);
    refreshDOM(sorted);
    console.log('Staro');
  }
};
