import { SampleInstance } from "../types/contracts/truffle";

const Sample = artifacts.require("Sample");

contract("Sample", () => {
  let sample: SampleInstance;
  beforeEach(async () => {
    sample = await Sample.deployed();
  });

  it("should be get value", async () => {
    const expected = "42";
    await sample.setValue(expected);

    const actual = await sample.methods["getValue()"]();
    assert.equal(expected, actual);
  });

  it("should be get value", async () => {
    const expected = "28";
    const actual = await sample.methods["getValue(string)"](expected);

    assert.equal(expected, actual);
  });
});
