import { createContext, useReducer } from "react";

// Khởi tạo Context
export const AuthContext = createContext();

// Khởi tạo State và Reducer
const initialState = { user: null, isAuth: false };

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload, isAuth: true };
    case "LOGOUT":
      return { user: null, isAuth: false };
    default:
      return state;
  }
};

// Tạo một Provider bọc ngoài cùng
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    // Phân phát cả State và hàm Dispatch cho toàn bộ App
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};  