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
      img: 'Beef-Pho-640w.webp',
      price: '13.99',
      dishUpper: 'Beef Pho',
      dishLower: 'Beef Phở',
      description: 'Thin rice noodles soup featuring a fragrant broth, tasty beef, and fresh herbs.',
      quantity: 0,
    },
    {
      id: 2,
      img: 'Shrimp-Pho-640w.webp',
      price: '12.99',
      dishUpper: 'Shrimp Pho',
      dishLower: 'Shrimp Phở',
      description: 'Thin rice noodles soup featuring jumbo shrimp, along with aromatic broth, fresh herbs and vegetables.',
      quantity: 0,
    },
    {
      id: 3,
      img: 'Chicken-Pho-640w.webp',
      price: '11.99',
      dishUpper: 'Chicken Pho',
      dishLower: 'Chicken Phở',
      description: 'Thin rice noodles soup renowned for its aromatic broth, tender chicken, and fresh herbs.',
      quantity: 0,
    },
    {
      id: 4,
      img: 'Banh-Xeo-640w.webp',
      price: '9.99',
      dishUpper: 'Banh Xeo',
      dishLower: 'Bánh Xèo',
      description: 'Savory crispy fried pancake made from rice flour, water, and turmeric powder.',
      quantity: 0,
    },
    {
      id: 5,
      img: 'Cha-Ca-La-Vong-640w.webp',
      price: '9.99',
      dishUpper: 'Cha Ca La Vong',
      dishLower: 'Cha Ca La Vong',
      description: 'Grilled turmeric-marinated fish with fresh herbs, vermicelli noodles, and a fragrant dipping sauce.',
      quantity: 0,
    },
    {
      id: 6,
      img: 'Banh-Mi-640w.webp',
      price: '6.99',
      dishUpper: 'Banh Mi',
      dishLower: 'Bánh Mi',
      description: 'Crispy baguette filled with savory meats, pickled vegetables, fresh herbs, pâté and mayo,.',
      quantity: 0,
    },
    {
      id: 7,
      img: 'Banh-Bo-Nuong-640w.webp',
      price: '3.99',
      dishUpper: 'Banh Bo Nuong',
      dishLower: 'Bánh Bo Nuong',
      description: 'Made from a rice flour batter enhanced with tapioca starch, pandan and rich coconut cream.',
      quantity: 0,
    },
    {
      id: 8,
      img: 'Banh-Tieu-640w.webp',
      price: '3.99',
      dishUpper: 'Banh Tieu',
      dishLower: 'Bánh Tiêu',
      description: 'Donut with a crispy sesame seed crust, filled with sweet sticky rice.',
      quantity: 0,
    },
  ] as MenuItem[],
  cart: [],
};
export default initialState;