// var loader = document.getElementById("preloader");
// window.addEventListener("load", function(){
//     loader.style.display = "none";
// })


var addItemId = 0;
function addToCart (item) {
    addItemId += 1;
    var selectedItem = document.createElement ('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', addItemId);
    var img = document.createElement('img');
    img.setAttribute('src',item.children[0].currentSrc);
    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;
    var delBtn = document.createElement('button');
    delBtn.innerText = "delete";
    delBtn.setAttribute('onclick', 'del('+addItemId+')');
    var cartItems = document.getElementById('title');
    selectedItem.append(delBtn);
    selectedItem.append(img);
    cartItems.append(selectedItem);
}

function del (item) {
    document.getElementById(item).remove();
}


        // filter
 const filterButtons = document.querySelectorAll(".filter_buttons button");
 const filterableCards = document.querySelectorAll(".filterable_cards .card_filter");

 const filterCards =  e  => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active")
    
   filterableCards.forEach(card =>{
    card.classList.add("hide");

    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
     card.classList.remove("hide");
    }
   })
 }

 filterButtons.forEach(button => button.addEventListener("click", filterCards));
 
let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts = [
    {
        id: 1,
        name: 'Name product white-black',
        price: 205600,
        quantity: 0,
        image: 'img1.jpg',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'Sumkalar'
        }
    },
    {
        id: 2,
        name: 'Name product white-black-grey',
        price: 300000,
        quantity: 30,
        image: 'img2.jpg',
        nature: {
            color: ['white', 'black', 'grey'],
            size: ['S', 'M', 'L'],
            type: 'Saatlar'
        }
    },
    {
        id: 3,
        name: 'Name product black',
        price: 200000,
        quantity: 30,
        image: 'img7.jpg',
        nature: {
            color: ['black'],
            size: ['S', 'M', 'L'],
            type: 'Destler'
        }
    },
    {
        id: 4,
        name: 'Name product blue-black',
        price: 400000,
        quantity: 30,
        image: 'img3.jpg',
        nature: {
            color: ['black', 'blue'],
            size: ['S', 'M', 'L'],
            type: 'Sumkalar'
        }
    },
    {
        id: 5,
        name: 'Name product brown',
        price: 300000,
        quantity: 30,
        image: 'img4.jpg',
        nature: {
            color: ['brown'],
            size: ['S', 'M', 'L'],
            type: 'Sumkalar'
        }
    },
    {
        id: 6,
        name: 'Name product white-black',
        price: 300000,
        quantity: 30,
        image: 'img6.jpg',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'Saatlar'
        }
    },
    
];
let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter){
  count.innerText = productFilter.length;
  list.innerHTML = '';
  productFilter.forEach(item => {
   let newItem = document.createElement('div');
   newItem.classList.add('item');

   let newImage = new Image();
   newImage.src =item.image;
   newItem.appendChild(newImage);

   let newTitle = document.createElement('div');
   newTitle.classList.add('title');
   newTitle.innerText = item.name;
   newItem.appendChild(newTitle);

   let newPrice = document.createElement('div');
   newPrice.classList.add('price');
   newPrice.innerText = item.price;
   newItem.appendChild(newPrice);

   list.appendChild(newItem);
  });
}
console.log(listProducts);

filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        if(valueFilter.category.value != ''){
            if(item.nature.type != valueFilter.category.value){
                return false;
            }
        }
        return true;
    })
    showProduct(productFilter);
})