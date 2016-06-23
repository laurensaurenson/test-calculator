// add()
// subtract()
// multiply()
// divide()
// square()
// squareRoot()

describe("Calculator Functions:", function () {

  it("should have an add function", function () {
    expect(add).toBeDefined();
  });

  it("should add two numbers", function () {
    expect(add(2, 3)).toBe(5);
  });

  it("should have a subtract function", function () {
    expect(subtract).toBeDefined();
  });

  it("should subtract two numbers", function () {
    expect(subtract(5, 3)).toBe(2);
  });

  it("should have a multiply function", function () {
    expect(multiply).toBeDefined();
  });

  it("should multiply two numbers", function () {
    expect(multiply(3, 4)).toBe(12);
  });

  it("should have a divide function", function () {
    expect(divide).toBeDefined();
  });

  it("should divide two numbers", function () {
    expect(divide(12, 3)).toBe(4);
  });

  it("should have a square function", function() {
    expect(square).toBeDefined();
  });

  it("should square a number", function () {
    expect(square(2)).toBe(4);
  });

  it("should have a squareRoot function", function () {
    expect(squareRoot).toBeDefined();
  });

  it("should get the square root of a number", function () {
    expect(squareRoot(4)).toBe(2);
  });

});