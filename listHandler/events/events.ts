import handleInput from "../handleInput/handleInput.js"; // stores input and clears it
import appendListItem from "../appendListItem/appendListItem.js"; // adds new list-item to list

import findElement from "../abstract/functions/findElement/findElement.js";

const inputElement = findElement("#taskInput") as HTMLInputElement,
  listUl = findElement("#todoList") as HTMLUListElement, // handleACtion here
  form = findElement("#taskForm") as HTMLFormElement;

function handleListAction(event: MouseEvent) {
  const target = event.target as HTMLElement;

  const action = target.dataset.action;
  if (!action) return;

  const listItem = target.closest("li") as HTMLLIElement;
  if (!listItem) return;

  console.log(listItem);
  switch (action) {
    case "up":
      console.log(`Moving item ${listItem.id} up`);
      break;

    case "down":
      console.log(`Moving item ${listItem.id} down`);
      break;

    case "delete":
      console.log(`Deleting item ${listItem.id}`);
      listItem.remove();
      break;

    default:
      break;
  }
}

function handleSubmit(e: SubmitEvent) {
  const input = handleInput(e, inputElement);
  if (!input) return;

  appendListItem(listUl, input);
}

if (form) {
  form.addEventListener("submit", handleSubmit);
}

if (listUl) {
  listUl.addEventListener("click", handleListAction);
}
