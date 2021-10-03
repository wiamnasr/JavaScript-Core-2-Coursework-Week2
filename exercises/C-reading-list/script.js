function readingList(books) {
  // Write your code here...
  let content = document.querySelector("#content");
  content.style.display = "flex";
  content.style.flexFlow = "row wrap";

  let unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);
  content.style.width = "100%";
  content.style.height = "100%";

  // content.style.justifyContent = "space-around";

  unorderedList.style.width = "100%";
  unorderedList.style.height = "100%";
  unorderedList.style.display = "flex";
  unorderedList.style.flexFlow = "row wrap";
  // unorderedList.innerHTML = "This is a Book list";
  unorderedList.style.justifyContent = "space-around";
  unorderedList.style.color = "white";
  unorderedList.style.fontSize = "20pt";
  unorderedList.style.fontWeight = "bolder";

  content.style.backgroundColor = "gray";

  books.forEach((book) => {
    let listItem = document.createElement("li");
    listItem.style.width = "20%";
    listItem.style.display = "flex";
    listItem.style.flexFlow = "row wrap";
    // listItem.style.margin = "100px 0 0 20px";
    listItem.style.height = "200px";
    listItem.style.listStyle = "none";

    let para = document.createElement("p");
    let image = document.createElement("img");
    image.style.maxWidth = "70%";
    image.style.height = "130px";
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
    para.style.fontSize = "10px";
    para.style.textAlign = "center";
    para.style.width = "100%";
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
