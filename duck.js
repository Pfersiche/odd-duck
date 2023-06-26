"use strict";

let clicks = 0;
const maxClicksAllowed = 5;

let allProducts = [];

function getRandomNumber() {
    return Math.floor(Math.random() * allProducts.length);

}

function Product (name, src) {
    this.name = name
    this.src = src
    this.clicks = 0
    this.views = 0
    allProducts.push(this);

}

function renderProducts() {
    let product1 = getRandomNumber();
    let product2 = getRandomNumber();

    while (product1 === product2) {
        product2 = getRandomNumber();

    }

    image1.src = allProducts[product1].src;
    image2.src = allProducts[product2].src;
    image1.alt = allProducts[product1].name;
    image2.alt = allProducts[product2].name;
    allProducts[product1].views++;
    allProducts[product2].views++;
  
function handleProductClick(event);
if (event.target === productContainer) {
    alert("please click on an image");
 } else {
    clicks++;
    console.log(clicks);
    let clickedProduct = event.target.alt;
    for (let i = 0; i < allProducts.length; i++){
        if (clickedProduct === allProducts[i].name)
        allProducts[i].clicks++;
        break;
    }
}

if (clicks === maxClicksAllowed){
    productContainer.removeEventListener("click", handleProductClick);
    productContainer.className = "no-voting";
    resultsButton.addEventListener("click", renderResults);
    resultsButton.className = "clicks-allowed";
} else {
    renderProducts();

}

}


