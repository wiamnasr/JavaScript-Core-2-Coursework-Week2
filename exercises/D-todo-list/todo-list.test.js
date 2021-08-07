/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.
*/

const {default: userEvent} = require("@testing-library/user-event");
const patchJsdomInnerText = require("../../util/jsdom-innertext.js");

test("Check DOM has empty <ul> tag when array is empty", () => {
  patchJsdomInnerText();
  document.body.innerHTML = `<div id="content" />`;
  let target = require("./script.js");
  const todos = [];

  target.todoList(todos);

  let content = document.querySelector("#content");
  expect(Array.from(content.querySelectorAll("li")).length).toEqual(0);
});

test("Check list works", () => {
  patchJsdomInnerText();
  document.body.innerHTML = `<div id="content" />`;
  let target = require("./script.js");
  const todos = [
    { todo: "wash the dishes" },
    { todo: "walk the dog" },
    { todo: "learn javascript" },
    { todo: "go shopping" },
  ];

  target.todoList(todos);

  let content = document.querySelector("#content");
  let lis = Array.from(content.querySelectorAll("li"));
  expect(lis.length).toEqual(4);
  expect(lis.map(li => li.textContent)).toEqual(["wash the dishes", "walk the dog", "learn javascript", "go shopping"]);

  expect(lis[0].style.textDecoration).toEqual("");
  userEvent.click(lis[0]);
  expect(lis[0].style.textDecoration).toEqual("line-through");
  userEvent.click(lis[0]);
  expect(lis[0].style.textDecoration).toEqual("");
});
