import handleInput from "../addInput/handleInput"; // stores input and clears it
import handle_ul from "../addListToHtml/addListToHtml"; // adds new list-item to list

const formInput =
  (document.querySelector("#taskInput") as HTMLInputElement) || null;

const listUl = (document.querySelector("#todoList") as HTMLElement) || null;

const taskForm =
  (document.getElementById("taskForm") as HTMLFormElement) || null;
