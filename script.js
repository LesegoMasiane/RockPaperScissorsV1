 // Your JavaScript goes here!

 let playerScore=0;
 let computerScore=0;
 let ResultScore=0;

 document.querySelector('#outcome').textContent=''
 
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

function playAgain(){
    document.querySelector('#outcome').textContent='';
    playerScore=0;
    computerScore=0;
    document.querySelector('#roundresult').textContent=computerScore + ' - ' + playerScore;

}


function displayRoundDetails(resultx){
    let roundDetails=resultx;

    //document.querySelector('#roundresult').textContent=computerScore + ' - ' + playerScore;
    document.querySelector('#roundresult').textContent=computerScore + ' - ' + playerScore;

    document.querySelector('#score').textContent=roundDetails;

    
    //console.log(roundDetails);
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

  
   //div.append('Score: '+ playerScore + ' - ' + computerScore );

   //console.log('Score: '+ playerScore + ' - ' + computerScore );

   //end game when player or computer reaches 5 points
   if (playerScore ==5){
    document.querySelector('#outcome').textContent='You Win, Play Again' ;

    //reseting score counters and the display

    playerScore=0;
    computerScore=0;

   }else if (computerScore==5){
    document.querySelector('#outcome').textContent='You Lose, Play Again'
    playerScore=0;
    computerScore=0;

   }

}

