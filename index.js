const fs = require("fs");
const inquirer = require("inquirer");
const generateLogo = require("./lib/shapes");

const questions = [
    {
        name: "abbr",
        message: "What is the abbreviation (3 letters) that you would like to use for this logo?" 
    },
    {
        name: "textColor",
        message: "What color would you like your logo to be? (Please use color keyword or hexidecimal code)"
    },
    {
        name: "shape",
        message: "What shape would you like the text to be?",
        type: "list",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        name: "shapeColor",
        message: "What color would you like the shape to be? (Please use color keyword or hexidecimal code)"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.log("error"); // logs error if error occurs
        } else {
            console.log("Logo generated."); //logs proof that file has been created
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        const markdownContent = generateLogo(answers); //stoes the data to enter into README file to a variable
        writeToFile("logo.svg", markdownContent); //calls the function to actually generate the README file
    });
};

// Function call to initialize app
init();
