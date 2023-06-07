let turn = "X";
let music = new Audio("music.mp3");
let Change = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3")
var result = true;
function CheckWin() {
    var buttons = document.getElementsByClassName("box");
    let win = [[0, 1, 2, 0, 1, 10]
        , [3, 4, 5,0,1,30]
        , [6, 7, 8,0,1,50]
        , [0, 3, 6,90,30,20],
    [1, 4, 7,90,30,0],
    [2, 5, 8,90,30,-20],
    [0, 4, 8,45,21,21],
    [2, 4, 6,-45,-21,21]];
    win.forEach(e => {
        if (buttons[e[0]].innerText === buttons[e[1]].innerText && buttons[e[1]].innerText === buttons[e[2]].innerText && buttons[e[0]].innerText !== '') {
            document.querySelector(".info").innerText = buttons[e[0]].innerText + " WON";
            document.getElementsByTagName("img")[0].style.width = "200px";
            result = false;
            //width 18vh
            document.querySelector(".line").style.width = "29vw";
            document.querySelector(".line").style.transform = `rotate(${e[3]}deg) translate(${e[4]}vh, ${e[5]}vh)`;


        }
        else if (result) {

            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }

    });
}

function ChangeTurn() {
    if (turn == 'X') {
        turn = 'O';
    }
    else {
        turn = 'X';

    }

}

// game logic 
var buttons = document.getElementsByClassName("box");
Array.from(buttons).forEach(element => {
    element.addEventListener('click', function (e) {
        if (e.target.innerText === '' && result===true) {
            e.target.innerHTML = turn;
            ChangeTurn();
            Change.play();
            CheckWin();

        }
    })


});
let reset = document.getElementsByClassName("btn")[0];
reset.addEventListener('click', function () {
    Array.from(buttons).forEach(e => {
        e.innerText = '';

    });
    document.querySelector(".line").style.width = "0";
    document.getElementsByClassName("gif")[0].style.width = "0";
    turn = "X";
    result = true;
    CheckWin();
})
