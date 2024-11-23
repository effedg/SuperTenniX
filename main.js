document.addEventListener("DOMContentLoaded", function () {
navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
});



//Contatore visite


function animateCounters() {
    let counters = document.querySelectorAll('.count'); 
  
    counters.forEach(counter => {
      let target = +counter.getAttribute('data-target'); 
      let increment = target / 200; 
  
      let updateCounter = () => {
        let currentValue = +counter.innerText; 
        if (currentValue < target) {
          counter.innerText = Math.ceil(currentValue + increment); 
          setTimeout(updateCounter, 10); 
        } else {
          counter.innerText = target; 
        }
      };
  
      updateCounter();
    });
  }
  
  window.addEventListener('load', animateCounters);