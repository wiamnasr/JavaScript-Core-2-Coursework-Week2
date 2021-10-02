function shoppingList(arrayOfPeople) {
  // Write your code here...
  let contentID = document.querySelector("#content");
  let unorderedList = document.createElement("ul");

  arrayOfPeople.forEach((person) => {
    let listItem = document.createElement("li");

    listItem.textContent = person;
    unorderedList.appendChild(listItem);
  });
  contentID.appendChild(unorderedList);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
