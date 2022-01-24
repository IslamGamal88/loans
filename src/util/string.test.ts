import {
  snakeToCamelCase,
  capitalize,
  formatNumber,
  stringToNumber,
} from "./string";

test("snakeToCamelCase", () => {
  expect(snakeToCamelCase("hello_world")).toBe("helloWorld");
  expect(snakeToCamelCase("hello_world_again")).toBe("helloWorldAgain");
});

test("capitalize", () => {
  expect(capitalize("abc")).toBe("Abc");
  expect(capitalize("ABC")).toBe("ABC");
  expect(capitalize("aBc")).toBe("ABc");
});

// test formatNumber
test("formatNumber", () => {
  expect(formatNumber(123456789)).toBe("123,456,789");
  expect(formatNumber(123456789.123)).toBe("123,456,789.123");
});

// test stringToNumber
test("stringToNumber", () => {
  expect(stringToNumber("123,456,789")).toBe(123456789);
  expect(stringToNumber("123,456,789.123")).toBe(123456789.123);
});
