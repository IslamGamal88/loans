import { snakeToCamelCase } from "./string";

const transformObjectKeys = (obj: any): any =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [snakeToCamelCase(key), value])
  );

export { transformObjectKeys };
