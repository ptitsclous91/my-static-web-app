const data = {
  products: [
    {
      id: 10,
      name: 'Strawberries',
      description: '900g package of fresh organic strawberries',
      quantity: '1',
    },
    {
      id: 20,
      name: 'Victoria PineApples',
      description: '12 piece Victoria PineApples',
      quantity: 1,
    },
    {
      id: 30,
      name: 'Grapefruits',
      description: 'Bag of 24 Grapefruits',
      quantity: 1,
    },
    {
      id: 40,
      name: 'Sliced bread',
      description: 'Loaf of fresh sliced wheat bread',
      quantity: 1,
    },
    {
      id: 50,
      name: 'Apples',
      description: 'Bag of 7 fresh McIntosh apples',
      quantity: 1,
    },
    {
      id: 60,
      name: 'Bread',
      description: 'Bag of 7 Breads',
      quantity: 1,
    },
    {
      id: 70,
      name: 'Lemon',
      description: 'Bag of 10 Lemons',
      quantity: 1,
    },
    {
      id: 80,
      name: 'Tomatoes',
      description: 'Bag of 12 big Tomatoes',
      quantity: 1,
    },
    {
      id: 90,
      name: 'Red Apple',
      description: 'Bag of 12 big Red Apple',
      quantity: 1,
    },
  ],
};

export const loadProductsApi = async () => {
  return data.products;
};
