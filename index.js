var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + " to DO YOU KNOW Shivam? ");

// high score

var scoreList = [
  {
    player: "shruti",
    score: 5
  },
  {
    player: "affan",
    score: 4
  },
  {
    player: "satyam",
    score: 2
  },
  {
    player: "rishabh",
    score: 3
  },
  {
    player: "manthan",
    score: 5
  },
  {
    player: "rajesh",
    score: 5
  },
];

// play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("right");
    score = score + 1;

  } else {
    console.log("wrong!");
  }
  console.log("current score: ", score);
  console.log("---------------");
}

var questions = [
  {
    question: "Where do I live? ",
    answer: "gaya"
  },
  {
    question: "My favorite superhero would be? ",
    answer: "batman"
  },
  {
    question: "From which university I did my Master's from? ",
    answer: "kiit university"
  },
  {
    question: "what's my favourit dish? ",
    answer: "chole bhature"
  },
  {
    question: "what's my pet's name? ",
    answer: "chanky"
  }
];

for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

console.log("YAY! You SCORED: ", score);
console.log("");

var scores = [];

for (var i = 0; i < scoreList.length; i++) {
  scores.push(scoreList[i].score);
}

var max = Math.max(...scores);
console.log("high scorers are: ");

for (var i = 0; i < scores.length; i++) {
  if (max === scoreList[i].score) {
    console.log(scoreList[i].player + " : " + scoreList[i].score);
  }
}
console.log("-------------");
console.log("Send me your score to update the score board");