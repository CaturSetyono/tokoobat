export function searchProducts(products, query) {
  return products.filter((product) => {
    return (
      product.name.toLowerCase().includes(query) ||
      product.categories.toLowerCase().includes(query) ||
      product.price.includes(query)
    );
  });
}
