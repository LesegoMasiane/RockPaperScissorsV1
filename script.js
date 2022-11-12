 // Your JavaScript goes here!

 let playerScore=0;
 let computerScore=0;
 let ResultScore=0;
 
 function getComputerChoice(){
 let b;
 let a=Math.floor(Math.random()*3+1)
 
 if (a==1){
     b='ROCK'
 }else if (a==2) {
     b='PAPER'
 }else if (a==3){
     b='SCISSORS'
 }
 return b.toUpperCase()

}


function displayRoundDetails(resultx){
    let roundDetails=resultx;

    console.log(roundDetails);
}



function PlayRound(playerSelection){
let playerSelectionx =playerSelection;

computerSelection=getComputerChoice();

let computer=computerSelection.toUpperCase();

let player=playerSelection.toUpperCase();


let result ='';
        

    //if same hands drawn
    if (computer==player.toUpperCase()){
        
        result =" IT'S A DRAW ! ";
        
    }

        //Player win conditions

    if (computer=='ROCK' && player=='PAPER'){
       
        result ="You Win! "  + player + " beats " + computer;
        playerScore+=1;
    }

    if (computer=='SCISSORS' && player=='ROCK'){
       
       result ="You Win! "  + player + " beats " + computer;

       playerScore+=1;
    }

   if (computer=='PAPER' && player=='SCISSORS' ){
       result ="You Win! "  + player + " beats " + computer;

       playerScore+=1;

   }

   // computer win conditions

       //win conditions
       if (computer=='PAPER' && player=='ROCK'){
        
       
       result ="You Lose! "  + computer + " beats " + player;
       computerScore+=1;
   }

   if (computer=='ROCK' && player=='SCISSORS'){
      
      result ="You Lose! "  + computer + " beats " + player;

      computerScore+=1;
   }

  if (computer=='SCISSORS' && player=='PAPER' ){
      result =" You Lose! "  + computer + " beats " + player;
      computerScore+=1;

  }
   
   displayRoundDetails(result);

   console.log('Score: '+ playerScore + ' - ' + computerScore );

   //end game when player or computer reaches 5 points
   if (playerScore ==5){
    console.log('You Win');

    //reseting score counters and the display

    console.clear;
    playerScore=0;
    computerScore=0;

   }else if (computerScore==5){
    console.log('You Lose')
    console.clear;
    playerScore=0;
    computerScore=0;

   }

}

