function readingList(books) {
  // Write your code here...
  let content = document.querySelector("#content");
  let unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);
  unorderedList.style.display = "flex";
  unorderedList.innerHTML = "Books you will never read";
  unorderedList.style.color = "white";
  unorderedList.style.fontSize = "20pt";
  unorderedList.style.fontWeight = "bolder";

  content.style.backgroundColor = "gray";

  books.forEach((book) => {
    let listItem = document.createElement("li");
    listItem.style.width = "20%";

    listItem.style.margin = "100px 0 0 100px";
    listItem.style.height = "300pt";
    listItem.style.listStyle = "none";

    let para = document.createElement("p");
    let image = document.createElement("img");
    image.style.width = "50%";
    listItem.appendChild(para);
    listItem.appendChild(image);
    unorderedList.appendChild(listItem);

    if (book.alreadyRead) {
      listItem.style.backgroundColor = "green";
    } else {
      listItem.style.backgroundColor = "red";
    }

    let imgArr = [
      "https://cdn.vox-cdn.com/thumbor/7n7Oe4myr7B7nYI-mxuuO3b-QrY=/150x0:1770x1215/1200x800/filters:focal(150x0:1770x1215)/cdn.vox-cdn.com/uploads/chorus_image/image/35330556/3176173-1748009911-hp.jp_.0.jpg",
      "https://m.media-amazon.com/images/I/51Dl6lXXesL.jpg",
      "https://m.media-amazon.com/images/I/51Dl6lXXesL.jpg",
    ];

    image.src = imgArr[books.indexOf(book)];
    console.log(image.src);
    para.textContent = book.title + " " + book.author;
  });
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

readingList(books);
