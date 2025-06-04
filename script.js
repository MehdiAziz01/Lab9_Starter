// Sample data for console demonstrations
const sampleData = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "San Diego",
        state: "CA"
    },
    hobbies: ["coding", "reading", "hiking"]
};

// Console method demonstrations
function setupConsoleButtons() {
    const buttons = document.querySelectorAll('#error-btns > button');
    
    // Console Log
    buttons[0].addEventListener('click', () => {
        console.log('Regular log message:', sampleData);
    });

    // Console Error
    buttons[1].addEventListener('click', () => {
        console.error('This is an error message');
    });

    // Console Count
    buttons[2].addEventListener('click', () => {
        console.count('Button clicked');
    });

    // Console Warn
    buttons[3].addEventListener('click', () => {
        console.warn('This is a warning message');
    });

    // Console Assert
    buttons[4].addEventListener('click', () => {
        console.assert(1 === 2, 'Assertion failed: 1 is not equal to 2');
    });

    // Console Clear
    buttons[5].addEventListener('click', () => {
        console.clear();
    });

    // Console Dir
    buttons[6].addEventListener('click', () => {
        console.dir(sampleData);
    });

    // Console DirXML
    buttons[7].addEventListener('click', () => {
        console.dirxml(document.body);
    });

    // Console Group Start
    buttons[8].addEventListener('click', () => {
        console.group('User Information');
        console.log('Name:', sampleData.name);
        console.log('Age:', sampleData.age);
    });

    // Console Group End
    buttons[9].addEventListener('click', () => {
        console.groupEnd();
    });

    // Console Table
    buttons[10].addEventListener('click', () => {
        console.table([
            { name: 'John', age: 30 },
            { name: 'Jane', age: 25 },
            { name: 'Bob', age: 35 }
        ]);
    });

    // Start Timer
    buttons[11].addEventListener('click', () => {
        console.time('operationTimer');
    });

    // End Timer
    buttons[12].addEventListener('click', () => {
        console.timeEnd('operationTimer');
    });

    // Console Trace
    buttons[13].addEventListener('click', () => {
        function first() {
            second();
        }
        function second() {
            third();
        }
        function third() {
            console.trace('Trace from third function');
        }
        first();
    });

    // Trigger Global Error
    buttons[14].addEventListener('click', () => {
        try {
            throw new Error('This is a test error');
        } catch (error) {
            console.error('Caught error:', error);
        }
    });
}

// Custom Error class
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

// Calculator error handling
function setupCalculator() {
    const form = document.querySelector('form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const output = document.querySelector('output');
        const firstNum = document.querySelector('#first-num').value;
        const secondNum = document.querySelector('#second-num').value;
        const operator = document.querySelector('#operator').value;

        try {
            // Validate inputs
            if (!firstNum || !secondNum) {
                throw new ValidationError('Please enter both numbers');
            }

            if (isNaN(firstNum) || isNaN(secondNum)) {
                throw new ValidationError('Please enter valid numbers');
            }

            if (operator === '/' && secondNum === '0') {
                throw new ValidationError('Cannot divide by zero');
            }

            const result = eval(`${firstNum} ${operator} ${secondNum}`);
            output.innerHTML = result;
        } catch (error) {
            if (error instanceof ValidationError) {
                output.innerHTML = `Error: ${error.message}`;
            } else {
                output.innerHTML = 'An unexpected error occurred';
                console.error('Calculator error:', error);
            }
        }
    });
}

// Global error handler
window.onerror = function(message, source, lineno, colno, error) {
    console.error('Global error caught:', {
        message,
        source,
        lineno,
        colno,
        error
    });
    return true; // Prevents the default browser error handling
};

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupConsoleButtons();
    setupCalculator();
}); 