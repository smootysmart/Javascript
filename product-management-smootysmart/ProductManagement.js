function ProductManagement() {
  //add products variable here
  let id;
  let name;
  let category;
  let price;

  let products = [];

  function getAllProducts() {
    return products;
  }

  function addProduct(product) {
    products.push(product);
  }

  function searchByName(name) {
    const item = name.toLowerCase();
    return products.filter((product) =>
      product.name.toLowerCase().includes(item)
    );
  }

  function searchByPriceRange(minPrice, maxPrice) {
    return products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
  }

  function removeAll() {
    products = [];
  }

  return {
    removeAll,
    searchByName,
    searchByPriceRange,
    getAllProducts,
    addProduct,
  };
}
module.exports = ProductManagement;
const productCatalog = ProductManagement();
