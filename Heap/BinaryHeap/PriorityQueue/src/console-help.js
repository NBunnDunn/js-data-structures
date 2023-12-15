const help = {
    overview: () => {
        console.log("\n== PriorityQueue Overview ==");
        console.log("Description: A binary-heap based priority queue which models integer elements according to priority. Elements can be served either in min-heap (smallest element first) or max-heap (largest element first, default) order.");
        console.log("Common Applications:");
        console.log("   - Job Scheduling: Managing tasks in operating systems or applications based on priority.");
        console.log("   - Simulation Systems: Handling events based on scheduled time or priority.");
        console.log("   - Network Traffic Management: Prioritizing network requests or data packets.");
        console.log("   - Real-time Computing: Executing tasks based on urgency.");
        console.log("   - Bandwidth Management: Allocating resources like bandwidth based on priority.");
    },

    usage: () => {
        console.log("\n== PriorityQueue Usage ==");
        console.log('Parameters:');
        console.log('   - Parameter 1 (optional): Integer or array of integers representing the initial elements. If omitted, the priority queue is initialized with an empty array.');
        console.log('   - Parameter 2 (optional): String ("min"/"max") indicating the type of priority queue (default is "max").');
        console.log('Examples:');
        console.log('   - new PriorityQueue(5) // Creates a max-heap-based PriorityQueue with initial element -> [5]');
        console.log('   - new PriorityQueue([5,2,12]) // Creates a max-heap-based PriorityQueue from the array -> [12,2,5]');
        console.log('   - new PriorityQueue([20,1], "min") // Creates a min-heap-based PriorityQueue from the array -> [1,20]');
    },

    first: () => {
        console.log("\n== PriorityQueue .first() Method ==");
        console.log("Description: Returns the element with the highest priority without removing it.");
        console.log("Usage: priorityQueueInstance.first();");
        console.log("Complexity: O(1) (\"Constant\")");
        console.log("See PriorityQueue.md for more details.\n");
    },

    dequeue: () => {
        console.log("\n== PriorityQueue .dequeue() Method ==");
        console.log("Description: Removes and returns the element with the highest priority, reordering the queue as needed.");
        console.log("Usage: priorityQueueInstance.dequeue();");
        console.log("Complexity: O(log n) (\"Logarithmic\")");
        console.log("See PriorityQueue.md for more details.");
    },

    enqueue: () => {
        console.log("\n== PriorityQueue .enqueue(int: x) Method ==");
        console.log("Description: Inserts element x into the priority queue and reorders it based on priority.");
        console.log("Usage: priorityQueueInstance.enqueue(10);");
        console.log("Complexity: O(log n) (\"Logarithmic\")");
        console.log("See PriorityQueue.md for more details.");
    },

    getData: () => {
        console.log("\n== PriorityQueue .getData() Method ==");
        console.log("Description: Returns a copy of the priority queue array.");
        console.log("Usage: priorityQueueInstance.getData();");
        console.log("Complexity: O(1) (\"Constant\")");
        console.log("See PriorityQueue.md for more details.");
    },

    getType: () => {
        console.log("\n== PriorityQueue .getType() Method ==");
        console.log("Description: Returns a string representing the type of priority queue.");
        console.log("Usage: priorityQueueInstance.getType();");
        console.log("Complexity: O(1) (\"Constant\")");
        console.log("See PriorityQueue.md for more details.");
    },

    _help: () => {
        console.log("\n== PriorityQueue Help ==");
        console.log("To view information regarding specific methods (descriptions, examples, & runtimes), access the static \"help\" property on the PriorityQueue class");
        console.log("All PriorityQueue.help methods:");
        console.log("   - PriorityQueue.help.overview(): Provides an overview of the class and common applications.");
        console.log("   - PriorityQueue.help.usage(): Describes initialization and parameters.");
        console.log("   - PriorityQueue.help.first(): Describes the process of viewing the highest priority element.");
        console.log("   - PriorityQueue.help.dequeue(): Describes the process of viewing and removing the highest priority element.");
        console.log("   - PriorityQueue.help.enqueue(): Describes the process of inserting a value into the priority queue.");
        console.log("   - PriorityQueue.help.getData(): Describes how to view the current state of the priority queue.");
        console.log("   - PriorityQueue.help.getType(): Describes how to view the type of priority queue.");
    },
};

module.exports = help;