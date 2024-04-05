const min = 1
const max = 100
const answer = Math.floor(Math.random() * (max - min + 1)) + min

let attempts = 0
let guess
let running = true

while (running) {
    guess = window.prompt(`Guess a number between ${min} and ${max} : `);
    guess = Number(guess);
    if ((guess < 1) || (guess > 100)) {
        window.alert("Alert")
    }
    else {
        attempts += 1;
        if (guess < answer) {
            window.alert("Low...Try Again")
        }
        else if (guess > answer) {
            window.alert("High...Try Again")
        }
        else {
            window.alert("Correct :)")
            running = false
        }
    }

}
console.log(answer)