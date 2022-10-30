// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

// ----------------------------------------------
// SOLUTION

const ages: number[] = [];

const gameBoard: string[][] = [];

type Product = {
  name: string;
  price: number;
};

const getTotal = function (products: Product[]): number {
  return products.reduce((prev, product) => prev + product.price, 0);
};

const allProducts: Array<Product> = [
  { name: 'Phone', price: 300 },
  { name: 'Mouse', price: 25 },
];

const totalPrice: number = getTotal(allProducts);

console.log(totalPrice);
