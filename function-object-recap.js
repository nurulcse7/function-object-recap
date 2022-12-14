/*
-------------------
Six core concepts
-------------------
01. Variable (declare, naming convention, variable types, primitive, non-primitive,
     math operations, Short hand, parseInt, ParseFloat, toFixed)
02. Conditionals (comparison: >, <, >=, <=, ==, !=, ===, !==, &&, ||, if-else, else-if)
03. Array (declare, elements, odd/even number, index, get/set value, indexOf, push, pop,
    shift, unshift)
04. Loop (while, do…while, for, for…in, for…of, odd/even number, break, continue)
05. Function (declare, parameters, return, call, odd/even number,
    use the returned value from a function)
06. (declare, properties/keys, values, get/set keys values, loop object keys)  
*/

/*
01. Search on google:
(i)  function declaration vs function expression
(ii) arrow function
(iii) loop vs function
(iv) array vs object
(v) integer ve float
(vi) == vs ===
(vii) differences var, let and const
*/

/*
01. celsius -----> fahrenheit
02. fahrenheit ----> celsius
03. simple interest: principle, interest rate, time ---> interest amount
04. complex interest:
*/

// বেসিক জাভাস্ক্রিপ্ট চেকলিস্ট 

// ১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে হবে। 
var money = 99;

let skyColor = 'blue';

const isEven = 'true';


// ২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে 
for (let i = 1; i <= 100; i++) {
    // console.log(i)
}

// ৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে।
for(let i = 50; i <= 80; i+=2){
    // console.log(i)
}

// ৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো
function addThreeNumbers(number1, number2, number3) {
    var result = number1 + number2 + number3;
    return result;
}
var total = addThreeNumbers(87, 41, 56);
// console.log(total) 

/* তুমি যদি ঠেকে ঠুকে কষ্টে মষ্টে জোড়াতালি দিয়ে হলেও করতে পারো। সেই লেভেলে যেতে হবে।
জিনিসগুলা ১০০% হলে তো অবশ্যই ভালো। কোন কারণে ১০০% না হলেও ৮০% বুঝে নিতে হবে। দরকার হলে সময় দাও।
শেখার জন্য ঘাম ঝরাতে হলে এখন ঝরাও।  এছাড়াও আজকের ভিডিওতে চারটা প্রব্লেম এর কথা বলেছি। সেগুলা মাস্ট প্রাকটিস করো।
 নিজে নিজে চিন্তা করো */

// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে
function celsiusTofahrenheit(celsius){
    const fahrenheit = (celsius *9/5) +32;
    return fahrenheit;
}

// const celsius = 144;
// const fahrenheit = celsiusTofahrenheit(celsius);
// console.log(fahrenheit); 


// ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে।
function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit-32) *5/9;
    return celsius;
}

const fahrenheit = 144;
const celsius = fahrenheitToCelsius(fahrenheit)
// console.log(celsius)

// ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 
let marks = 81;
switch(marks){
    case 80:
        console.log('Congrates! You got A+');
        break;
    case 70:
        console.log('Congrates! You got A');
        break;
    case 60:
        console.log('Congrates! You got A-');
        break;
    case 50:
        console.log('Congrates! You got B');
        break;
    case 40:
        console.log('Congrates! You got C');
        break;
    case 30:
        console.log('Congrates! You got D');
        break;
    case 20:
        console.log('Opps! You failed');
        break;
    default:
        console.log('Please input one amount  20, 30, 40, 50, 60, 70, 80 ')    
}

/* ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। 
জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। */
let principle = 120;
let time = 1;
let rate = 15;

const simpleInterest = (principle*time*rate) /100

console.log(simpleInterest)

// N.B https://itvoyagers.in/javascript-program-to-calculate-simple-interest/ 

