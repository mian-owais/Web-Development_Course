// var generateName = require("sillyname");
// var sillyName = generateName();

// console.log(`My Name is ${sillyName}.`);
// import superheroes from 'superheroes';

// superheroes;
//=> ['3-D Man', 'A-Bomb', …]
import superheroes from "superheroes";
const name = superheroes[Math.floor(Math.random() * superheroes.length)];
console.log(`My superhero name is ${name}!`);