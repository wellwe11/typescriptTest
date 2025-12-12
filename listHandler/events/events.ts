import handleInput from "../handleInput/handleInput"; // stores input and clears it
import handle_ul from "../addListToHtml/addListToHtml"; // adds new list-item to list

import findElement from "../abstract/functions/findElement/findElement.js";

const inputElement = findElement("#taskInput"),
  listUl = findElement("#todoList"),
  UlElement = findElement("#todoList"),
  form = findElement("taskForm");
