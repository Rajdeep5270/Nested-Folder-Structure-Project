const player1 = document.getElementById("player1").value;
const player2 = document.getElementById("player2").value;

const inputFields = document.getElementById("inputFields");
const displayBoard = document.getElementById("displayBoard");

// player score section 
const playerNameScore = document.getElementById("playerNameScore");
const player1Details = document.getElementById("player1Details");
const player2Details = document.getElementById("player2Details");

let score = {
    player1: 0,
    player2: 0
}

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

const onFormSubmit = (e) => {
    e.preventDefault();

    console.log(player1.value);

    console.log(player2.value);

    inputFields.style.display = "none";

    displayBoard.style.display = "flex";
    playerNameScore.style.display = "flex";

    player1Details.textContent = player1.value;
    player2Details.textContent = player2.value;
}

let isValue = false;
let count = 0;

document.querySelectorAll('.box').forEach(element => {
    element.addEventListener('click', e => {
        // console.log(e.target.id);

        count++;

        isValue = !isValue;

        let box = document.getElementById(`${e.target.id}`);

        if (box.innerText !== "") {
            return;
        }

        if (isValue) box.innerText = "X";
        else box.innerText = "O";

        (box.innerText === "X") ? box.style.color = "#06B6D4" : box.style.color = "#EC4899";

        if (
            (box1.innerText === "X" && box4.innerText === "X" && box7.innerText === "X") ||
            (box1.innerText === "X" && box2.innerText === "X" && box3.innerText === "X") ||
            (box7.innerText === "X" && box8.innerText === "X" && box9.innerText === "X") ||
            (box3.innerText === "X" && box6.innerText === "X" && box9.innerText === "X") ||
            (box3.innerText === "X" && box5.innerText === "X" && box7.innerText === "X") ||
            (box1.innerText === "X" && box5.innerText === "X" && box9.innerText === "X")
        ) {
            alert("X Wins");
            score.player1++;
            window.location.reload();
        } else if (
            (box1.innerText === "O" && box4.innerText === "O" && box7.innerText === "O") ||
            (box1.innerText === "O" && box2.innerText === "O" && box3.innerText === "O") ||
            (box7.innerText === "O" && box8.innerText === "O" && box9.innerText === "O") ||
            (box3.innerText === "O" && box6.innerText === "O" && box9.innerText === "O") ||
            (box3.innerText === "O" && box5.innerText === "O" && box7.innerText === "O") ||
            (box1.innerText === "O" && box5.innerText === "O" && box9.innerText === "O")
        ) {
            alert("O Wins");
            score.player2++;
            window.location.reload();
        }

        if (count > 9) {
            alert("Game Tie");
            window.location.reload();
        }
        console.log(count);
    })
});

function displayScores() {
    const score = JSON.parse(localStorage.getItem("score"));

    // tomorrow start from here 
    // playerNameScore.style.display = "flex";

    player1.innerText = score.player1;
    player1.innerText = score.player2;
}

function setToLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}
