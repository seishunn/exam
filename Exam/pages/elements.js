// Колба
let flask = document.getElementsByClassName("c")[0];
let flaskGorlo = document.getElementsByClassName("c_gorlo_zhizha")[0];
let flaskCircle = document.getElementsByClassName("c_circle")[0];

// Фотография слева
let mirrorImage = document.getElementsByClassName("mirror_picture")[0].getElementsByTagName("img")[0];

// Линейка
let ruler = document.getElementById("ruler");

function moveRuler(x = 483, y = 735) {
    ruler.style.left = `${x}px`;
    ruler.style.top = `${y}px`;
}

function fillForm(arr = []) {
    const form = document.forms[0];

    arr.forEach(item => {
        form.elements[item.id].value = item.value;
    })
}