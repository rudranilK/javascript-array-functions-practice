const fs = require('fs');
const path = require('path');
const characters = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data.json'), 'utf-8'));

//***MAP***
//1. Get array of all names
// console.log(characters.map(e => e['name']));

//2. Get array of all heights
// console.log(characters.map(e => e['height']));

//3. Get array of objects with just name and height properties
// console.log(characters.map(e => {
//    return {
//       name: e['name'],
//       height: e['height']
//    };
// }));

//4. Get array of all first names
// console.log(characters.map(e => e['name'].split(' ')[0]));


//***REDUCE***
//1. Get total mass of all characters
let totalmass = 0;
characters.forEach(e => totalmass += parseInt(e['mass']));
console.log(totalmass);

//2. Get total height of all characters
let totalHeight = 0;
characters.forEach(e => totalHeight += parseInt(e['height']));
console.log(totalHeight);

//3. Get total number of characters by eye color
console.log(characters.filter(e => e['eye_color'] === 'blue').length);

const eyeObj = {};
characters.forEach(e => {
   let property = e['eye_color'];
   if (eyeObj[property])
      eyeObj[property]++;
   else {
      eyeObj[property] = 1;
   }
});
console.log(eyeObj);

//4. Get total number of characters in all the character names
let totalChars = 0;
characters.forEach(e => totalChars += e['name'].length);
console.log(totalChars);

//***FILTER***
//1. Get characters with mass greater than 100
// console.log(characters.filter(e => e['mass'] > 100));

//2. Get characters with height less than 200
// console.log(characters.filter(e => e['height'] < 200));

//3. Get all male characters
// console.log(characters.filter(e => e['gender'].toLowerCase() === 'male'));

//4. Get all female characters
// console.log(characters.filter(e => e['gender'].toLowerCase() === 'female'));

//***SORT***
//1. Sort by mass
// console.log(characters.sort((a, b) => {
//    return a['mass'] - b['mass'];
// }));

//2. Sort by height
// console.log(characters.sort((a, b) => {
//    return b['height'] - a['height'];
// }));
//3. Sort by name
// console.log(characters.sort((a, b) => {
//    if (a['name'] < b['name']) return -1;
//    return 1;
// }));
//4. Sort by gender
// console.log(characters.sort((a, b) => {
//    if (a['gender'] === 'female') return -1;
//    return 1;
// }));

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
// console.log(characters.some(e => e['gender'].toLowerCase() === 'male'));

//2. Is there at least one character with blue eyes?
// console.log(characters.some(e => e['eye_color'].toLowerCase() === 'blue'));

//3. Is there at least one character taller than 210?
// console.log(characters.some(e => e['height'] > 210));

//4. Is there at least one character that has mass less than 50?
// console.log(characters.some(e => e['mass'] < 50));
