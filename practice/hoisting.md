## Hoisting Exercises

1. If the code is `valid` what will be the output and if `invalid` what will be the error. Write the error message.

```js
console.log(animal);
var animal = "monkey";
// Output or Error Message
// Valid 
// Output: undefined
```

```js
console.log(animal);
let animal = "monkey";
// Output or Error Message
// Invalid
// Output: let does not initialise the variable. Therefore cannot be used in this case.
```

```js
console.log(animal);
const animal = "monkey";
// Output or Error Message
// Invalid
// Output: const does not initialise the variable. Therefore cannot be used before exection. 
```

```js
function sayHello(msg) {
  alert(msg);
}
sayHello("Hey Everyone");
// Output or Error Message
// Valid
// Output: Hey Everyone
```

```js
sayHello("Hey Everyone");
function sayHello(msg) {
  alert(msg);
}
// Output or Error Message
// Valid
// Output: Hey Everyone
```

```js
sayHello("Hey Everyone");
var sayHello = msg => {
  alert(msg);
};
// Output or Error Message
// Valid
// Output: Hey Everyone
```

```js
sayHello("Hey Everyone");
let sayHello = msg => {
  alert(msg);
};
// Output or Error Message
// Invalid
// Output: Since let does not initialise the variable. Therefore, canot be used called before execution.

```