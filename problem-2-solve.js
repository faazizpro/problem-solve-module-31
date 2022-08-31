/*
                                Practice Problem reduce()
1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method. 
*/
const numbers = [ 1, 9, 17, 22 ];
const sumNum = numbers.reduce((previous, current) => {
    // console.log(previous, current);
    return previous + current;
}, 0);
// console.log(sumNum);


let sum = 0;
for( const number of numbers){
    let nSum = number
    sum = sum + nSum;
}
// console.log(sum);