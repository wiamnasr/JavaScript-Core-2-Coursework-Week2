function listOfColours(colours) {
  let content = document.querySelector("#content");
  let selectE = document.createElement("select");
  let pE = document.createElement("p");

  content.appendChild(selectE);

  colours.forEach((colour) => {
    let option = document.createElement("option");
    option.textContent = colour;
    selectE.appendChild(option);
  });

  selectE.addEventListener("click", changeP);

  function changeP(eachClick) {
    pE.textContent = `you have selected: ${eachClick.target.value}`;
    pE.style.color = eachClick.target.value;
    content.appendChild(pE);
  }
}

const colours = ["blue", "purple", "orange"];

listOfColours(colours);
