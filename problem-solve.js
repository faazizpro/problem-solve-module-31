/*
                                Practice Problem map(), filter(), find()
1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.
*/

const myArray =[1, 3, 5, 7, 9];
const makeEven = myArray.map( num => num + 1);
// console.log(makeEven);

const oddArray =[1, 3, 5, 7, 9];
const createEven = oddArray.map( num => num + 1);
const equation = num => num + 1;
    for (let i= 0; i< createEven.length; i++) {
        const index = i;
        // console.log(index);
    }
// const result = oddArray(myArray);

let evenArray = [];
for(let i = 0; i < myArray.length; i++){
    let evenNumber = myArray[i]+1;
    evenArray.push(evenNumber);
}
console.log(evenArray);

