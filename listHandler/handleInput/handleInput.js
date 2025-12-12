function storeInput(element) {
    const inputElement = element;
    return inputElement.value.trim();
}
// clears input after user clicks enter
function clearInput(element) {
    const inputElement = element;
    inputElement.value = "";
}
function handleInput(event, inputElement) {
    event.preventDefault();
    const inputValue = storeInput(inputElement);
    if (!inputValue)
        return;
    clearInput(inputElement);
    return inputValue;
}
export default handleInput;
