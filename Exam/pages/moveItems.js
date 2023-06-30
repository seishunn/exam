ruler.onmousedown = function (e) {
    ruler.style.position = 'absolute';
    moveAt(e);
    document.body.appendChild(ruler);

    function moveAt(e) {
        ruler.style.left = e.pageX - ruler.offsetWidth / 2 + 'px';
        ruler.style.top = e.pageY - ruler.offsetHeight / 2 + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
    }
    ruler.onmouseup = function() {
        document.onmousemove = null;
        ruler.onmouseup = null;
    }
}
flask.onmousedown = function(e) {
    flask.style.position = 'absolute';
    moveAt(e);
    document.body.appendChild(flask);

    function moveAt(e) {
        flask.style.left = e.pageX - flask.offsetWidth / 2 + 'px';
        left = +window.getComputedStyle(flask, null).left.split("px")[0];

        if (left <= 500) {
            flask.style.left = '500px';
        }

        if (left >= window.innerWidth - 600) {
            flask.style.left = `${window.innerWidth - 600}px`;
        }

        calcImage(r, tableHeight);
    }

    document.onmousemove = function(e) {
        moveAt(e);
    }
    flask.onmouseup = function() {
        document.onmousemove = null;
        flask.onmouseup = null;
    }
}