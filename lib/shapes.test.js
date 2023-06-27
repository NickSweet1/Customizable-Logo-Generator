const { Shape } = require('./shapes.js');
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
    const shape = new Shape(answers.shape, answers.shapeColor, answers.borderColor);
    const result = shape.getShapeEl();
    const expectedShape = `<circle cx="${centerX}" cy="${centerY}" r="50" stroke="${
        shape.borderColor
      }" stroke-width="5" fill="${shape.shapeColor.replace(/\s/g, "")}"/>`;
    expect(result).toEqual(expectedShape);
})

test("Creates a triangle shape for the logo", () => {
    answers.shape = "Triangle"
    const shape = new Shape(answers.shape, answers.shapeColor, answers.borderColor);
    const result = shape.getShapeEl();
    const expectedShape = `<polygon points="150,25 50,145 250,145" stroke="${
        shape.borderColor
      }" stroke-width="5" fill="${shape.shapeColor.replace(/\s/g, "")}"/>`
    expect(result).toEqual(expectedShape);
})

test("Creates a square shape for the logo", () => {
    answers.shape = "Square"
    const shape = new Shape(answers.shape, answers.shapeColor, answers.borderColor);
    const result = shape.getShapeEl();
    const expectedShape = `<rect x="100" y="50" width="100" height="100" stroke="${
        shape.borderColor
      }" stroke-width="5" fill="${shape.shapeColor.replace(/\s/g, "")}"/>`
    expect(result).toEqual(expectedShape);
})