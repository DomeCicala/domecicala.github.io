const navDropShad = document.getElementById("drop");

addEventListener("scroll", calcNavHeight);

async function calcNavHeight()  {
    let y = ~document.body.getBoundingClientRect().y;
    if (y < -250) return;
    let calc = 250 - y / 2.8;
    if (calc < 70) calc = 70;
    navDropShad.style.height = `${calc}px` 
}

addEventListener("DOMContentLoaded", async function() {
    calcNavHeight();
});