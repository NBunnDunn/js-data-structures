# Priority Queue Class Documentation

## Overview

### Description
- **High-Level Overview**: A priority queue is an abstract data type (ADT) that organizes data based on priority, typically represented as integer values. The interpretation of priority may vary between implementations, with some considering lower values as higher priority and vice versa.

A key feature of a priority queue is its ability to provide constant-time access (`O(1)`) to elements with the highest priority while maintaining logarithmic time (`O(log n)`) for heap reordering after the removal of the highest priority element.

- **Implementation Details**: The `PriorityQueue` class is implemented using a binary heap and supports both ordering criteria, allowing elements to be prioritized based on the smallest or largest integer value. This ordering is determined by passing a string argument, either "min" or "max," as the second parameter during instantiation. If omitted, the default behavior is to consider larger values as having higher priority.

### Strengths and Practical Use in Software Development
- #### Strengths:
  - Efficiently manages large datasets requiring quick access and modification.
  - Provides `O(1)` random-access times for retrieving the highest or lowest priority element.
- #### Real-World Applications:
  - **Operating Systems:** Priority queues manage processes in operating systems, executing higher-priority processes first.
  - **Dijkstra's Algorithm**: Used to select the next vertex with the smallest distance in graph algorithms.
  - **Task Scheduling**: Prioritizes task execution in real-time systems and scheduling algorithms.
  - **Print Job Management**: Manages print jobs, printing higher-priority jobs before lower-priority ones.
  - **Emergency Room Triage**: Prioritizes patients in the emergency room based on their medical condition.
  - **Data Compression**: Builds priority queues for efficient character encoding in data compression.
  - **Network Routing**: Determines routing priorities for network packets.
  - **Discrete Event Simulation**: Schedules events based on timestamps in simulation.
  - **Multi-Threaded Task Management**: Manages thread execution order in multi-threaded applications.
  - **A Search Algorithm***: Explores nodes with the lowest estimated cost in pathfinding.
  - **Job Scheduling in Printers**: Schedules print jobs efficiently in high-capacity printers.
  - **Air Traffic Control**: Manages aircraft queues at airports, prioritizing based on emergencies and schedules.
  - **Packet Scheduling in Networks**: Controls packet transmission based on Quality of Service (QoS).
  - **Task Management in Thread Pools**: Efficiently allocates threads to tasks in thread pools.

## Design Principles

### Underlying Concepts
- **Priority**: The fundamental concept of a `PriorityQueue`, which dictates that elements with higher priority are served before those with lower priority.
- **Binary Heap**: A binary tree that adheres to the heap property 
    - ***Binary tree***: A tree where each node has a max of two children
    - ***Heap property***: Dictates that each parent node must be either greater (*max heap*) or less (*min heap*) than its children

## Implementation Overview

### Characteristics 

***\*\*Characteristics denoted with an asterisk (\*) are not implemented in this class implementation***

- **Priority Order**: Items in a priority queue are ordered or ranked based on their priority. Elements with higher priority are processed before lower-priority elements.

- **Complexity Analysis**:
    - Insertion: `O(log n)`
    - Extraction: `O(log n)`
    - Peek (Retrieve Highest Priority Element): `O(1)`
    - Removal of Specific Element (if supported): `O(n)`

- **Dynamic Size:** Priority queues can often dynamically resize to accommodate a varying number of elements.

- **Support for Comparable Elements**: Elements in a priority queue are typically comparable, meaning there is a way to determine which element has higher or lower priority. This often involves defining a comparison function.

- **Support for Duplicate Priorities**: Some implementations allow elements with the same priority to be in the queue, and the order of extraction may follow a particular rule, such as first-in, first-out (FIFO).

- **\*Not Limited to Numeric Priorities**: While numeric priorities are common, priority queues are not limited to numbers. Priorities can be based on various criteria, including timestamps, keys, or custom comparison functions.

- **\*Support for Decrease/Increase Priority**: Some priority queues allow for changing the priority of elements already in the queue, typically with operations like decrease-key and increase-key.

- **\*Iterability**: Some priority queues can be iterated through based on their underlying array representation.

- **\*Use of Comparator Functions**: In some priority queue implementations, users can provide custom comparator functions to define priority based on specific criteria.
    - *This implementation only supports max/min heaps


## Usage

### Initialization
To create an instance of the `PriorityQueue` class, follow these steps:

```javascript
const pqInstance = new PriorityQueue(values: number | number[], queueType: 'min' | 'max'); 
```

- `values: number | number[]` (Optional): Initial values for the priority queue, which can be an number or an array of numbers.
    - If omitted, creates an empty priority queue 
- `queueType: 'min' | 'max'` (Optional): The type of the queue, either 'max' or 'min'.
    - If omitted, creates a max priority queue (higher numbers are considered higher priority) 

### Methods and Operations
The `PriorityQueue` class provides the following methods:

-  **Enqueuing a Value:**
    - **Usage**: `pqInstance.enqueue(value: number)`
    - **Description**: Adds a value to the priority queue.
    - Runtime ComplexityRuntime**: `O(log n)`
    - **Parameters**:
        - `value`: The value to enqueue.

-  **Dequeuing the Highest Priority Element**
    - **Usage**: `pqInstance.dequeue()`
    - **Description**: Removes and returns the highest priority element from the priority queue.
    - **Runtime Complexity**: `O(log n)`
    - **Return Value**: The removed highest priority element.

-  **Retrieving the Highest Priority Element**
    - **Usage**: `pqInstance.first()`
    - **Description**: Retrieves the highest priority element from the priority queue without removing it.
    - **Runtime Complexity**: `O(1)`
    - **Return Value**: The highest priority element.

-  **Getting the Underlying Data**
    - **Usage**: `pqInstance.getData()`
    - **Description**: Retrieves a copy of the underlying data of the priority queue.
    - **Runtime Complexity**: `O(n)`
    - **Return Value**: An array containing the data of the priority queue.

-  **Getting the Queue Type**
    - **Usage**: `pqInstance.getType()`
    - **Description**: Retrieves the type of the priority queue, indicating whether it is a "Min Priority Queue" or a "Max Priority Queue."
    - **Runtime Complexity**: `O(1)`

-  **Retrieve Class-Specific Help Object**
    - **Usage**: `pqInstance.help()`
    - **Description**: Displays class-specific help information in the console.
    - **Runtime Complexity**: `O(1)`

### Error Handling
The `PriorityQueue` class implements comprehensive input validation to ensure that incompatible data types are rejected with clear error messages.

## Additional Resources
- **tests/sandbox.js**: For ad-hoc testing and experimentation.
- **src/console-help.js**: For additional console-based method-level documentation and usage information.
