/*
Implement the class Queues using stacks. The queue methods you need to implement are enqueue, dequeue, peek, and empty

enqueue: append a value to the end of the queue
dequeue: remove and return the value at the start of the queue
peek: return the value at the start of the queue
empty: returns a boolean value of whether the queue is empty or not

Constraints:
- Do the queue methods we have to implement need to perform at the same complexity of a real queue?
    - No, but they should be as performant as possible
*/

class QueueWithStacks {
  constructor() {
    this.in = [];
    this.out = [];
  }

  // Time:  O(1)
  enqueue(value) {
    this.in.push(value);
  }

  // Time: O(n)
  dequeue() {
    if (!this.out.length) {
      this.transfer();
    }

    return this.out.pop();
  }

  peek() {
    if (!this.out.length) {
      this.transfer();
    }

    return this.out[this.out.length - 1];
  }

  empty() {
    return !this.in.length && !this.out.length;
  }

  transfer() {
    while (this.in.length) {
      this.out.push(this.in.pop());
    }
  }
}

const test = new QueueWithStacks();
console.log("Initializing queue: ", test.out);
test.enqueue(1);
console.log("test.enqueue(1)");
test.enqueue(2);
console.log("test.enqueue(2)");
console.log("test.peek(): ", test.peek(), ", Expected: 1");
console.log("test.empty(): ", test.empty(), ", Expected: false");
test.enqueue(3);
test.enqueue(4);
console.log("test.enqueue(3)");
console.log("test.enqueue(4)");
console.log("test.dequeue(): ", test.dequeue(), ", Expected: 1");
console.log("test.dequeue(): ", test.dequeue(), ", Expected: 2");
console.log("test.dequeue(): ", test.dequeue(), ", Expected: 3");
console.log("test.dequeue(): ", test.dequeue(), ", Expected: 4");
console.log("test.empty(): ", test.empty(), ", Expected: true");
