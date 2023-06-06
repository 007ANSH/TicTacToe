let turn = "X";
let music= new Audio("music.mp3");
let Change= new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3")
var result=true;
function CheckWin(){
    var buttons=document.getElementsByClassName("box");
    let win=[[0,1,2],[3,4,5,],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    win.forEach(e => {
        if(buttons[e[0]].innerText===buttons[e[1]].innerText && buttons[e[1]].innerText===buttons[e[2]].innerText && buttons[e[0]].innerText!==''){
            document.querySelector(".info").innerText= buttons[e[0]].innerText +" WON"; 
            document.getElementsByTagName("img")[0].style.width="200px"; 
            result=false;
        
        }
        else if(result){

            document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
        }
        
    });
}

function ChangeTurn() {
    if (turn == 'X') {
        turn = 'O';
    }
    else {
        turn='X';

    }

}

// game logic 
var buttons= document.getElementsByClassName("box");
Array.from(buttons).forEach(element => {
    element.addEventListener('click',function(e){
        if(e.target.innerText===''){
            e.target.innerHTML=turn;
        ChangeTurn();
        Change.play();
        CheckWin();
        
        }
    })

    
});
let reset=document.getElementsByClassName("btn")[0];
reset.addEventListener('click',function(){
    Array.from(buttons).forEach(e => {
        e.innerText='';
        
    });
    document.getElementsByClassName("gif")[0].style.width="0";
    turn="X";
    result=true;
    CheckWin();
})
