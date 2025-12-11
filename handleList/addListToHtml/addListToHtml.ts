import { storedInputs } from "../storage/inputStorage";

const listUl = (document.querySelector("#todoList") as HTMLElement) || null;

function checkArrayLength(array: string[]): string[] | undefined {
  if (array.length <= 0) return;

  return array;
}

const someArr: string[] = [];

console.log(checkArrayLength(someArr));
