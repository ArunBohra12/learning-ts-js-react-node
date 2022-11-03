const getProductsPromise = (fetch) => {
  return fetch("https://fakestoreapi.com/products?limit=5")
    .then((res) => res.json())
    .then((data) => {
      return {
        count: data.length,
        results: data,
      };
    });
};

const getProducts = async (fetch) => {
  const response = await fetch("https://fakestoreapi.com/products?limit=5");
  const data = await response.json();

  return {
    count: data.length,
    results: data,
  };
};

module.exports = { getProductsPromise, getProducts };
