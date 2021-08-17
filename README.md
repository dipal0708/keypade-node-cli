# Backend coding task

Write a command-line application with Node.js that returns the coordinates of a key on a telephone keypad based on user input.
``` 
We expect to receive your code either as an email attachment or as a link to GitHub or other code hosting platform (make sure we can access it). Include instructions on how to run the application; you can assume we already have Node.js v14 installed.
Task details
The keypad looks as follows:
You can think of it as a grid of 3 columns and 4 rows with the following indices:
1 2 3
1 |___|___|___
2 |___|___|___
3 |___|___|___
4 |___|___|___
We expect the program to return a [row, column] pair; handle the edge cases as you see fit.
Examples:
User input: 8
Result: [3,2]
User input: H
Result: [2,1]
User input: #
Result: [4,3]
User input: u
Result: [3,2]
```
## Installation

Use the package manager ## npm to install.

```bash
npm link
```

## Run Command 

```node
seed u
```

## Output

```
[ 3, 2 ]
```

## License
[MIT](https://choosealicense.com/licenses/mit/)