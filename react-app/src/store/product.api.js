const data = {
  products: [
    {
      id: 10,
      name: 'Strawberries',
      description: '16oz package of fresh organic strawberries',
      quantity: '1',
    },
    {
      id: 20,
      name: 'Sliced bread',
      description: 'Loaf of fresh sliced wheat bread',
      quantity: 1,
    },
    {
      id: 30,
      name: 'Apples',
      description: 'Bag of 7 fresh McIntosh apples',
      quantity: 1,
    },
    {
      id: 40,
      name: 'Bread',
      description: 'Bag of 7 Breads',
      quantity: 1,
    },
    {
      id: 50,
      name: 'Lemon',
      description: 'Bag of 10 Lemons',
      quantity: 1,
    },
  ],
};

export const loadProductsApi = async () => {
  return data.products;
};
