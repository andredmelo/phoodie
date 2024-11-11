export interface MediaQueries {
  noHover: boolean;
  isPortrait: boolean;
  isUnder768: boolean;
  isUnder1024: boolean;
  isUnder1280: boolean;
  isUnder1536: boolean;
}

export interface MenuItem {
  id: number;
  img: string;
  price: string;
  dishUpper: string;
  dishLower: string;
  description: string;
  quantity: number;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface FormState {
  val: string;
  error: boolean;
}

export interface AppState {
  cart: CartItem[];
  menuData: MenuItem[];
}

export type AppAction = 
  | { type: 'ADD_TO_CART'; payload: MenuItem }
  | { type: 'REMOVE_FROM_CART'; payload: number };

export interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  occasion: string;
  guests: string;
  reserveNumber: number;
}

export interface BookingState {
  val: string;
  error: boolean;
}

export type BookingAction = {
  type: 'date';
  payload: Date;
}