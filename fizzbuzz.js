// Create a function called fizzbuzz that accepts a parameter n. Have the function log all the numbers from 1 to n in order with the following exceptions:

// If the number is divisible by both 3 and 5, log "FizzBuzz" instead of the number
// If the number is divisible by 3 but not by 5, log "Fizz" instead of the number
// If the number is divisible by 5 but not by 3, log "Buzz" instead of the number


var n = prompt("Enter a positive number");

for (i=1; i<=n; i++) { 
  if ( i % 5 ===0 && i % 3 ===0) {
  console.log("FizzBuzz");
  }
  else if ( i % 3 === 0 ) { 
  console.log("Fizz");
  }
  else if ( i % 5 === 0) {
  console.log("Buzz");

  }
  else {
  console.log(i);
  }
}