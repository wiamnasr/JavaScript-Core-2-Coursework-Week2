/* ======= TESTS - DO NOT MODIFY ===== 
There are some tests in this file that will help you work out if your code is working.
*/

const {default: userEvent} = require("@testing-library/user-event");
const Color = require('color');
const patchJsdomInnerText = require("../../util/jsdom-innertext.js");

test("Check DOM resembles correct output for initial setup", () => {
  patchJsdomInnerText();
  document.body.innerHTML = `<div id="content" />`;
  let target = require("./script.js");

  const paragraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";
  const colours = ["yellow", "green", "blue", "none"];

  target.highlightWords(paragraph, colours);

  let options = document.querySelectorAll("select > option");
  expect(options.length).toEqual(4);
  let didFindElementToSelect = false;
  for (const option of options) {
    if (option.textContent.toLowerCase() == "yellow") {
      option.selected = "selected";
      didFindElementToSelect = true;
    }
  }

  expect(didFindElementToSelect).toBeTrue();

  let loremElement = findElementContainingTextIgnoringWhitespace(document, "Lorem");
  let ipsumElement = findElementContainingTextIgnoringWhitespace(document, "ipsum");

  expect(loremElement.style.backgroundColor).toEqual("");
  expect(ipsumElement.style.backgroundColor).toEqual("");

  userEvent.click(loremElement);
  const yellow = Color("yellow");
  expect(Color(loremElement.style.backgroundColor)).toEqual(yellow);
  expect(ipsumElement.style.backgroundColor).toEqual("");

  userEvent.click(ipsumElement);
  expect(Color(loremElement.style.backgroundColor)).toEqual(yellow);
  expect(Color(ipsumElement.style.backgroundColor)).toEqual(yellow);

  userEvent.click(loremElement);
  expect(loremElement.style.backgroundColor).toEqual("");
  expect(Color(ipsumElement.style.backgroundColor)).toEqual(yellow);
});

function findElementContainingTextIgnoringWhitespace(document, text) {
  const allElements = document.querySelectorAll("*");
  for (const element of allElements) {
    if (element.textContent.toLowerCase().trim() === text.toLowerCase()) {
      return element;
    }
  }
}