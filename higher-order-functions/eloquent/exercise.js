// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

// Your code here.

let res = arrays.reduce( (acc, e) => acc.concat( [...e] ) );
console.log(res);
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
// Your code here.
function loop(value, test, update, body) {
  for ( let i = value; test(i); update(i) ) {
    body(i);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Challenge 3. Everything
function every(array, test) {
  // Your code here.
  return array.reduce((acc, value) => {

  	if( !test(value) ) {
      acc = false;
    }

    return acc;

  }, true);
  
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  // Your code here.

  let language = countBy(text, char => {
    let script = characterScript( char.codePointAt(0) );

    return script ? script.direction : "none";

  }).filter( ( {name} ) => name != "none" );
 
  let total = language.reduce( (n, {count} ) => n + count, 0);
  if (total == 0) {
    return ("No scripts found");
  }
 
  return language.reduce( ( acc, { name, count } ) => {
    if( 50 < Math.round( count * 100 / total ) ) {
      acc = name;
    }
    return acc;
  }, ' ');
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl