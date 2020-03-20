const Stack = require('./stack');


const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

const peek = stack => {
    return stack.top.data
}

const isEmpty = stack => {
    return stack.top === null
}


function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
}


