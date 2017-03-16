/*syntax to declare an empty array*/
var cart = [];

var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg",
    "srcset": "images/reversible-plaid_125.jpg 125w, images/reversible-plaid_250.jpg 250w, images/reversible-plaid_500.jpg 500w",
    "sizes": "(max-width: 500px) 125px, (max-width: 1400px) 250px, (min-width: 1401px) 500px",
    "alt": "Reversible Plaid Scarf"
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

/*loops through the product array and adds the prices together*/
function sumPrices(cartArray) {
  var sum = 0;
  for (var i = 0; i < cartArray.length; i++) {
    /*cartArray[i] means the json item at that index in the array. We access the price of the item using ".price"*/
    sum = sum + cartArray[i].price;
  }
  console.log(sum);
}

/////////////////////////////////////////////////////////////
/*adding and removing items from cart*/
function addItem(item) {
  /*checks to see if the item is in the cart array. If not, the index returned is -1*/
  var index = cart.indexOf(item);
  var cartItems;
  var output;
  /*if the item is not in the cart, then push the item into the cart array*/
  if (index == -1) {
    cart.push(item);
    output = " " + cart.length;
    cartItems = document.getElementById('items');
    cartItems.innerHTML = output;
  }
  console.log(cart);
}

/*removes an item from the cart as long as the item exists in the cart in the first place*/
function remove(item) {
  /*if the item is in the cart, then we should return an index that is not -1*/
  var index = cart.indexOf(item);
  var output;
  var cartItems;
  /*if item is in cart, remove it from cart*/
  if (index != -1) {
    cart.splice(index, 1);
    output = "<p>" + cart.length + "</p>";
    cartItems = document.getElementById('items');
    if (cart.length == 0) {
      cartItems.innerHTML = "";
    } else {
      cartItems.innerHTML = output;
    }
  }
  console.log(cart);
}

/////////////////////////////////////////////////////////////
/*functions used to sort the products array based on whether name or price is chosen as the filter value
////////////////////////////////////////////////////////////
/*when using the compare function, you must return negative number if a < b, positive number is a > b and 0 if a equals b. You can use -1, 0, and 1 but in certain cases it's easier to just use a-b*/ 
function sortByName(a, b) {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
}

/*check here for explanation on how sort(compareFunc) works: http://stackoverflow.com/questions/6567941/how-does-sort-function-work-in-javascript-along-with-compare-function*/
function sortByPrice(a, b) {
  return a.price - b.price;
}

//form handler to be triggered on submit. Will print to the console the value of 'filter' and also sort items in the product array in the filter order choosen*/
function capture() {
  /*saves the filter value of either price or name*/
  var filterValue = document.filterBy.filter.value;
  console.log(filterValue);
  if (filterValue == "price") {
    /*sort the products array by price*/
    products.sort(sortByPrice);
    /*print out the products array in its entirety*/
    console.log(products);
    /*print out just the prices for clarity*/
    for (var i = 0; i < products.length; i++) {
      console.log(products[i].price);
    }
  }
  if (filterValue == "name") {
    /*sort products array by name*/
    products.sort(sortByName);
    /*print out the array in its entirety*/
    console.log(products);
    /*print out just the names for clarity*/
    for (var i = 0; i < products.length; i++) {
      console.log(products[i].name);
    }
  }
  event.preventDefault();
}

//these functions need to be loaded after the HTML is loaded
//into the window
//all others not in this function are user initiated or variables
window.onload = function() {
  /*loop to print out name, description and price for each item*/
  for (var i = 0; i < products.length; i++) {
    console.log("name: " + products[i].name);
    console.log("description: " + products[i].description);
    console.log("price: " + products[i].price);
  }

  /*calls the sumPrices function with the products array*/
  sumPrices(products);
}
