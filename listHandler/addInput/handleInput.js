function findElement(query) {
    if (!query)
        return;
    let element = null;
    if (query.startsWith("#")) {
        const id = query.substring(1);
        element = document.getElementById(id);
    }
    if (!element) {
        element = document.querySelector(query);
    }
    return element;
}
function storeInput(element) {
    const input = element.textContent;
    return input;
}
// clears input after user clicks enter
function clearInput(inputElement) {
    inputElement.textContent = "";
}
function handleInput(event, query) {
    event.preventDefault();
    if (!query)
        return;
    const inputElement = findElement(query);
    if (!inputElement)
        return;
    const inputValue = storeInput(inputElement);
    if (!inputValue)
        return;
    clearInput(inputElement);
    return inputValue;
}
export default handleInput;
