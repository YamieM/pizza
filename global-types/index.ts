export type PizzaDTO = {
    id: number;
    imageUrl: string;
    name: string;
    types: [0, 1];
    sizes: [26, 30, 40];
    prices: number[];
    category: number;
    rating: number;
  };