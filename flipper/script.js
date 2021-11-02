// const name = ['Bimbo', 'Gboyega', 'Kemi', 'Oluwaseun'];
// console.log(name);
// const firstName = 'Olasunkanmi'
// let newArray = []

// for (let i = 0; i < name.length; i++){
//   console.log(i);
//   console.log(name[i]);
//   const fullName = `${name[i]} ${firstName}`;
//   // newArray.push(fullName)
//   newArray.unshift(fullName)

// }
// console.log(name);
// console.log(newArray);

//function to calculate Total
// const gas = [20, 30, 50,60];
// const food = [400, 500, 100];

// const calculateTotal = (arr) =>{
//   let total = 0;
//   for(let i = 0; i < arr.length; i++){
//     total += arr[i]
//   }
//   return total;
// }
// const gasTotal = calculateTotal(gas)
// const foodTotal = calculateTotal(food);
// const randomTotal = calculateTotal([10, 40, 60]);

// console.log({
//   gas: gasTotal,
//   food: foodTotal,
//   randomTotal: randomTotal,
// });

// const globalNumber = 5;

// const add =(num1, num2)=>{
//   const globalNumber = 20;
//  const result = num1 + num2 + globalNumber;

//  const mutipleNumber =()=>{
//    const multiple = result * globalNumber;
//    console.log(multiple);
//  }
//  mutipleNumber()
//  return result;
// }

// console.log(add(3,4));

// //Higher Order Function
// const morning = (name)=>{
//   return `Good Morning ${name.toUpperCase()}`;
// }
// const afternoon = (name) => {
//   return `Good Afternoon ${name.toUpperCase()}`;
// };

// const greet = (name, cb)=>{
//   const myName = 'John'
//   console.log(`${cb(name)} my Name is ${myName}`);
// }

// greet('seun', morning);
// greet('Dami', afternoon)

//ARRAY

// 1. forEach
// const showPeople = (person)=>{
//  console.log(person.age + 20);
// }
// people.forEach(showPeople);

// //arrow function
// people.forEach((item)=>{
//   console.log(item.name);
// })
// people.forEach(function(data) {
//   console.log(data.position);
// })

// 2. MAP

// const age = people.map(function (person){
//   return person.age + 10
// })
// console.log(age);

// const greatPeople = people.map(function(item){
// return {
//   firstName: "Bobo",
//   lastName: "stone",
//   firstName: "Bobo",
//   lastName: "stone",
//   firstName: "Bobo",
//   lastName: "stone",
// };
// })
// console.log(greatPeople);

//FILTER

// const youngPeople = people.filter(function(person){
// return person.age <= 20
// });
// const developer = people.filter(function(person){
//   return person.position === "Boss";
// })
// console.log(developer);

// const people = [
//   {
//     name: "Bobo",
//     age: 20,
//     position: "Software Developer",
//     id: 1,
//     salary: 200,
//   },
//   {
//     name: "Seun",
//     age: 30,
//     position: "Front-end Developer",
//     id: 2,
//     salary: 300,
//   },
//   {
//     name: "Dami",
//     age: 50,
//     position: "Boss",
//     id: 3,
//     salary: 500,
//   },
//   {
//     name: "Kemi",
//     age: 40,
//     position: "Boss",
//     id: 4,
//     salary: 500,
//   },
// ];

//REDUCER

// const total = people.reduce(function(acc, curr){
//   console.log(`Acc ${acc}`);
//   console.log(`current Value ${curr.salary}`);
//   acc += curr.salary

//   return acc
// },0)

// console.log(total);

//DOM

// lesson one
// const h1 = document.getElementById('head');
// console.log(h1);
// h1.style.color = 'red'

// const btn  =  document.getElementById("butt")
// btn.style.backgroundColor = 'gray'
// btn.style.color = '#fff'

// lesson two
// const headings  = document.getElementsByTagName('h2');
// console.log(headings);

// headings[0].style.color= 'red'

// const inputAmount = document.querySelector(".inputAmount");
// const form = document.querySelector(".form");
// const liter = document.querySelector(".liter");
// const amount = document.querySelector(".amount");

// let price = 165.0;

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   //value per liter
//   let amountValue = inputAmount.value;
//   const totalLiters = Math.floor(parseFloat(amountValue / price));
//   liter.innerText = totalLiters;

//   //Amount;
//   const totalAmount = amountValue;
//   amount.textContent = totalAmount;
// });

//Just for 4 colors
// const container = document.querySelector(".container");
// const colorValue = document.querySelector(".colorValue");
// const bgBtn = document.querySelector(".bgBtn");

// const color = ["red", "blue", "#444", "green", "orange"];

// bgBtn.addEventListener("click", () => {
//   let randonNumber = getRandonNumber();
//   console.log(randonNumber);
//   container.style.backgroundColor = color[randonNumber];
//   colorValue.textContent = color[randonNumber];

//   console.log("click");
// });

// const getRandonNumber = () => {
//   return Math.floor(Math.random() * color.length);
// };

//Hex colors and value

const container = document.querySelector(".container");
const colorValue = document.querySelector(".colorValue");
const bgBtn = document.querySelector(".bgBtn");

const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

bgBtn.addEventListener("click", () => {
  let randonNumber = 0;
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandonNumber()];
  }
  container.style.backgroundColor = hexColor;
  colorValue.textContent = hexColor;
});
const getRandonNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
