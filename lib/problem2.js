type="text/javascript"

let input
let show
let total = 0; 
let list = []
let average = 0; 
let max, min ;
let count = 0

function readInput() {
    if (input >= 0) {
        list.push(input)
    }
}
function displayStats(list) {
    if (list.length >= 0) {
    list.sort(function(a, b) {return a - b});
    for (i = 0; i < list.length; i++ ) {
        total += Number(list[i]);
    }
    average = total / list.length;
    max = Math.max(...list);
    min = Math.min(...list);
    }
    alert("For the list " + list + " ,the average is " + average + ", the minimum is " + min + ", and the maximum is " + max);
    count++
}