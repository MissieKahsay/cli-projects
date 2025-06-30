# ✅ JavaScript

## 📌 Console

```js
console.log("Hello"); // Output to console
```

---

## 📌 Data Types

```js
let str = "Text"; // String
let num = 42; // Number
let bool = true; // Boolean
let nothing = null; // Null
let notDefined; // Undefined
```

---

## 📌 Variables

```js
let a = 1; // Block scoped, reassignable
const b = 2; // Block scoped, not reassignable
var c = 3; // Function scoped (avoid using)
```

---

## 📌 Operators

```js
+ - * / %    // Arithmetic
=== !== ==   // Comparison (strict vs loose)
&& || !      // Logical (and, or, not)
```

---

## 📌 Conditionals

```js
if (a > 5) {
  console.log("Big");
} else if (a === 5) {
  console.log("Medium");
} else {
  console.log("Small");
}
```

---

## 📌 Ternary Operator

```js
let result = a > 10 ? "Big" : "Small";
```

---

## 📌 Switch

```js
switch (value) {
  case "A":
    console.log("A");
    break;
  default:
    console.log("Other");
}
```

---

## 📌 Functions

```js
function greet(name) {
  return "Hi " + name;
}

const square = (n) => n * n; // Arrow function
```

---

## 📌 Arrays

```js
const fruits = ["apple", "banana"];
fruits.push("mango"); // Add to end
fruits.pop(); // Remove last
fruits[0]; // Access by index
fruits.length; // Get size
```

---

## 📌 Looping Arrays

```js
for (let i = 0; i < arr.length; i++) {...}
for (let item of arr) {...}
arr.forEach(item => {...});
```

---

## 📌 Array Methods

```js
arr.map((x) => x * 2); // Returns new array
arr.filter((x) => x > 10); // Filters values
arr.reduce((a, b) => a + b, 0); // Combines to one
```

---

## 📌 Objects

```js
const user = {
  name: "Missie",
  age: 30,
};

user.name; // Access
user["age"]; // Alternate access
user.job = "dev"; // Add property
delete user.age; // Remove
```

---

## 📌 Object Methods & `this`

```js
const person = {
  name: "Missie",
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};
```

---

## 📌 Classes & Constructors

```js
class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log(`${this.name} barks`);
  }
}

const myDog = new Dog("Rex");
myDog.bark();
```

---

## 📌 Inheritance & `super`

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}
```

---

## 📌 Promises

```js
const p = new Promise((resolve, reject) => {
  resolve("Done!");
});

p.then((res) => console.log(res)).catch((err) => console.log(err));
```

---

## 📌 Async / Await

```js
async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
```

---

## 📌 DOM Access (Browser Only)

```js
document.getElementById("btn").textContent = "Clicked!";
document.querySelector("p").style.color = "red";
```

---

## 📌 Event Listener

```js
btn.addEventListener("click", () => {
  alert("Button clicked");
});
```

---

## 📌 Fetch API

```js
fetch("https://api.example.com")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```
