const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
//1. Get array of all names
const allNames = characters.map((character) => character.name);
console.log(allNames);

//2. Get array of all heights
const allHeights = characters.map((character) => character.height);
console.log(allHeights);

//3. Get array of objects with just name and height properties
const allNameHeight = characters.map((character) => ({
  name: character.name,
  height: character.height,
}));
console.log(allNameHeight);

//4. Get array of all first names
const firstNames = characters.map((character) => character.name.split(" ")[0]);
console.log(firstNames);

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0);
console.log(totalMass);

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0);
console.log(totalHeight);

//3. Get total number of characters by eye color
const totalNumberByEyeColor = characters.reduce((acc, cur) => {
  if (acc[cur.eye_color]) {
    acc[cur.eye_color]++;
  } else {
    acc[cur.eye_color] = 1;
  }
  return acc;
}, {});
console.log(totalNumberByEyeColor);
//4. Get total number of characters in all the character names
const totalNumberCharacterNames = characters.reduce(
  (acc, cur) => acc + cur.name.length,
  0
);
console.log(totalNumberCharacterNames);

//***FILTER***
//1. Get characters with mass greater than 100
const massGreaterThan100 = characters.filter(
  (character) => character.mass > 100
);
console.log(massGreaterThan100);

//2. Get characters with height less than 200
const heightLessThan200 = characters.filter(
  (character) => character.height < 200
);
console.log(heightLessThan200);

//3. Get all male characters
const allMale = characters.filter((character) => character.gender === "male");
console.log(allMale);

//4. Get all female characters
const allFemale = characters.filter(
  (character) => character.gender === "female"
);
console.log(allFemale);

//***SORT***
//1. Sort by mass
const sortMass = characters.sort((a, b) => a.mass - b.mass);
console.log(sortMass);

//2. Sort by height
const sortHeight = characters.sort((a, b) => a.height - b.height);
console.log(sortHeight);

//3. Sort by name
const sortName1 = characters.sort();
const sortName2 = characters.sort((a, b) => {
  if (a.name < b.name) return -1;
  return 1;
});
console.log(sortName1);

//4. Sort by gender
const sortGender = characters.sort((a, b) => {
  if (a.gender === "female") return -1;
  return 1;
});
console.log(sortGender);

//***EVERY***
//1. Does every character have blue eyes?
const everyBlue = characters.every(
  (character) => character.eye_color === "blue"
);
console.log(everyBlue);

//2. Does every character have mass more than 40?
const everyMassGreaterThan40 = characters.every(
  (character) => character.mass > 40
);
console.log(everyMassGreaterThan40);

//3. Is every character shorter than 200?
const everyHeightShorterThan200 = characters.every(
  (character) => character.height < 200
);
console.log(everyHeightShorterThan200);

//4. Is every character male?
const everyMale = characters.every((character) => character.gender === "male");
console.log(everyMale);

//***SOME***
//1. Is there at least one male character?
const atleast1Male = characters.some(
  (character) => character.gender === "male"
);
console.log(atleast1Male);

//2. Is there at least one character with blue eyes?
const atleast1BlueEyes = characters.some(
  (character) => character.eye_color === "blue"
);
console.log(atleast1BlueEyes);

//3. Is there at least one character taller than 210?
const atleast1Taller = characters.some((character) => character.height > 210);
console.log(atleast1Taller);

//4. Is there at least one character that has mass less than 50?
const atleast1Mass = characters.some((character) => character.mass < 50);
console.log(atleast1Mass);
