export function createOption(listID, text) {
  const option = document.createElement('option');
  option.setAttribute('data-id', listID);
  option.setAttribute('value', listID);
  option.innerText = text;
  return option;
}
