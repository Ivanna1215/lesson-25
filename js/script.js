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



let name;
function getName () {
    let name = 'Ira';
console.log (name);
}
// console.log (name);
getName ();

// function calcSumm (numOne,numTwo,more,less){
//     let numSumm = numOne+numTwo;
//     if (numSumm>3) {
//         more ();
//     } else {
//         less();
//     }
// }
// // function showMoreMessage () {
// //     console.log ('more than 3');
// // }

// function showLessMessage () {
//     console.log ('less than 3');
//     }

 
// calcSumm (0,10,showMoreMessage,showLessMessage);

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

function calcSummTwo (numOneOne,numTwoTwo) {
if (numTwoTwo===1) {
    return numOneOne;
} else {
    return numOneOne * calcSummTwo (numOneOne,numTwoTwo-1);
}
}
console.log (calcSummTwo(8,3))

// Function Expression Функціональне виражение
function getSumm () {
    let summ = 1+2;
    console.log (summ);
}
let someVar = getSumm;
// визиваємо функцію двома способами
someVar ();
getSumm ();
// функціональний вираз може викликати функцію тільки після її створення;
// Для того щоб викликати функцію з будь-якого місця програми :
let get1301Summ;
if (2>1) {
    get1301Summ = function () {
        let summ = 101+2;
        console.log (summ);
    }
}
get1301Summ ();
// Односторокова arrow functions 
let getMessage1301 = (text,name)=>text + ',' + name +  '!';
console.log (getMessage1301('Hello','Ivanna'));

let getMessage2118 = (text,name)=>text + ' '+ '11' + ' '+ name + '!';
console.log (getMessage2118('My','num'));

// Багатострокова функція 

let getMessage = (text,name) => {
    let message = text + ',' + name + '!';
    return message;
};
console.log (getMessage ('Hello','Volodymyr'));

function showNumber (num) {
    console.log (num);
    if (num<3) {
        setTimeout (showNumber,1000,++num);
    }
   
}
setTimeout (showNumber,1000,1);

// setTimeout (showMoreMessage,3000);
// setInterval(showMoreMessage,500);

let task4Freelancer;
if (2>1) {
    task4Freelancer = function () {
        let summ = 1+2;
console.log (summ);
    }
}
task4Freelancer ();


// let get1301Summ;
// if (2>1) {
//     get1301Summ = function () {
//         let summ = 1+2;
//         console.log (summ);
//     }
// }
// get1301Summ (50,65);


// function ask(question,yes,no) {
//     if (confirm(question)) yes()
//     else no();
// }
//     ask (
//         'Do you agree?',
//         function() {alert ('You agreed')},
//         function() {alert ('You did not agree')}
//     );

function getTime (sec) {
    let  day,hour,min, hour_sec, min_sec,s;
    if (sec < 0) {
        return 'Error'
    } else if (sec ===0) {
        return 'Error000'
    }
else if (sec<60) {
    hour ='00';
    min= '00';
    s = sec;
    return `Your time ${hour}:${min}:${s}`;
} else if (sec===60) {
    hour ='00';
    min = '01';
    s = '00';
    return `Your time ${hour}:${min}:${s}`;
} else if (sec>60 && sec <3600) {
    hour ='00';
    min = Math.floor (sec / 60);
    if (min<10) {
        min = '0'+ min;
    }
    s = sec - (min*60);
    return `Your time ${hour}:${min}:${s}`;
} else if (sec===3600) {
    hour='01';
    min = '00';
    s = '00';
    return `Your time ${hour}:${min}:${s}`;
} else if (sec>3600 && sec<86400) {
         hour = Math.floor (sec/3600);
         if (hour<10) {
            hour = '0'+ hour;
        }
         hour_sec = hour*3600;
         min =Math.floor ((sec-hour_sec)/60);
         if (min<10) {
            min = '0'+ min;
        }
         min_sec = min*60;
         s = sec - hour_sec-min_sec;
         if (s<10) {
            s = '0'+ s;
        }
        return `Your time ${hour}:${min}:${s}`;
    }
    else if (sec=86400) {
day = '01';
hour = '00';
min = '00';
s = '00';
return `Your time ${day} day ${hour}:${min}:${s}`;
    }
    else if (sec>86400) {
        day = Math.floor (sec/86400);
        if (day<10) {
            day = '0'+ day;
        }
        hour = Math.floor (sec/3600);
        if (hour<10) {
           hour = '0'+ hour;
       }
        hour_sec = hour*3600;
        min =Math.floor ((sec-hour_sec)/60);
        if (min<10) {
           min = '0'+ min;
       }
        min_sec = min*60;
        s = sec - hour_sec-min_sec;
        if (s<10) {
           s = '0'+ s;
        return `Your time ${day} day ${hour}:${min}:${s}`;
            }
}
}
let res2228 = getTime (6000);
console.log (res2228);





