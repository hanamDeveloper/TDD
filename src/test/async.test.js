const fetchProduct = require("../async");

describe("async Test", () => {
  it("test async-done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });

  it("test async-return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  it("test async-done reject", () => {
      return expect(fetchProduct("error")).rejects.toBe("network error")
  });
});
