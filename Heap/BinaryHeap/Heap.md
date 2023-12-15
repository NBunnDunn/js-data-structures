# Binary Heap Class Documentation

## Overview

### Description
- **High-Level Overview**: A binary heap is a binary tree that adheres to the heap property 

- **Implementation Details**: The `BinaryHeap` class is used to represent and work with binary heaps, providing methods for insertion, deletion, and other heap operations.

### Strengths and Practical Use in Software Development
- #### Strengths:
  - Retrieve root element (either min/max) in constant time (O(1)).
  - Provides O(log n) time complexity for insertions and extractions, making it efficient for large datasets.
- #### Real-World Applications:
  - **Priority Queues**: Used as the underlying data structure for priority queues in various applications.
  - **Heap Sort**: Forms the basis for the heap sort algorithm.
  - **Graph Algorithms**: Applied in algorithms like Prim's and Kruskal's for minimum spanning tree construction.
  - **Dijkstra's Algorithm**: Helps find the shortest path in graph algorithms.

## Design Principles

### Underlying Concepts
- **Binary tree**: A tree where each node has a max of two children
 - **Heap property**: Dictates that each parent node must be either greater (*max heap*) or less (*min heap*) than its children

## Implementation Overview

### Characteristics

***\*\*Characteristics denoted with an asterisk (\*) are not implemented in this class implementation***

- **Heap Order**: Binary heaps maintain a specific order (max heap or min heap) for efficient operations.
- **Complexity Analysis**:
    - Insertion: `O(log n)`
    - Extraction (Retrieve & Delete Maximum/Minimum Element): `O(log n)`
    - Peek (Retrieve Maximum/Minimum Element): `O(1)`
    - Removal of Specific Element (if supported): `O(n)`

- **Dynamic Size**: Binary heaps can dynamically resize to accommodate varying numbers of elements.
- **\*Support for Comparable Elements**: Elements in a binary heap are comparable, typically using natural ordering or custom comparators.
    - *This implementation only supports max/min heaps
- **\*Not Limited to Numeric Values**: While numeric values are common, binary heaps can store elements based on various criteria.
- **\*Iterability**: Binary heaps can be iterated through based on their underlying array representation.

## Usage

### Initialization
To create an instance of the `BinaryHeap` class, follow these steps:

```javascript
const heapInstance = new BinaryHeap(values: number | number[], heapType: 'max' | 'min' ); 
```

- `values: number | number[]` (Optional): Initial values for the binary heap
    - If omitted, creates an empty heap
- `heapType: 'max' | 'min' ` (Optional): The type of the heap
    - If omitted, creates a min heap (lowest integer is at the top/root)

### Methods and Operations
The `BinaryHeap` class provides the following methods:

- **Inserting an Element**:
    - **Usage**: `heapInstance.insert(value: number)`
    - **Description**: Inserts an element into the binary heap.
    - **Runtime Complexity**: `O(log n)`
    - **Parameters**:
        - `value`: The element to insert.

- **Extracting Maximum/Minimum Element**:
    - **Usage**: `heapInstance.poll()`
    - **Description**: Removes and returns the maximum (in max heap) or minimum (in min heap) element from the heap.
    - **Runtime Complexity**: `O(log n)`
    - **Return Value**: The removed maximum/minimum element.

- **Peek at Maximum/Minimum Element**:
    - **Usage**: `heapInstance.peek()`
    - **Description**: Retrieves the maximum (in max heap) or minimum (in min heap) element from the heap without removing it.
    - **Runtime Complexity**: `O(1)`
    - **Return Value**: The maximum/minimum element.

- **Getting the Heap Type**:
    - **Usage**: `heapInstance.getType()`
    - **Description**: Retrieves the type of the binary heap, indicating whether it's a "Max Heap" or a "Min Heap."
    - **Runtime Complexity**: `O(1)`
    - **Return Value**: The type of heap ('Max Heap' | 'Min Heap': string).


- **Getting the Underlying Data**:
    - **Usage**: `heapInstance.getData()`
    - **Description**: Retrieves a copy of the underlying data of the binary heap.
    - **Runtime Complexity**: `O(n)`
    - **Return Value**: An array containing the data of the heap.

-  **Retrieve Class-Specific Help Object**
    - **Usage**: `heapInstance.help()`
    - **Description**: Displays class-specific help information in the console.
    - **Runtime Complexity**: `O(1)`

### Error Handling
The `BinaryHeap` class implements comprehensive input validation to ensure that incompatible data types are rejected with clear error messages.

## Additional Resources
- **tests/sandbox.js**: For ad-hoc testing and experimentation.
- **src/console-help.js**: For additional console-based method-level documentation and usage information.
```