import handleInput from "../handleInput/handleInput.js"; // stores input and clears it
import appendListItem from "../appendListItem/appendListItem.js"; // adds new list-item to list
import findElement from "../abstract/functions/findElement/findElement.js";
const inputElement = findElement("#taskInput"), listUl = findElement("#todoList"), form = findElement("#taskForm");
function handleSubmit(e) {
    const input = handleInput(e, inputElement);
    if (!input)
        return;
    appendListItem(listUl, input);
}
if (form) {
    form.addEventListener("submit", handleSubmit);
}
