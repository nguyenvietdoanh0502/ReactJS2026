
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Navbar() {
  const { state, dispatch } = useContext(CartContext);

  // TODO 6: Tính tổng số lượng TẤT CẢ sản phẩm (Dùng reduce trên state.cart)
  const totalItems = state.cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  // TODO 7: Tính tổng số tiền (price * quantity của từng item rồi cộng lại)
  const totalPrice = state.cart.reduce((total,item)=>{
    return total +(item.price*item.quantity)
  },0);
  const handleRemove = (product) => {
    // TODO 5: Dispatch action "ADD_TO_CART" với payload là object product
    dispatch({ type: "REMOVE_ITEM", payload: product.id });
  };

  return (
    <nav
      style={{
        background: "#f8f9fa",
        padding: "15px 20px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "#ee4d2d" }}>Shopee Fake Pro</h2>
        <div>
          <span style={{ marginRight: 20, fontWeight: "bold" }}>
            🛒 Giỏ hàng: {totalItems} món | Tổng: {totalPrice.toLocaleString()}đ
          </span>
          <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
            Xóa tất cả
          </button>
        </div>
      </div>

      {/* Hiển thị chi tiết giỏ hàng */}
      {state.cart.length > 0 && (
        <div
          style={{
            marginTop: "15px",
            background: "#fff",
            padding: "15px",
            border: "1px solid #eee",
          }}
        >
          {state.cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "5px 0",
              }}
            >
              <span>
                {item.name} (x{item.quantity})
              </span>
              <div>
                <span style={{ marginRight: "20px" }}>
                  {(item.price * item.quantity).toLocaleString()}đ
                </span>
                {/* TODO 8: Gọi action "REMOVE_ITEM" truyền vào payload là item.id */}
                <button
                  onClick={() => handleRemove(item)}
                  style={{ color: "red", border: "none", cursor: "pointer" }}
                >
                  Xóa
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
