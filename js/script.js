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
console.log (`${a}:${b}:${c}`);
}
time (12,15,10);

function seconds (a,b,c) {
    return (a*60)*60+b*60+c;
}
let result__11 = seconds (3,20,10);
console.log (result__11);

function min (a,b) {
    if (a > b) {
     return b;
      } else {
       return  a;
      }
}
let showRes = min (1,1);
console.log (showRes);

function pow (a,b) {
    if (b<1){
        console.log ('error')
    } else {
        return a**b;
    }
}
let res1101 = pow (1,5);
console.log (res1101);

function getTime (sec) {
    if (sec=>3600) {
        let hour = Math.floor (sec/3600);
        let hour_sec = hour*3600;
        let min =Math.floor ((sec-hour_sec)/60);
        let min_sec = min*60;
        let s = sec - hour_sec-min_sec;
        return `Your time ${hour}:${min}:${s}`;
    }
else if (sec=>60) {
    let min = Math.floor (sec/60);
    return `Your time 00:${min}:${sec-min*60}`;
}
else if (sec<=0) {
    return `error`;
}

else if (sec<60) {
    return `Your time 00:00:${sec}`
}
}
let res2228 = getTime (15000)
console.log (res2228);

let name;
function getName () {
    let name = 'Ira';
console.log (name);
}
// console.log (name);
getName ();

function calcSumm (numOne,numTwo,more,less){
    let numSumm = numOne+numTwo;
    if (numSumm>3) {
        more ();
    } else {
        less();
    }
}
function showMoreMessage () {
    console.log ('more than 3');
}
function showLessMessage () {
    console.log ('less than 3');
}
calcSumm (0,10,showMoreMessage,showLessMessage);

function getResult1301 (numOne,numTwo) {
    // піднесення до степеня
    let result=1;
    // множимо result на numOne numTwo раз в циклі
    for (let i = 0; i<numTwo;i++) {
        result*=numOne;
    }
    return result;
}
console.log (getResult1301(5,3));
