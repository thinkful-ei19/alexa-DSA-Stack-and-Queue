'use strict';

class _Node {
  constructor(data, next) {
    this.data=data;
    this.next=next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    // if the top of stack is empty
    // then data will be top of stack
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    // if the top already has something then create a new node
    // add data to the new node
    // have the pointer point to the top
    const node = new _Node(data, this.top);
    this.top = node;
    return node;
  }

  pop() {
    // in order to remove the top of the stack, you have to point
    // the pointer to the next item and that next item becomes the
    // top of the stack
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

/////////// WRITE HELPER FUNCTIONS BELOW ///////////

function peek(stack) {
  if (stack.top === null) {
    return 'The stack is empty';
  }
  const node = stack.top;
  console.log('The top of the stack is:', node.data);
  return node.data;
}

function display(stack) {
  if (stack.top === null) {
    return 'The stack is empty';
  }

  let current = stack.top;

  while(current) {
    console.log('this is in the stack:', current.data);
    current = current.next;
  }
}

// function is_palindrome(stack) {
//   let tempStack = new Stack();
//   stack = stack.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  
//   for (let i = 0; i < stack.length; i++) {
//     tempStack.push(stack[i]);
//   }

//   // console.log('this is tempStack', JSON.stringify(tempStack, null, 2));

//   let newStack = new Stack();
//   let current = tempStack.top;

//   while (current) {
//     let node = tempStack.pop();
//     // console.log(node);
//     newStack.push(node);
//     current = current.next;
//   }

//   if (tempStack === newStack) {
//     return true;
//   }

//   return false;


//   // console.log('this is the newStack', JSON.stringify(newStack, null, 2));
//   // return newStack;
// }

function is_palindrome(stack) {
  let tempStack = new Stack();
  stack = stack.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  for(let i = 0; i < stack.length; i++) {
    tempStack.push(stack[i]);
  }

  for (let i = 0; i < stack.length; i++) {
    let currentLetter = tempStack.pop();
    if (currentLetter !== stack[i]) {
      return false;
    } 
  }
  return true;
}


// console.log(is_palindrome('dad')); // => true
// console.log(is_palindrome('open')); // => false
// console.log(is_palindrome('A man, a plan, a canal: Panama')); // => true
// console.log(is_palindrome('1001')); // => true
// console.log(is_palindrome("Tauhida")); // => false


// see open  - push
// see closed - pop
// if stack is empty at end - parens are matching //-> return true
// if stack is not empty - parens are not matching // => return false
function matchingParens(str) {
  const stack = new Stack();
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(str[i]);
    } 
    
    // return false is theres nothing to close
    if (str[i] === ')' && !stack.top) {
      return false;
    }

    if (str[i] === ')') {
      stack.pop();
    }
  }

  if (peek(stack)) {
    return true;
  }
  return false;
}


console.log(matchingParens('(5 + 2)'));
console.log(matchingParens('(5 + 2) - 1 )'));



const starTrek = new Stack();

function main() {
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  // when you remove, start at top and work down
  starTrek.pop();
  starTrek.pop();


  console.log(JSON.stringify(starTrek, null, 2));
  return starTrek;
}


// main();
// peek(starTrek);
// display(starTrek);

