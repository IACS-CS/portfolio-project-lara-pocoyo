// Write JavaScript here.
console.log("main.js loaded successfully!");

/* Some sample JavaScript: this just listens 
for any "click" on the hero element and then
toggles the "active" class which we use to
shift colors when they click */
let hero = document.querySelector(".hero");
hero.addEventListener("click", () => {
  console.log("They clicked the hero!");
  hero.classList.toggle("active");
});


var options = {
  strings: [
    '<i>First</i> sentence.', 
    'Hey',
    'Welcome to my Portifolio',
    'by',
    'Lara Lascolla 😝'],
  typeSpeed: 150
};

var typed = new Typed('h1', options);


