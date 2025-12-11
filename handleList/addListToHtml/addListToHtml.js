const listUl = document.querySelector("#todoList") || null;
function checkArrayLength(array) {
    if (array.length <= 0)
        return;
    return array;
}
const someArr = [];
console.log(checkArrayLength(someArr));
export {};
