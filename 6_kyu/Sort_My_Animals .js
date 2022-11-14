const animal = [
  {name: "Cat", numberOfLegs: 4},
  {name: "Snake", numberOfLegs: 0},
  {name: "Dog", numberOfLegs: 4},
  {name: "Pig", numberOfLegs: 4},
  {name: "Human", numberOfLegs: 2},
  {name: "Bird", numberOfLegs: 2}];

function sortAnimal(animal) {
  return animal ? animal.sort((a, b) => a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name)) : null;
  
  // let sortName = animal.sort((a, b) => a.name > b.name ? 1 : -1)
  // return animal ? sortName.sort((a, b) => a.numberOfLegs - b.numberOfLegs) : null
}

console.log(sortAnimal(animal))//,[{ name: 'Snake', numberOfLegs: 0 }, { name: 'Bird', numberOfLegs: 2 }, { name: 'Human', numberOfLegs: 2 }, { name: 'Cat', numberOfLegs: 4 }, { name: 'Dog', numberOfLegs: 4 }, { name: 'Pig', numberOfLegs: 4 }], "");
