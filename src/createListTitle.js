export function createListTitle(listID, text = 'new list') {
  const title = document.createElement('h3');
  title.setAttribute('data-id', listID);
  title.setAttribute('class', 'title');
  title.textContent = text;
  return title;
}
