 type="text/javascript"

 function showPrimes(n) {
     num =[]
    for (let i=2; i<=n; i++){
        if (!isPrime(i)) continue; 
        num.push(i)    
    } 
    alert("For n =" + n + " prime numbers are " + num); // a prime   
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if ( n % i == 0) return false;
    }
    return true;
}



