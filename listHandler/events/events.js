import handleInput from "../handleInput/handleInput.js"; // stores input and clears it
import appendListItem from "../appendListItem/appendListItem.js"; // adds new list-item to list
import findElement from "../abstract/functions/findElement/findElement.js";
const inputElement = findElement("#taskInput"), listUl = findElement("#todoList"), // handleACtion here
form = findElement("#taskForm");
function handleListAction(event) {
    const target = event.target;
    const action = target.dataset.action;
    if (!action)
        return;
    const listItem = target.closest("li");
    if (!listItem)
        return;
    console.log(listItem);
    switch (action) {
        case "up":
            console.log(`Moving item ${listItem.id} up`);
            break;
        case "down":
            console.log(`Moving item ${listItem.id} down`);
            break;
        case "delete":
            console.log(`Deleting item ${listItem.id}`);
            listItem.remove();
            break;
        default:
            break;
    }
}
function handleSubmit(e) {
    const input = handleInput(e, inputElement);
    if (!input)
        return;
    appendListItem(listUl, input);
}
if (form) {
    form.addEventListener("submit", handleSubmit);
}
if (listUl) {
    listUl.addEventListener("click", handleListAction);
}
