const help = require('./console-help');

/** Class representing a binary heap */
class BinaryHeap {
    /**
     * Creates a binary heap.
     * @param {Array|Number} values - Initial values for the heap.
     * @param {string} heapType - Type of heap, either 'min' or 'max'.
     */

    constructor(values = arguments.length >= 1 && arguments[0] === undefined ? undefined : [], heapType = 'min') {
        // Ensure values is number | number[] and heapType = 'min' | 'max'
        this._validateConstructorArguments(values, heapType);

        // Assign heap properties
        this._heap = Number.isInteger(values) ? [values] : values;
        this._heapType = heapType;
        this._comparatorFn = heapType === 'max' ? (a, b) => b - a : (a, b) => a - b;

        // Avoids calling _heapify on an empty array or an array with one value 
        if (this._heap.length > 1) {  
            this._heapify();
        }
    }

    // Static object with methods describing class
    static help = help;

    /**
     * Instance method describing how to use help functionality.
     * @returns The help object's _help method.
     */
    help() {
        return BinaryHeap.help._help();
    }

    /**
     * Returns the root element of the heap.
     * @returns The root element.
     */
    peek() {
        if (this._heap.length > 0) {
            return this._heap[0];
        }
        return null;
    }

    /**
     * Removes and returns the root element from the heap.
     * @returns The removed root element.
     */
    poll() {
        if (this._heap.length === 0) return null;
        const root = this._heap[0];
        // Move the last element to the root and reorder the heap
        this._heap[0] = this._heap.pop();
        this._heapifyDown(0);
        return root;
    }

    /**
     * Inserts a new value into the heap.
     * @param {number} value - The value to insert.
     */
    insert(integer) {
        // Validate that the input is a number
        if (!Number.isInteger(integer)) { 
            throw TypeError('Cannot insert non-integer values.');
        } 
        // Add the new integer to the heap and adjust its position
        this._heap.push(integer);
        this._heapifyUp(this._heap.length - 1);
    }

    /**
     * Gets the underlying heap data.
     * @returns A copy of the heap array.
     */
    getData() {
        return [...this._heap];
    }
    
    /**
     * Gets the type of the heap.
     * @returns The heap type ('Min Heap' or 'Max Heap').
     */
    getType() {
        return this.heapType === 'min' ? "Min Heap" : "Max Heap";
    }

    /**
     * Validates constructor arguments.
     * @param {Array|Number} values - Initial values.
     * @param {string} heapType - The type of the heap.
     */
    _validateConstructorArguments(values, heapType) {
        // Handle undefined being passed in explicitly as an argument
        if (values === undefined) throw new TypeError('Must be instantiated with either a number or an array of numbers.');

        if (!Number.isInteger(values) && !(Array.isArray(values) && values.every(Number.isInteger))) {
            throw new TypeError('Must be instantiated with either an integer or array of integers.');
        }
        
        if (heapType !== 'min' && heapType !== 'max') { // Ensure permitted values for heapType are only "min/max"
            throw new TypeError('Must be instantiated with either an integer or array of integers.');
        };
    }


    /**
     * Reorders the heap upwards from a given index.
     * @param {number} index - The starting index for heapifying up.
     */
    _heapifyUp(index) {
        while (index > 0) {
            const currentInteger = this._heap[index];
            const parentIndex = Math.floor((index - 1) / 2);
            // Swap if current integer is smaller than its parent
            if (parentIndex >= 0) {
                if (this._comparatorFn(currentInteger, this._heap[parentIndex]) < 0) {
                    this._swap(index, parentIndex);
                    index = parentIndex;
                } else {
                    break;
                }
            }
        } 
    }

    /**
     * Reorders the heap downwards from a given index.
     * @param {number} index - The starting index for heapifying down.
     */
    _heapifyDown(index) {
        let leftChildIdx = index * 2 + 1;
        while (leftChildIdx < this._heap.length) {
            let targetChildIdx = leftChildIdx;
            let rightChildIdx = leftChildIdx + 1;
    
            // Check if right child exists and if it should be the target for comparison
            if (rightChildIdx < this._heap.length && this._comparatorFn(this._heap[rightChildIdx], this._heap[leftChildIdx]) < 0) {
                targetChildIdx = rightChildIdx;
            }
            
            if (this._comparatorFn(this._heap[index], this._heap[targetChildIdx]) < 0) break;
            this._swap(index, targetChildIdx);
            index = targetChildIdx;
            leftChildIdx = index * 2 + 1;
        }
    }

    /**
     * Builds the heap structure from an unstructured array.
     */
    _heapify() {
        // Start from the last non-leaf node and heapify each node
        for (let i = Math.floor((this._heap.length - 2) / 2); i >= 0; i--) {
            this._heapifyDown(i);
        }
    }
    
    /**
     * Swaps two elements in the heap.
     * @param {number} i - The first index to swap.
     * @param {number} j - The second index to swap.
     */
    _swap(i, j) {
        if (i !== j) { // Swap only if the indices are different
            [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
        }
    }
}

module.exports = BinaryHeap;