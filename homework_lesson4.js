/*  1
*************************************************************
*/

function number_to_object(number) {
      
    if(number < 100 && number >= 10) {
       let new_object = number_to_tens(number);
       return new_object
    } else if (number < 10) {
        let new_object = number_to_ones(number);
        return new_object
    } else if (number >=100 && number < 1000) {
        let new_object = number_to_hundreds(number);
        return new_object
    } else if (number >= 1000) {
        return "Ошибка!Число не может превышать 999!";
    }


    
}

function number_to_tens(number) {
    let str = String(number);
    let arr = [];
    arr = str;
    function Number_to_tens(array) {
        this.tens = array[0],
        this.ones = array[1]
    }
    const new_object = new Number_to_tens(arr);
    return new_object;
}

function number_to_ones(number) {
    let str = String(number);
    let arr = [];
    arr = str;
    function Number_to_ones(array) {
        this.ones = array[0]
    }
    const new_object = new Number_to_ones(arr);
    return new_object;
}

function number_to_hundreds(number) {
    let str = String(number);
    let arr = [];
    arr = str;
    function Number_to_hundreds(array) {
        this.hundreds = array[0],
        this.tens = array[1],
        this.ones = array[2]
    }
    const new_object = new Number_to_hundreds(arr);
    return new_object;
}


let obj = number_to_object(503);
console.log(obj);


/* 2
****************************************************************
*/

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

const milk = new Good("milk", 100, "4 days");
const bread = new Good("bread", 60, "7 days");
const meat = new Good("meat", 200, "3 days");

function common_cost ( obj1, obj2, obj3) {
    let obj1_cost = obj1.getCost();
    let obj2_cost = obj2.getCost();
    let obj3_cost = obj3.getCost();
    let common_cost = obj1_cost + obj2_cost + obj3_cost;
    return common_cost;
}

let comm_cost = common_cost(milk, bread, meat);
console.log(comm_cost);