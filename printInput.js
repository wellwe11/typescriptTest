"use strict";
const taskForm = document.getElementById("taskForm");
const formInput = document.querySelector("#taskInput");
function printInput(s) {
    console.log(s);
}
function clearInput(inputElement) {
    inputElement.value = "";
}
function handleEvent(event) {
    event.preventDefault();
    if (!formInput)
        return;
    const input = formInput.value;
    if (!input)
        return;
    printInput(input);
    clearInput(formInput);
}
if (taskForm) {
    taskForm.addEventListener("submit", handleEvent);
}
