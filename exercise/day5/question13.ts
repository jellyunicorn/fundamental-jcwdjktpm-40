// Question 13

function rps(player: string) {

    const ROCK: string = "rock";
    const PAPER: string = "paper";
    const SCISSORS: string = "scissors";

    if (player.toLowerCase() != ROCK &&
        player.toLowerCase() != PAPER &&
        player.toLowerCase() != SCISSORS
    ) {
        return "unknown input";
    }

    // declare random number from 0-2
    const MIN: number = 0;
    const MAX: number = 2;
    const RANGE: number = MAX - MIN + 1;
    const rn: number = Math.floor(Math.random() * RANGE + MIN);

    // opponent chooses
    let opponent: string;
    if (rn === 0) opponent = ROCK;
    else if (rn === 1) opponent = PAPER;
    else if (rn === 2) opponent = SCISSORS;
    else opponent = "";
    console.log("opponent picks " + opponent)

    // comparing hands
    const WIN_MESSAGE: string = "win";
    const TIE_MESSAGE: string = "tie";
    const LOSE_MESSAGE: string = "lose";

    if (player === ROCK && opponent === PAPER) return LOSE_MESSAGE;
    else if (player === ROCK && opponent === SCISSORS) return WIN_MESSAGE;
    else if (player === PAPER && opponent === ROCK) return WIN_MESSAGE;
    else if (player === PAPER && opponent === SCISSORS) return LOSE_MESSAGE;
    else if (player === SCISSORS && opponent === ROCK) return LOSE_MESSAGE;
    else if (player === SCISSORS && opponent === PAPER) return WIN_MESSAGE;
    else return TIE_MESSAGE;
}

console.log(rps("rock"));