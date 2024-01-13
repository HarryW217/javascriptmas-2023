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

function addNamesToDropdown(nameList, parentElement) {
  nameList.forEach((nameListItem) => {
    const nameOption = document.createElement("option");
    nameOption.textContent = nameListItem.textContent;
    parentElement.appendChild(nameOption);
  });
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

    const niceNames = niceList.querySelectorAll("li");
    const naughtyNames = naughtyList.querySelectorAll("li");
    /*Note to self: the above variables contain array-like objects
  called NodeList objects. You can use certain array methods on these.*/
    addNamesToDropdown(niceNames, nameSelector);
    addNamesToDropdown(naughtyNames, nameSelector);
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

  //Add the new name to the 'move to new list' dropdown menu:
  const nameOption = document.createElement("option");
  nameOption.textContent = newSortee.textContent;
  nameSelector.appendChild(nameOption);
}

const changeListSubmitBtn = document.getElementById("change-list-submit");
changeListSubmitBtn.addEventListener("click", changeList);

function changeList() {
  event.preventDefault();
  const movingSortee = nameSelector.value;

  function removeChildIfExists(list) {
    for (let i = 0; i < list.children.length; i++) {
      const currentSortee = list.children[i];
      if (currentSortee.textContent === movingSortee) {
        list.removeChild(currentSortee);
        return currentSortee;
      }
    }
    return null;
  }

  const naughtySortee = removeChildIfExists(niceList);

  if (naughtySortee) {
    const newListItem = document.createElement("li");
    newListItem.textContent = naughtySortee.textContent;
    naughtyList.appendChild(newListItem);
  } else {
    const niceSortee = removeChildIfExists(naughtyList);
    const newListItem = document.createElement("li");
    newListItem.textContent = niceSortee.textContent;
    niceList.appendChild(newListItem);
  }
}

/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
**/

/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/
