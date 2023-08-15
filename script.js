const navDropShad = document.getElementById("gradient");
const navLinks = document.getElementById("navlinks");

const proportionMaxHeight = 26.88;
const proportionMinHeight = 7.53;
const scrollProportion = .36;

let maxNavHeight = window.innerHeight * proportionMaxHeight / 100;
let minNavHeight = window.innerHeight * proportionMinHeight / 100;

addEventListener("scroll",calcNav);
addEventListener("resize",resizeCalc);

async function resizeCalc() {
    maxNavHeight = window.innerHeight * proportionMaxHeight / 100;
    minNavHeight = window.innerHeight * proportionMinHeight / 100;
}

async function calcNav() {
    let y = document.body.getBoundingClientRect().y;
    if (y < -500) return;
    let calcHeight = maxNavHeight + y * scrollProportion;
    let opacity = `${100 + y * scrollProportion}%`;
    if (calcHeight < 70) calcHeight = 70;
    navDropShad.style.height = `${calcHeight}px`;
    Array.from(navLinks.children).forEach(r => r.style.opacity = opacity);
}

calcNav();