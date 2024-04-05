function generate(length, lower, upper, numbers, symbols) {
    const lowerchar = "abcdefghijklmnopqrstuvwxyz";
    const upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numchars = "0123456789";
    const symbolchar = "!@#$%^&*?";

    let allowedchar = "";
    let password = "";

    allowedchar += lower ? lowerchar : "";
    allowedchar += upper ? upperchar : "";
    allowedchar += numbers ? numchars : "";
    allowedchar += symbols ? symbolchar : "";

    if (length <= 0) {
        return '(password length must be atleast 1)';
    }
    if (allowedchar.length === 0) {
        return '(atleast 1 set of characters needs to be selected)';
    }
    for (let i = 0; i < length; i++) {
        const randomindex = Math.floor(Math.random() * allowedchar.length);
        password += allowedchar[randomindex];
    }
    return password;
}

const length = 12;
const lower = true;
const upper = true;
const numbers = true;
const symbols = true;

const pwd = generate(length, lower, upper, numbers, symbols);

console.log(`Generated Password : ${pwd}`);