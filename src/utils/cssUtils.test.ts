import { combineCss } from "./cssUtils";

describe("cssUtils", () => {
  describe("combineCss", () => {
    it("should map multiple class name correctly", () => {
      const classNames = combineCss("class1", "class2", "class3");
      expect(classNames).toEqual("class1 class2 class3");
    });

    it("should map conditional class name correctly", () => {
      const classNames = combineCss("class1", { ["class2"]: true }, "class3");
      expect(classNames).toEqual("class1 class2 class3");
    });
  });
});
