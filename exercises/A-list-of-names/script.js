function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach((person) => {
    let firstHeader = document.createElement("h1");
    let secondHeader = document.createElement("h2");
    firstHeader.textContent = person.name;
    secondHeader.textContent = person.job;
    content.appendChild(firstHeader);
    content.appendChild(secondHeader);
  });
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
