import { createContext, useReducer, ReactNode } from "react";
import initialState from "./initialState"; // Ensure this is a default export

interface CartItem {
  id: string;
  quantity: number;
}

interface State {
  cart: CartItem[];
  menuData: any;
}

interface Action {
  type: string;
  payload: any;
}

const AppReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TO_CART':
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
  cart: State['cart'];
  menuData: State['menuData'];
  dispatch: React.Dispatch<Action>;
}>({
  cart: initialState.cart,
  menuData: initialState.menuData,
  dispatch: () => null
});

/* export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{
      cart: state.cart,
      menuData: state.menuData,
      dispatch
    }}>
      {children}
    </AppContext.Provider>
  );
}; */