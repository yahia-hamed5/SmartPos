let productTitle = document.querySelector(".product_title");
let cards = document.querySelector(".cards");
let shoppingCart = document.querySelector(".shopping-cart");
let closeCart = document.querySelector("#cancle");
let cart = document.querySelector(".product-cart");
let totalPrice = document.querySelector("#total");
let countInCart=document.querySelector('#countInCart')
let products = [
  {
    id: 1,
    image: "./assets/images/coldDrinks/cold-2.jpeg",
    name: "Cold 1",
    price: 100,
    categories: {
      name: "Cold Drinks",
      image: "./assets/images/coldDrinks/cold-1.jpeg",
    },
    count: 1,
  },
  {
    id: 2,
    image: "./assets/images/coldDrinks/cold-3.jpeg",
    name: "Cold 2",
    price: 200,
    categories: {
      name: "Cold Drinks",
      image: "./assets/images/coldDrinks/cold-1.jpeg",
    },
    count: 1,
  },
  {
    id: 3,
    image: "./assets/images/coldDrinks/cold-4.jpeg",
    name: "Cold 3",
    price: 300,
    categories: {
      name: "Cold Drinks",
      image: "./assets/images/coldDrinks/cold-1.jpeg",
    },
    count: 1,
  },
  {
    id: 4,
    image: "./assets/images/coldDrinks/cold-5.jpeg",
    name: "Cold 4",
    price: 400,
    categories: {
      name: "Cold Drinks",
      image: "./assets/images/coldDrinks/cold-1.jpeg",
    },
    count: 1,
  },
  {
    id: 5,
    image: "./assets/images/coldDrinks/cold-6.jpeg",
    name: "Cold 5",
    price: 500,
    categories: {
      name: "Cold Drinks",
      image: "./assets/images/coldDrinks/cold-1.jpeg",
    },
    count: 1,
  },
  {
    id: 6,
    image: "./assets/images/coldDrinks/cold-7.jpeg",
    name: "Cold 6",
    price: 600,
    categories: {
      name: "Cold Drinks",
      image: "./assets/images/coldDrinks/cold-1.jpeg",
    },
    count: 1,
  },
  {
    id: 7,
    image: "./assets/images/Burgers/burger-1.jpeg",
    name: "Burgers1",
    price: 100,
    categories: {
      name: "Burgers",
      image: "./assets/images/Burgers/burger-3.jpeg",
    },
    count: 1,
  },
  {
    id: 8,
    image: "./assets/images/Burgers/burger-2.jpeg",
    name: "Burgers2",
    price: 100,
    categories: {
      name: "Burgers",
      image: "./assets/images/Burgers/burger-3.jpeg",
    },
    count: 1,
  },
  {
    id: 9,
    image: "./assets/images/Burgers/burger-4.jpeg",
    name: "Burgers3",
    price: 100,
    categories: {
      name: "Burgers",
      image: "./assets/images/Burgers/burger-3.jpeg",
    },
    count: 1,
  },
  {
    id: 10,
    image: "./assets/images/Burgers/burger-5.jpeg",
    name: "Burgers4",
    price: 100,
    categories: {
      name: "Burgers",
      image: "./assets/images/Burgers/burger-3.jpeg",
    },
    count: 1,
  },
  {
    id: 11,
    image: "./assets/images/Burgers/burger-6.jpeg",
    name: "Burgers5",
    price: 100,
    categories: {
      name: "Burgers",
      image: "./assets/images/Burgers/burger-3.jpeg",
    },
    count: 1,
  },
  {
    id: 12,
    image: "./assets/images/Burgers/burger-7.jpeg",
    name: "Burgers6",
    price: 100,
    categories: {
      name: "Burgers",
      image: "./assets/images/Burgers/burger-3.jpeg",
    },
    count: 1,
  },
  {
    id: 13,
    image: "./assets/images/Pizza/pizza-2.jpeg",
    name: "Pizza 1",
    price: 100,
    categories: {
      name: "Pizza",
      image: "./assets/images/Pizza/pizza-1.jpeg",
    },
    count: 1,
  },
  {
    id: 14,
    image: "./assets/images/Pizza/pizza-3.jpeg",
    name: "Pizza 2",
    price: 100,
    categories: {
      name: "Pizza",
      image: "./assets/images/Pizza/pizza-1.jpeg",
    },
    count: 1,
  },
  {
    id: 15,
    image: "./assets/images/Pizza/pizza-4.jpeg",
    name: "Pizza 3",
    price: 100,
    categories: {
      name: "Pizza",
      image: "./assets/images/Pizza/pizza-1.jpeg",
    },
    count: 1,
  },
  {
    id: 16,
    image: "./assets/images/Pizza/pizza-5.jpeg",
    name: "Pizza 4",
    price: 100,
    categories: {
      name: "Pizza",
      image: "./assets/images/Pizza/pizza-1.jpeg",
    },
    count: 1,
  },
  {
    id: 17,
    image: "./assets/images/Pizza/pizza-6.jpeg",
    name: "Pizza 5",
    price: 100,
    categories: {
      name: "Pizza",
      image: "./assets/images/Pizza/pizza-1.jpeg",
    },
    count: 1,
  },
  {
    id: 18,
    image: "./assets/images/Pizza/pizza-1.jpeg",
    name: "Pizza 6",
    price: 100,
    categories: {
      name: "Pizza",
      image: "./assets/images/Pizza/pizza-1.jpeg",
    },
    count: 1,
  },
  {
    id: 19,
    image: "./assets/images/Wok/wok-1.jpeg",
    name: "Wok 1",
    price: 100,
    categories: {
      name: "Wok",
      image: "./assets/images/Wok/wok-8.jpeg",
    },
    count: 1,
  },
  {
    id: 20,
    image: "./assets/images/Wok/wok-2.jpeg",
    name: "nam2",
    price: 100,
    categories: {
      name: "Wok",
      image: "./assets/images/Wok/wok-8.jpeg",
    },
    count: 1,
  },
  {
    id: 21,
    image: "./assets/images/Wok/wok-3.jpeg",
    name: "Wok 3",
    price: 100,
    categories: {
      name: "Wok",
      image: "./assets/images/Wok/wok-8.jpeg",
    },
    count: 1,
  },
  {
    id: 22,
    image: "./assets/images/Wok/wok-4.jpeg",
    name: "Wok 4",
    price: 100,
    categories: {
      name: "Wok",
      image: "./assets/images/Wok/wok-8.jpeg",
    },
    count: 1,
  },
  {
    id: 23,
    image: "./assets/images/Wok/wok-5.jpeg",
    name: "Wok 5",
    price: 100,
    categories: {
      name: "Wok",
      image: "./assets/images/Wok/wok-8.jpeg",
    },
    count: 1,
  },
  {
    id: 24,
    image: "./assets/images/Wok/wok-6.jpeg",
    name: "Wok 6",
    price: 100,
    categories: {
      name: "Wok",
      image: "./assets/images/Wok/wok-8.jpeg",
    },
    count: 1,
  },
  {
    id: 25,
    image: "./assets/images/Desserts/dessert-2.jpeg",
    name: "Desserts 1",
    price: 100,
    categories: {
      name: "Desserts",
      image: "./assets/images/Desserts/dessert-1.jpeg",
    },
    count: 1,
  },
  {
    id: 26,
    image: "./assets/images/Desserts/dessert-3.jpeg",
    name: "Desserts 2",
    price: 100,
    categories: {
      name: "Desserts",
      image: "./assets/images/Desserts/dessert-1.jpeg",
    },
    count: 1,
  },
  {
    id: 27,
    image: "./assets/images/Desserts/dessert-4.jpeg",
    name: "Desserts 3",
    price: 100,
    categories: {
      name: "Desserts",
      image: "./assets/images/Desserts/dessert-1.jpeg",
    },
    count: 1,
  },
  {
    id: 28,
    image: "./assets/images/Desserts/dessert-5.jpeg",
    name: "Desserts 4",
    price: 100,
    categories: {
      name: "Desserts",
      image: "./assets/images/Desserts/dessert-1.jpeg",
    },
    count: 1,
  },
  {
    id: 29,
    image: "./assets/images/Desserts/dessert-6.jpeg",
    name: "Desserts 5",
    price: 100,
    categories: {
      name: "Desserts",
      image: "./assets/images/Desserts/dessert-1.jpeg",
    },
    count: 1,
  },
  {
    id: 30,
    image: "./assets/images/Desserts/dessert-7.jpeg",
    name: "Desserts 6",
    price: 100,
    categories: {
      name: "Desserts",
      image: "./assets/images/Desserts/dessert-1.jpeg",
    },
    count: 1,
  },
  {
    id: 31,
    image: "/assets/images/Pasta/pasta-2.jpeg",
    name: "Pasta 1",
    price: 100,
    categories: {
      name: "Pasta",
      image: "./assets/images/Pasta/pasta-1.jpeg",
    },
    count: 1,
  },
  {
    id: 32,
    image: "/assets/images/Pasta/pasta-3.jpeg",
    name: "Pasta 2",
    price: 100,
    categories: {
      name: "Pasta",
      image: "./assets/images/Pasta/pasta-1.jpeg",
    },
    count: 1,
  },
  {
    id: 33,
    image: "/assets/images/Pasta/pasta-4.jpeg",
    name: "Pasta 3",
    price: 100,
    categories: {
      name: "Pasta",
      image: "./assets/images/Pasta/pasta-1.jpeg",
    },
    count: 1,
  },
  {
    id: 34,
    image: "/assets/images/Pasta/pasta-1.jpeg",
    name: "Pasta 4",
    price: 100,
    categories: {
      name: "Pasta",
      image: "./assets/images/Pasta/pasta-1.jpeg",
    },
    count: 1,
  },
  {
    id: 35,
    image: "/assets/images/Pasta/pasta-4.jpeg",
    name: "Pasta 5",
    price: 100,
    categories: {
      name: "Pasta",
      image: "./assets/images/Pasta/pasta-1.jpeg",
    },
    count: 1,
  },
  {
    id: 36,
    image: "/assets/images/Pasta/pasta-6.jpeg",
    name: "Pasta 6",
    price: 100,
    categories: {
      name: "Pasta",
      image: "./assets/images/Pasta/pasta-1.jpeg",
    },
    count: 1,
  },
];
let carts = [];
// countInCart.innerText=carts.length
function renderCategories() {
  let categories = [];
  products.forEach((el) => {
    let check = categories.find((cat) => cat.name == el.categories.name);
    if (!check) {
      categories.push(el.categories);
    }
  });
  productTitle.innerText = "Categories";
  cards.innerHTML = "";
  categories.forEach((el, index) => {
    // param=el.name
    cards.innerHTML += `
        
                <div class="product-card" onclick="renderProduct('${el.name}')">
                    <div class="image">
                        <img src="${el.image}" alt="">
                    </div>
                    <p class="product_name" >${el.name}</p>
                </div>
        
        `;
  });
}

function renderProduct(name) {
  productTitle.innerHTML = `<p><a  onclick="renderCategories()">Categories</a> / ${name}</p>`;
  let product = products.filter((pro) => pro.categories.name == name);
  cards.innerHTML = "";
  product.forEach((el, index) => {
    cards.innerHTML += `
        
                <div class="product-card-type" onclick="addToCart(${el.id})">
                    <div class="image">
                        <img src="${el.image}" alt="">
                    </div>
                    <p class="product_name" >${el.name}</p>
                    <p class="product_price" >$${el.price}</p>
                </div>
        
        `;
  });
}

function addToCart(index) {


  if (window.innerWidth <= 425) {
    shoppingCart.style.left = "100%";
    
  }else{
    shoppingCart.style.left = "calc(100%  - 400px)";

  }
  


  let obj = carts.find((el) => el.id == products[index - 1].id);
  if (obj) {
    obj.count += 1;
  } else {
    carts.push({
      id: products[index - 1].id,
      image: products[index - 1].image,
      name: products[index - 1].name,
      price: products[index - 1].price,
      categories: products[index - 1].categories,
      count: products[index - 1].count,
    });
  }
  renderCarts();
  getTotal();
  renderCount()
}
closeCart.addEventListener("click", function () {
  shoppingCart.style.left = "100%";
});

function renderCarts() {
  if (carts.length == 0) {
    shoppingCart.style.left = "100%";
  }
  cart.innerHTML = "";
  carts.forEach((el, index) => {
    cart.innerHTML += `
                    <div class="product">
                    <div class="image">
                        <img src="${el.image}" alt="">
                    </div>
                    <div class="info">
                        <div class="name">Name :<p> ${el.name}</p></div>
                        <div class="price">Price : <p>$${el.price}</p></div>
                    </div>
                    <div class="btn-counter">
                        <button class="less" onclick="decressCount(${index})">-</button>
                        <p class="count">${el.count}</p>
                        <button class="more" onclick="incressCount(${index})">+</button>
                        <button class="close" onclick="cancleFromCart(${index})">x</button>
                    </div>
                </div>
    
    `;
  });
  getTotal();
}

function incressCount(index) {
  carts[index].count += 1;
  renderCarts();
}

function decressCount(index) {
  if (carts[index].count > 0) {
    carts[index].count -= 1;
    renderCarts();
  } else {
    carts.splice(index, 1);
    renderCarts();
  }
}

function cancleFromCart(index) {
  carts.splice(index, 1);
  renderCarts();
  getTotal();
  renderCount()
}

function getTotal() {
  let total = 0;
  carts.forEach((el) => {
    total += el.count * el.price;
  });
  totalPrice.innerText = `$${total}`;
}

function renderMessage() {
  productTitle.innerText = "Messages";
  cards.innerHTML = "";
}

function renderBills() {
  productTitle.innerText = "Bills";

  cards.innerHTML = "";
}

function renderSetting() {
  productTitle.innerText = "Settings";

  cards.innerHTML = "";
}

function renderDashboard() {
  productTitle.innerText = "Dashboards";
  cards.innerHTML = "";
}

renderCategories();

function renderCount(){
  countInCart.innerText=carts.length
}





function showCart() {
  
  if (shoppingCart.style.left == "100%") {
    shoppingCart.style.left = "0px";
  }else{
    shoppingCart.style.left = "100%";
  }

  // if (window.innerWidth <= 425) {
  // }else{
  //   shoppingCart.style.left = "calc(100%  - 400px)";
  // }

}


function logOut() {
  sessionStorage.removeItem('tokeen');
  window.location.href='./login.html';
}