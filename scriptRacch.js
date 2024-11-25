
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










fetch('attrezzature_tennis.json')
.then(response => response.json())
.then(data => {
let productsWrapper = document.querySelector('#productsWrapper');

data.forEach(element => {

let div = document.createElement('div');
div.classList.add('col-12', 'col-md-4', 'my-2');
div.innerHTML = `
<div class="product-card">
<img src="${element.immagine}" alt="${element.nome}" class="img-fluid">
<div>
<p class="fw-bold fs-5">${element.nome}</p>
<p class="lead fw-bold">€ ${element.prezzo}</p>
<p class="text-muted">${element.descrizione}</p>
<button class="colorB text-white rounded-pill">Aggiungi al carrello</button>
</div>
</div>
`;
productsWrapper.appendChild(div);
});
})
.catch(error => console.error('Errore nel caricamento dei dati:', error));