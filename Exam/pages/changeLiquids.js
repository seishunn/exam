function changeToWater() {
    n = 1.333;
    flaskGorlo.style = `background-image: url("./assets/water.webp");background-size: cover;`;
    flaskCircle.style = `background-image: url("./assets/water.webp");background-size: cover;`;
}
function changeToGlycerol() {
    n = 1.450;
    flaskGorlo.style = `background-image: none; background-color: rgba(255, 255, 255, .6)`;
    flaskCircle.style = `background-image: none; background-color: rgba(255, 255, 255, .6)`;
}