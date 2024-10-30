export interface MenuItem {
  id: number;
  img: string;
  price: string;
  dishUpper: string;
  dishLower: string;
  description: string;
  quantity: number;
}

const initialState = {
  menuData: [
    {
      id: 1,
      img: 'bruchetta.jpg',
      price: '7.99',
      dishUpper: 'BRUCHETTA',
      dishLower: 'Bruchetta',
      description: 'Our tasty cheesey bread, with chopped tomatoes, bazil leaves and yellow peppers.',
      quantity: 0,
    },
    {
      id: 2,
      img: 'greek salad.jpg',
      price: '12.99',
      dishUpper: 'GREEK SALAD',
      dishLower: 'Greek Salad',
      description: 'Salad with avocado, tomatoes, Bulgarian cheese, green peppers and onions, with our famous sauce.',
      quantity: 0,
    },
    {
      id: 3,
      img: 'pasta.jpg',
      price: '14.99',
      dishUpper: 'PASTA MARGARITA',
      dishLower: 'Pasta Margarita',
      description: 'A fresh hand made pasta with high quality tomatoes, bazil leaves and Parmezan cheese.',
      quantity: 0,
    },
    {
      id: 4,
      img: 'fish.jpg',
      price: '8.99',
      dishUpper: 'TILAPIA LEMON FISH',
      dishLower: 'Tilapia Lemon fish',
      description: 'Pan grilled tilapia with fresh herbs, olive and lemon, served with pan seared vegetables.',
      quantity: 0,
    },
    {
      id: 5,
      img: 'oysters.jpg',
      price: '22.99',
      dishUpper: 'GRILLED OYSTERS',
      dishLower: 'Grilled Oysters',
      description: 'Freshly caught grilled oysters with garlic, brandy and parmesan cheese served with vegetables.',
      quantity: 0,
    },
    {
      id: 6,
      img: 'potatoes.jpg',
      price: '5.99',
      dishUpper: 'HOME FRIES',
      dishLower: 'Home Fries',
      description: 'Our traditional sweet & sour potatoes with parmesan cheese, tomatoes and our secret herbs.',
      quantity: 0,
    },
    {
      id: 7,
      img: 'lemon dessert.jpg',
      price: '5.99',
      dishUpper: 'LEMON DESSERT',
      dishLower: 'Lemon Dessert',
      description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      quantity: 0,
    },
  ] as MenuItem[],
  cart: [],
};
export default initialState;