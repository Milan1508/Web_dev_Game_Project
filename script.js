console.log("welcome to the Gift Game")
let music = new Audio("music.mp3")
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")



let randNum1 = Math.trunc(Math.random() * (11 - 2 + 1) + 2);
let randNum2 = Math.floor(Math.random() * 16) + 5;
let randNum3 = Math.floor(Math.random() * 10) + 1;
let count = 0;

console.log(randNum1);
console.log(randNum2);
console.log(randNum3);
console.log(count);

function gameLost(){
    document.getElementById(randNum3).innerHTML = "💣";   
      
    alert("You Lost The Game")
}


function changeOpacity(id) {
    console.log(id)
    if (id == randNum1) {
        document.getElementById(randNum1).innerHTML = "🏆";
    }
    else if (id == randNum2) {
        document.getElementById(randNum2).innerHTML = "🏆";
    }
    else if(id == randNum3) {
        gameLost();
    }
    else{
        document.getElementById(id).innerHTML = "miss";
        count++;
    }

}