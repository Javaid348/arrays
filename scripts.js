// 1. Create an array of 3 student names and add one more using push().

// let students = ["Amjid", "Alyas", "Rauf"];
// students.push("javaid");
// alert(students);

// 2. Remove the last item from an array of fruits using pop().

// let fruits = ["mango", "straberry", "apple", " banana"];
// fruits.pop(3);

// alert(fruits);
// console.log(fruits);

// 3. Add "Monday" to the beginning of a days array using unshift().

// let weekly = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// weekly.unshift("Monday");
// alert(weekly);
// console.log(weekly);

// 4. Remove the first item from an array of colors using shift().

// let colors = ["blue", "green" , "red", "white", "black"];
//  colors.shift(0);

// alert(colors);
// console.log(colors);

// 5. Use splice() to insert "Math" and "Science" at index 2 of a subjects array.

// let subjects = ["Urdu", "Chemisty", "Biology" ,"English"];

// subjects.splice(2, 0 , "Math", "Science");

// alert(subjects);
// console.log(subjects);

// 6. Use splice() to remove 2 elements starting from index 1 of a cities array.

// let cities = ["Karachi", "Quetta", "Multan", " Hayderabad"];

// cities.splice(1, 2);
// alert(cities);
// console.log(cities);

// 7. Use slice() to get the first 3 items from a countries array.

// let countries = ["Pakistan", "Iran" , "Afghanistan", "Indian", "Nepal", "Russia"];

// let firstThree = countries.slice(0,3);
// alert(firstThree);
// console.log(firstThree);

// 8. Convert the string "apple,banana,mango" into an array using split().

// let fruits = "apple,banana,mango";

// let arrayfruits = fruits.split(",");
// alert(arrayfruits);
// console.log(arrayfruits);

// 9. Join an array of characters ['J','S'] into a single string using join().

// let characters = ["J", "S"];

// let joinCharacters = characters.join("");

// alert(joinCharacters);
// console.log(joinCharacters);

// 10. Combine two arrays ['pen','pencil'] and ['eraser','sharpener'] using
// concat().

// let combine1 = ["pen" , "pencil",]; 
// let combine2 = ["eraser", "sharpener"];

// let combined = combine1.concat(combine2);

// alert(combined);
// console.log(combined);

// 11. Sort an array of numbers [10, 5, 2, 8] using sort() (as strings).

// let numbers = [10, 5, 2, 8, 6, 4, 9];
// let sortNumbers = numbers.sort();

// alert(sortNumbers);
// console.log(sortNumbers);

// 12. Sort an array of names alphabetically using sort().

// let names = ["Javaid", "Raouf", "Sajid", "Majid", "Khalid", "Naseer", "Baqir", "Akbar"];
// let alphNames = names.sort();
// alert(alphNames);
// console.log(alphNames);

// 13. Reverse the order of an array of numbers using reverse().
// let orders= ["Akbar","Baqir","Javaid", "Khalid", "Majid",  "Naseer","Raouf", "Sajid",   ];
// let ordersNames = orders.reverse();
// alert(ordersNames);
// console.log(ordersNames);

// 14. Use indexOf() to find the index of "Blue" in a colors array.
// let colors = ["blue", "green" , "red", "white", "black"];
// let findColors = colors.indexOf("blue");

// alert("The index of Blue is: " + findColors);
// console.log(findColors);

// 15. Add three new items to an empty array using push().

// let empty = [];
// empty.push("Colors");
// empty.push("Country");
// empty.push("Cities");

// alert(empty);
// console.log(empty);

// 16. Remove the middle item from an array of 5 numbers using splice().

// let numbers = [ 5, 2, 8, 6, 4];
// let  removeNumbers = numbers.splice(2,1);

// alert(removeNumbers);
// console.log( removeNumbers);

// 17. Create a string "HTML CSS JavaScript" and convert it to an array using split().

// let str = "HTML  css  JavaScript";

// let arry = str.split(" ");

// alert(arry);
// console.log(arry);

// 18. Create an array ['a', 'b', 'c'], reverse it, then join it with - in between.
//  let arry = ['a', 'b', 'c'];

// arry.reverse();
// let result = arry.join("-");

//  alert(result);
//  console.log(result);

// 19. Check if "Karachi" exists in an array using indexOf() and show its index.
// let cities= ["Quetta","Multan","Panjgur", "Gawadar", "Karachi",  "Islamabad","Lahore", "Hayderabad",   ];
// let citiesNames = cities.indexOf("Karachi");
// if (citiesNames!== -1) {
//     alert("Karachi found at index: " + citiesNames);
//     console.log("Karachi found at index:", citiesNames);
// } else {
//   alert("Karachi not found");
//     console.log("Karachi not found");
// }
// 20. Concatenate two arrays of even and odd numbers using concat() and then reverse
// them.

let evenNumbers = [2, 4, 6, 8];
let oddNumbers = [1, 3, 5, 7];
let allNumbers = evenNumbers.concat(oddNumbers);
allNumbers.reverse();

alert(allNumbers);
console.log(allNumbers);


