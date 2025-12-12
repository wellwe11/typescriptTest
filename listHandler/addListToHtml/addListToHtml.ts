import newId from "../abstract/functions/newId/newId.js";

// create element and add required promps to it
function createListElement(text: string): HTMLLIElement {
  const element = document.createElement("li") as HTMLLIElement;

  element.textContent = text;
  element.id = newId();
  element.className = "todo_li";

  return element;
}

function appendListItem(parent: HTMLElement, text: string): void {
  if (!parent || !text) return;

  const li = createListElement(text);
  if (!li) return;

  parent.append(li);
}

export default appendListItem;
