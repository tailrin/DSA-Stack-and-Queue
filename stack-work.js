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

starTrek.pop();
starTrek.pop();
console.log("\n")
display(starTrek);

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    const chars = new Stack();
    for(let i = 0; i < s.length; i++){
        chars.push(s[i]);
    }

    let palandrome = true;
    let i = 0
    while(chars.top !== null){
        const char = chars.pop();
        if(char !== s[i]){
            palandrome = false;
            break; 
        }
        i++
    }
    return palandrome
}

console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));


