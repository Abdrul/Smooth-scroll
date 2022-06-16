//Recupere tout les liens dans un tableau pour pouvoir faire apelle a des methodes 
const navLinks = [...document.querySelectorAll("nav a")];
const sections = [...document.querySelectorAll("section")];

let sectionsPosition = null;

function positionCalculation () {
    //Ici on recupere les positions de chaque sectionTop par rapport au haut de la fenetre
    sectionsPosition = sections.map(section => section.offsetTop);
};

positionCalculation();

console.log(sectionsPosition);


navLinks.forEach(link => link.addEventListener('click', addScrollSmooth));

function addScrollSmooth(e) {
    //On recupere l'index en cliquant sur les liens entre 0 et 4
    const linkIndex = navLinks.indexOf(e.target);
    window.scrollTo({
        top: sectionsPosition[linkIndex],
        behavior: "smooth"
    })
};

window.addEventListener("resize", positionCalculation);