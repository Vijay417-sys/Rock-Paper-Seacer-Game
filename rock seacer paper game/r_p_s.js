// let userScore=0;
// let compScore=0;

// const choices=document.querySelectorAll(".choice");
// const msg=document.querySelector("#msg");

// // const userScorepara=document.querySelector("#User-score");
// const userScorepara = document.querySelector("#user-score");  

// // const compScorepara=document.querySelector("#Comp-score");
// const compScorepara = document.querySelector("#comp-score");  


// // const genComputerchoice=()=>{
//     const genComputerchoice = () => { 
//     const options=["rock","paper","scissors"];
//     const randIdx=Math.floor(Math.random()*3);
//     return options[randIdx];
// };

// const drawGame =() =>{
//     msg.innerText= "Game Was draw,play again!";
//     msg.style.backgroundColor ="rgb(146, 125, 86)";
// };

// const showWinner =(userWin,userChoice,compChoice)=>{
//     if(userWin){
//         userScore++;
//         userScorepara.innerText = userScore;

//         msg.innerText= `You Win 🎉! Your ${userChoice} beats ${compChoice}`;
//         msg.style.backgroundColor="green";

//     }else{
//         compScore++;
//         compScorepara.innerText=compScore;

//         msg.innerText= `You lose. ${compChoice} beats Your ${userChoice}`;
//         msg.style.backgroundColor="red";
//     }
// };
// const PlayGame = (userChoice)=>{
//     console.log("user choice =",userChoice);
//     //GENERATE Computer choie
//     const compChoice = genComputerchoice();
//     console.log("computer choice=",compChoice);
//     if(userChoice ===compChoice){  
//         drawGame();
//     }else{
//         let userWin=true;
//         if(userChoice === "rock"){
//             userWin = compChoice === "paper" ? false:true;
//         }else if(userChoice === "paper"){
//             userWin = compChoice === "scissors"?false:true;
//         }else{
//            userWin = compChoice == "rock"? false:true;
//            userWin = compChoice == "rock"? false:true;  // Wrong: should use `===` instead of `==`

           
//         }
//         showWinner(userWin,userChoice,compChoice)
//         }
//     };
//     choices.forEach((choice) => {  // Fixed typo in variable name
//     choice.addEventListener("click",()=>{
//         const userChoice = choice.getAttribute("id");  // Fixed variable name typo
//         // console.log("choie was clicked",userChoice);
//         console.log("choie was clicked", userChoice); 
//         PlayGame(userChoice);
//     });
// });



// // 


let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".chioce"); // Keep the typo as per HTML
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#User-score"); // Keep the typo as per HTML
const compScorepara = document.querySelector("#Comp-score"); // Keep the typo as per HTML

const genComputerchoice = () => { // Keep the typo as per original
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3); // Fixed: Correct random index calculation
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was a draw. Play again!";
    msg.style.backgroundColor = "rgb(146, 125, 86)";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win 🎉! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const PlayGame = (userChoice) => { // Keep the typo as per original
    console.log("User choice =", userChoice);

    // Generate Computer Choice
    const compChoice = genComputerchoice(); // Keep the typo as per original
    console.log("Computer choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true; // Fixed: used `===` instead of `==`
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked", userChoice); // Fixed typo in log message
        PlayGame(userChoice); // Keep the typo as per original
    });
});     