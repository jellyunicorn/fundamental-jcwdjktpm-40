function showStatus(player: (number | string)[]) {
    console.log("===========" +
        "\nName: " + player[0] +
        "\nHealth: " + player[1] +
        "\nPower: " + player[2] +
        "\n===========\n"
    );
    return;
}

function damage(attacker: any[], defender: any[]) {
    defender[1] -= attacker[2];
    return;
}

function randomItem() {
    const getsHealth: number = Math.round(Math.random());
    const getsPower: number = Math.round(Math.random());
    return [getsHealth, getsPower];
}

function useItem(player: any[]) {
    const item: number[] = randomItem();
    let healthBuff: number = 0;
    let powerBuff: number = 0;

    if (item[0] === 1) healthBuff = 10;
    if (item[1] === 1) powerBuff = 10;

    player[1] += healthBuff;
    player[2] += powerBuff;

    console.log("===========\n" +
        player[0] + " uses a random item.\n" +
        player[0] + "'s health is increased by " + healthBuff +
        " and their power is increased by " + powerBuff + "\n"
    );
    
    return;
}

function start(player1: any[], player2: any[]) {
    let turnCount: number = 1;
    while (player1[1] > 0 && player2[1] > 0) {
        if (turnCount % 2 === 1) {
            console.log(`// ${player1[0]}'s turn\n`);
            showStatus(player1);
            useItem(player1);
            damage(player1, player2);
            console.log("===========\n" +
                player1[0] + " hits " + player2[0] +
                " for " + player1[2] + " damage\n" +
                "===========\n"
            );
            
        } else {
            console.log(`// ${player1[0]}'s turn\n`);
            showStatus(player2);
            useItem(player2);
            damage(player2, player1);
            console.log("===========\n" +
                player2[0] + " hits " + player1[0] +
                " for " + player2[2] + " damage\n" +
                "===========\n"
            );
        }
        turnCount++;
    }
    if (player1[1] > player2[1]) {
        console.log(`${player1[0]} wins!`);
    } else if (player2[1] > player1[1]) {
        console.log(`${player2[0]} wins!`);
    } else {
        console.log("It's a tie!");
    }
}

const player1: (number | string)[] = ["Budi", 100, 10];
const player2: (number | string)[] = ["Joko", 100, 10];

start(player1, player2);