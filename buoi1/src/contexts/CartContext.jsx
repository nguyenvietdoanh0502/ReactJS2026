import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext();
const getCartFromLocalStorage = () =>{
  const savedCart = localStorage.getItem("cart")
  if(savedCart){
    return JSON.parse(savedCart);
  }
  return[];
}
const initialState = {
  cart: getCartFromLocalStorage(), // Mảng chứa các object: { id, name, price, quantity }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const productToAdd = action.payload;
      
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === productToAdd.id
      );
      if (existingItemIndex >= 0) {
        const updateCart = [...state.cart]
        updateCart[existingItemIndex] = {
          ...updateCart[existingItemIndex],
          quantity: updateCart[existingItemIndex].quantity +1,
        }
        // TODO 2: Nếu ĐÃ CÓ - Tăng quantity của sản phẩm đó
        // Lưu ý: Phải clone mảng và clone object để tránh mutate state trực tiếp
        return { ...state,
          cart: updateCart
         }; // Thay đổi logic trả về
      } else {
        const newItem = {
          ...productToAdd,
          quantity: 1
        }
        // TODO 3: Nếu CHƯA CÓ - Thêm object mới vào mảng cart kèm theo thuộc tính quantity: 1
        return { ...state,
          cart: [...state.cart,newItem]
         }; // Thay đổi logic trả về
      }
    }

    case "REMOVE_ITEM": {
      // TODO 4: Lấy id từ action.payload, dùng hàm filter() để loại bỏ sản phẩm
      const idToRemove  = action.payload;
      const newCart = state.cart.filter((item)=>item.id !== idToRemove)
      return { ...state,
        cart: newCart
       }; // Thay đổi logic trả về
    }

    case "CLEAR_CART":
      return { cart: [] };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(state.cart))
  },[state.cart])

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};