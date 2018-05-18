'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
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
}


main();
peek(starTrek);
display(starTrek);

