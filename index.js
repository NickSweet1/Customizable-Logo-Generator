const fs = require("fs"); //links fs library
const inquirer = require("inquirer"); //links inquirer library
const generateLogo = require("./lib/shapes"); //link the shapes.js
const approvedColorsJSON = fs.readFileSync('./lib/SVG_Colors.JSON'); //links to the json file with the approved svg color codes
const approvedColors = JSON.parse(approvedColorsJSON).colors; //parse the colors object

const checkColorCode = (input) => {
    const trimmedInput = input.replace(/\s/g, ""); //removes spaces to match the JSON file
    const hexidecimalCode = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/  //checks if it is a hexidecimal code
    if (approvedColors.includes(trimmedInput.toLowerCase()) || hexidecimalCode.test(input)) {
        return true;
    } else {
        return "Please enter a valid SVG color code or hexidecimal code."
    }
}
const questions = [
    {
        name: "abbr",
        message: "What is the abbreviation (3 letters) that you would like to use for this logo?",
        validate: function (input) {
            if (input.length > 3) {
                return "Abbreviation must be three characters or shorter.";
            } else {
            return true;
            }
        }
    },
    {
        name: "textColor",
        message: "What color would you like your logo text to be? (Please use color keyword or hexidecimal code)",
        validate: checkColorCode
    },
    {
        name: "shape",
        message: "What shape would you like the logo to be?",
        type: "list",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        name: "shapeColor",
        message: "What color would you like the shape to be? (Please use color keyword or hexidecimal code)",
        validate: checkColorCode
    },
    {
        name: "border",
        message: "Whould you like a border around the logo?",
        type: "confirm",
    },
    {
        name: "borderColor",
        message: "What color would you like the border to be? (Please use color keyword or hexidecimal code)",
        when: (answers) => answers.border,
        validate: checkColorCode
    }
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
        const markdownContent = generateLogo(answers); //stoes the data to enter into SVG file to a variable
        writeToFile("./examples/logo.svg", markdownContent); //calls the function to actually generate the README file
    });
};

// Function call to initialize app
init();
