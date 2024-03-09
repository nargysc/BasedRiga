const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

const products = [
{
    id: 1,
    title:"New Balance",
    price:160,
    colors: [
        {
            code:"#800020",
            img:"./files/burgundy.jpg",
        },
        {
            code:"#3c4f4e",
            img:"./files/nightgreen.jpg",
        }
    ]
},
{
    id: 2,
    title:"Carhartt WIP",
    price:120,
    colors: [
        {
            code:"#194466",
            img:"./files/jeans.jpg",
        },
        {
            code:"#bac9d8",
            img:"./files/jeans2.jpg",
        }
    ]
},
{
    id: 3,
    title:"Drôle de Monsieur",
    price:178,
    colors: [
        {
            code:"navy",
            img:"./files/clothing.jpg",
        },
        {
            code:"black",
            img:"./files/clothing2.jpg",
            
        }
    ]
},
];

let choosenProduct = [0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index) => {
    item.addEventListener("click", () => {
        //current slide change
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
//change the chosen product
choosenProduct = products[index];

currentProductTitle.textContent = choosenProduct.title;
currentProductPrice.textContent = "$" + choosenProduct.price;
currentProductImg.src = choosenProduct.colors[0].img;


        currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});
