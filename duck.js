"use strict";

let clicks = 0;
const maxClicksAllowed = 5;

let allProducts = [];

const resultsButton = document.querySelector("button") ;

const productContainer = document.querySelector("section")

const image1 = document.querySelector("section img:nth-child(1)")
const image2 = document.querySelector("section img:nth-child(2)")
const image3 = document.querySelector("section img:nth-child(3)") 

console.log(image1)
console.log(image2)
console.log(image3)

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

console.log(allProducts, "underneath constructor");


function renderProducts() {
    let product1 = getRandomNumber();
    let product2 = getRandomNumber();
    let product3 = getRandomNumber();

    // while (product2 === product1 || product2 === product3) {
    //     product2 = getRandomNumber();
    //    }

    // while (product3 === product1 || product3 === product2) {
    //     product3 = getRandomNumber();
    // }
    console.log(allProducts, "above image1.src");

    image1.src = allProducts[product1].src;
    image2.src = allProducts[product2].src;
    image3.src = allProducts[product3].src;
    image1.alt = allProducts[product1].name;
    image2.alt = allProducts[product2].name;
    image3.alt = allProducts[product3].name;
    console.log(allProducts, "underneath image1.src");

    allProducts[product1].views++;
    allProducts[product2].views++;
    allProducts[product3].views++;
}

function handleProductClick(event) {
    if (event.target === productContainer) {
    alert("please click on an image");
    } else {
    clicks++;
    console.log(clicks);
    let clickedProduct = event.target.alt;
    //console.log(clickedProduct);
    // for (let i = 0; i < allProducts.length; i++){
    //     if (clickedProduct === allProducts[i].name)
    //     allProducts[i].clicks++;
    //     break;
    //     }
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
    // for (let i = 0; i < allProducts.length; i++) {
    //     let li = document.createElement("li");
    //     li.textContent = `${allProducts[i].name} had ${allProducts[i].views} views and was clicked ${allProducts[i].clicks} times.`;
    //     ul.appendChild(li);
    // }
 }



const bag = new Product("R2D2 bag", "archive/bag.jpg");
const banana = new Product("banana slicer", "archive/banana.jpg");
const bathroom = new Product("bathroom tablet", "archive/bathroom.jpg");
const boots = new Product("open toe boots", "archive/boots.jpg");
const breakfast = new Product("breakfast maker", "archive/breakfast.jpg");
const bubblegum = new Product("meatball bubblegum", "archive/bubblegum.jpg");
const chair = new Product("inverted chair", "archive/chair.jpg");
const cthulhu = new Product("cthulhu", "archive/cthulhu.jpg");
const dogduck = new Product("dog duck mouth", "archive/dog-duck.jpg");
const dragon = new Product("dragon meat", "archive/dragon.jpg");
const pen = new Product("pen lid utensils", "archive/pen.jpg");
const petsweep = new Product("pet sweep", "archive/pet-sweep.jpg");
const scissors = new Product("pizza scissors", "archive/scissors.jpg");
const shark = new Product("shark sleeping bag", "archive/shark.jpg");
const sweep = new Product("baby sweep", "archive/sweep.png");
const tauntaun = new Product("tauntaun sleeping bag", "archive/tauntaun.jpg");
const unicorn = new Product("unicorn meat", "archive/unicorn.jpg");
const watercan = new Product("self watering can", "archive/water-can.jpg");
const wineglass = new Product("wineglass", "archive/wine-glass.jpg");

renderProducts();

productContainer.addEventListener("click", handleProductClick); 


