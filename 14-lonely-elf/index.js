const elf = document.getElementById("elf");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
let elfHangoutZone = document.getElementsByClassName("elf-hangout-zone")[0];

btn.addEventListener("click", duplicateElf);

function duplicateElf() {
  /** Challenge:
    - Write a function to duplicate the elf when the button is clicked.
    - See index.css for optional styling challenges.
  **/

  let elfTotal = elfHangoutZone.childElementCount;
  let messageOnPage = document.getElementById("no-more-elves-message");

if(elfTotal>0){
    btn2.innerHTML="Give the Elves some tea!"
}

  if (elfTotal < 30) {
    let elfClone = elf.cloneNode(true);
    elfHangoutZone.appendChild(elfClone);
  } else if (messageOnPage === null) {
    const noMoreElvesMessage = document.createElement("p");
    noMoreElvesMessage.setAttribute("id", "no-more-elves-message");
    noMoreElvesMessage.innerHTML =
      "You have reached the maximum number of 30 elves! But you can provide as much tea as you want.";
    elfHangoutZone.appendChild(noMoreElvesMessage);
  }
}

btn2.addEventListener("click", giveTheElfSomeTea);

function giveTheElfSomeTea() {
  let tea = document.createElement("div");
  tea.innerHTML = "☕";
  elfHangoutZone.appendChild(tea);
}

/** Stretch goals:
  - Write a function to give the elves some tools, or a cup of tea!
  - Limit the total number of elves to 100.
**/
