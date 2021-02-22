const main = document.querySelector('.main');
const goods = document.createElement('div');
goods.classList.add('goods');
main.appendChild(goods);

let products = [50, 100, 200, 300];

function  countBasketPrice (arr) {
    let result = 0;
    for(i=0; i < arr.length; i++){
       
        result = result + arr[i];
    }
    
    return result;
}

let price = countBasketPrice(products);

if (price > 0) {
   let numbers_of_products = products.length;
   goods.insertAdjacentHTML("beforeend","В корзине количество товаров - " + numbers_of_products + ", на общую сумму " + price + " условных единиц.");

}
else if(price === 0) {
    goods.insertAdjacentHTML("beforeend","В корзине нет товаров");
}