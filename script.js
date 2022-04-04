function makeCpuChoice(){
    let rand=parseInt(Math.random()*1000);
    if(rand%3==0){
        return "Rock";
    }else if(rand%3==1){
        return "Paper";
    }else{
        return "Scissors";
    } 
}
function assignWinner(playerChoice,cpuChoice){
    let player = playerChoice.toUpperCase();
    let cpu = cpuChoice.toUpperCase();
    console.log(player+"   "+cpu);
    if(player=="ROCK"){
        if(cpu=="SCISSORS"){
            return 1;
        }else if(cpu=="PAPER"){
            return -1;
        }else if(cpu=="ROCK"){
            return 0;
        }else{
            console.error("Should not come here");
        }
    }else if(player=="SCISSORS"){
        if(cpu=="SCISSORS"){
            return 0;
        }else if(cpu=="PAPER"){
            return 1;
        }else if(cpu=="ROCK"){
            return -1;
        }else{
            console.error("Should not come here");
        }
    }else if(player=="PAPER"){
        if(cpu=="SCISSORS"){
            return -1;
        }else if(cpu=="PAPER"){
            return 0;
        }else if(cpu=="ROCK"){
            return 1;
        }else{
            console.error("Should not come here");
        }
    }else{
        console.error("Not the right options chosen");
    }
}
function announceWinner(playerChoice,cpuChoice){
    let winner = parseInt(assignWinner(playerChoice,cpuChoice));
    console.log(winner);
    if(winner==1){
        alert("Player wins! "+playerChoice+" beats "+cpuChoice);
    }else if(winner==-1){
        alert("Cpu wins! "+playerChoice+" loses to "+cpuChoice);
    }else if(winner==0){
        alert("Draw! "+playerChoice+" draws to "+cpuChoice);
    }else{
        console.log("Should not come here");
    }
}
function play(){
    let playerChoice=prompt("Choose one : Rock , Paper or Scissors");
    while(!(playerChoice.toUpperCase()=="ROCK"||
    playerChoice.toUpperCase()=="PAPER"||
    playerChoice.toUpperCase()=="SCISSORS")){
        playerChoice=prompt
        ("There must have been some typo please type the correct spelling");
    }
    let cpuChoice=makeCpuChoice();
    announceWinner(playerChoice,cpuChoice);
}
for(let i=0;i<5;i++)
play();

