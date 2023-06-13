/* MDB */
src = "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.3.1/mdb.min.js"

/* index animations */
src = "https://unpkg.com/scrollreveal"
ScrollReveal().reveal('.reveal', { distance: '80px', origin: 'left', duration: 1500, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)', interval: 1700 });
ScrollReveal().reveal('.reveal1', { distance: '100px', origin: 'left', duration: 1500, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)' });
ScrollReveal().reveal('.reveal2', { delay: 4000, distance: '100px', origin: 'right', duration: 1500, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.5)' });
ScrollReveal().reveal('.reveal3', { delay: 1000, distance: '100px', origin: 'left', duration: 1500, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)' });
ScrollReveal().reveal('.reveal4', { delay: 1000, distance: '100px', origin: 'right', duration: 1500, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)' });

/*bio animation*/
ScrollReveal().reveal('.reveal5', { distance: '100px', origin: 'bottom', duration: 1500, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)' });

/*curriculum animation*/
const curriculum = document.querySelector(".curriculum");

curriculum.addEventListener("click", () => {
  curriculum.classList.toggle("active");
});