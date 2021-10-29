export function saveLS() {
  const lists = document.querySelectorAll('.task-container');
  let todoList = [];

  lists.forEach(function (list) {
    const tasks = list.childNodes[1].childNodes;
    let data = { listID: '', items: [] };
    data.listID = list.dataset.id;

    tasks.forEach(function (t) {
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
