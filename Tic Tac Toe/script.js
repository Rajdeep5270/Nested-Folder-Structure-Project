// human vs computer option select button 
const optionSelectBtn = document.getElementById("optionSelectBtn");

const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

const inputFields = document.getElementById("inputFields");
const displayBoard = document.getElementById("displayBoard");

// player names display 
const playerNamesDisplay = document.getElementById("playerNamesDisplay");
const player1Name = document.getElementById("player1Name");
const player2Name = document.getElementById("player2Name");

// all boxes 
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");

// restart button 
const restartBtn = document.getElementById("restartButton");
const retryBtn = document.getElementById("retryButton");

let isValue = false;
let count = 0;
let isWin = false;

document.getElementById("multiplayer").addEventListener('click', e => {

    optionSelectBtn.style.display = "none";

    inputFields.style.display = "flex";

    const onFormSubmit = (e) => {
        e.preventDefault();

        inputFields.style.display = "none";

        playerNamesDisplay.style.display = "flex";
        player1Name.innerText = player1.value + ": X";
        player2Name.innerText = player2.value + ": O";

        displayBoard.style.display = "flex";
    }

    document.querySelectorAll('.box').forEach(element => {

        element.addEventListener('click', e => {
            // console.log(e.target.id);
            let box = document.getElementById(`${e.target.id}`);

            if (box.innerText !== "") {
                return;
            }

            count++;

            isValue = !isValue;

            if (isValue) box.innerText = "X";
            else box.innerText = "O";

            (box.innerText === "X") ? box.style.color = "#06B6D4" : box.style.color = "#EC4899";

            if (
                // X wins
                (box1.innerText === "X" && box2.innerText === "X" && box3.innerText === "X") ||
                (box4.innerText === "X" && box5.innerText === "X" && box6.innerText === "X") ||
                (box7.innerText === "X" && box8.innerText === "X" && box9.innerText === "X") ||
                (box1.innerText === "X" && box4.innerText === "X" && box7.innerText === "X") ||
                (box2.innerText === "X" && box5.innerText === "X" && box8.innerText === "X") ||
                (box3.innerText === "X" && box6.innerText === "X" && box9.innerText === "X") ||
                (box1.innerText === "X" && box5.innerText === "X" && box9.innerText === "X") ||
                (box3.innerText === "X" && box5.innerText === "X" && box7.innerText === "X")
            ) {
                // player1Details.innerText = "X Wins";
                alert("X Wins");
                isWin = true;
            }
            else if (
                // O wins
                (box1.innerText === "O" && box2.innerText === "O" && box3.innerText === "O") ||
                (box4.innerText === "O" && box5.innerText === "O" && box6.innerText === "O") ||
                (box7.innerText === "O" && box8.innerText === "O" && box9.innerText === "O") ||
                (box1.innerText === "O" && box4.innerText === "O" && box7.innerText === "O") ||
                (box2.innerText === "O" && box5.innerText === "O" && box8.innerText === "O") ||
                (box3.innerText === "O" && box6.innerText === "O" && box9.innerText === "O") ||
                (box1.innerText === "O" && box5.innerText === "O" && box9.innerText === "O") ||
                (box3.innerText === "O" && box5.innerText === "O" && box7.innerText === "O")
            ) {
                // player1Details.innerText = "O Wins";
                alert("O Wins");
                isWin = true;
            }

            if (count > 9) {
                alert("Game is Tie");
                // window.location.reload();
            }

            if (isWin) {
                // playerNameScore.style.display = "flex";
                restartBtn.style.display = "flex";
                retryBtn.style.display = "flex";
            }

        });

    });


})

document.getElementById("computer").addEventListener('click', e => {
    alert("Computer button is clicked...");
})

restartBtn.addEventListener('click', e => {
    alert("Restart Button is clicked...");
    window.location.reload;
});

retryBtn.addEventListener('click', e => {
    alert("Retry Button is clicked...");

    document.querySelectorAll('.box').forEach(element => {
        element.innerText = "";
    })
});

function startGame() {

}