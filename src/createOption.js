export function createOption(listID) {
  const option = document.createElement('option');
  option.setAttribute('data-id', listID);
  option.setAttribute('value', listID);
  option.innerText = 'New list';
  return option;
}
