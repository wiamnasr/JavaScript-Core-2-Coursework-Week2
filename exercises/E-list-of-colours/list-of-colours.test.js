/* ======= TESTS - DO NOT MODIFY ===== 
There are some tests in this file that will help you work out if your code is working.
*/

const {default: userEvent} = require("@testing-library/user-event");
const patchJsdomInnerText = require("../../util/jsdom-innertext.js");
const Color = require("color");

test("Check DOM resembles correct output for initial setup", () => {
  patchJsdomInnerText();
  document.body.innerHTML = `<div id="content" />`;
  let target = require("./script.js");

  const colours = ["red", "blue", "green", "yellow", "pink", "brown"];
  target.listOfColours(colours);

  let content = document.querySelector("#content");
  let select = content.querySelector("select");

  let options = Array.from(select.querySelectorAll("option"));
  let foundOptionTexts = options.map(option => option.textContent.toLowerCase());

  for (let colour of colours) {
    expect(foundOptionTexts).toContain(colour);
  }

  for (let option of options) {
    if (option.textContent.toLowerCase() === "pink") {
      userEvent.selectOptions(select, option);
    }
  }

  let paragraph = content.querySelector("p");
  expect(paragraph.textContent).toEqual("You have selected: pink")
  expect(Color(paragraph.style.color)).toEqual(Color("pink"));
});
