Description
===================
A command-line reverse polish notation (RPN) calculator. To get more information about RPN, please check https://en.wikipedia.org/wiki/Reverse_Polish_notation


Install
===================

There is not external dependencies. Cloning the repo is enough to run as long as Node.js is installed on the host machine. If not,

https://nodejs.org/en/download/


Run the code
===================

``npm start``


Code Sample
===================

We would like to get to know your coding style and see what you would consider your best work.
In subsequent interviews, we'll talk through your code and make some changes.

Examples
--------------------

    > 5 
    5
    > 8
    8
    > +
    13

---

    > 5 5 5 8 + + -
    -13.0
    > 13 +
    0.0

---

    > -3
    -3.0
    > -2
    -2.0
    > *
    6.0
    > 5
    5.0
    > +
    11.0

---

    > 5
    5
    > 9
    9
    > 1
    1
    > -
    8
    > /
    0.625


Solution
===================
1. Used node input stream to listen users' inputs.
2. Created an rpn class to interperet expression the user gives. It basically uses a stack to keep expressions' results. For each expression the user enters, interpret() method runs and goes each one of them in a loop and evaluate the result. If any error occurs, our top element on the stack will be non-numeral value such as Infinity or null.
3. Our main.js file (which also listens to the standard input stream) is a starting point of our cli. It is responsible for creating RPN class to interperet expressions and error handling. If something is wrong with the expression, it restarts the cli.