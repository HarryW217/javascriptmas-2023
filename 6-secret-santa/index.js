const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"];

function generateSecretSantaPairs(arr) {
  const cloneArr = [...arr];
  let pairs = {};
  arr.forEach((name) => {
    const filteredArr = cloneArr.filter((otherName) => {
      return otherName !== name;
    });
    if (filteredArr.length > 0) {
      let personToBuyFor =
        filteredArr[Math.floor(Math.random() * filteredArr.length)];
        pairs[name] = personToBuyFor;
      cloneArr.splice(cloneArr.indexOf(personToBuyFor), 1);
    }
  });
  return pairs;
}
console.log(generateSecretSantaPairs(people));

/**
Example output:
{
    Alice: "Dan",
    Bob: "Ferdinand",
    Carly: "Ed",
    Dan: "Alice",
    Ed: "Ginny",
    Ferdinand: "Bob",
    Ginny: "Carly"
}
 */
