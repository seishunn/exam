function calcImage(r, tableHeight, left = null, animation = false) {
    f0 = (left || +window.getComputedStyle(flask, null).left.split("px")[0]) + smRadius - mirrorPictureWallWidth;
    dF = calcDeltaF(r, n).toFixed();
    let imageStyle = `bottom: ${r + tableHeight - (f0 / 2)}px; filter: blur(${dF / 50}px); height: ${f0}px; width: ${f0}px;`;

    if (animation) {
        mirrorImage.style = imageStyle + `transition: all ${transitionTime}s ease`;
        setTimeout(() => mirrorImage.style = imageStyle + `transition: none`, 1000);
    } else {
        mirrorImage.style = imageStyle;
    }
}