const capitalize = (str: string) =>
  str.slice(0, 1).toUpperCase() + str.slice(1);

const snakeToCamelCase = (str: string) =>
  str
    .split("_")
    .map((word, index) => (index === 0 ? word : capitalize(word)))
    .join("");

const stringToNumber = (str: string | number) =>
  typeof str === "string" ? parseFloat(str.replace(/,/g, "")) : str;

const formatNumber = (num: number) => Intl.NumberFormat().format(num);

export { capitalize, snakeToCamelCase, stringToNumber, formatNumber };
