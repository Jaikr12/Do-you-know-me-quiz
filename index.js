var readlineSync = require('readline-sync');
var score = 0;
var username = readlineSync.question("May i know your name ? ");
console.log();
console.log("Welcome " + username + " to do you know Jai ? ");
console.log();

function quiz(question,answer){
  var ques = readlineSync.question(question);

  if(ques === answer ){
    console.log("right");
    score+= 1;
    
  }else{
    console.log("wrong");
  }
  console.log("Score : " + score);
  console.log("--------------------------------");

}
  
questionOne = {
  question: "Who is my favorite superhero?",
  answer: "ironman"
}

questionTwo = {
  question: "What is my favorite song?",
  answer: "Mask off"
}
questionThree ={
  question: "What is my favorite movie ?",
  answer: "dead poet society",
}
questionFour ={
  question: "What is my favortite game? ",
  answer:"football",
}
questionFive ={
  question: "Where do i live ? ",
  answer: "Bulandshahr",
}
questionSix ={
  question: "Where do i study ? ",
  answer: "Greater noida",
}
questionSeven ={
  question: "Who is my favorite footballer ?",
  answer: "CR7",
}

var arr = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven];

for(var i =0;i < arr.length;i++){
  var result = arr[i];
  quiz(result.question,result.answer); 
}
console.log("Thanks for playing");
console.log("Your final score is : " + score);
console.log("---------------------------------------");

console.log("Check out the high score. If your score is higher than the last one.Ping me and I'll update it");
console.log("rahul : 6");
console.log("aalok : 4");
