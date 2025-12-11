import { storeInput } from "../../handleList/storage/inputStorage.js";

const taskForm = document.getElementById("taskForm") as HTMLFormElement;
const formInput = document.querySelector("#taskInput") as HTMLInputElement;

function clearInput(inputElement: HTMLInputElement): void {
  inputElement.value = "";
}

function addInput(event: SubmitEvent) {
  event.preventDefault();

  if (!formInput) return;

  const input = formInput.value;

  if (!input) return;

  storeInput(input);
  clearInput(formInput);
}

if (taskForm) {
  taskForm.addEventListener("submit", addInput);
}
