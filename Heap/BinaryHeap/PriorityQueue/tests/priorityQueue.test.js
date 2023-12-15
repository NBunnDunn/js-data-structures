/**
 * priorityQueue.test.js
 * 
 * Purpose:
 * This file contains unit tests for the PriorityQueue class using Jest.
 * 
 * Usage:
 * - To run tests, use the command: `npm test Heap/BinaryHeap/PriorityQueue/tests/priorityQueue.test.js`
 * - Refer to Jest documentation for more detailed testing guidelines: https://jestjs.io/docs/
 */

const PriorityQueue = require("../src/priorityQueue");

describe('PriorityQueue', () => {
    describe('Static Property "help"', () => {
        test('should exist and be an object', () => {
            expect(PriorityQueue.help).toBeDefined();
            expect(typeof PriorityQueue.help).toBe('object');
        });

        test('should have methods like overview, usage, first, dequeue, etc.', () => {
            expect(typeof PriorityQueue.help.overview).toBe('function');
            expect(typeof PriorityQueue.help.usage).toBe('function');
            expect(typeof PriorityQueue.help.first).toBe('function');
            expect(typeof PriorityQueue.help.enqueue).toBe('function');
            expect(typeof PriorityQueue.help.dequeue).toBe('function');
        });
    });

    describe('Initialization without arguments', () => {
        test('should initialize with a default value of an empty array', () => {
            const pq = new PriorityQueue();
            expect(pq._binaryHeap._heap.length).toBe(0);
            expect(pq._binaryHeap._heap).toEqual([]);
        });
        test('should default to max pq', () => {
            const pq = new PriorityQueue();
            expect(pq._binaryHeap._comparatorFn(1,2)).toEqual(1);
            expect(pq._binaryHeap._heapType).toEqual('max');
        });
    })

    describe('Initialization with arguments', () => {
        test('should correctly populate pq given a single integer', () => {
            const pq = new PriorityQueue(5);
            expect(pq.first()).toBe(5);
            expect(pq._binaryHeap._heap.length).toBe(1);
            expect(pq._binaryHeap._heapType).toEqual('max');
        });
        
        test('should correctly handle invalid single-argument and dual-argument initializations', () => {
            // Test for non-integer initialization
            expect(() => new PriorityQueue('invalid')).toThrow(TypeError);
            // Test for initialization with an array containing a non-integer value
            expect(() => new PriorityQueue([1, 2, 'invalid'])).toThrow(TypeError);
            expect(() => new PriorityQueue(null)).toThrow(TypeError);
            expect(() => new PriorityQueue(undefined, 'min')).toThrow(TypeError);
            expect(() => new PriorityQueue(undefined)).toThrow(TypeError);
            expect(() => new PriorityQueue({})).toThrow(TypeError);
            expect(() => new PriorityQueue(null, {})).toThrow(TypeError);
            expect(() => new PriorityQueue([1,2], null)).toThrow(TypeError);
            expect(() => new PriorityQueue({}, null)).toThrow(TypeError);
            expect(() => new PriorityQueue({}, 'max')).toThrow(TypeError);
        });
       
        test('should correctly populate a pq given an array of integers', () => {
            const pq = new PriorityQueue([1,2]);
            expect(pq.getData()).toEqual([2,1]);
            expect(pq.first()).toEqual(2);
        })
        
        test('should correctly populate a pq given a valid first argument and a pq-type string', () => {
            const singleValueMaxPQ = new PriorityQueue(1); // can optionally pass "max" as second argument for same result
            expect(singleValueMaxPQ._binaryHeap._heapType).toEqual('max');
            
            const maxPQ = new PriorityQueue([1,5]); // can optionally pass "max" as second argument for same result
            expect(maxPQ.first()).toBe(5);
            
            const singleValueMinPQ = new PriorityQueue(1, 'min'); 
            expect(singleValueMinPQ._binaryHeap._heapType).toEqual('min');

            const minPQ = new PriorityQueue([1,5], "min");
            expect(minPQ.first()).toBe(1);
        })
    });

    describe('Enqueuing', () => {
        let minPQ, maxPQ;

        beforeEach(() => {
            minPQ = new PriorityQueue([], "min");
            maxPQ = new PriorityQueue()
        });

        test('should throw TypeError given non-integer argument', () => {
            expect(() => maxPQ.enqueue('invalid')).toThrow(TypeError);
            expect(() => maxPQ.enqueue([])).toThrow(TypeError);
            expect(() => maxPQ.enqueue({})).toThrow(TypeError);
            expect(() => maxPQ.enqueue(undefined)).toThrow(TypeError);
            expect(() => maxPQ.enqueue(null)).toThrow(TypeError);
            expect(() => maxPQ.enqueue(2.01)).toThrow(TypeError);
        });

        test('should add only the first argument when multiple are enqueued', () => {
            maxPQ.enqueue(10, 11, 'str', null);
            expect(maxPQ.first()).toBe(10);
            expect(maxPQ._binaryHeap._heap.length).toBe(1);
        });

        test('should maintain pq-type after multiple enqueueions', () => {
            minPQ.enqueue(10); // [10]
            minPQ.enqueue(5);  // [5,10]
            minPQ.enqueue(-5); // [-5,10,5]
            expect(minPQ.first()).toBe(-5);

            maxPQ.enqueue(10); // [10]
            maxPQ.enqueue(-5); // [10,-5]
            maxPQ.enqueue(15); // [15,-5,10]
            expect(maxPQ.first()).toBe(15); 
        });

        test('should handle duplicate numbers', () => {
            minPQ.enqueue(10);  // [10]
            minPQ.enqueue(5);   // [5,10]
            minPQ.enqueue(1);   // [1,10,5]
            minPQ.enqueue(2);   // [1,2,5,10]
            minPQ.enqueue(2);   // [1,2,5,10,2]
            minPQ.enqueue(2);   // [1,2,2,10,2,5]
            expect(minPQ._binaryHeap._heap).toEqual([1,2,2,10,2,5]);

            maxPQ.enqueue(10); // [10]
            maxPQ.enqueue(5);  // [10,5]
            maxPQ.enqueue(15); // [15,5,10]
            maxPQ.enqueue(12); // [15,12,10,5]
            maxPQ.enqueue(12); // [15,12,10,5,12]
            maxPQ.enqueue(12); // [15,12,12,5,12,10]
            expect(maxPQ._binaryHeap._heap).toEqual([15,12,12,5,12,10]);

        });

        test('should handle zeros and negative integers', () => {
            minPQ.enqueue(10);   // [10]
            minPQ.enqueue(0);    // [0,10]
            minPQ.enqueue(-1);   // [-1,10,0]
            expect(minPQ._binaryHeap._heap).toEqual([-1,10,0]);

            maxPQ.enqueue(10);   // [10]
            maxPQ.enqueue(0);    // [10,0]
            maxPQ.enqueue(-1);   // [10,0,-1]
            expect(maxPQ._binaryHeap._heap).toEqual([10,0,-1]);
        });

        test('should handle large numbers of elements', () => {
            for (let i = 0; i < 1000; i++) {
                maxPQ.enqueue(Math.round(Math.random()));
            }
            expect(maxPQ._binaryHeap._heap.length).toBe(1000);
        });

        test('should handle very large numbers correctly', () => {
            minPQ.enqueue(Number.MIN_SAFE_INTEGER);
            minPQ.enqueue(Number.MIN_SAFE_INTEGER + 1);
            expect(minPQ.dequeue()).toBe(Number.MIN_SAFE_INTEGER);
            expect(minPQ.first()).toBe(Number.MIN_SAFE_INTEGER + 1);
            
            maxPQ.enqueue(Number.MAX_SAFE_INTEGER);
            maxPQ.enqueue(Number.MAX_SAFE_INTEGER - 1);
            expect(maxPQ.dequeue()).toBe(Number.MAX_SAFE_INTEGER);
            expect(maxPQ.first()).toBe(Number.MAX_SAFE_INTEGER - 1);
        });
    });

    describe('First (retrieves element with highest priority)', () => {
        test('should correctly return highest priority element without removing it', () => {
            const pq = new PriorityQueue([1,2]);
            expect(pq.first()).toBe(2); // Correctly returns root element
            expect(pq._binaryHeap._heap.length).toBe(2); // Length isn't altered
        })

        test('should return null when called on an empty pq', () => {
            const emptyPQ = new PriorityQueue();
            expect(emptyPQ.first()).toBe(null);
        })
    })

    describe('Dequeuing', () => {        
        test('should correctly return and remove highest priority element', () => {
            const pq = new PriorityQueue([1,2]);
            expect(pq.dequeue()).toBe(2); // Correctly returns root element
            expect(pq._binaryHeap._heap.length).toBe(1); // Length is altered
        })

        test('should return null when called on an empty heap', () => {
            const emptyPQ = new PriorityQueue();
            expect(emptyPQ.dequeue()).toBe(null);
        })
        
        test('heap property should be maintained after root removal', () => {
            const minPQ = new PriorityQueue([1,5,10], 'min'); // Root would be 1
            const maxPQ = new PriorityQueue([1,5,10]); // Root would be 10
            
            expect(minPQ.dequeue()).toBe(1);
            expect(minPQ.first()).toBe(5); // Root is updated to new tiniest element 

            expect(maxPQ.dequeue()).toBe(10); 
            expect(maxPQ.first()).toBe(5); // Root is updated to new largest element 
        })
    })
    
    describe('Edge Cases and Error Handling', () => {
        test('should correctly handle multiple enqueues and dequeues', () => {
            const pq = new PriorityQueue();
            pq.enqueue(6); // [6]
            pq.enqueue(0); // [6,0]
            pq.enqueue(2); // [6,0,2]
            pq.enqueue(4); // [6,4,2,0]
            pq.enqueue(5); // [6,5,2,0,4]
            pq.dequeue();  // [5,4,2,0] 
            pq.dequeue();  // [4,0,2]  
            expect(pq._binaryHeap._heap).toEqual([4,0,2]);
        })
    });
});
