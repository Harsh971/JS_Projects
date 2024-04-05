const text = document.getElementById("text")
const ctof = document.getElementById("ctof")
const ftoc = document.getElementById("ftoc")
const p1 = document.getElementById("p1")
let temp

function convert() {
    if (ctof.checked) {
        temp = Number(text.value);
        temp = temp * 9 / 5 + 32;
        p1.textContent = temp.toFixed(1) + "F";
    }
    else if (ftoc.checked) {
        temp = Number(text.value);
        temp = (temp - 32) * (5 / 9);
        p1.textContent = temp.toFixed(1) + "C";
    }
    else {
        p1.textContent = "Select a Unit Please..."
    }
}