// Q2.
// function test() {
//   console.log(this); // window object
// }
// test();
//--------------------------------------------------

// //Q3.
// const user = {
//   name: "Ali",
//   showName: function () {
//     console.log(this.name);
//   },
// };
// user.showName();


// // 👉 Output kya aayega aur kyu?
// // Ans ==> iska output ayega Ali because jab kisi object ke andar hum function ko define krte hai to usu  term ko method kha jta hai aur method ke andar this ki value uss object ko point krta hai it means current object.
//--------------------------------------------------

// //Q4.
// const user = {
//   name: "Sara",
//   show: () => {
//     console.log(this.name);
//   },
// };
// user.show();
// // 👉 Arrow function me this kaise behave karta hai?
// // Ans ==> Arrow function me this ki value current object nhi hota aur vo apne parent ki value accept kr leta hai iss condition me this ki value window object hoga kyuki arrow function ka parent global hai.
//--------------------------------------------------
// //5.
// const obj1 = {
//   name: "Zara",
//   inner: {
//     name: "Bilal",
//     show: function () {
//       console.log(this.name);
//     },
//   },
// };
// obj1.inner.show(); //Bilal

// 👉 this yahan kisko refer karega?
// Ans --Bilal

//==================================================
// 🔹 Level 2: call() Method

// Focus → function borrowing aur this ko manually set karna.

// Q1.
// function greet(){
//     console.log(`Hello ${this.name}`)
// }
// let user1  = {
//     name:"yugant",
//     age:23
// }

// greet.call(user1);

// // Q2.
// function intro(city){
//     console.log(`${this.name}`)
// }

// let person = {
//     name:"Zara",
// }
// intro.call(person);

//--------------------------------------------------
//  SECTION 5: call, apply, bind
// 	13.	Create a function that prints this.name.
// 	14.	Create an object that contains a name property.
// function prints(){
//     console.log(this.name);
// }
// let obj  = {
//     name:"yugant singh"
// }
// prints.call(obj);

//--------------------------------------------------
