class QueueElement {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.queue = [];
	}

	enqueue(value, priority) {
		const newItem = new QueueElement(value, priority);
		let contains = false;

		for (let i = 0; i < this.queue.length; i++) {
			if (this.queue[i].priority > newItem.priority) {
				this.queue.splice(i, 0, newItem);
				contains = true;
				break;
			}
		}

		if (!contains) this.queue.push(newItem);
	}

	dequeue() {
		if (this.isEmpty()) return 'Underflow';
		return this.queue.shift();
	}

	front() {
		if (this.isEmpty()) return 'Nothing in queue';
		return this.queue[0];
	}

	rear() {
		if (this.isEmpty()) return 'Nothing in queue';
		return this.queue[this.queue.length - 1];
	}

	isEmpty() {
		return this.queue.length === 0;
	}

	print() {
		let result = '';

		for (let item of this.queue) {
			result += item.value + ' ';
		}

		return result;
	}
}

// Test
const priorityQueue = new PriorityQueue();

// testing isEmpty and front on an empty queue
// return true
console.log('priorityQueue.isEmpty():', priorityQueue.isEmpty());

// returns "No elements in Queue"
console.log('priorityQueue.front():', priorityQueue.front());

// adding elements to the queue
console.log('Enqueue (Sumit, 2)');
priorityQueue.enqueue('Sumit', 2);
console.log('Enqueue (Gourav, 2)');
priorityQueue.enqueue('Gourav', 1);
console.log('Enqueue (Piyush, 1)');
priorityQueue.enqueue('Piyush', 1);
console.log('Enqueue (Sunny, 2)');
priorityQueue.enqueue('Sunny', 2);
console.log('Enqueue (Sheru, 2)');
priorityQueue.enqueue('Sheru', 2);

// prints [Gourav Piyush Sumit Sunny Sheru]
console.log('priorityQueue.print():', priorityQueue.print());

// prints Gourav
console.log('priorityQueue.front().value:', priorityQueue.front().value);

// prints Sheru
console.log('priorityQueue.rear().value:', priorityQueue.rear().value);

// removes Gouurav
// priorityQueue contains
// [Piyush Sumit Sunny Sheru]
console.log('priorityQueue.dequeue().value:', priorityQueue.dequeue().value);

// Adding another element to the queue
console.log('Enqueue (Sunil, 2)');
priorityQueue.enqueue('Sunil', 2);

// prints [Piyush Sumit Sunny Sunil Sheru]
console.log('priorityQueue.print():', priorityQueue.print());

module.exports = PriorityQueue;
