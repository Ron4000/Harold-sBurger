export interface Burger {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

export const menuData: Burger[] = [
  {
    id: 1,
    title: 'Crispy Chicken',
    description: 'Chicken breast, chilli sauce, tomatoes, pickles, coleslaw',
    price: '$99.15',
    image: './images/crispy-chicken.jpg',
  },
  {
    id: 2,
    title: 'Ultimate Bacon',
    description: 'House patty, cheddar cheese, bacon, onion, mustard',
    price: '$99.32',
    image: './images/ultimate-bacon.webp',
  },
  {
    id: 3,
    title: 'Black Sheep',
    description: 'American cheese, tomato relish, avocado, lettuce, red onion',
    price: '$69.15',
    image: './images/black-sheep.png',
  },
];
