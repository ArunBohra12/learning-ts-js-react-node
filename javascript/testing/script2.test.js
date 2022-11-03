const fetch = require("node-fetch");
const { getProductsPromise, getProducts } = require("./script2");

describe("ASYNC VERSION", () => {
  jest.setTimeout(10000);

  it("calls api to get products", () => {
    expect.assertions(1);
    return getProducts(fetch).then((data) => {
      expect(data.count).toEqual(5);
    });
  });
});

describe("PROMISE VERSION", () => {
  jest.setTimeout(10000);

  it("calls api to get products", (done) => {
    expect.assertions(1);
    getProductsPromise(fetch).then((data) => {
      expect(data.count).toEqual(5);
      done();
    });
  });
});

describe("MOCKS AND SPIES", () => {
  it("getProducts returns count and results", () => {
    const mockFetch = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve([1, 2, 3, 4, 5]),
      })
    );

    expect.assertions(4);
    return getProductsPromise(mockFetch).then((data) => {
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith(
        "https://fakestoreapi.com/products?limit=5"
      );

      expect(data.count).toBeGreaterThan(1);
      expect(data.count).toEqual(5);
    });
  });
});
