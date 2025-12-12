// adds id to child to later allow for manipulation
function newId(): string {
  const id: string = crypto.randomUUID();
  return id;
}

// create element and add text to it
function createElement(typeEl: string): HTMLElement {
  const childElement = document.createElement(`${typeEl}`) as HTMLElement;
  return childElement;
}

// find parent and append child to parent
function append(appender: HTMLElement, child: HTMLElement): void {
  const parent = document.querySelector(`${appender}`) as HTMLElement | null;

  parent?.appendChild(child);
}

// adds neccessary values to <li>
function handle_listItem(element: HTMLElement, text: string): void {
  const id = newId();

  element.textContent = text;
  element.id = id;
  element.className = "todo_li";
}

function handle_ul(
  parent: HTMLElement,
  child: string,
  text: string
): void | undefined {
  if (!child || !parent || text) return;

  const li = createElement(child);
  if (!li) return;

  handle_listItem(li, text);
  append(parent, li);
}

export default handle_ul;
