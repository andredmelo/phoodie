import { createContext, useReducer, ReactNode } from "react";
import initialState from "./initialState"; // Ensure this is a default export
import { AppState, AppAction, MenuItem, CartItem } from "../types/menu";

const AppReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      //console.log("Reducer received action:", action); // Log the action
      const inCart = state.cart.find(item => item.id === action.payload.id);
      if (inCart) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        };
      }
    case 'REMOVE_FROM_CART':
      //console.log("Reducer received action:", action); // Log the action
      const items = state.cart.filter(item => item.id !== action.payload);
      return {
        ...state,
        cart: items
      };
    default:
      return state;
  }
};

export const AppContext = createContext<{
  cart: CartItem[];
  menuData: MenuItem[];
  dispatch: React.Dispatch<AppAction>;
}>({
  cart: initialState.cart,
  menuData: initialState.menuData,
  dispatch: () => null
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //console.log("Provider state:", state); // Log the initial state

  return (
    <AppContext.Provider value={{
      cart: state.cart,
      menuData: state.menuData,
      dispatch
    }}>
      {children}
    </AppContext.Provider>
  );
};