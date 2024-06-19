let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

function add1home() {
    let scoreNumber = scoreHome.textContent * 1
    scoreHome.textContent = scoreNumber + 1
    highlightLeader()
}

function add2home() {
    let scoreNumber = scoreHome.textContent * 1
    scoreHome.textContent = scoreNumber + 2
    highlightLeader()
}

function add3home() {
    let scoreNumber = scoreHome.textContent * 1
    scoreHome.textContent = scoreNumber + 3
    highlightLeader()
}

function add1guest() {
    let scoreNumber = scoreGuest.textContent * 1
    scoreGuest.textContent = scoreNumber + 1
    highlightLeader()
}

function add2guest() {
    let scoreNumber = scoreGuest.textContent * 1
    scoreGuest.textContent = scoreNumber + 2
    highlightLeader()
}

function add3guest() {
    let scoreNumber = scoreGuest.textContent * 1
    scoreGuest.textContent = scoreNumber + 3
    highlightLeader()
}

function newgame() {
    scoreGuest.textContent = 0
    scoreHome.textContent = 0
}

function highlightLeader() {
    let homeScore = parseInt(scoreHome.textContent);
    let guestScore = parseInt(scoreGuest.textContent);

    if (homeScore > guestScore) {
        scoreHome.classList.add('leader');
        scoreGuest.classList.remove('leader');
    } else if (guestScore > homeScore) {
        scoreGuest.classList.add('leader');
        scoreHome.classList.remove('leader');
    } else {
        scoreHome.classList.remove('leader');
        scoreGuest.classList.remove('leader');
    }
}