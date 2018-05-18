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
    }

    // if the top already has something then create a new node
    // add data to the new node
    // have the pointer point to the top
    const node = new _Node(data, this.top);
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



const starTrek = new Stack();

function main() {
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  

  console.log(JSON.stringify(starTrek, null, 2));
  return starTrek;
}


main();

