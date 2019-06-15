const random = require("./random");
const VariableConstructor = artifacts.require("./VariableConstructor.sol");

contract("VariableConstructor", accounts => {
  it("should should initialize with a random length string (A)", async () => {
    await VariableConstructor.new(random());
  });

  it("should should initialize with a random length string (B)", async () => {
    await VariableConstructor.new(random());
  });

  it("should should initialize with a random length string (C)", async () => {
    await VariableConstructor.new(random());
  });
});
