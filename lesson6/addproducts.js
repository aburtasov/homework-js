const goods = {
    getFullname: function() {
        return this.name;
    },
    getCost: function() {
        return this.cost;
 
    },
    getDate: function () {
        return this.date
    }
 }
 
 function Good (name,cost,date) {
     this.name = name;
     this.cost = cost;
     this.date = date;
     this.__proto__ = goods;
 
 }
 ////////////////////////////////////////////////////////////
 const milk = new Good("milk", 100, "4 days");
 const bread = new Good("bread", 60, "7 days");
 const meat = new Good("meat", 200, "3 days");

 /////////////////////////////////////////////////////////////
 
let basket = [];


const mlk = document.querySelector('#mlk');
const brd = document.querySelector('#brd');
const mea = document.querySelector('#mea');
let main_div = document.querySelector('.main');
///////////////////////////////////////////////////////////
function get_in_basket_mlk() {
    basket.push(milk);
    add_to_basket(basket);
}

function get_in_basket_brd() {
    basket.push(bread);
    add_to_basket(basket);
}

function get_in_basket_mea() {
    basket.push(meat);
    add_to_basket(basket);
}
//////////////////////////////////////////////////////////

mlk.addEventListener('click', get_in_basket_mlk);

brd.addEventListener('click',get_in_basket_brd); 

mea.addEventListener('click',get_in_basket_mea);

/////////////////////////////////////////////////////////

main_div.insertAdjacentHTML("beforeend","В корзине нет товаров");


    
  
function add_to_basket(arr) {


let price = 0;
for(i=0; i < arr.length;i++) {
if(Number.isInteger(arr[i].getCost())) {
    price = price + arr[i].getCost();
    //console.log(price);
}
let numbers_of_products = arr.length;
main_div.innerHTML = "";
main_div.insertAdjacentHTML("beforeend","В корзине количество товаров - " + numbers_of_products + ", на общую сумму " + price + " условных единиц.");

}

}



