import findElement from "../abstract/functions/findElement/findElement";
const inputElement = findElement("#taskInput") || null, listUl = document.querySelector("#todoList") || null, UlElement = findElement("#todoList") || null, form = findElement("taskForm") || null;
function storeInput(element) {
    const inputElement = element;
    return inputElement.value.trim();
}
// clears input after user clicks enter
function clearInput(element) {
    const inputElement = element;
    inputElement.value = "";
}
