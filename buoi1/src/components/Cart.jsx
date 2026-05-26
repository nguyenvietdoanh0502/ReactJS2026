import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../features/shop/shopSlice";

export default function Cart() {
  const dispatch = useDispatch();

  // TODO 17: Lấy cart từ state.shop bằng useSelector
  const cart = useSelector((state) => state.shop.cart);

  // TODO 18: Tính tổng số lượng sản phẩm trong giỏ bằng reduce
  const totalItems = cart.reduce((total,item)=>{
    return total +item.quantity
  },0);

  // TODO 19: Tính tổng tiền = price * quantity của từng item
  const totalPrice = cart.reduce((total,item)=>{
    return total + item.quantity*item.price
  },0);;

  if (cart.length === 0) {
    return (
      <aside style={{ padding: 20, background: "#f8f9fa" }}>
        <h2>Giỏ hàng</h2>
        <p>Chưa có sản phẩm nào.</p>
      </aside>
    );
  }

  return (
    <aside style={{ padding: 20, background: "#f8f9fa" }}>
      <h2>Giỏ hàng</h2>
      <p>
        Tổng: {totalItems} sản phẩm | {totalPrice.toLocaleString()} USD
      </p>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            borderBottom: "1px solid #ddd",
            padding: "12px 0",
          }}
        >
          <div>
            <strong>{item.title}</strong>
            <p>{(item.price * item.quantity).toLocaleString()} USD</p>
          </div>

          <div>
            {/* TODO 20: Gắn dispatch decreaseQuantity(item.id) */}
            <button onClick={() => {dispatch(decreaseQuantity(item.id))}}>-</button>

            <span style={{ margin: "0 8px" }}>{item.quantity}</span>

            {/* TODO 21: Gắn dispatch increaseQuantity(item.id) */}
            <button onClick={() => {dispatch(increaseQuantity(item.id))}}>+</button>

            {/* TODO 22: Gắn dispatch removeFromCart(item.id) */}
            <button onClick={() => {dispatch(removeFromCart(item.id))}} style={{ marginLeft: 8, color: "red" }}>
              Xóa
            </button>
          </div>
        </div>
      ))}

      {/* TODO 23: Gắn dispatch clearCart() */}
      <button onClick={() => {dispatch(clearCart())}} style={{ marginTop: 16 }}>
        Xóa toàn bộ giỏ hàng
      </button>
    </aside>
  );
}
