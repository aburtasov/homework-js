/*  1
*/


function simple_numbers (start, end) {
    
    while(start <= end) {
        let number = start;

        if(isSimple(number)){
            console.log(number);
        }
        
        start++;
    }
}

function isSimple(number) {
    for (j=2; j < number; j++){
           if(number % j === 0) {
               return false;
           }
           
    }
    return true;
}

simple_numbers(0,100);



/* 2-3

*/

let goods = [50, 250, 300, 500, 600];

function  countBasketPrice (arr) {
    let result = 0;
    for(i=0; i < arr.length; i++){
       
        result = result + arr[i];
    }
    
    return result;
}

let Price = countBasketPrice(goods);
console.log(Price);



/* 4



for(i=0; i < 10; console.log(i++)) {

}

*/


/* 5

*/

    
    str = 'x';
    for(i=1; i <= 20; i++){
        console.log(str);
        str = str + 'x';
    }

    

    
   

