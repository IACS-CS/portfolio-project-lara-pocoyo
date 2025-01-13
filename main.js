

onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  document.addEventListener("DOMContentLoaded", function() {
    const words = document.querySelectorAll('.word');
    let delay = 0;
    
    words.forEach((word, index) => {
        setTimeout(() => {
            word.classList.add('show');
        }, delay);
        delay += 500;  // Delay de 500ms para cada palavra
    });
});
for (const card of document.querySelectorAll(".card")) {
  card.addEventListener(
    "click",
    function () {
      card.querySelector("a").click()
    }
  )
}