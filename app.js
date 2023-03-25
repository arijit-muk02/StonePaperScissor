let coms=0;
let mscore=0;
let move=10;
const compscore= document.getElementsByClassName('c-score');
const myscore= document.getElementsByClassName('m-score');
const stone= document.getElementsByClassName('stoneBtn');
const paper= document.getElementsByClassName('paperBtn');
const scissor= document.getElementsByClassName('scissorBtn');
const left=document.getElementsByClassName('left');
const resul=document.getElementsByClassName('result');

function compChoice(){
let choices=["r","p","s"];
let rand=Math.floor(Math.random()*3);
return choices[rand];
}

function win(){
mscore++;
move--;
myscore[0].textContent=mscore;
left[0].innerHTML=move;
resul[0].innerHTML="WIN";
if(move==0)
{
    if(coms>mscore)
        {
            resul[0].innerHTML="Computer won";
        }
        else if(coms<mscore)
        {
            resul[0].innerHTML="You won";
        }
        else
        {
            resul[0].innerHTML="Game Tied";
        }
}
}

function lose(){
coms++;
move--;
compscore[0].textContent=coms;
left[0].innerHTML=move;
resul[0].innerHTML="LOSE";
if(move==0)
{
    if(coms>mscore)
        {
            resul[0].innerHTML="Computer won";
        }
        else if(coms<mscore)
        {
            resul[0].innerHTML="You won";
        }
        else
        {
            resul[0].innerHTML="Game Tied";
        }
}
}

function tie(){
move--;
left[0].innerHTML=move;
resul[0].innerHTML="TIE";
if(move==0)
{
    if(coms>mscore)
        {
            resul[0].innerHTML="Computer won";
        }
        else if(coms<mscore)
        {
            resul[0].innerHTML="You won";
        }
        else
        {
            resul[0].innerHTML="Game Tied";
        }
}
}

function game(userChoice){
    let comChoice= compChoice();
    if(move!=0)
    {
        switch(userChoice+comChoice)
        {
            case "rs":
            case "sp":
            case "pr":
                win();
                break;
            case "rp":
            case "sr":
            case "ps":
                lose();
                break;
            case "rr":
            case "sr":
            case "pp":
                tie();
                break;
            }
    }
}
stone[0].addEventListener("click",()=>{game("r");})
paper[0].addEventListener("click",()=>{game("p");})
scissor[0].addEventListener("click",()=>{game("s");})

