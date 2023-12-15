const help = {
    overview: () => {
        console.log("\n== BinaryHeap Overview ==");
        console.log("Description: A binary heap is a complete binary tree structure that maintains the heap property.");
        console.log("Common Applications:");
        console.log("   - Retrieving the minimum or maximum element with O(1) time complexity.");
        console.log("   - Implementing efficient priority queues.");
        console.log("   - Optimizing sorting algorithms (e.g., Heapsort) with O(nlogn) time complexity.");
    },
    usage: () => {
        console.log("\n== BinaryHeap Usage ==");
        console.log('Parameters:');
        console.log('   - Parameter 1 (optional): Integer or array of integers for initializing the heap. If omitted, heap is initialized with an empty array.');
        console.log('   - Parameter 2 (optional): String ("min"/"max") indicating the type of heap (default is "min").');
        console.log('Examples:');
        console.log('   - new BinaryHeap(5) // Initializes a min-heap with a single element -> [5]');
        console.log('   - new BinaryHeap([5,2,12]) // Creates a min-heap from the array -> [2,5,12]');
        console.log('   - new BinaryHeap([1,20], "max") // Initializes a max-heap from the array -> [20,1]');
    },
    peek: () => {
        console.log("\n== BinaryHeap .peek() method ==");
        console.log("Description: Returns the root element of the heap without removing it.");
        console.log("Usage: binaryHeapInstance.peek();");
        console.log("Complexity: O(1) (\"Constant\")");
        console.log("See BinaryHeap.md for more details.");
    },
    poll: () => {
        console.log("\n== BinaryHeap .poll() method ==");
        console.log("Description: Removes and returns the root element, reordering the heap accordingly.");
        console.log("Usage: binaryHeapInstance.poll();");
        console.log("Complexity: O(log n) (\"Logarithmic\")");
        console.log("See BinaryHeap.md for more details.");
    },
    insert: () => {
        console.log("\n== BinaryHeap .insert(int: x) method ==");
        console.log("Description: Adds element x to the heap, maintaining the heap order.");
        console.log("Usage: binaryHeapInstance.insert(10);");
        console.log("Complexity: O(log n) (\"Logarithmic\")");
        console.log("See BinaryHeap.md for more details.");
    },
    getData: () => {
        console.log("\n== BinaryHeap .getData() method ==");
        console.log("Description: Returns a copy of the heap array.");
        console.log("Usage: binaryHeapInstance.getData();");
        console.log("Complexity: O(1) (\"Constant\")");
        console.log("See BinaryHeap.md for more details.");
    },
    getType: () => {
        console.log("\n== BinaryHeap .getType() method ==");
        console.log("Description: Returns a string representing the type of heap.");
        console.log("Usage: binaryHeapInstance.getType();");
        console.log("Complexity: O(1) (\"Constant\")");
        console.log("See BinaryHeap.md for more details.");
    },
    _help: () => {
        console.log("\n== BinaryHeap Help ==");
        console.log("To view information regarding specific methods (descriptions, examples, & runtimes), access the static \"help\" property on the BinaryHeap class");
        console.log("All BinaryHeap.help methods:");
        console.log("   - BinaryHeap.help.overview(): Provides an overview of the class and common applications.");
        console.log("   - BinaryHeap.help.usage(): Describes initialization and parameters.");
        console.log("   - BinaryHeap.help.peek(): Describes the process of viewing root element.");
        console.log("   - BinaryHeap.help.poll(): Describes the process of viewing and removing root element.");
        console.log("   - BinaryHeap.help.insert(): Describes the process of inserting a value into the heap.");
        console.log("   - BinaryHeap.help.getData(): Describes how to view the current state of the heap.");
        console.log("   - BinaryHeap.help.getType(): Describes how to view the type of heap.");
    },
};

module.exports = help;