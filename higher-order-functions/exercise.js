// Challenge 1
function addTwo(num) {
  return num+2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
  const res = word + 's';
  return res;
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  const res = [];
  
  for (let i = 0; i < array.length; i++) {
    res.push(array[i] * 2);
  };
  return res;
}

console.log(map([1, 2, 3], addTwo));

// Challenge 4

function forEach(array, callback) {
	for ( let i = 0; i < array.length; i++ ) {
    callback( array[i] );
  }
}

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {

	let result = [];
  
  forEach(array, function (item) {
    result.push( callback(item) );
  });
  
  return result;
}

//Extension 2
function reduce(array, callback, initialValue) {
  let result = initialValue;
  
  forEach(array, function(item) {
    result = callback(result, item);
  });
  
  return result;
}

//Extension 3
function intersection(...arr) {
  return arr.reduce( (acc, e ) => {
    acc.forEach( (ele,i) => {
      if( e.indexOf(ele) == -1 ) {
        acc.splice(i, 1);
      }  
    });

    return acc;
  });
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
  return arrays.reduce((acc, elementArray) =>{
    elementArray.forEach( elem => {
      if(elementArray.indexOf( elem ) != -1 && acc.indexOf(elem) == -1){
        acc.push(elem);
      }
    });
    return acc;
  },[]);
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  return array1.reduce( (acc, e, i) => {
    if( array2[i] == callback(e) ){
      acc[e] =array2[i];
    }
    return acc;
  }, {} );
}


console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {

  return arrVals.reduce( (acc, e) => {
    acc[e] = arrCallbacks.map(n => {
      return n(e);
    });
    return acc;
  }, {} );
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }