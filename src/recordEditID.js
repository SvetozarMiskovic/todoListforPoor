export function recordEditID(element) {
  const editID = dayjs().valueOf();
  element.setAttribute('data-edit', editID);

  return element;
}
