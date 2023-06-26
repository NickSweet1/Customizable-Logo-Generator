const fs = require('fs');

//Function to generate the logo abbreviation text and color
generateText = (abbr, textColor) => {
    const trimmedColor = textColor.replace(/\s/g, ""); //removes spaces to math the colors object in the SVG_Colors.JSON file
    return `<text x="50%" y="50%" font-family="Verdana" font-size="35" fill="${trimmedColor}" text-anchor="middle" dominant-baseline="middle">${abbr}</text>`;
}

//Function to generate the shape of the logo
class Shape {
    constructor(shapeType, shapeColor) {
        this.shapeType = shapeType;
        this.shapeColor = shapeColor;
    }
    getShapeEl() {
        let shapeEl = "";
        const centerX = "50%";
        const centerY = "50%";
        switch (this.shapeType) {
            case "Circle":
                shapeEl = `<circle cx="${centerX}" cy="${centerY}" r="50" fill="${this.shapeColor.replace(/\s/g, "")}"/>`;
                break;
            case "Square":
                shapeEl = `<rect x="100" y="25" width="100" height="100" fill="${this.shapeColor.replace(/\s/g, "")}"/>`;
                break;
            case "Triangle":
                shapeEl = `<polygon points="150,15 215,100 85,100" fill="${this.shapeColor.replace(/\s/g, "")}"/>`;
                break;
        }
        return shapeEl;
    }
}

function generateLogo(answers) {
    // Use the answers to generate the content for the logo
    const {abbr, textColor, shape, shapeColor } = answers;
    const userShape = new Shape(shape, shapeColor).getShapeEl();
    const userLogo = generateText(abbr, textColor);
    const logoContent = `
        <svg>
           ${userShape}
           ${userLogo}
        </svg>
    `;
    return logoContent;
}

module.exports = generateLogo;