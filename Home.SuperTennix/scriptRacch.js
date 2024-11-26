fetch("racchette_tennis1.json").then((response) => response.json()).then((data) => {
    console.log(data);

    let productsWrapper = document.querySelector('#productsWrapper');

    function showCards( array ){


        productsWrapper.innerHTML =" ";

        array.sort( ( a ,b) => b.prezzo - a.prezzo );

        array.forEach((element) => {
            
            let div = document.createElement('div');
            div.classList.add('col-12', 'col-md-4', 'my-2');
            div.innerHTML = `
            <div class="product-card card">
                <img src=" ${element.immagine} " alt="" class="card-img-top">
                <div>
                    <p class="fw-bold fs-5">${element.nome}</p>
                    <p class="lead fw-bold">€ ${element.price}</p>
                    <p class="">${element.descrizione}</p>
                </div>
               <button class="colorB text-white">Aggiungi al carrello</button>
</div>
</div>
            </div>
            `
            productsWrapper.appendChild(div)
        });
    }
    showCards(data);


    let priceInput = document.querySelector("#priceInput");
    let priceNumber = document.querySelector("#priceNumber");
    
    function setPriceInput() {
        let maxPrice = data[0].price 
        priceInput.max = maxPrice;
        priceInput.value = maxPrice;
        priceNumber.innerHTML = maxPrice;
        console.log(maxPrice);
        
    }
    
    setPriceInput();
    
    
    
    priceInput.addEventListener( "input" , ()=> {
        
        priceNumber.innerHTML = priceInput.value;
        filterByPrice();
    
    } )
    
  
    
    function filterByPrice() {
        
        let filtered = data.filter( (annuncio)=> +annuncio.price <= +priceInput.value ) 
    
        showCards(filtered);
        
    
    }
})

