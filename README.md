# Comprehensive JavaScript Data Structure Library

## Overview
Welcome to the Comprehensive JavaScript Data Structure Library. This extensive collection features a variety of data structures implemented in JavaScript, from basic to advanced. Designed for educational purposes, it offers efficient and tested implementations in a modular format. Whether you're tackling complex algorithms, optimizing applications, or exploring data structure concepts, this library is an invaluable resource.

**This library is particularly beginner-friendly with a range of implementations from basic to advanced levels. It's particular helpful for:**
- Beginners, looking to:
  - **Gain firsthand experience** with version control systems like Git, contributing to open-source projects, and understanding the workflow of collaborative software development.
  - **Build upon a portfolio**, showcasing practical skills to potential employers or for personal growth.
  - **Practice robust algorithm development**, ultimately learning how to write bug-free code.
  - **Hone test-driven-development skills** skills and become more familiar with unit-testing.
- Students, looking to:
  - **Reinforce academic concepts** by implementing and understanding a variety of data structures.
  - **Prepare for the technical interview** by having access to an extensively documented and robust library of both common and more advanced data structures
- Developers looking to: 
  - **Sharpen their skills** by reimplementing both classic and more challenging data structures
  - **Give back to the community** by sharing knowledge and contributing to educational resources

## For Beginners
If you're new to open-source projects, this library is a great starting point. We've structured it to be welcoming and inclusive for contributors of all skill levels. Here you'll find:

- A `template` folder to guide your contributions.
  - This folder contains all required content associated with the implementation of a data structure, with each file clearly outlining the expected contents and examples at every step.
- Detailed documentation to help you understand each data structure, both in the form of an extensive markdown file for each data structure as well as a set of console-based tutorials for  data structure and its methods.
- A variety of data structures, from basic to advanced, providing opportunities to learn and grow.
- A supportive community that's eager to help newcomers.

We encourage you to try implementing a data structure, improving documentation, or adding tests. Every contribution is valuable!

## Library Structure
Each data structure folder contains (at a mininum):
- Source code for the data structure (`src` folder)
  - `DataStructure.js`: The main file for each data structure
  - `logger.js`: The file which contains all console-based tutorials and information for each data structure
- Various forms of testing (`tests` folder)
  - `DataStructure.test.js`: Location of extension unit tests specific to each data structure
  - `sandbox.js`: An interactive sandbox file for experimentation
- Comprehensive documentation (`DataStructure.md`)

## Library Content
The library is organized into subfolders, each dedicated to a major category of data structures, with implementations of specific types within each category. **Note**: Not every data structure listed below has been added, those marked with a "✅" are already implemented, while those marked with a "🚧" are planned for future implementation:

- **Linked Lists**: 
  - 🚧 Singly Linked List
  - 🚧 Doubly Linked List
  - 🚧 Circular Linked List

- **Stacks**: 
  - 🚧 Array-Stack 
  - 🚧 Linked-List-Stack

- **Queues**: 
  - 🚧 Simple Queue (Basic FIFO implementation)
  - 🚧 Circular Queue (Efficient for fixed-size queues)

- **Heaps**: 
  - ✅ Binary Heap
    - ✅ PriorityQueue (Using a BinaryHeap)
  - 🚧 Fibonacci Heap (Better amortized performance)
  - 🚧 Binomial Heap (Efficient for merging)

- **Trees**: 
  - Binary Trees
    - 🚧 Standard Binary Tree
    - 🚧 Binary Search Tree
  - Balanced Trees
    - 🚧 AVL Tree (Self-balancing tree)
    - 🚧 Red-Black Tree (Balances after insertions and deletions)
    - 🚧 B-Tree (Optimized for reading and writing large blocks of data)
    - 🚧 Splay Tree (Moves frequently accessed elements closer to the root)

- **Tries**: 
  - 🚧 Simple Tries (Efficient for word retrieval)
  - 🚧 Suffix Tries (Useful for substring searches)
  - 🚧 Radix Tries (Compressed trie for space efficiency)

- **Graphs**: 
  - 🚧 Directed (For representing directed relationships)
    - 🚧 Weighted (Graphs with weighted edges)
  - 🚧 Undirected (For representing bidirectional relationships)
    - 🚧 Weighted (Graphs with weighted edges)

## Usage
To use a specific data structure in your project, simply navigate to the respective folder and include the source file in your JavaScript application. Detailed usage instructions and examples are provided in the `DataStructure.md` file within each subfolder.

## Contributing
Contributions to the Comprehensive JavaScript Data Structure Library are welcome! Whether it's adding new structures, optimizing existing ones, or improving documentation, your input is valuable. Please refer to the `CONTRIBUTING.md` file for guidelines on contributing.

## Getting Started
To get started, clone the repository and explore the various data structures available. Each subfolder contains a standalone implementation, along with its documentation and tests.

## License
This library is open-sourced under the [GNU General Public License, version 3](https://www.gnu.org/licenses/gpl-3.0.html).

## Support and Collaboration
For support, questions, or collaboration, please open an issue in the repository or contact the maintainers directly.

Thank you for exploring the Comprehensive JavaScript Data Structure Library. Your contributions and feedback are what make this project grow and improve.