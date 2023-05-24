/*
console.log("hello world");
console.log(typeof "matina");
console.log(typeof 42);
console.log(typeof true); 
*/

//String methids and properties
/*
const myVariable = "mathematics";

//properties
console.log(myVariable.length);

//methods
console.log(myVariable.charAt(0));
console.log(myVariable.charAt(6));

console.log(myVariable.indexOf("at")); //first occurence
console.log(myVariable.lastIndexOf("at"));

//will include starting letter but not the end one.
console.log(myVariable.slice(4, 8));

console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());

//will return true if the given string has the requested string
console.log(myVariable.includes("div"));
console.log(myVariable.includes("mat"));

//split the string with the given letter and return an array
console.log(myVariable.split("e"));

// indivudal letter ma split hunxa
console.log(myVariable.split(""));
console.log("John,joe,dave".split(",")); //each word becomes individual string
*/

/*
//Number methods and properties:

//to convert to different datatype:
const myNumber = 42;
console.log(myNumber);

const myFloat = 42.0566786785;
console.log(myFloat);

console.log(myNumber === myFloat);

const myString = "42";
console.log(myNumber === myString);

console.log(myString + 3); //adds the number at the end of string.
//convert string to number
console.log(Number(myString) + 3);

console.log(myNumber === myString);

console.log(Number(true));

console.log(Number.isInteger(myString));
console.log(Number.parseFloat(myString));
console.log(myFloat.toFixed(2));

*/

//Math methods and properties:
/*
console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(Math.PI));
console.log(Math.ceil(Math.PI));
console.log(Math.floor(Math.PI));

console.log(Math.pow(5, 2));
console.log(Math.min(2, 5, 9));
console.log(Math.max(2, 5, 9));
console.log(Math.random(2, 5, 9));

console.log(Math.floor(Math.random() * 10) + 1);
//return a random letter from ypour name;
console.log("Matina".charAt());

console.log("Matina".charAt(Math.floor(Math.random() * 6)));

let myName = "MtinShresth";
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
*/

//if statement
/*
let customerisBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;
if (customerisBanned) {
  reply = "No soup for you!";
} else if (soup && crackers) {
  reply = `here your order of ${soup} & crackers`;
} else if (soup) {
  reply = `here's your order of ${soup}`;
} else {
  reply = "we are out of soup";
}
console.log(reply);
*/

//ternary operator:
/*
let soup = "Chicken Noodle Soup";
let response = soup ? "Yes, we have soup. " : "Sorry, no soup today.";
console.log(response);

let soup;
let response = soup ? "Yes, we have soup. " : "Sorry, no soup today.";
console.log(response);

let soup;
let isCustomerbanned = false;
let soupAccess = isCustomerbanned
  ? "Sorry"
  : soup
  ? `yes, we have ${soup} for you`
  : "no soup";
console.log(soupAccess);
*/

//user input
// alert("hello world");
// let myOp = confirm("Ok === True\n Cancel === False");

// console.log(myOp);

/*
let myName = prompt("Please enter your name");
if (myName) {
  console.log(myName.length);
  console.log(myName.trim().length);
  console.log(myNamehglg.trim());
} else {
  console.log("You didn't enter your name");
}*/

//Your First Interactive Game

let playGame = confirm("Shall we play rock, paper, or scissors?");

if (playGame) {
  let playerChoice = prompt("Please enter rock, paper, or scissors.");

  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      let result =
        playerOne === computer
          ? "Tie Game!"
          : playerOne === "rock" && computer === "paper"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : playerOne === "paper" && computer === "scissors"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : playerOne === "scissors" && computer === "rock"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;

      alert(result);
      let playAgain = confirm("Play Again?");
      playAgain ? location.reload() : alert("Thank you for playing");
    } else {
      alert("You didn't enter rock, paper, or scissors.");
    }
  } else {
    alert("I guess you changed your mind. Maybe next time.");
  }
} else {
  alert("Ok, maybe next time.");
}

/*function sum(num1, num2) {
  if (num2 === undefined) {
    return num1 + num1;
  }
  return num1 + num2;
}

console.log(sum(5));*/

/*function getUsernameFromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}

console.log(getUsernameFromEmail("sthatdfghg2@gmail.com"));
*/

/*
const getUsernameFromEmail = function (email) {
  return email.slice(0, email.indexOf("@"));
};

console.log(getUsernameFromEmail("sthatdfghg2@gmail.com"));
*/

/*
const getUsernameFromEmail = (email) => {
  return email.slice(0, email.indexOf("@"));
};

console.log(getUsernameFromEmail("sthatdfghg2@gmail.com"));
*/
