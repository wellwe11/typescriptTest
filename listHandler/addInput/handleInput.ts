function findElement(query: string): HTMLElement | null | undefined {
  if (!query) return;

  let element: Element | null = null;

  if (query.startsWith("#")) {
    const id = query.substring(1);
    element = document.getElementById(id);
  }

  if (!element) {
    element = document.querySelector(query);
  }

  return element as HTMLElement | null;
}

function storeInput(element: HTMLElement): string {
  const input = element.textContent;

  return input;
}

// clears input after user clicks enter
function clearInput(inputElement: HTMLElement): void {
  inputElement.textContent = "";
}

function handleInput(event: SubmitEvent, query: string): string | undefined {
  event.preventDefault();

  if (!query) return;

  const inputElement = findElement(query);
  if (!inputElement) return;

  const inputValue = storeInput(inputElement);
  if (!inputValue) return;

  clearInput(inputElement);

  return inputValue;
}

export default handleInput;
