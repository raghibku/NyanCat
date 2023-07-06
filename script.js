score = 0;
cross = true;

document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        nyan = document.querySelector('.nyan');
        nyan.classList.add('animateNyan');
        setTimeout(() => {
            nyan.classList.remove('animateNyan')
        }, 700);
    }
    if (e.keyCode == 39) {
        nyan = document.querySelector('.nyan');
        nyanX = parseInt(window.getComputedStyle(nyan, null).getPropertyValue('left'));
        nyan.style.left = nyanX + 120 + "px";
    }
    if (e.keyCode == 37) {
        nyan = document.querySelector('.nyan');
        nyanX = parseInt(window.getComputedStyle(nyan, null).getPropertyValue('left'));
        nyan.style.left = (nyanX - 120) + "px";
    }
}


