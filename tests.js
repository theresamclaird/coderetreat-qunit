const { test } = QUnit;

QUnit.module("Strict Equality", () => {
    test("numbers", assert => {
        assert.strictEqual(1, 1, "The number 1 should be strictly equal to the number 1.");
    });
    test("number vs. string", assert => {
        assert.notStrictEqual(1, "1", "The number 1 should not be strictly equal to the string \"1\".");
    });
});

QUnit.module("Abstract Equality", () => {
    test("truthy", assert => {
        assert.equal(1, true, "The number 1 should be truthy.");
    });
    test("number vs. string", assert => {
        assert.equal(1, "1", "The number 1 should be abstractly equal to the string \"1\".");
    });
});