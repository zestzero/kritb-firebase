import { combinCss } from "./cssUtils";

describe("cssUtils", () => {
  describe("combinCss", () => {
    it("should map multiple class name correctly", () => {
      const classNames = combinCss("class1", "class2", "class3");
      expect(classNames).toEqual("class1 class2 class3");
    });
  });
});
