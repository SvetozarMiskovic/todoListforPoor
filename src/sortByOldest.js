import { taskSection } from './app';

import { refreshDOM } from './refreshDOM';
import { saveLS } from './saveLS';

export function sortByOldest(element) {
  const lists = document.querySelectorAll('.task-container');
  const liste = [];
  liste.push(...lists);
  const item = liste.find(list => list.dataset.edit == element.dataset.edit);

  taskSection.append(item);

  saveLS();
  refreshDOM();
}
