const dec = document.getElementById("dec");
const rec = document.getElementById("rec");
const inc = document.getElementById("inc");
const count = document.getElementById("count");

let c = 0;

dec.onclick = function () {
    c -= 1;
    count.textContent = c;
}
rec.onclick = function () {
    c = 0;
    count.textContent = c;
}
inc.onclick = function () {
    c += 1;
    count.textContent = c;
}