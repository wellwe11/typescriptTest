// adds id to child to later allow for manipulation
function newId() {
    const id = crypto.randomUUID();
    return id;
}
// create element and add text to it
function createElement(typeEl) {
    const childElement = document.createElement(`${typeEl}`);
    return childElement;
}
// find parent and append child to parent
function append(appender, child) {
    const parent = document.querySelector(`${appender}`);
    parent?.appendChild(child);
}
// adds neccessary values to <li>
function handle_listItem(element, text) {
    const id = newId();
    element.textContent = text;
    element.id = id;
    element.className = "todo_li";
}
function handle_ul(parent, child, text) {
    if (!child || !parent || text)
        return;
    const li = createElement(child);
    if (!li)
        return;
    handle_listItem(li, text);
    append(parent, li);
}
export default handle_ul;
