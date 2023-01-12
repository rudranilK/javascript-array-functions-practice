const fs = require('fs');
const path = require('path');
const characters = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data.json'), 'utf-8'));


//***MAP***
//1. Get array of all names
//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
// console.log(characters.filter(e => e['mass'] > 100));

//2. Get characters with height less than 200
// console.log(characters.filter(e => e['height'] < 200));

//3. Get all male characters
// console.log(characters.filter(e => e['gender'].toLowerCase() === 'male'));

//4. Get all female characters
// console.log(characters.filter(e => e['gender'].toLowerCase() === 'female'));s

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
