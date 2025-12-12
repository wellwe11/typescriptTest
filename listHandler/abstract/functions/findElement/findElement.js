function findElement(query) {
    if (!query)
        return null;
    const element = document.querySelector(query);
    return element;
}
export default findElement;
