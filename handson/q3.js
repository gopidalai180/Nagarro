function maps(array,some_operation) {
    var temp =[];
    var i = 0;
    while(i< array.length){
        temp.push(some_operation(array[i]));
        i++;}
    return temp;
}

function for_each(array,some_operation) {
    var temp =[];
    var i = 0;
    while(i< array.length){
        some_operation(array[i]);
        i++;}

}


function square(number) {
    console.log(number*number);
    return number* number;
}

var maps1 = maps([1,2,3,4,5],square);

var foreach = for_each([6,7,8,9],square);

console.log(maps1);
console.log(foreach);
