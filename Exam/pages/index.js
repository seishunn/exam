const r = 150;
const smRadius = 5;
const tableHeight = 200;
const mirrorPictureWallWidth = 500;
const transitionTime = 0.8;
let n = 0;
let c = 3 * (10 ** 8);

let left = +window.getComputedStyle(flask, null).left.split("px")[0];
let f0 = toSm(left) + smRadius - toSm(mirrorPictureWallWidth);
let dF = calcDeltaF(smRadius, n).toFixed();

calcImage(r, tableHeight, null, false);

// Фокусное расстояние
function calcF(r, n) {
    return r / (2 * n - 1);
}
function calcDeltaF(r, n) {
    return Math.abs(calcF(r, n) - f0);
}

console.log("Вода: ", calcF(smRadius, 1.333))
console.log("Глицерин: ", calcF(smRadius, 1.450))



function moveFlask() {
    left = +window.getComputedStyle(flask, null).left.split("px")[0];
    dF = calcDeltaF(smRadius, n).toFixed();

    while (+dF !== 0) {
        left--;
        calcImage(r, tableHeight, left, true);
    }
    flask.style = `transition: all ${transitionTime}s ease; left: ${left}px;`
    setTimeout(() => flask.style = `left: ${left}px; transition: none`, 1000);
}

function toSm(px) {
    return px * 0.033;
}