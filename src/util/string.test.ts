import { snakeToCamelCase, capitalize } from "./string";

test("snakeToCamelCase", () => {
  expect(snakeToCamelCase("hello_world")).toBe("helloWorld");
  expect(snakeToCamelCase("hello_world_again")).toBe("helloWorldAgain");
});

test("capitalize", () => {
  expect(capitalize("abc")).toBe("Abc");
  expect(capitalize("ABC")).toBe("ABC");
  expect(capitalize("aBc")).toBe("ABc");
});
