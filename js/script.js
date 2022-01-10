'use strict'

function getNum (firstNum,secondNum,thirdNum){
return '' + firstNum + secondNum + thirdNum;
}
let num = getNum (4,5,8)
console.log (num)

function getSquare (a,b) {
    if (a && b) {
        return a*b;
    } else {
        return a*a;
    }
}
let result = getSquare (6,5);
console.log (result);

function perfectNum (a) {
    let result = 0 ;
    for (let i = 1; i < a; i++) {
        if ((a % i) === 0) {
            result = result  + i;  
    } 
}
if (result===a) {
return true;
} else {
return false;
 } 
}
console.log (perfectNum (6));

function getAllPerfectNums(a,b) {
for(let i = a;i<b;i++ ) {
    if (perfectNum(i)) {
        console.log (i);
    }
}
}
getAllPerfectNums (3,50);

function time (a,b = '00',c = '00') {
  
    if (b===0) {
        console.log (`${a}:00:${c}`);
    } else if (c===0) {
        console.log (`${a}:${b}:00;`);
    } else {
console.log (`${a}:${b}:${c}`);
    }
}
time (12);