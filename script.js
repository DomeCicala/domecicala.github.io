const navDropShad = document.getElementById("drop");

addEventListener("scroll",calcNavHeight);

async function calcNavHeight() {
    let maxNavHeight = window.innerHeight * 26.88 / 100;
    let minNavHeight = window.innerHeight * 7.53 / 100;
    let y = document.body.getBoundingClientRect().y;
    if (y < -500) return;
    let calc = maxNavHeight + y * .36;
    if (calc < 70) calc = 70;
    navDropShad.style.height = `${calc}px` 
}

calcNavHeight();