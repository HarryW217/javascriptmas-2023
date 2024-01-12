const niceList = document.getElementById("nice-list");
const naughtyList = document.getElementById("naughty-list");
const btn = document.getElementById("btn");
btn.addEventListener("click", sort);
const nameSelector = document.getElementById("name-selector");

const sorteesArr = [
  {
    name: "David",
    hasBeenGood: false,
  },
  {
    name: "Del",
    hasBeenGood: true,
  },
  {
    name: "Valerie",
    hasBeenGood: false,
  },
  {
    name: "Astrid",
    hasBeenGood: true,
  },
];

function addNamesToDropdown() {
  const niceNames = niceList.querySelectorAll("li");
  const naughtyNames = naughtyList.querySelectorAll("li");
  /*Note to self: the above variables contain array-like objects
  called NodeList objects. You can use certain array methods on these.*/
  function turnNamesIntoOptions(nameList, parentElement) {
    nameList.forEach((nameListItem) => {
      const nameOption = document.createElement("option");
      nameOption.textContent = nameListItem.textContent;
      parentElement.appendChild(nameOption);
    });
  }
  turnNamesIntoOptions(niceNames, nameSelector);
  turnNamesIntoOptions(naughtyNames, nameSelector);
}

function sort() {
  if (niceList.childElementCount === 0 && naughtyList.childElementCount === 0) {
    let naughty = [];
    let nice = [];

    sorteesArr.forEach((sortee) => {
      if (sortee.hasBeenGood === false) {
        naughty.push(`<li>${sortee.name}</li>`);
      } else {
        nice.push(`<li>${sortee.name}</li>`);
      }
    });

    niceList.innerHTML = nice.join("");
    naughtyList.innerHTML = naughty.join("");  
    addNamesToDropdown();
  }

}

let nameInput = document.getElementById("name");
const chosenList = document.getElementById("lists");
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", addToList);

function addToList() {
  event.preventDefault();
  const newSortee = document.createElement("li");
  newSortee.textContent = nameInput.value;
  if (chosenList.value === "Nice") {
    niceList.appendChild(newSortee);
  } else if (chosenList.value === "Naughty") {
    naughtyList.appendChild(newSortee);
  }
  nameInput.value = "";
  addNamesToDropdown();
}

/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
**/

/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/
