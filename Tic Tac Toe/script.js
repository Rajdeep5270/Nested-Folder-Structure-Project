// human vs computer option select button 
const optionSelectBtn = document.getElementById("optionSelectBtn");

const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

const inputFields = document.getElementById("inputFields");
const displayBoard = document.getElementById("displayBoard");
const playerDetailsButton = document.getElementById("playerDetailsButton");

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

// start game function 
function startGame() {
    playerDetailsButton.addEventListener('click', e => {
        inputFields.style.display = "none";

        playerNamesDisplay.style.display = "flex";
        player1Name.innerText = player1.value + ": X";
        player2Name.innerText = player2.value + ": O";

        displayBoard.style.display = "flex";
    })
};

// get all boxes func 
function getAllBoxes() {
    return document.querySelectorAll('.box');
};

// check condition func 
function checkCondition() {
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
        return isWin = true;
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
        return isWin = true;
    }
}

// restart game button 
restartBtn.addEventListener('click', e => {
    alert("Restart Button is clicked...");
    window.location.reload();
});

// retry game button 
retryBtn.addEventListener('click', e => {
    alert("Retry Button is clicked...");

    isValue = false;
    count = 0;
    isWin = false;

    const button = getAllBoxes();

    button.forEach(element => {
        element.innerText = "";
    })
});

// multiplayer logic 
document.getElementById("multiplayer").addEventListener('click', e => {

    optionSelectBtn.style.display = "none";

    inputFields.style.display = "flex";

    startGame();

    const button = getAllBoxes();

    button.forEach(element => {
        element.addEventListener('click', e => {
            // console.log(e.target.id);
            // let element = document.getElementById(`${e.target.id}`);

            if (isWin) return;

            if (element.innerText !== "") {
                return;
            }

            count++;

            isValue = !isValue;

            if (isValue) element.innerText = "X";
            else element.innerText = "O";

            (element.innerText === "X") ? element.style.color = "#06B6D4" : element.style.color = "#EC4899";

            isWin = checkCondition();

            if (count >= 9) {
                alert("Game is Tie");
                restartBtn.style.display = "flex";
                retryBtn.style.display = "flex";
                // window.location.reload();
            }

            if (isWin) {
                // playerNameScore.style.display = "flex";
                restartBtn.style.display = "flex";
                retryBtn.style.display = "flex";
            }

        });
    })

});

// computer logic 
document.getElementById("computer").addEventListener('click', e => {
    optionSelectBtn.style.display = "none";

    inputFields.style.display = "flex";

    player2.value = "Computer";
    player2.setAttribute('disabled', '');

    startGame();

    const button = getAllBoxes();

    let isClicked = true;

    button.forEach(box => {
        box.addEventListener("click", function () {
            if (isWin) return;

            if (box.innerText !== "") return;

            box.innerText = "X";
            box.style.color = "#06B6D4";

            let winningMoves = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];

            // console.log(winningMoves);

            // Computer move
            const empty = [...button].filter(b => b.innerText === "");

            console.log(empty);

            if (empty.length > 0) {
                const random = empty[Math.floor(Math.random() * empty.length)];
                random.innerText = "O";
                random.style.color = "#EC4899";
                count++;
            }

            isWin = checkCondition();

            if (empty.length === 0 && !isWin) {
                alert("Game is Tie");
                restartBtn.style.display = "flex";
                retryBtn.style.display = "flex";
                // window.location.reload();
            }

            if (isWin) {
                // playerNameScore.style.display = "flex";
                restartBtn.style.display = "flex";
                retryBtn.style.display = "flex";
            }
        });
    });
}); 