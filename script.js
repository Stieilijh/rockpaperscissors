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
    document.getElementById("cpuChoice").textContent=
    "Cpu chooses "+cpuChoice;
    let player = playerChoice.toUpperCase();
    let cpu = cpuChoice.toUpperCase();
    
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
    const playerPointsText=document.getElementById("pPoints");
    const cpuPointsText=document.getElementById("cPoints");
    const winnerMsg = document.getElementById("winner");
    const reset = document.getElementById("resetButton");
    const buttons = document.querySelectorAll("button");
    if(winner==1){
        winnerMsg.textContent="Player wins! "+playerChoice+" beats "+cpuChoice;
        playerPointsText.textContent=parseInt(playerPointsText.textContent)+1;
    }else if(winner==-1){
        winnerMsg.textContent="Cpu wins! "+playerChoice+" loses to "+cpuChoice;
        cpuPointsText.textContent=parseInt(cpuPointsText.textContent)+1;
    }else if(winner==0){
        winnerMsg.textContent="Draw! "+playerChoice+" draws to "+cpuChoice;
    }else{
        console.log("Should not come here");
    }
    if(cpuPointsText.textContent==5||playerPointsText.textContent==5){
        let win =cpuPointsText.textContent==5?"Computer":"Player"; 
        document.getElementById("final-winner").textContent="Match over !! " 
        +win+" won the match!!";
        reset.style.visibility="visible";
        buttons.forEach((button)=>{
            if(button.id!="resetButton")button.disabled=true;
        });
    }
}
function play(id){
    let playerChoice=id;
    let cpuChoice = makeCpuChoice();
    announceWinner(playerChoice,cpuChoice);
    
}

window.onload=function(){
    const buttons = document.querySelectorAll("button");
    let playerChoice = "";  
    buttons.forEach((button) => {
            button.addEventListener('click', () => {
            if(button.id!="resetButton")play(button.id);
        });
    });
    const reset = document.getElementById("resetButton");
    reset.addEventListener('click',()=>{
        const playerPointsText=document.getElementById("pPoints");
        const cpuPointsText=document.getElementById("cPoints");
        const winnerMsg = document.getElementById("winner");
        winnerMsg.textContent="";
        playerPointsText.textContent="0";
        cpuPointsText.textContent="0";
        buttons.forEach((button)=>{
            button.disabled=false;
        });
        document.getElementById("final-winner").textContent=
        "";
        document.getElementById("cpuChoice").textContent=
    "";
    document.getElementById("resetButton").style.visibility="hidden";
    });
}

