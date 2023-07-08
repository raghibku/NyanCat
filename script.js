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
// game over calc
setTimeout(() => {
    nyan=document.querySelector(".nyan");
    blackCat=document.querySelector(".blackCat");
    gameOver=document.querySelector(".gameOver");
    nX =parseInt(window.getComputedStyle(nyan,null).getPropertyValue("left")); 
    bX =parseInt(window.getComputedStyle(blackCat,null).getPropertyValue("left"));
    dX=Math.abs(nX-bX);

    if(dX<73){
        gameOver.innerHTML="GAMEOVER";
        blackCat.classList.remove("animateBlackCat");
    }
    else if (dX < 145 && cross) {
        score=score+1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000);
    }
}, 10);

function updateScore(score){
    document.querySelector("#scoreCont").innerHTML="Your Score:" +score;
}

