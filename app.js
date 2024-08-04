let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=() =>{
    const options=["Rock","Paper","Scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("Game was draw.");
        msg.innerText="Game was Draw. Try Again.."
            msg.style.backgroundColor="#081b31"
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        // console.log("You Win!!!");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        // console.log("You lose..");
        compScore++;
        compScorePara.innerText=compScore;
       msg.innerText=`You lose. ${compChoice} beats your ${userChoice}`
           msg.style.backgroundColor="red";
    }
}
    
const playGame=(userChoice) =>{
console.log("user choice=",userChoice);
//to generate computer choice
const compChoice=genCompChoice();
console.log("comp choice=",compChoice);
if(userChoice===compChoice){
    //draw game
    drawGame();
}else{
    let userWin= true;
    if(userChoice==="Rock"){
        //scissors,paper
       userWin= compChoice==="Paper"? false:true;
    } else if(userChoice==="Paper"){
        //rock,scissors
       userWin= compChoice==="Scissors"? false:true;
    }else{
        //rock,paper
      userChoice= compChoice==="Rock"? false:true;
    }

    showWinner(userWin,userChoice,compChoice);
}

}

//user choice code
choices.forEach((choice)=> {
    // console.log(choice);   all choice display on console window
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});