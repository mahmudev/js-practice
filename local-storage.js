// const myFuntion = () => {
//   const productField = document.getElementById("product");
//   const quantityField = document.getElementById("product-qunt");
//   const product = productField.value;
//   const quantity = quantityField.value;
//   productField.value = "";
//   quantityField.value = "";
//   showProduct(product, quantity);
//   saveProductStorage(product, quantity);
// };
// const showProduct = (product, quantity) => {
//   const ul = document.getElementById("product-container");
//   const li = document.createElement("li");
//   li.innerText = `${product} : ${quantity}`;
//   ul.appendChild(li);
// };
// const getStoredCard = () => {
//   let cart = {};
//   const storedCart = localStorage.getItem("cart");
//   if (storedCart) {
//     cart = JSON.parse(storedCart);
//   }
//   return cart;
// };
// const saveProductStorage = (product, quantity) => {
//   const cart = getStoredCard();
//   cart[product] = quantity;
//   const cartString = JSON.stringify(cart);
//   localStorage.setItem("cart", cartString);
// };

// const displayLocalProduct = ()=>{
//     const savedCart = getStoredCard();
//     for(const product in savedCart){
//         const quantity = savedCart[product]
//         showProduct(product, quantity);

//     }
// }
// displayLocalProduct()

// var things = [
//   "abreact",
//   "abreacted",
//   "abreacting",
//   "abreaction",
//   "abreactions",
//   "abreacts",
//   "abreast",
//   "abri",
//   "abridge",
//   "abridged",
//   "abridgement",
//   "abridgements",
//   "abridger",
//   "abridgers",
//   "abridges",
//   "abridging",
//   "abridgment",
//   "abridgments",
//   "abris",
//   "abroach",
//   "abroad",
//   "abrogable",
//   "abrogate",
//   "abrogated",
//   "abrogates",
//   "abrogating",
// ];

// let issues = [];

// function submitIssue() {
//   const description = things[Math.floor(Math.random() * things.length)];;
//   const severity = things[Math.floor(Math.random() * things.length)];
//   const assignedTo =things[Math.floor(Math.random() * things.length)];
//   const id = things[Math.floor(Math.random() * things.length)];
//   const status = things[Math.floor(Math.random() * things.length)];
//   const time = new Date().toLocaleString();
//   const issue = { id, description, severity, assignedTo, status, time };
//   if (localStorage.getItem("issues")) {
//     issues = JSON.parse(localStorage.getItem("issues"));
//   }
//   issues.push(issue);
//   localStorage.setItem("issues", JSON.stringify(issues));
// }


// var things = ['Rock', 'Paper', 'Scissor'];
// var thing = things[Math.floor(Math.random()*things.length)];
// alert('The computer chose:' + thing);

