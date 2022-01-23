import { transformObjectKeys } from "./object";

describe("transformObjectKeys", () => {
  it("transforms object keys from snake_case to camelCase", () => {
    const obj = {
      snake_case_key: "value",
      another_snake_case_key: "another value",
    };

    const transformedObj = transformObjectKeys(obj);

    expect(transformedObj).toEqual({
      snakeCaseKey: "value",
      anotherSnakeCaseKey: "another value",
    });
  });
});
