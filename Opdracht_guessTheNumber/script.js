var firstName = prompt("Welkom! Wat is je naam?")
alert("Hey " + firstName + "!");

const generatedNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.random() * (max - min) + min;
}

function validateResult() {
    var winningResult = true;
    var result = (generatedNumber(0, 25)).toFixed();
    var raadNummer;
    var text = 'Voer een nummer in van 0 tot 25 om te beginnen met raden...';
    console.log("NUBMER", result)
    do {
        raadNummer = prompt(text);
        if (result != raadNummer) {
            alert("Dat is niet correct.")
            console.log("wrong");
            let isExecuted = confirm("Wil je opnieuw raden?");
            if (isExecuted != true) {
                winningResult = false
                break;
            }
        }
    } while (raadNummer != result);

    if (winningResult) {
        alert("Gefeliciteerd! Je hebt gewonnen!");
        console.log("congrats");
    }

}

validateResult();


alert("Dag " + firstName);

