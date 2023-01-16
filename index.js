//Запитувати у користувача число до тих пір, доки воно не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
//В користувача є 3 спроби

//зробити двома способами через while і for

//* це повинна бути функція(можливо і не одна)


function check() {
    let n = 0;
    let isGuess = false;
    while (n < 3 && !isGuess) {
        const number = prompt('Please add a number','');
        if (number > 15 && number < 35 && number % 6 === 0) {
            console.log(number);
            isGuess = true
        } else {
            n++;
        }
    }
}


function check2() {
    for (let i = 0; i < 3; i++) {
        const number = prompt('Please add a number','');
        if (number > 15 && number < 35 && number % 6 === 0) {
            console.log(number);
            break;
        }
    }
}
check2();
