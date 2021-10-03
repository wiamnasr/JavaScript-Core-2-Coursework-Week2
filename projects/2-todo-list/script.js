listObjectItems = [];
let todoButton = document.getElementById("todo-list");
// let deleteAllButton = document.createElement("button");
// todoButton.appendChild(deleteAllButton);
// deleteAllButton.className = "btn btn-primary mb-3";
// deleteAllButton.style.width = "40%";
// deleteAllButton.style.height = "60px";
// deleteAllButton.style.alignSelf = "center";

// deleteAllButton.style.backgroundColor = "purple";
// deleteAllButton.style.color = "white";
// deleteAllButton.style.fontWeight = "bolder";
// deleteAllButton.textContent = "Delete All Completed";
// deleteAllButton.style.borderRadius = "50%";
// deleteAllButton.id = "deleteAll";
// console.log(deleteAllButton.id);

function populateTodoList(todos) {
  let unorderedlist = document.getElementById("todo-list");

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  todos.forEach((object) => {
    if (listObjectItems.includes(object.task)) {
      // alert(`"${listObjectItems[indexOf(object.task)]}" already added`);
    } else {
      //start of paste
      let li = document.createElement("li");

      li.textContent = object.task;
      console.log(typeof li.textContent);
      listObjectItems.push(li.textContent);
      console.log(listObjectItems);

      let span = document.createElement("span");
      let icheck = document.createElement("i");
      let itrash = document.createElement("i");
      span.className = "badge bg-primary rounded-pill";
      icheck.className = "fa fa-check";
      icheck.ariaHidden = true;

      icheck.addEventListener("click", checkUncheck);

      itrash.className = "fa fa-trash";
      itrash.ariaHidden = true;

      itrash.addEventListener("click", deleteLi);

      span.appendChild(icheck);
      span.appendChild(itrash);

      li.appendChild(span);

      li.className =
        "list-group-item d-flex justify-content-between align-items-center";
      li.style.textDecoration = "none";
      unorderedlist.appendChild(li);

      function checkUncheck() {
        console.log("Mouse clicked on Check/Uncheck Button!");
        if (li.style.textDecoration != "line-through") {
          li.style.textDecoration = "line-through";
        } else {
          li.style.textDecoration = "none";
        }
      }

      function deleteLi() {
        unorderedlist.removeChild(li);
        listObjectItems.splice(listObjectItems.indexOf(li.textContent), 1);
        console.log(listObjectItems);
      }

      //end of paste
    }
  });
}

console.log(listObjectItems);

let todos = [
  { task: "Wash fruits", completed: false },
  { task: "walk", completed: true },
  { task: "afafd", completed: false },
  { task: "wrfad", completed: true },
  { task: "walk", completed: true },
  { task: "wrfad", completed: true },
];

populateTodoList(todos);

let todoInput = document.getElementById("todoInput");
console.log(`Here => ${todoInput.textContent.length}`);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let addTodoButton = document.getElementsByClassName("btn btn-primary mb-3");
  let todoInput = document.getElementById("todoInput");
  let textInput = todoInput.value;

  addTodoButton[0].addEventListener("click", addtoList);

  function addtoList() {
    if (textInput.length > 0) {
      //INCOMPLETE! WORK ON
      todos.push({ task: textInput, completed: false });
      populateTodoList(todos);
    } else {
      // alert("please fill in a new todo entry");

      console.log(todos);
    }
  }
}
// addNewTodo(event);

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
// function deleteAllCompletedTodos() {
//   // Write your code here...
//   let items = document.getElementsByClassName("list-group-item");
//   let unorderedlist = document.getElementById("todo-list");
//   console.log("here /");
//   items.forEach((item) => {
//     if (item.style.textDecoration == "line-through") {
//       unorderedlist.removeChild(item);
//     }
//   });
// }

// let deleteAllCompleted = document.getElementById("deleteAll");

// deleteAllCompleted.addEventListener("click", consolelog);

// function consolelog() {
//   console.log("I've been clicked!");
// }
