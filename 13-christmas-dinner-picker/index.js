/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey

 */

let dinnerForm = document.getElementById("btn");
let food = document.getElementById("food");
let number = document.getElementById("num-input");
let isVegetarian = document.getElementById("vegetarian-input");

dinnerForm.addEventListener("click", (e) => {
  e.preventDefault();
  if (number.value <= 4) {
    food.innerHTML = "Ham";
  }
  if (number.value >= 5) {
    food.innerHTML = "Turkey";
  }
  if (isVegetarian.checked) {
    food.innerHTML = "Winter Squash Risotto";
  }
});
