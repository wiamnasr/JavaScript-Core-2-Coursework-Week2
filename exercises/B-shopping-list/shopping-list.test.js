/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.
*/

const patchJsdomInnerText = require("../../util/jsdom-innertext.js");

test("Check DOM contains empty <ul> with empty input array", () => {
  patchJsdomInnerText();
  document.body.innerHTML = `<div id="content" />`;
  let target = require("./script.js");

  let shopping = [];

  target.shoppingList(shopping);

  let contentDirectChildren = document.querySelectorAll("#content > *");
  expect(contentDirectChildren.length).toEqual(1);
  expect(contentDirectChildren[0].tagName).toEqualCaseInsensitive("ul");

  let lis = Array.from(contentDirectChildren[0].querySelectorAll("*"));
  expect(lis.length).toEqual(0);
});

test("Check DOM resembles correct output from Shopping Array", () => {
  patchJsdomInnerText();

  document.body.innerHTML = `<div id="content" />`;
  let target = require("./script.js");

  let shopping = [
    "Milk",
    "Bread",
    "Eggs",
    "A Dinosaur",
    "Cake",
    "Sugar",
    "Tea",
  ];

  target.shoppingList(shopping);

  let contentDirectChildren = document.querySelectorAll("#content > *");
  expect(contentDirectChildren.length).toEqual(1);
  expect(contentDirectChildren[0].tagName).toEqualCaseInsensitive("ul");

  let lis = Array.from(contentDirectChildren[0].querySelectorAll("*"));
  expect(lis.every(li => li.tagName.toLowerCase() == "li")).toBeTrue();

  expect(lis.map(li => li.textContent)).toEqual(shopping);
});
