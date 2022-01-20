"use strict";

beforeAll(() => {
  console.log(
    "BEFORE ALL",
    "init before all tests, eg: opening database connections"
  );
});

test("This is the first test", () => {
  console.log("first test");
  //   expect(2 + 2).toBe(4);
});

it("This is the second test", () => {
  console.log("second test");
});

describe("This is a first group of tests", () => {
  beforeEach(() => {
    console.log("beforeEach", "run before each test");
  });
  test("first test of first group", () => {
    console.log("first of first group");
  });
  test("second test of first group", () => {
    console.log("second of first group");
  });
  afterEach(() => {
    console.log("afterEach", "run after each test in first group");
  });
});

describe("This is the seond group", () => {
  beforeAll(() => {
    console.log("beforeAll", "run before all of second group");
  });
  describe("first subgroup of the second group", () => {
    test("first of SG1", () => {
      console.log("first of SG1");
    });
    test("second of SG1", () => {
      console.log("second of SG1");
    });
  });
  describe("second subgroup of second group", () => {
    test("first of SG2", () => {
      console.log("first of SG2");
    });
  });
});

describe("test concatenating strings", () => {
  const concat = (partA, partB) => partA + partB;

  test("first and second results firstsecond", () => {
    expect(concat("first", "second")).toBe("firstsecond");
  });
});

describe("this tests for an exception", () => {
  function testFunction() {
    throw Error("This is an exception");
  }
  test("test if a function throws an exception", () => {
    expect(() => testFunction()).toThrow("This is an exception");
  });

  // Ironically the exception to the above is an exception! (see concat example)
});

afterAll(() => {
  console.log(
    "AFTER ALL",
    "cleaning after all tests eg: for closing database connections"
  );
});
