### Commonly Enforced Coding Standards

1. **Consistent Naming Conventions**:
   - Use clear, descriptive names for variables, functions, classes, and other entities.
   - Follow a naming convention consistently 
     - Variables and functions: [camelCase](https://en.wikipedia.org/wiki/Camel_case)
     - Classes: [PascalCase](https://en.wikipedia.org/wiki/Camel_case) (same link as camelCase)

2. **Code Formatting**:
   - Maintain consistent indentation (4 spaces) and use a formatter like Prettier to automate this process.
   - Use the [**K&R**](https://en.wikipedia.org/wiki/Indentation_style#K&R_style) bracket indentation style

         Example: function kAndR {
            console.log("Brackets placed correctly.");
         }
3. **Commenting and Documentation**:
   - Write comments that explain the "why" behind complex logic, not just the "what".
   - Use [**JSDoc**](https://jsdoc.app/) for documenting [functions](https://jsdoc.app/about-getting-started), [classes](https://jsdoc.app/howto-es2015-classes), and [modules](https://jsdoc.app/howto-es2015-modules).

4. **Avoid Deep Nesting**:
   - Limit the depth of nesting (preferably not more than 2-3 levels) to improve readability.

5. **Error Handling**:
   - Use comprehensive error handling and avoid generic catches.
   - Prefer specific error types to generic ones.

6. **Code Modularity and Functions**:
   - Keep functions and methods short and focused on a single task.
   - Break down large files into smaller, modular files or components.

### JavaScript-Specific Standards

1. **Use `let` and `const`**:
   - Use [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) for variables that change and [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) for variables that remain constant to make your code more predictable and to prevent unintentional reassignments.

2. **Arrow Functions**:
   - Use [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) for anonymous functions, especially for functions in callbacks or methods that need to bind to the current context.

   - Use [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) for string concatenation to improve readability.
3. **Template Literals**:
         
         const name = 'John'
         console.log(`My name is ${name}.`) 

4. **Array and Object Destructuring**:
   - Utilize [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) for accessing properties from objects or arrays to make the code cleaner.

         const { myProperty } = myObject;

5. **Modules**:
   - Use CommonJS `require()` / `module.exports` over ES6 import/export.

6. **Default Parameter Values**:
   - Use [default parameter values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) in functions for more predictable behavior and fewer undefined checks.

         function example (x = defaultValue) {
            // Further code
         }