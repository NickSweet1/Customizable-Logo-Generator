const fs = require('fs');

//Function to generate color of the text
generateTextColor = (textColor) => {

}
//Function to generate the shape of the logo
class Shape {
    constructor(shapeType) {
        this.shapeType = shapeType;
    }
    getShapeEl() {
        let shapeEl = "";
        switch (this.shapeType) {
            case "Circle":
                shapeEl = '<circle cx="50" cy="50" r="50" />';
                break;
            case "Square":
                shapeEl = '<rect x="0" y="0" width="100" height="100" />';
                break;
            case "Triangle":
                shapeEl = '<polygon points="50,5 95,95 5,95" />';
                break;
        }
        return shapeEl;
    }
}

//Function to generate color of the shape (space around the text)
generateColor = (shapeColor) => {

}



function generateLogo(answers) {
    // Use the answers to generate the content for the logo
    const { abbr, color, shape, shapeColor } = answers;
    const userShape = new Shape(shape).getShapeEl();
    const logoContent = `
        <svg>
           ${abbr}
           ${userShape}
        </svg>
    `;
    return logoContent;
}

module.exports = generateLogo;