import assert from "assert";
import { canBeIssued, isValid } from "../src/init";

describe("n-number", () => {
  describe("isValid", () => {
    it("should return false for N-numbers that are less than 2 characters", () => {
      assert.strictEqual(isValid("N"), false);
    });

    it("should return false for N-numbers longer than 5 characters", () => {
      assert.strictEqual(isValid("N123456"), false);
    });

    it("should return true for valid N-numbers of 5 characters", () => {
      assert.strictEqual(isValid("N12345"), true);
      assert.strictEqual(isValid("N1234A"), true);
      assert.strictEqual(isValid("N123AB"), true);
    });

    it("should return true for valid N-numbers of 4 characters", () => {
      assert.strictEqual(isValid("N1234"), true);
      assert.strictEqual(isValid("N123A"), true);
      assert.strictEqual(isValid("N12AB"), true);
    });

    it("should return true for valid N-numbers of 3 characters", () => {
      assert.strictEqual(isValid("N123"), true);
      assert.strictEqual(isValid("N12A"), true);
    });

    it("should return false for N-numbers not starting with N", () => {
      assert.strictEqual(isValid("X12345"), false);
    });

    it("should return false for N-numbers not starting with N0", () => {
      assert.strictEqual(isValid("N01234"), false);
    });

    it("should return false for N-numbers containing an I or O", () => {
      assert.strictEqual(isValid("N1234I"), false);
      assert.strictEqual(isValid("N1234O"), false);
    });

    it("should allow historic N prefixes such as NC", () => {
      assert.strictEqual(isValid("NC1234"), true);
      assert.strictEqual(isValid("NX1234"), true);
      assert.strictEqual(isValid("NR1234"), true);
      assert.strictEqual(isValid("NL1234"), true);
    });
  });

  describe("canBeIssued", () => {
    it("should allow a valid N-number", () => {
      assert.strictEqual(canBeIssued("N12345"), true);
    });

    it("should not allow an invalid N-number", () => {
      assert.strictEqual(canBeIssued("N1234I"), false);
    });

    it("should not allow valid historical N-numbers", () => {
      assert.strictEqual(canBeIssued("NC1234"), false);
    });
  });
});
