const BinaryHeap = require('../../src/binaryHeap');
const help = require('./console-help');

/** Class representing a priority queue, implemented with a binary heap. */
class PriorityQueue {
    /**
     * Creates a priority queue using a binary heap.
     * @param {Array|Number} values - Initial values for the priority queue.
     * @param {string} queueType - The type of the queue, 'max' or 'min'.
     */
    constructor(values = arguments.length >= 1 && arguments[0] === undefined ? undefined : [], queueType = 'max') {
        this._binaryHeap = new BinaryHeap(values, queueType);
    }

    // Static object with methods describing class
    static help = help;

    /**
     * Instance method describing how to use help functionality.
     * @returns The help object's _help method.
     */
    help() {
        return PriorityQueue.help._help();
    }

    /**
     * Enqueues a value into the priority queue.
     * @param {any} value - The value to enqueue.
     */
    enqueue(value) {
        this._binaryHeap.insert(value);
    }

    /**
     * Dequeues the highest priority element from the priority queue.
     * @returns The highest priority element.
     */
    dequeue() {
        return this._binaryHeap.poll();
    }

    /**
     * Retrieves the highest priority element from the priority queue without removing it.
     * @returns The highest priority element.
     */
    first() {
        return this._binaryHeap.peek();
    }

    /**
     * Gets the underlying data of the priority queue.
     * @returns The data of the priority queue.
     */
    getData() {
        return this._binaryHeap.getData();
    }

    /**
     * Gets the type of the priority queue.
     * @returns A string indicating the type of the priority queue.
     */
    getType() {
        return this._binaryHeap.getType() === 'Min Heap' 
            ? 'Min Priority Queue (Smallest integer takes highest priority).' 
            : 'Max Priority Queue (Largest integer takes highest priority).';
    }  
}

module.exports = PriorityQueue;