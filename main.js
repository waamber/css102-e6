const allProducts = [];

const product1 = {
	name: "Mop Attire",
	imagePath: "./images/mopAttire.jpg",
	imageAlt: "Product: Mop Attire",
	description: "This is a really good description of our product. It really sells it. It’s the best.",
	price: 3000,
	soldOut: false
};

const product2 = {
  name: "Taco Suit",
  imagePath: "./images/tacoSuit.jpg",
  imageAlt: "Product: Taco Suit",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 25,
  soldOut: false
};

const product3 = {
  name: "Neck Decoration",
  imagePath: "./images/neckDecoration.jpg",
  imageAlt: "Product: Neck Decoration",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 750,
  soldOut: false
};

const product4 = {
  name: "Head Ornament",
  imagePath: "./images/headOrnament.jpg",
  imageAlt: "Product: Head Ornament",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 3.22,
  soldOut: true
};

const product5 = {
  name: "Boob Hat",
  imagePath: "./images/boobHat.jpg",
  imageAlt: "Product: Boob Hat",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 36,
  soldOut: true
};

allProducts.push(product1);
allProducts.push(product2);
allProducts.push(product3);
allProducts.push(product4);
allProducts.push(product5);

const addNewProduct = (name, imagePath, imageAlt, description, price, soldOut) =>{
  let newProduct = {name, imagePath, imageAlt, description, price, soldOut};
  allProducts.push(newProduct);
};

addNewProduct("Butt Paste", "https://s7d9.scene7.com/is/image/BedBathandBeyond/7519213811920p?$478$", "Creamy", "Smooth as your baby's butt", 4.99, true);

const productContainer = document.getElementById("product-container");

const buildDomString = (product) => {
	let domString =  `<section class="product">
	                    <div class="title child">
	                     <h2>${product.name}</h2>
              	      </div>
              	      <div class="image child">
              	         <img src="${product.imagePath}" alt="${product.imageAlt}">
              	      </div>
              	      <div class="description child">
	                      <p>${product.description}</p>
              	        <h6>${product.price}</h6>
              	      </div>`
     if(product.soldOut === true){                
          domString =  `<div class="sold-out child">
                        <img src="./images.soldOut.png" alt="Sold Out">
                      </div>`
                    }
          domString =`</section>`

	console.log("Dom String from for loop", domString);  
	productContainer.innerHTML += domString;  //sets inner html into domString
};

const printProductArrayToDom = (productArray) => {
    for(let i = 0; i < productArray.length; i++) {
      const currentProduct = productArray[i];
      const productDomString = buildDomString;
    productContainer.innerHTML += productDomString;
  }
};

printProductArrayToDom(allProducts);

let selectedCard;

productContainer.addEventListener("click", (event) => {
  changeTheBorder(event);
  printSelectedDescription();
});

const changeTheBorder = (event) => {
  if(event.target.classList.contains("child")) {
    selectedCard = event.target.parentNode;
  }else if(event.target.parentNode.parentNode.classList.contains("product")) {
    selectedCard = event.target.parentNode.parentNode;
  }else if(event.target.classList.contains("product")) {
    selectedCard = event.target;
  }
  selectedCard.classList.add("border"); 
}

const printSelectedDescription = () => {
  const description = selectedCard.childNodes[2].childNodes[1].innerHTML; //description is index[2] in child array then -- index[1] has <p> that holds description
  console.log(description);
}














