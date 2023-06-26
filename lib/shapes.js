const fs = require('fs');

//Function to generate the text of the logos abbreviation 
generateAbbr = (abbr) => {
    abbreviation = abbr;
    return abbreviation;
}

//Function to generate color of the text
generateTextColor = (textColor) => {

}
//Function to generate the shape of the logo
generateShape = (shape) => {
    let shapeEl = "";

    switch (shape) {
        case "Circle":
            shapeEl = '<circle cx="50" cy="50" r="50" />';
        case "Square":
            shapeEl = '<rect x="0" y="0" width="100" height="100" />';
        case "Triangle":
            shapeEl = '<polygon points="50,5 95,95 5,95" />';
    }
}

//Function to generate color of the shape (space around the text)
generateColor = (shapeColor) => {

}



function generateLogo(answers) {
    // Use the answers to generate the content for the logo
    const { abbr, color, shape, shapeColor } = answers;
    const logoContent = `
        <svg>
            <!-- Add SVG code here based on the user's answers -->
        </svg>
    `;
    return logoContent;
}

module.exports = generateLogo;