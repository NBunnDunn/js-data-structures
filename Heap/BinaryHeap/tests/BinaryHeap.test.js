/**
 * binaryHeap.test.js
 * 
 * Purpose:
 * This file contains unit tests for the BinaryHeap class using Jest.
 * 
 * Usage:
 * - To run tests, use the command: `npm test Heap/BinaryHeap/tests/binaryHeap.test.js`
 * - Refer to Jest documentation for more detailed testing guidelines: https://jestjs.io/docs/
 */

const BinaryHeap = require('../src/binaryHeap')
// Console test command: npm test Heap/BinaryHeap/tests/BinaryHeap.test.js

describe('BinaryHeap', () => {
    describe('Static Property "help"', () => {
        test('should exist and be an object', () => {
            expect(BinaryHeap.help).toBeDefined();
            expect(typeof BinaryHeap.help).toBe('object');
        });

        test('should have methods like overview, usage, peek, poll, etc.', () => {
            expect(typeof BinaryHeap.help.overview).toBe('function');
            expect(typeof BinaryHeap.help.usage).toBe('function');
            expect(typeof BinaryHeap.help.peek).toBe('function');
            expect(typeof BinaryHeap.help.poll).toBe('function');
            expect(typeof BinaryHeap.help.insert).toBe('function');
        });
    });

    describe('Initialization without arguments', () => {
        test('should contain an empty heap', () => {
            const heap = new BinaryHeap();
            expect(heap._heap.length).toBe(0);
            expect(heap._heap).toEqual([]);
        });
        test('should default to min heap', () => {
            const heap = new BinaryHeap();
            expect(heap._comparatorFn(1,2)).toEqual(-1);
            expect(heap._heapType).toEqual('min');
        });
    })

    describe('Initialization with arguments', () => {
        test('should correctly populate heap given a single integer', () => {
            const heap = new BinaryHeap(5);
            expect(heap.peek()).toBe(5);
            expect(heap._heap.length).toBe(1);
            expect(heap._heapType).toEqual('min');
        });
        

        test('should correctly handle invalid single-argument and dual-argument initializations', () => {
            // Test for non-integer initialization
            expect(() => new BinaryHeap('invalid')).toThrow(TypeError);
            // Test for initialization with an array containing a non-integer value
            expect(() => new BinaryHeap([1, 2, 'invalid'])).toThrow(TypeError);
            expect(() => new BinaryHeap(null)).toThrow(TypeError);
            expect(() => new BinaryHeap(undefined, 'min')).toThrow(TypeError);
            expect(() => new BinaryHeap(undefined)).toThrow(TypeError);
            expect(() => new BinaryHeap({})).toThrow(TypeError);
            expect(() => new BinaryHeap(null, {})).toThrow(TypeError);
            expect(() => new BinaryHeap([1,2], null)).toThrow(TypeError);
            expect(() => new BinaryHeap({}, null)).toThrow(TypeError);
            expect(() => new BinaryHeap({}, 'max')).toThrow(TypeError);
        });
       
        test('should correctly populate a heap given an array of integers', () => {
            const heap = new BinaryHeap([2,1]);
            expect(heap._heap).toEqual([1,2]);
            expect(heap.peek()).toEqual(1);
        })
        
        test('should correctly populate a heap given a valid first argument and a heap-type string', () => {
            const singleValueMinHeap = new BinaryHeap(1); // can optionally pass "min" as second argument for same result
            expect(singleValueMinHeap._heapType).toEqual('min');
            const minHeap = new BinaryHeap([1,5]); // can optionally pass "min" as second argument for same result
            expect(minHeap.peek()).toBe(1);
            
            const singleValueMaxHeap = new BinaryHeap(1, 'max'); 
            expect(singleValueMaxHeap._heapType).toEqual('max');
            const maxHeap = new BinaryHeap([1,5], "max");
            expect(maxHeap.peek()).toBe(5);
        })
    });

    describe('Insertion', () => {
        let minHeap, maxHeap;

        beforeEach(() => {
            minHeap = new BinaryHeap()
            maxHeap = new BinaryHeap([], "max");
        });

        test('should throw TypeError given non-integer argument', () => {
            expect(() => minHeap.insert('invalid')).toThrow(TypeError);
            expect(() => minHeap.insert([])).toThrow(TypeError);
            expect(() => minHeap.insert({})).toThrow(TypeError);
            expect(() => minHeap.insert(undefined)).toThrow(TypeError);
            expect(() => minHeap.insert(null)).toThrow(TypeError);
            expect(() => minHeap.insert(2.01)).toThrow(TypeError);
        });

        test('should insert the first argument when passed multiple', () => {
            minHeap.insert(10, 11, 'str', null);
            expect(minHeap.peek()).toBe(10);
            expect(minHeap._heap.length).toBe(1);
        });

        test('should maintain heap property after multiple insertions', () => {
            minHeap.insert(10); // [10]
            minHeap.insert(5);  // [5,10]
            minHeap.insert(-5); // [-5,10,5]
            expect(minHeap.peek()).toBe(-5);

            maxHeap.insert(10); // [10]
            maxHeap.insert(-5); // [10,-5]
            maxHeap.insert(15); // [15,-5,10]
            expect(maxHeap.peek()).toBe(15); 
        });

        test('should handle duplicate numbers and maintain heap property', () => {
            minHeap.insert(10);  // [10]
            minHeap.insert(5);   // [5,10]
            minHeap.insert(1);   // [1,10,5]
            minHeap.insert(2);   // [1,2,5,10]
            minHeap.insert(2);   // [1,2,5,10,2]
            minHeap.insert(2);   // [1,2,2,10,2,5]
            expect(minHeap._heap).toEqual([1,2,2,10,2,5]);

            maxHeap.insert(10); // [10]
            maxHeap.insert(5);  // [10,5]
            maxHeap.insert(15); // [15,5,10]
            maxHeap.insert(12); // [15,12,10,5]
            maxHeap.insert(12); // [15,12,10,5,12]
            maxHeap.insert(12); // [15,12,12,5,12,10]
            expect(maxHeap._heap).toEqual([15,12,12,5,12,10]);

        });

        test('should handle zeros and negative insertions', () => {
            minHeap.insert(10);   // [10]
            minHeap.insert(0);    // [0,10]
            minHeap.insert(-1);   // [-1,10,0]
            expect(minHeap._heap).toEqual([-1,10,0]);

            maxHeap.insert(10);   // [10]
            maxHeap.insert(0);    // [10,0]
            maxHeap.insert(-1);   // [10,0,-1]
            expect(maxHeap._heap).toEqual([10,0,-1]);
        });

        test('should handle large numbers of elements', () => {
            for (let i = 0; i < 1000; i++) {
                minHeap.insert(Math.round(Math.random()));
            }
            expect(minHeap._heap.length).toBe(1000);
        });

        test('should handle very large numbers correctly', () => {
            minHeap.insert(Number.MIN_SAFE_INTEGER);
            minHeap.insert(Number.MIN_SAFE_INTEGER + 1);
            expect(minHeap.poll()).toBe(Number.MIN_SAFE_INTEGER);
            expect(minHeap.peek()).toBe(Number.MIN_SAFE_INTEGER + 1);
            
            maxHeap.insert(Number.MAX_SAFE_INTEGER);
            maxHeap.insert(Number.MAX_SAFE_INTEGER - 1);
            expect(maxHeap.poll()).toBe(Number.MAX_SAFE_INTEGER);
            expect(maxHeap.peek()).toBe(Number.MAX_SAFE_INTEGER - 1);
        });
    });

    describe('Peek', () => {
        test('should correctly return without removing the root element', () => {
            const heap = new BinaryHeap([1,2]);
            expect(heap.peek()).toBe(1); // Correctly returns root element
            expect(heap._heap.length).toBe(2); // Length isn't altered
        })

        test('should return null when called on an empty heap', () => {
            const emptyHeap = new BinaryHeap();
            expect(emptyHeap.peek()).toBe(null);
        })
    })

    describe('Poll', () => {        
        test('should correctly return and remove root element', () => {
            const heap = new BinaryHeap([1,2]);
            expect(heap.poll()).toBe(1); // Correctly returns root element
            expect(heap._heap.length).toBe(1); // Length is altered
        })

        test('should return null when called on an empty heap', () => {
            const emptyHeap = new BinaryHeap();
            expect(emptyHeap.poll()).toBe(null);
        })
        
        test('heap property should be maintained after root removal', () => {
            const minHeap = new BinaryHeap([1,5,10]); // Root would be 1
            const maxHeap = new BinaryHeap([1,5,10], 'max'); // Root would be 10
            
            expect(minHeap.poll()).toBe(1); 
            expect(minHeap.peek()).toBe(5); // Root is updated to new tiniest element 
            expect(maxHeap.poll()).toBe(10);
            expect(maxHeap.peek()).toBe(5); // Root is updated to new largest element 
        })
    })
    
    describe('Edge Cases and Error Handling', () => {
        test('should correctly handle multiple insertions and removals', () => {
            const heap = new BinaryHeap();
            heap.insert(5); // [5]
            heap.insert(0); // [0,5]
            heap.insert(2); // [0,5,2]
            heap.insert(4); // [0,4,2,5]
            heap.insert(2); // [0,2,2,5,4]
            heap.poll();    // [2,4,2,5] 
            heap.poll();    // [2,4,5] 
            expect(heap._heap).toEqual([2,4,5]);
        })
    });
});
