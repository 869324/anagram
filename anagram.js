const string = "fried";
const arr = Array.from(string);
let str = arr.fill("i", 1, 2);
const anagram = str.fill("r", 2, 3);
console.log(`${anagram.join("")} is an anagram of ${string}`);