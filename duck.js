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
  
function handleProductClick(event) {
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

function renderResults(){
    console.log("Your results are in!");
    let ul = document.querySelector("ul");
    for (let i = 0; i < allProducts.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${allProducts[i].name} had ${allProducts[i].views} views and was clicked ${allProducts[i].clicks} times.`;
        ul.appendChild(li);
    }
 }

} 

const bag = new Product("R2D2 bag", "img/bag.jpg");
const banana = new Product("banana slicer", "img/banana.jpg");
const bathroom = new Product("bathroom tablet", "img/bathroom.jpg");
const boots = new Product("open toe boots", "img/boots.jpg");
const breakfast = new Product("breakfast maker", "img/breakfast.jpg");
const bubblegum = new Product("meatball bubblegum", "img/bubblegum.jpg");
const chair = new Product("inverted chair", "img/chair.jpg");
const cthulu = new Product("cthulu", "img/chtulu.jpg");
const dogduck = new Product("dog duck mouth", "img/dog-duck.jpg");
const dragon = new Product("dragon meat", "img/dragon.jpg");
const pen = new Product("pen lid utensils", "img/pen.jpg");
const petsweep = new Product("pet sweep", "img/pet-sweep.jpg");
const scissors = new Product("pizza scissors", "img/scissors.jpg");
const shark = new Product("shark sleeping bag", "img/shark.jpg");
const sweep = new Product("baby sweep", "img/sweep.jpg");
const tauntaun = new Product("tauntaun sleeping bag", "img/tauntaun.jpg");
const unicorn = new Product("unicorn meat", "img/unicorn.jpg");
const watercan = new Product("self watering can", "img/water-can.jpg");
const wineglass = new Product("wineglass", "img/wine-glass.jpg");

renderProducts();

productContainer.addEventListener("click", handleProductClick); 

}