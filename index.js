const countDisplay1 = document.getElementById('count1');
const countDisplay2 = document.getElementById('count2');
const countDisplay3 = document.getElementById('count3');

const inrementBtn1 = document.getElementById('btn-incre1');
const inrementBtn2 = document.getElementById('btn-incre2');
const inrementBtn3 = document.getElementById('btn-incre3');

const decrementBtn1 = document.getElementById('btn-decre1');
const decrementBtn2 = document.getElementById('btn-decre2');
const decrementBtn3 = document.getElementById('btn-decre3');

let displayCount1 = 0;
let displayCount2 = 0;
let displayCount3 = 0;

// 1
inrementBtn1.addEventListener('click', function () {
    if (displayCount1 === 30) {
      return  alert('you can count till 30')
    }
    displayCount1 += 1;
    countDisplay1.innerText = displayCount1;
})
decrementBtn1.addEventListener('click', function () {
    if (displayCount1 === 0) {
      return  alert('you can,t decrease below 0')
    }
    displayCount1 -= 1;
    countDisplay1.innerText = displayCount1;
})
// 2
inrementBtn2.addEventListener('click', function () {
    if (displayCount2 === 30) {
      return alert('you can count till 30')
    }
    displayCount2 += 1;
    countDisplay2.innerText = displayCount2;
})
decrementBtn2.addEventListener('click', function () {
    if (displayCount2 === 0) {
      return  alert('you can,t decrease below 0')
    }
    displayCount2 -= 1;
    countDisplay2.innerText = displayCount2;
})
// 3

inrementBtn3.addEventListener('click', function () {
    if (displayCount3 === 30) {
      return  alert('you can count till 30')
    }
    displayCount3 += 1;
    countDisplay3.innerText = displayCount3;
})
decrementBtn3.addEventListener('click', function () {
    if (displayCount3 === 0) {
      return  alert('you can,t decrease below 0')
    }
    displayCount3 -= 1;
    countDisplay3.innerText = displayCount3;
})

document.getElementById('reset-btn').addEventListener('click', function (){
    countDisplay1.innerText = 0;
    countDisplay2.innerText = 0;
    countDisplay3.innerText = 0;
})