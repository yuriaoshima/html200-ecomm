/*syntax to declare an empty array*/
var cart = [];
var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.jpg"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
]

/*loop to print out name, description and price for each item*/
for (var i = 0; i < products.length; i++) {
  console.log("name: " + products[i].name);
  console.log("description: " + products[i].description);
  console.log("price: " + products[i].price);
}

//form handler to be triggered on submit. Will print to the console the value of the element with the name "filter"
function capture() {
  console.log(document.filterBy.filter.value);
  event.preventDefault();
}

/*if we have an array of JSON objects each of which has a price attribute, how can we get the sum of all the prices?*/
function sumPrices(cartArray) {
  var sum = 0;
  for (var i = 0; i < cartArray.length; i++) {
    /*cartArray[i] means the json item at that index in the array. We access the price of the item using ".price"*/
    sum = sum + cartArray[i].price;
  }
  console.log(sum);
}
sumPrices(products);

/////////////////////////////////////////////////////////////
/*adding and removing items from cart*/
function addItem(item) {
  /*checks to see if the item is in the cart array. If not, the index returned is -1*/
  var index = cart.indexOf(item);
  if (index == -1) {
    cart.push(item);
  }
  console.log(cart);
}

function remove(item) {
  var index = cart.indexOf(item);
  if (index != -1) {
    cart.splice(index, 1);
  }
  console.log(cart);
}