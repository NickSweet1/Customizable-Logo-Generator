const fs = require("fs");

//Function to generate the logo abbreviation text and color
generateText = (abbr, textColor) => {
  const trimmedColor = textColor.replace(/\s/g, ""); //removes spaces to math the colors object in the SVG_Colors.JSON file
  return `<text x="50%" y="50%" font-family="Verdana" font-size="35" fill="${trimmedColor}" text-anchor="middle" dominant-baseline="middle">${abbr}</text>`;
};

//Function to generate the shape of the logo
class Shape {
  constructor(shapeType, shapeColor, borderColor) {
    this.shapeType = shapeType;
    this.shapeColor = shapeColor;
    this.borderColor = borderColor;
    this.centerX = "50%";
    this.centerY = "50%";
  }
}

class Circle extends Shape {
  constructor(shapeType, shapeColor, borderColor) {
    super(shapeType, shapeColor, borderColor);
  }
  render() {
    console.log(this.centerX, this.shapeType);
    return `<circle cx="${this.centerX}" cy="${this.centerY}" r="50" stroke="${
      this.borderColor
    }" stroke-width="5" fill="${this.shapeColor.replace(/\s/g, "")}"/>`;
  }
}

class Triangle extends Shape {
  constructor(shapeType, shapeColor, borderColor) {
    super(shapeType, shapeColor, borderColor);
  }
  render() {
    return `<polygon points="150,25 50,145 250,145" stroke="${
      this.borderColor
    }" stroke-width="5" fill="${this.shapeColor.replace(/\s/g, "")}"/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="100" y="50" width="100" height="100" stroke="${
      this.borderColor
    }" stroke-width="5" fill="${this.shapeColor.replace(/\s/g, "")}"/>`;
  }
}

function generateLogo(answers) {
  // Use the answers to generate the content for the logo
  console.log(answers);
  const { abbr, textColor, shape, shapeColor, borderColor } = answers;

  let shapeObj;
  switch (shape) {
    case "Circle":
      shapeObj = new Circle(shape, shapeColor, borderColor);
      break;
    case "Triangle":
      shapeObj = new Triangle(shape, shapeColor, borderColor);
      break;
    case "Square":
      shapeObj = new Square(shape, shapeColor, borderColor);
      break;
  }

  const userLogo = generateText(abbr, textColor);
  const logoContent = `
        <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
           ${shapeObj.render()}
           ${userLogo}
        </svg>`;
  return logoContent;
}

module.exports = { Circle, Triangle, Square, generateLogo, Shape };
