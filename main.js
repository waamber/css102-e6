var allProducts = [];

var product1 = {
	name: "Mop Attire",
	imagePath: "./images/mopAttire.jpg",
	imageAlt: "Product: Mop Attire",
	description: "This is a really good description of our product. It really sells it. It’s the best.",
	price: 3000,
	soldOut: false
};

var product2 = {
  name: "Taco Suit",
  imagePath: "./images/tacoSuit.jpg",
  imageAlt: "Product: Taco Suit",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 25,
  soldOut: false
};

var product3 = {
  name: "Neck Decoration",
  imagePath: "./images/neckDecoration.jpg",
  imageAlt: "Product: Neck Decoration",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 750,
  soldOut: false
};

var product4 = {
  name: "Head Ornament",
  imagePath: "./images/headOrnament.jpg",
  imageAlt: "Product: Head Ornament",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 3.22,
  soldOut: true
};

var product5 = {
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

console.log("All my weid baby stuff: ", allProducts);

var productContainer = document.getElementById("product-container");
var currentProduct = allProducts[i];

for (var i = 0; i < allProducts.length; i++) {
	var currentProduct = allProducts[i];
	var domString = "";

		domString += '<section class="product">';
	    domString +=    '<div class="title child">';
	    domString +=    '<h2>' + currentProduct.name +'</h2>';
	    domString +=    '</div>';
	    domString +=    '<div class="image chilc">;'
	    domString +=      '<img src="' +currentProduct.imagePath+' "alt="'+currentProduct.imageAlt+'">';
	    domString +=    '</div>';
	    domString +=    '<div class="description child">';
	    domString +=     ' <p>' + currentProduct.description +'</p>';
	    domString +=      '<h6>' + currentProduct.price +'</h6>';
	    domString +=    '</div>';
	    domString +=  '</section>';

	console.log("Dom String from for loop", domString);  
	productContainer.innerHTML += domString;  //sets inner html into domString
};


function printProductArrayToDom(productArray) {
    for(var i = 0; i < productArray.length; i++) {

    var currentProduct = productArray[i];
    var productDomString = domString;
    productContainer.innerHTML += productDomString;
  }
};

printProductArrayToDom(allProducts);


//click on card to change border

var selectedCard;

document.getElementById("product-container").addEventListener("click", function() {
  changeTheBorder(event);
  printSelectedDescription();
});

function changeTheBorder(event) {
  if(event.target.classList.contains("child")) {
    selectedCard = event.target.parentNode;
  }else if(event.target.parentNode.parentNode.classList.contains("product")) {
    selectedCard = event.target.parentNode.parentNode;
  }else if(event.target.classList.contains("product")) {
    selectedCard = event.target;
  }
  selectedCard.classList.add("border"); //added border so .border in css to add border
}

//added extra child class to get children of card

function printSelectedDescription() {
  var description = selectedCard.childNodes[2].childNodes[1].innerHTML; //description is index[2] in child array then -- index[1] has <p> that holds description
  console.log(description);
}














