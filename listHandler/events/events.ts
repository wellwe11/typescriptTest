import handleInput from "../addInput/handleInput"; // stores input and clears it
import handle_ul from "../addListToHtml/addListToHtml"; // adds new list-item to list
import findElement from "../abstract/functions/findElement/findElement";

const inputElement = (findElement("#taskInput") as HTMLInputElement) || null,
  listUl = (document.querySelector("#todoList") as HTMLElement) || null,
  UlElement = (findElement("#todoList") as HTMLUListElement) || null,
  form = (findElement("taskForm") as HTMLFormElement) || null;

function storeInput(element: HTMLElement): string {
  const inputElement = element as HTMLInputElement;
  return inputElement.value.trim();
}

// clears input after user clicks enter
function clearInput(element: HTMLElement): void {
  const inputElement = element as HTMLInputElement;
  inputElement.value = "";
}
