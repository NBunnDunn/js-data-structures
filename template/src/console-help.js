/**
 * console-help.js
 * 
 * Purpose:
 * This file provides a help object with methods to display documentation and usage information 
 * about the DataStructure class in the console. It's designed to offer developers quick access 
 * to important information about how to use the class and its various methods.
 * 
 * Required Methods:
 * - The help object must include the following methods:
 *   - overview(): Provides a general overview of the DataStructure.
 *   - usage(): Details on how to use the DataStructure, including parameters and examples.
 *   - _help(): Lists all available help methods (outside of itself) and their purposes.
 *      - This method is called using the help method on a dataStructureInstance (e.g. dsInstance.help() internally calls DataStructureClass._help())
 * 
 * How to Use:
 * - Invoke the desired method on the help object to print the corresponding information to the console.
 * - This is especially useful for understanding the class functionality, parameters, and example usage.
 * 
 * Example Usage:
 * - To get an overview of the DataStructure class:
 *   help.overview();
 * - To understand how to use the DataStructure class and its parameters:
 *   help.usage();
 * - To get information on other specific methods:
 *   help._help();
 * 
 * Note:
 * - This file is intended to be a quick reference guide.
 * - Detailed documentation should still be consulted for more comprehensive information.
 */

const help = {
    overview: () => {
        console.log("\n== DataStructure Overview ==");
        console.log("Description: This DataStructure is a flexible, efficient data storage system.");
        console.log("Common Applications:");
        console.log("   - Example 1: Efficient data retrieval.");
        console.log("   - Example 2: Organizing and processing data.");
        console.log("   - Additional applications as relevant.");
    },
    usage: () => {
        console.log("\n== DataStructure Usage ==");
        console.log('Parameters:');
        console.log('   - Parameter 1 (Type, required/optional): Description of what this parameter represents.');
        // Additional parameters (if applicable)
        // ...
        console.log('Examples:');
        console.log('   - Example Initialization: new DataStructure(param1, param2) // Brief description of what this initialization does');
        // Additional examples for differently-typed arguments (if applicable)
        // ...
    },
    
    // Describes the methods on this help object
    _help: () => {
        console.log("\n== DataStructure Help ==");
        console.log("To view information regarding specific methods, access the static \"help\" property on the DataStructure class.");
        console.log("Available methods:");
        console.log("   - overview(): Provides a general description and common applications.");
        console.log("   - usage(): Explains how to initialize and use the DataStructure, along with parameter details.");
        // Additional method descriptions as needed
        // ...
    },
};

module.exports = help;