let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreId = document.querySelector("#user-score");
const compScoreId = document.querySelector("#comp-score");



const genCompChoice = ()=>{

    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};

const drawGame = ()=>{
    console.log("Game was Draw.");
    msg.innerText = " Game was Draw, Play Again! ";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice)=> {
    if(userWin)
    {
        userScore++;
        userScoreId.innerText = userScore;

        console.log(" You Win! ");
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScoreId.innerText = compScore;

        console.log(" You Lose!! ");
        msg.innerText = `You Lose. ${compChoice} beats ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }

};



const playGame = (userChoice) =>{

    console.log("User Choice : ", userChoice);
    // Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("Computer Choice : " , compChoice);

    // fight between user and computer

    if(userChoice === compChoice)
    {
        // match draw
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            // Computer Choice may be either paper or scissor
            userWin = (compChoice === "paper") ? false : true;

        }
        else if(userChoice === "paper")
        {
            // Computer Choice may be either rock or scissor
            userWin = (compChoice === "rock") ? true : false;

        }
        else
        {
            // In this case , user have choice = "scissor".
            // Computer Choice may be either rock or paper
            userWin = (compChoice === "rock") ? false : true;

        }

        showWinner(userWin, userChoice, compChoice);
    }

};


choices.forEach((choice)=>{
    
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked" , userChoice);
        playGame(userChoice);

    } );
});


