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

const display = stack => { 
    let current = stack.top;
    while (current !== null) { 
        console.log(current.data);
        current = current.next;
    }
 }
display(starTrek);
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
}


