function storeInput(element: HTMLElement): string {
  const inputElement = element as HTMLInputElement;
  return inputElement.value.trim();
}

// clears input after user clicks enter
function clearInput(element: HTMLElement): void {
  const inputElement = element as HTMLInputElement;
  inputElement.value = "";
}

function handleInput(
  event: SubmitEvent,
  inputElement: HTMLInputElement
): string | undefined {
  event.preventDefault();

  const inputValue = storeInput(inputElement);
  if (!inputValue) return;

  clearInput(inputElement);

  return inputValue;
}

export default handleInput;
