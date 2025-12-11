import { storeInput } from "../../handleList/storage/inputStorage.js";
const taskForm = document.getElementById("taskForm");
const formInput = document.querySelector("#taskInput");
function clearInput(inputElement) {
    inputElement.value = "";
}
function addInput(event) {
    event.preventDefault();
    if (!formInput)
        return;
    const input = formInput.value;
    if (!input)
        return;
    storeInput(input);
    clearInput(formInput);
}
if (taskForm) {
    taskForm.addEventListener("submit", addInput);
}
