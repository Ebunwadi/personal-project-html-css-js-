// header scripting

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

// background generator app
let h3 = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector("body");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// reveal scripting
function revealMe() {
    let hideMe = document.querySelector('.hidden');
    hideMe.classList.toggle('reveal');

    let btn = document.querySelector('.func');
    if (btn.innerText === 'Click to reveal') {
        btn.innerText = 'Click to hide'
    } 
    else {
        btn.innerText = 'Click to reveal'
    }
}

// todo app scripting

let button = document.querySelector(".todos");
let input = document.querySelector(".todo");
let ol = document.querySelector("ol");


function addListAfterClick() {
    // body...
    let li = document.createElement("li");
    if (input.value.length > 0){
        li.appendChild(document.createTextNode(input.value));
        ol.appendChild(li);
        input.value = "";
    }
}
button.addEventListener("click", addListAfterClick)

let cleared = function() {
    let clear = document.getElementById('clearMe');
    clear.removeChild(clear.lastElementChild);
}

// calculator app scripting
let inputLabel = document.querySelector('#inputLabel');

      function pushBtn(val) {

          let pushed = val.innerHTML;

          if (pushed == '=') {
            // Calculate
            inputLabel.innerHTML = eval(inputLabel.innerHTML);

          } else if (pushed == 'AC') {
            // All Clear
            inputLabel.innerHTML = '0';

          } else {
          if (inputLabel.innerHTML == '0') {
              inputLabel.innerHTML = pushed;

          } else {
              inputLabel.innerHTML += pushed;
          }
        }
      }

// vowel counter app scripting

function vowelCounter(){
let result = document.querySelector("#Vowel_counter");
    let vowelCounterName = document.querySelector("#Vowel_counter_name").value;
    let counter = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for(let i of vowelCounterName.toLowerCase()){
        if (vowels.includes(i)) {
            counter = counter + 1;
        }
    }
    result.value = "Your Name has " + counter + " vowel(s)";  
}

let resett = function() {
    document.getElementById('Vowel_counter_name').value='';
    document.getElementById('Vowel_counter').value='';
}

// roman numeral scripting
const converter = () => {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let num = document.querySelector("#num").value;
  let finalresult = document.querySelector("#numResult");
  let result = '';
  
  for (key in map) {  

    const repeatCounter = Math.floor(num / map[key]);
    
    if (num < 0) {
        finalresult.value = `Enter a positive number`;
    }

    if (repeatCounter !== 0) {
      result += key.repeat(repeatCounter);
    }
    
    num %= map[key];
    
    if (num === 0) {
        finalresult.value = result;
    }
  }
  //   result += key.repeat(Math.floor(num / map[key]));
  //   num %= map[key];
  // }
  // console.log(result);
  finalresult.value = result;
  // console.log(result)
};

let reseter = function() {
    document.getElementById('num').value='';
    document.getElementById('numResult').value='';
}

// factorial app scripting

function factorial() {

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));
let text = document.querySelector('.fac');


// checking if number is negative
if (number < 0) {
    // console.log('Error! Factorial for negative number does not exist.');
    text.textContent = 'Error! Factorial for negative number does not exist.'
}

// if number is 0
else if (number === 0) {
    // console.log(`The factorial of ${number} is 1.`);
    text.textContent = `The factorial of ${number} is 1.`
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    // console.log(`The factorial of ${number} is ${fact}.`);
    text.textContent = `The factorial of ${number} is ${fact}.`
}
}
let resetter = function() {
    document.querySelector('.fac').textContent = '';
}
