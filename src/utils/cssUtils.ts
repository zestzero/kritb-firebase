type Dictionary = { [key: string]: boolean };
type ClassNameType = string | Dictionary;

const isObject = (arg: ClassNameType) => typeof arg === "object";

export const combineCss = (...args: ClassNameType[]) => {
  const cssList: string[] = [];
  args.forEach((arg) => {
    if (isObject(arg)) {
      Object.values(arg)[0] === true && cssList.push(Object.keys(arg)[0]);
    } else {
      cssList.push(arg as string);
    }
  });
  return cssList.join(" ");
};
