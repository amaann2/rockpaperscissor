const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result >  h2");
const user_score = document.getElementById("user-score");
const comp_score = document.getElementById("comp-score");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
let userscore = 0;
let compscore = 0;

function compchoice(){
    const choice = ["r","p","s"];
    const random =Math.floor(Math.random()*3) ;
    return choice[random]
}
function lettertoword(letter){
    if (letter === 'r') {
        return "rock";
    }
    if (letter === 'p') {
        return "paper";
    }
    else{
        return "scissors";
    }
}
function win(userchoice , computerchoice){
    userscore++;
    user_score.innerHTML = userscore;
    comp_score.innerHTML = compscore;
    result_div.innerHTML = lettertoword(userchoice)+ " beats  "+ lettertoword( computerchoice)  + " You Win";
    
}
function lose(userchoice , computerchoice){
    compscore++;
    user_score.innerHTML = userscore;
    comp_score.innerHTML = compscore;
    result_div.innerHTML = lettertoword(userchoice)+ " losses to  "+ lettertoword( computerchoice)  + " You loose";
}
function draw(userchoice , computerchoice){
    user_score.innerHTML = userscore;
    comp_score.innerHTML = compscore;
    result_div.innerHTML = lettertoword(userchoice)+ " equal to  "+ lettertoword( computerchoice)  + " its draw";
}

 function game(userchoice){
     const computerchoice = compchoice();
     console.log(userchoice);
   console.log(computerchoice)
   switch (userchoice + computerchoice) {
       case "rs":
       case "pr":
       case "sp":
           win(userchoice , computerchoice);
           break;
   
       case "sr":
       case "rp":
       case "ps":
           lose(userchoice , computerchoice)
           break;

       case "ss":
       case "rr":
       case "pp":
           draw(userchoice , computerchoice)
           break;
       
   }
 }
 game();

function main(){
rock.addEventListener("click", function () {
  game("r");
});
paper.addEventListener("click", function () {
 game("p");
});
scissors.addEventListener("click", function () {
  game("s");
});
}
main();