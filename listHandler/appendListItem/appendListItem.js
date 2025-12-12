import newId from "../abstract/functions/newId/newId.js";
export function createButtonElement(text = "Please input text", name, className) {
    const element = document.createElement("button");
    element.textContent = text;
    element.className = className;
    element.dataset.action = name;
    return element;
}
function buttonWrapper() {
    const buttonWrapper = document.createElement("div");
    buttonWrapper.className = "buttonWrapper";
    const upButton = createButtonElement("^", "up", "listButton");
    const downButton = createButtonElement("v", "down", "listButton");
    const deleteButton = createButtonElement("X", "delete", "listButton");
    buttonWrapper.append(upButton, downButton, deleteButton);
    return buttonWrapper;
}
// create element and add required promps to it
// in future will have drag and drop to change position features
function createListElement(text) {
    const element = document.createElement("li");
    element.textContent = text;
    element.id = newId();
    element.className = "todo_li";
    const buttonsWrapper = buttonWrapper();
    element.append(buttonsWrapper);
    return element;
}
function appendListItem(parent, text) {
    if (!parent || !text)
        return;
    const li = createListElement(text);
    if (!li)
        return;
    parent.append(li);
}
export default appendListItem;
