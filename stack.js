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
  //console.log('The top of the stack is:', node.data);
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

// console.log(matchingParens('(5 + 2)'));
// console.log(matchingParens('(5 + 2) - 1 )'));


function matchingPairs(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      stack.push(str[i]);
    }

    if (str[i] === ')' && stack.top.data === '(') {
      stack.pop();
    }
    if (str[i] === '}' && stack.top.data === '{') {
      stack.pop();
    }
    if (str[i] === ']' && stack.top.data === '[') {
      stack.pop();
    }
  }

  if (stack.top) {
    return false;
  }
  return true;
}

// ()
// ([{}]) // => return true
// ({)} // => return false
// console.log(matchingPairs('([{}])'));
// console.log(matchingPairs('({)}'));


// function matchingQuotes(str) {
//   const stack = new Stack();

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '"') {

//     }
//   }
// }

// ''
// ""
// 'hi my name is Alexa (((((((('
// console.log(matchingQuotes());

function sortStack(stack) {
  let tempStack = new Stack();
  // tempStack.push(stack.top);

  // console.log('this is the top', tempStack.top.data); 

  while (stack.top) {
    let temp = stack.pop();

    while(tempStack.top && peek(tempStack) > temp) {
      let char = tempStack.pop();
      stack.push(char);

    }
    tempStack.push(temp);
  }
  console.log('this is the stack', display(stack));
  console.log('this is tempStack:', display(tempStack));
  return tempStack;
}

// iteration 1
// myStack ==>  200(top), 7, 4, 3, 10   // want => 3, 4, 7, 10, 200
// tempStack = null

// temp = stack.top = 200
// stack.pop => now myStack is 7(top), 4, 3, 10

// char = tempStack.top = 200
// stack.push(char) => 200, 7, 4, 3, 10

// iteration 2
// myStack ==> 200, 7, 4, 3, 10
// tempStack = stack.top = 2


const starTrek = new Stack();
const myStack = new Stack();

function main() {
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  // when you remove, start at top and work down
  starTrek.pop();
  starTrek.pop();

  myStack.push(10);
  myStack.push(3);
  myStack.push(4);
  myStack.push(7);
  myStack.push(200);

  // console.log(JSON.stringify(myStack, null, 2)); 
  // console.log(JSON.stringify(starTrek, null, 2));
}


main();
// peek(starTrek);
// display(starTrek);

sortStack(myStack);
