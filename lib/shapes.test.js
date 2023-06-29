const { Shape, Circle, Triangle, Square } = require('./shapes.js');
const answers = {
    abbr: "SVG",
    textColor: "blue",
    shape: "Circle",
    shapeColor: "red",
    borderColor: "black",
}

test("Creates a circle shape for the logo", () => {
    const centerX = "50%";
    const centerY = "50%";
    const circle = new Circle(answers.shape, answers.shapeColor, answers.borderColor);
    const result = circle.render();
    const expectedShape = `<circle cx="${centerX}" cy="${centerY}" r="50" stroke="${
        circle.borderColor
      }" stroke-width="5" fill="${circle.shapeColor.replace(/\s/g, "")}"/>`;
    expect(result).toEqual(expectedShape);
})

test("Creates a triangle shape for the logo", () => {
    answers.shape = "Triangle"
    const triangle = new Triangle(answers.shape, answers.shapeColor, answers.borderColor);
    const result = triangle.render();
    const expectedShape = `<polygon points="150,25 50,145 250,145" stroke="${
        triangle.borderColor
      }" stroke-width="5" fill="${triangle.shapeColor.replace(/\s/g, "")}"/>`
    expect(result).toEqual(expectedShape);
})

test("Creates a square shape for the logo", () => {
    answers.shape = "Square"
    const square = new Square(answers.shape, answers.shapeColor, answers.borderColor);
    const result = square.render();
    const expectedShape = `<rect x="100" y="50" width="100" height="100" stroke="${
        square.borderColor
      }" stroke-width="5" fill="${square.shapeColor.replace(/\s/g, "")}"/>`
    expect(result).toEqual(expectedShape);
})