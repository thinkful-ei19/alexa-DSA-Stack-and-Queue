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

function is_palindrome(stack) {
  let tempStack = new Stack();
  stack = stack.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  
  for (let i = 0; i < stack.length; i++) {
    tempStack.push(stack[i]);
  }

  // console.log('this is tempStack', JSON.stringify(tempStack, null, 2));

  let newStack = new Stack();
  let current = tempStack.top;

  while (current) {
    let node = tempStack.pop();
    // console.log(node);
    newStack.push(node);
    current = current.next;
  }

  if (tempStack === newStack) {
    return true;
  }

  return false;


  // console.log('this is the newStack', JSON.stringify(newStack, null, 2));
  // return newStack;
}

console.log(is_palindrome('dad')); // => true
// is_palindrome('open'); // => false
// console.log(is_palindrome('A man, a plan, a canal: Panama')); // => true
// console.log(is_palindrome('1001')); // => true
// console.log(is_palindrome("Tauhida")); // => false



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

