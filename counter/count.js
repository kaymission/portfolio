// here is a variable where we can store the value of the counter
let value = 0

// set the header to the initial value
document.querySelector('#value').innerHTML = value.toString()

// 1. add a handler for the `subtract` button
document.querySelector('#subtract').onclick = function() {
 value--;
 document.querySelector('#value').innerHTML = value.toString();}
// 2. add a handler for the `add` button
document.querySelector('#add').onclick = function() {
    //value++;
    value = value + 1;
    value;
    document.querySelector('#value').innerHTML = value.toString();}
// 3. "DRY" your code out by making a function

/*function change(sign) {
    if(sign = "add") {
        value++;
        document.querySelector("#value").innerHTML = value.toString();
    }
    else {
        value--;
        document.querySelector("#value").innerHTML = value.toString();
    }
}*/