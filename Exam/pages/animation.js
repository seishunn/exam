async function animation() {
    await animationStep(1000, changeToWater);
    await animationStep(1000, moveFlask);
    await animationStep(1000, moveRuler);
    fillForm([
        {id: 0, value: calcF(r, n) - 12},
        {id: 1, value: 2 * Math.PI * smRadius},
        {id: 2, value: smRadius},
        {id: 3, value: n},
        {id: 4, value: c / n}
    ]);
    await animationStep(3000, changeToGlycerol);
    await animationStep(1000, moveFlask);
    fillForm([
        {id: 5, value: calcF(r, n) - 4},
        {id: 6, value: 2 * Math.PI * smRadius},
        {id: 7, value: smRadius},
        {id: 8, value: n},
        {id: 9, value: c / n}
    ]);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function animationStep(delay, fn) {
    await sleep(delay);
    fn();
}