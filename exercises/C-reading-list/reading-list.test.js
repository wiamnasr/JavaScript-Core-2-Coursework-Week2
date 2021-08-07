/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.
*/

const patchJsdomInnerText = require("../../util/jsdom-innertext.js");

test("Check DOM is empty with empty array", () => {
  patchJsdomInnerText();
  document.body.innerHTML = `<div id="content" />`;
  let target = require("./script.js");
  const books = [];
  target.readingList(books);

  let lis = Array.from(document.querySelectorAll("#content li"));
  expect(lis.length).toEqual(0);
});

test("Check DOM resembles correct output for Reading List", () => {
  patchJsdomInnerText()
  document.body.innerHTML = `<div id="content" />`;
  let target = require("./script.js");

  const books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      alreadyRead: false,
      bookCoverImage: "https://miro.medium.com/max/1049/0*CmkOVjGAnm3D0rTo",
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true,
      bookCoverImage:
        "https://www.kurzweilai.net/images/The-Most-Human-Human-Paperback-Front-Cover.jpg",
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      alreadyRead: true,
      bookCoverImage:
        "https://jj09.net/wp-content/uploads/2013/07/the_pragmatic_programmer.jpg",
    },
  ];

  target.readingList(books);

  let lis = Array.from(document.querySelectorAll("#content li"));
  expect(lis.length).toEqual(3);
  for (let i = 0; i < lis.length; ++i) {
    let book = books[i];
    let li = lis[i];

    let p = li.querySelector("p");
    expect(p.textContent).toContain(book.title);
    expect(p.textContent).toContain(book.author);

    let img = li.querySelector("img");
    expect(img.src).toEqual(book.bookCoverImage);

    expect(li.style.backgroundColor).toEqual(book.alreadyRead ? "green" : "red");
  }
});
