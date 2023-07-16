let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-scor");//getElementById() Method retuns the value based on id
const compScore_span = document.getElementById("comp-scor");
const scorebord_div = document.querySelector(".score-board");//retuns the value based on the selector here . is my selector
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
  const choices=['r','p','s'];
  const randomNumber = Math.floor(Math.random() * 3);// math.random is a method & *3 is bcz v hv 3 option
  return choices[randomNumber];
}
function convertToWord(letter){
  if(letter === "r") return "Rock";
  if(letter === "p") return " Paper";
  return "Scissor"
}

function win( userChoice, ComputerChoice){
const smallUserWord ="user".fontsize(3).sub();//small upper word as user
const smallcompWord ="comp".fontsize(3).sub();//small upper word as comp
const userChoice_div = document.getElementById(userChoice)
userScore++;
userScore_span. innerHTML = userScore ;
compScore_span.innerHTML =  compScore;
//result_p.innerHTML =convertToWord(userChoice)+ " beats " + convertToWord(ComputerChoice) + " , you win!🔥" // it is in CSS5
result_p.innerHTML =`${convertToWord(userChoice)}${smallUserWord}  beats  ${convertToWord(ComputerChoice)}${smallcompWord}. You win!"👍`;//`` is in ES6  v cn get rid of +&"" $ {} r used to convert str
userChoice_div.classList.add('green_glow');
setTimeout(()=>userChoice_div.classList.remove('green_glow'),300);
}
function lose(userChoice, ComputerChoice){
  const smallUserWord ="user".fontsize(3).sub();
  const smallcompWord ="comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice)
  compScore++;
  userScore_span. innerHTML = userScore ;
  compScore_span.innerHTML =  compScore;
  result_p.innerHTML =`${convertToWord(userChoice)}${smallUserWord}  loses  ${convertToWord(ComputerChoice)}${smallcompWord}. You lost...!"👎`;
  userChoice_div.classList.add('red_glow');
  //setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},1000);//CSS5
  setTimeout(()=>userChoice_div.classList.remove('red_glow'),300);
}
function draw(userChoice, ComputerChoice){
  const smallUserWord ="user".fontsize(3).sub();
  const smallcompWord ="comp".fontsize(3).sub();
  const userChoice_div=document.getElementById(userChoice)
  result_p.innerHTML =`${convertToWord(userChoice)}${smallUserWord}  equals  ${convertToWord(ComputerChoice)}${smallcompWord}. it's a draw!"🙌`;
  userChoice_div.classList.add('gray_glow');
  setTimeout(()=>userChoice_div.classList.remove('gray_glow'),300);
}
function game(userChoice){
  const ComputerChoice = getComputerChoice();
  switch (userChoice + ComputerChoice) {
    case "rs":
    case "pr":
    case "sp":
        win(userChoice, ComputerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
       lose(userChoice, ComputerChoice);
    break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, ComputerChoice);
    break;
  }
}

function main(){
rock_div.addEventListener('click', function() {
    game("r");// on clicking rock we call this fun , r value ll store in function game()
})
paper_div.addEventListener('click', function() {
   game("p");
})
scissor_div.addEventListener('click', function() {
  game("s");
})
}
main();
