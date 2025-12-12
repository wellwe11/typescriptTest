import newId from "../abstract/functions/newId/newId.js";

export function createButtonElement(
  text: string = "Please input text",
  name: string,
  className: string
): HTMLButtonElement {
  const element = document.createElement("button") as HTMLButtonElement;

  element.textContent = text;
  element.className = className;
  element.dataset.action = name;

  return element;
}

function buttonWrapper(): HTMLDivElement {
  const buttonWrapper = document.createElement("div");

  buttonWrapper.className = "buttonWrapper";

  const upButton = createButtonElement("^", "up", "listButton");
  const downButton = createButtonElement("v", "down", "listButton");
  const deleteButton = createButtonElement("X", "delete", "listButton");

  buttonWrapper.append(upButton, downButton, deleteButton);

  return buttonWrapper;
}

// create element and add required promps to it
// in future will have drag and drop to change position features
function createListElement(text: string): HTMLLIElement {
  const element = document.createElement("li") as HTMLLIElement;

  element.textContent = text;
  element.id = newId();
  element.className = "todo_li";

  const buttonsWrapper = buttonWrapper();

  element.append(buttonsWrapper);

  return element;
}

function appendListItem(parent: HTMLElement, text: string): void {
  if (!parent || !text) return;

  const li = createListElement(text);

  if (!li) return;

  parent.append(li);
}

export default appendListItem;
