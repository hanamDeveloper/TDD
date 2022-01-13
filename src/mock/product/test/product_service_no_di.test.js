const ProductClient = require("../product_client");
const ProductService = require("../product_service_no_di");
jest.mock("../product_client");

describe("ProductService", () => {
  const fetchItems = jest.fn(async () => [
    { item: "milk", available: true },
    { item: "choco", available: false },
  ]);

  ProductClient.mockImplementation(() => {
      return  {
          fetchItems
      }
  })

  let productService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it("fetch only available", async () => {
    let response = await productService.fetchAvailableItems();

    expect(response).toEqual([{ item: "milk", available: true }]);
  });
});
