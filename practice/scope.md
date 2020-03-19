## Scope (Where to look for things)

1. Guess the output:

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

console.log(window.firstName, window.lastName, window.knownAs);
// Output: undefined undefined "no one"
```

2. Guess the output:

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
  return a + b;
}

console.log(window.fullName(firstName, lastName));
// Output: "AryaStark"
```

3. Make a Execution Context Diagram for the following JS and write the output.

```js
fucntion addOne(num){
  return num + 1;
}
var one = addOne(0);
var two = addOne(1);
console.log(one, two);
```

4. Make a Execution Context Diagram for the following JS and write the output.

```js
var one = addOne(0);
fucntion addOne(num){
  return num + 1;
}
var two = addOne(1);
console.log(one, two);
```

5. Make a Execution Context Diagram for the following JS and write the output.

```js
console.log(addOne(0));
fucntion addOne(num){
  return num + 1;
}
var two = addOne(1);
console.log(two);
```

6. Make a Execution Context Diagram for the following JS and write the output.

```js
var one = addOne(0);
const addOne = num => {
  return num + 1;
};
var two = addOne(1);
console.log(two);
```

7. Make a Execution Context Diagram for the following JS and write the output.

```js
console.log(addOne(0));
const addOne = num => {
  return num + 1;
};
var two = addOne(1);
console.log(two);
```

8. What will be the output of the following

```js
function isAwesome() {
  var awesome;
  if (false) {
    awesome = true;
  }
  console.log(awesome);
}
isAwesome();

// Output: undefined
```

9. What will be the output of the following

```js
function isAwesome() {
  let awesome;
  if (true) {
    awesome = true;
  }
  console.log(awesome);
}
isAwesome();
// Output: true
```

10. What will be the output of the following

```js
function isAwesome() {
  let awesome;
  if (false) {
    awesome = true;
  }
  console.log(awesome);
}
isAwesome();
// Output: undefined

```

11. What will be the output of the following

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
  return a + b;
}
const name = fullName(firstName, lastName);
console.log(name);
// Output: AryaStark
```

12. What will be the output of the following

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
  return a + b;
}
const name = fullName(firstName, lastName);
console.log(name);
// Output: AryaStark
```

13. Guess the output of the code below with a reason.

```js
function sayHello() {
  let name = "Arya Stark";
}
sayHello();

console.log(name);
// Output: Since variable 'name' not globally declared, it cannot be accesed from outside the function
```

14. Guess the output of the code below with a reason.

```js
if (true) {
  var name = "Arya Stark";
}
console.log(name);
// Output: Arya Stark 
// In the declaration mode variable 'name' is undefined. Since it is initialised it can be used.
```

15. Guess the output of the code below with a reason.

```js
if (true) {
  let name = "Arya Stark";
}
console.log(name);
// Output: Arya Stark
// Since the variable is is initialised before being called it can be used.
```

16. Guess the output of the code below with a reason.

```js
for (var i = 0; i < 20; i++) {
  //
}
console.log(i);
// Output: 20
// Since the variable is declared using 'var' it is declared globally. The for loop is executed till the value of i is 20. As soon as i==20 it comes out of the loop. Since we are taking the value of i outside the loop we get the last value of i. 
```

17. Guess the output of the code below with a reason.

```js
for (let i = 0; i < 20; i++) {
  //
}
console.log(i);
// Output: Invalid
// Since the variable is declared using 'let' it cannot be accesed from the outside. 
```

18. Guess the output of the code below with a reason.

```js
for (var i = 0; i < 20; i++) {
  setTimeout(() => console.log(i, "first"), 100);
}
console.log(i, "second");
// Output: 20 "first"
// Output: 20 "second" 

// Since variable declaration is done by var it is globally decalred. Threfore, inside the for loop i is executed 20 times before it comes out of the loop. Outside the loop it is executed once, because of global declaration.
```

19. Guess the output of the code below with a reason.

```js
for (let i = 0; i < 20; i++) {
  setTimeout(() => console.log(i, "first"), 100);
}
console.log(i, "second");

// Output: 20 "first"
// Output: Invalid

// Since variable declaration is done by let it is locally decalred. Threfore, inside the for loop i is executed 20 times before it comes out of the loop. It cannot be accessed from outside the loop. Therefore, gives an error.
```

20. Guess the output and the reason behind that.

```js
function sample() {
  if (true) {
    var username = "John Snow";
  }
  console.log(username);
}
// Output: undefined
// Since the function is never called

```

21. Guess the output and the reason behind that.

```js
function sample() {
  if (true) {
    let username = "John Snow";
  }
  console.log(username);
}
// Output: undefined
// Since the function is never called
```

22. Guess the output and the reason behind that.

```js
function sample() {
  var username = "Arya Stark";
  if (true) {
    var username = "John Snow";
    console.log(username);
  }
  console.log(username, "second");
}
// Output: undefined
// Since the function is never called
```

23. Guess the output and the reason behind that.

```js
function sample() {
  let username = "Arya Stark";
  if (true) {
    let username = "John Snow";
    console.log(username, "first");
  }
  console.log(username, "second");
}
// Output: undefined
// Since the function is never called
```

24. Guess the output and the reason behind that.

```js
function sample(...args) {
  for (let i = 0; i < args.length; i++) {
    let message = `Hello I am ${args[i]}`;
    console.log(message);
  }
}

sample("First", "Second", "Third");

// Output: Hello I am First
// Output: Hello I am Second
// Output: Hello I am Third
// In the for loop the arguments are passed from the sample("First", "Second", "Third");.
```

25. Guess the output and the reason behind that.

```js
function sample(...args) {
  for (let i = 0; i < args.length; i++) {
    const message = `Hello I am ${args[i]}`;
    console.log(message);
  }
}

sample("First", "Second", "Third");

// Output: Hello I am First
// Output: Hello I am Second
// Output: Hello I am Third
// In the for loop the arguments are passed from the sample("First", "Second", "Third");.
```

26. Guess the output and the reason behind that.

```js
if (true) {
  const myFunc = function() {
    console.log(username, "Second");
  };
  console.log(username, "First");
  let username = "Hello World!";
  myFunc();
}

// Output: error
// Since username is with let it is not globally decalred. Thus cannot be used before initialization.
```

27. Guess the output and the reason behind that.

```js
function outer() {
  let movie = "Mad Max: Fury Road";
  function inner() {
    console.log("I love this movie called ${movie.toUpperCase()}");
  }
  inner();
}

outer();

// Output: I love this movie called ${movie.toUpperCase()}
// Since it is wrapped using inverted commas not back-ticks.
```

28. Guess the output and the reason behind that.

```js
function outer() {
  let movie = "Mad Max: Fury Road";
  function inner() {
    let movie = "Before Sunrise";
    console.log("I love this movie called ${movie.toUpperCase()}");
  }
  inner();
}

outer();
// Output: I love this movie called ${movie.toUpperCase()}
// Since it is wrapped using inverted commas not back-ticks.

```

29. Guess the output and the reason behind that.

```js
function outer() {
  let movie = "Mad Max: Fury Road";
  function inner() {
    let movie = "Before Sunrise";
    function extraInner() {
      let movie = "Gone Girl";
      console.log("I love this movie called ${movie.toUpperCase()}");
    }
    extraInner();
  }
  inner();
}

outer();
// Output: I love this movie called ${movie.toUpperCase()}
// Since it is wrapped using inverted commas not back-ticks.

```

30. Execute all the functions inside `allFunctions` variable using any loop. (Hint: use for of loop functions are object)

```js
const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a + b;
};
const divide = (a, b) => {
  return a / b;
};

let allFunctions = [add, sub, multiply, divide];
// Output: undefined. Since the function is not called yet.
```

31. You have to pass 10 and 12 as initial value and find the final output when you pass the return value of one function as an input to the next function in the array `allFunctions`.

```js
const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a + b;
};
const divide = (a, b) => {
  return a / b;
};

let allFunctions = [add, add, add, add, add, sub, sub, multiply, divide];
// Output: undefined. Since the function is not called yet.
```