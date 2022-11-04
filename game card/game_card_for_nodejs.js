
let my_score = 0;
let computer_score = 0;
let round = 1;

function printCard(card) {
    switch (card) {
        case 11:
            return "J";
        case 12:
            return "Q";
        case 13:
            return "K";
        case 14:
            return "A";
        default: return card;
    }
}

function gameCard() {
    setTimeout(() => {
        let my_card = Math.floor(Math.random() * (14 - 2 + 1) + 2);
        let computer_card = Math.floor(Math.random() * (14 - 2 + 1) + 2);
        console.log(`My card is: ${printCard(my_card)}`);
        console.log(`Computer card is: ${printCard(computer_card)}`);
        if (my_card > computer_card) {
            my_score++;
            console.log("Player Won");
        }
        else if (computer_card > my_card) {
            computer_score++;
            console.log("Computer has Won");

        }
        else {
            console.log("Draw");
        }
        console.log(`Your score is: ${my_score}`);
        console.log(`Computer score is: ${computer_score}`);
        console.log(`Round ${round}`);
        if (my_score < 5 && computer_score < 5) {
            round++;
            gameCard();
        }
        else if (my_score == 5) console.log("You are the winner!");
        else console.log("Computer won the game");


    }, 3000);
}

gameCard();