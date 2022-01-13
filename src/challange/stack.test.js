describe("test Stack", () => {
  let array1 = [];

  beforeEach(() => {
    array1 = [1, 2, 3];
  });

  it("new string should be last Index", () => {
    const content = 4;
    array1.push(content);
    expect(array1[array1.length - 1]).toEqual(content);
  });

  it("remove should be last Index", () => {
    array1.pop();
    expect(array1[array1.length - 1]).toEqual(2);
  });
});
