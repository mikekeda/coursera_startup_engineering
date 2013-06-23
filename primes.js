#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt";
var out = "2";
var primes=0; 
var isprime = true;
var stack = new Array();
stack = [];
for (var counter = 3; counter <= 542; counter = counter + 1)
{
    // For now, we believe that it is a prime
    isprime = true;
    var limit = Math.round(Math.sqrt(counter)); // See comment from @AresAvatar, below
    // We try to find a number between 2 and limit that gives us a reminder of 0
    for (var mod = 2; mod <= limit; mod++) {
        // If we find one, we know it's not a prime
        if (counter%mod == 0) {
            isprime = false;
            break; // Break out of the inner for loop
        }
    }

    if (isprime) {
        out += "," + counter
        console.log(counter, limit);
        primes = primes + 1;
    }
}
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

