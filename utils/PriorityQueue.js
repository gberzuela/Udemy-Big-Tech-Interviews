// https://www.geeksforgeeks.org/implementation-priority-queue-javascript/
// class QueueElement {
// 	constructor(value, priority) {
// 		this.value = value;
// 		this.priority = priority;
// 	}
// }

// class PriorityQueue {
// 	constructor() {
// 		this.queue = [];
// 	}

// 	enqueue(value, priority) {
// 		const newItem = new QueueElement(value, priority);
// 		let contains = false;

// 		for (let i = 0; i < this.queue.length; i++) {
// 			if (this.queue[i].priority > newItem.priority) {
// 				this.queue.splice(i, 0, newItem);
// 				contains = true;
// 				break;
// 			}
// 		}

// 		if (!contains) this.queue.push(newItem);
// 	}

// 	dequeue() {
// 		if (this.isEmpty()) return 'Underflow';
// 		return this.queue.shift();
// 	}

// 	front() {
// 		if (this.isEmpty()) return 'Nothing in queue';
// 		return this.queue[0];
// 	}

// 	rear() {
// 		if (this.isEmpty()) return 'Nothing in queue';
// 		return this.queue[this.queue.length - 1];
// 	}

// 	isEmpty() {
// 		return this.queue.length === 0;
// 	}

// 	print() {
// 		let result = '';

// 		for (let item of this.queue) {
// 			result += item.value + ' ';
// 		}

// 		return result;
// 	}
// }

// Udemy solution
class PriorityQueue {
  // Defaults max heap
  constructor(comparator = (a, b) => a > b) {
    // Underscore convention indicates that this is a private variable
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  front() {
    if (this.isEmpty()) return "Nothing in queue";
    return this._heap[0];
  }

  enqueue(value) {
    this._heap.push(value);
    this._siftUp();
    return this.size();
  }

  dequeue() {
    if (!this.size()) return "Nothing in queue";
    if (this.size() > 1) this._swap(0, this.size() - 1);
    const result = this._heap.pop();
    this._siftDown(0, this._leftChild(0), this._rightChild(0));
    return result;
  }

  // Private methods
  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx) {
    return idx * 2 + 1;
  }

  _rightChild(idx) {
    return idx * 2 + 2;
  }

  _swap(i, j) {
    const temp = this._heap[i];
    this._heap[i] = this._heap[j];
    this._heap[j] = temp;
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  _siftUp() {
    let current = this.size() - 1;
    let parent = this._parent(current);

    // while current is not the root value && current is > its parent...
    while (current > 0 && this._compare(current, parent)) {
      this._swap(current, parent);
      current = parent;
      parent = this._parent(current);
    }
  }

  _siftDown(parent, left, right) {
    let greater = this._heap[left] > this._heap[right] ? left : right;

    // while the greater !== undefined && parent has a > child...
    while (
      greater &&
      greater <= this.size() - 1 &&
      this._compare(greater, parent)
    ) {
      this._swap(greater, parent);
      parent = greater;
      left = this._leftChild(parent);
      right = this._rightChild(parent);
      greater = left > right ? left : right;
    }
  }
}

const priorityQueue = new PriorityQueue();

// // geeksforgeeks Test

// // testing isEmpty and front on an empty queue
// // return true
// console.log("priorityQueue.isEmpty():", priorityQueue.isEmpty());

// // returns "No elements in Queue"
// console.log("priorityQueue.front():", priorityQueue.front());

// // adding elements to the queue
// console.log("Enqueue (Sumit, 2)");
// priorityQueue.enqueue("Sumit", 2);
// console.log("Enqueue (Gourav, 2)");
// priorityQueue.enqueue("Gourav", 1);
// console.log("Enqueue (Piyush, 1)");
// priorityQueue.enqueue("Piyush", 1);
// console.log("Enqueue (Sunny, 2)");
// priorityQueue.enqueue("Sunny", 2);
// console.log("Enqueue (Sheru, 2)");
// priorityQueue.enqueue("Sheru", 2);

// // prints [Gourav Piyush Sumit Sunny Sheru]
// console.log("priorityQueue.print():", priorityQueue.print());

// // prints Gourav
// console.log("priorityQueue.front().value:", priorityQueue.front().value);

// // // prints Sheru
// // console.log("priorityQueue.rear().value:", priorityQueue.rear().value);

// // removes Gouurav
// // priorityQueue contains
// // [Piyush Sumit Sunny Sheru]
// console.log("priorityQueue.dequeue().value:", priorityQueue.dequeue().value);

// // Adding another element to the queue
// console.log("Enqueue (Sunil, 2)");
// priorityQueue.enqueue("Sunil", 2);

// // prints [Piyush Sumit Sunny Sunil Sheru]
// console.log("priorityQueue.print():", priorityQueue.print());

// Udemy Test
console.log(
  "[15, 10, 6, 7, 3, 20].forEach((val) => priorityQueue.enqueue(val))"
);
[15, 10, 6, 7, 3, 20].forEach((val) => priorityQueue.enqueue(val));
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());

module.exports = PriorityQueue;
