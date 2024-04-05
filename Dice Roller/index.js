
function rollDice() {
    const numofdice = document.getElementById("numofdice").value;
    const diceResult = document.getElementById("diceResult");
    const diceimg = document.getElementById("diceimg");
    const values = [];
    const images = [];

    for (let i = 0; i < numofdice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="./${value}.png" height="90px" width="90px">`);
    }
    diceResult.textContent = `dice : ${values.join(', ')}`;
    diceimg.innerHTML = images.join('')
}