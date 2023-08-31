


const elCards = document.querySelector(".cards")
const elSearchInput = document.querySelector(".search-input")
const elBtn = document.querySelector("#btn")
const elSelect = document.querySelector("#continents")
const elAll = document.querySelector(".all")
let countries ;

fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
  .then((res) => {
    console.log(res);
    renderposts(res, elCards);
    countries = res;
  });
  function renderposts(array, parent) {
    parent.innerHTML = "";
  
    for (let i = 0; i < array.length; i++) {
      const element = array[i]
      const newCard = document.createElement("div");
      newCard.className = "card card-style";
      newCard.style.width = "18rem";
  
      newCard.innerHTML = `
      <div class="card" style="width: 18rem;">
      <img src="${element.flags.png}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${element.name.official}</h5>
        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Population: <span>${element.population}</span> </li>
        <li class="list-group-item">Region: ${element.region}</li>
        <li class="list-group-item">Capital: ${element.capital}</li>
      </ul>
      
    </div>
          `;

   
  
      parent.appendChild(newCard);
    }
  }

  elBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    const newArr = [];
  
    countries.forEach((element) => {
      if (
        element.name.official.toLowerCase().includes(elSearchInput.value.toLowerCase())
      ) {
        newArr.push(element);
      }
    } );
    
    renderposts(newArr, elCards);
  });
console.log();

  

elSelect.addEventListener("change", (evt) => {

  
    fetch(`https://restcountries.com/v3.1/region/${elSelect.value}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      renderposts(res, elCards);
    })
  }
)



  
  


  
  renderposts(array, parent)