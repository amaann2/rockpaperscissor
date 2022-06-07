const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result >  h2");
const user_score = document.getElementById("user-score");
const comp_score = document.getElementById("comp-score");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
let userscore = 0;
let compscore = 0;
function computerchoice() {
    const comp =[ "r","p","s"];
    const random = Math.floor(Math.random()*3);
    return comp[random];
}
function lettertoword(letter){
    if (letter == "r") {
        return "rock";
    }
    if (letter == "p") {
        return "paper";
    }
    else{
        return "scissors";
    }
}

function win(userchoice , computerchoicee) {
    userscore++;
    user_score.innerHTML = userscore;
    comp_score.innerHTML =compscore;
    result_div.innerHTML =lettertoword(userchoice)+" beat " +lettertoword(computerchoicee)+" you have win ";
}
function lose(userchoice , computerchoicee) {
    compscore++;
    user_score.innerHTML = userscore;
    comp_score.innerHTML =compscore;
    result_div.innerHTML = lettertoword(userchoice)+" loose to "  +lettertoword(computerchoicee)+"  Yiou lose ";
}
function draw(userchoice , computerchoicee) {
    user_score.innerHTML = userscore;
    comp_score.innerHTML =compscore;
    result_div.innerHTML = lettertoword(userchoice)+" equals " +lettertoword(computerchoicee)+" its draw ";
}
function game(userchoice) {
    const computerchoicee = computerchoice();
    switch (userchoice + computerchoicee) {
        case "rs":
        case "pr":
        case "sp":
            win(userchoice,computerchoicee);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userchoice,computerchoicee);
            break;
        case "rr":
        case "pp":
        case "pp":
            draw(userchoice , computerchoicee);
            break;
    
    
    }
}

function main(){
rock.addEventListener("click",function(){
  game("r")
})
paper.addEventListener("click",function(){
  game("p")
})
scissors.addEventListener("click",function(){
  game("s")
})
}
main();