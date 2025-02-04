function todoList(todos) {
  // Write your code here...
  let content = document.querySelector("#content");
  let unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);

  todos.forEach((todo) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = todo.todo;
    listItem.addEventListener("click", modifyText);

    unorderedList.appendChild(listItem);
  });
}

function removeStyle() {
  this.style.textDecoration = "none";
}

function modifyText() {
  if (this.style.textDecoration != "line-through") {
    this.style.textDecoration = "line-through";
  } else {
    this.style.textDecoration = "none";
  }
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
