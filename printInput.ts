const taskForm = document.getElementById("taskForm") as HTMLFormElement;
const formInput = document.querySelector("#taskInput") as HTMLInputElement;

function printInput(s: string) {
  console.log(s);
}

function clearInput(inputElement: HTMLInputElement): void {
  inputElement.value = "";
}

function handleEvent(event: SubmitEvent) {
  event.preventDefault();

  if (!formInput) return;

  const input = formInput.value;

  if (!input) return;

  printInput(input);
  clearInput(formInput);
}

if (taskForm) {
  taskForm.addEventListener("submit", handleEvent);
}
