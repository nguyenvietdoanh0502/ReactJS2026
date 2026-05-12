import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const PRODUCTS = [
  { id: 1, name: "Bàn phím cơ Aula F87 Pro", price: 1000000 },
  { id: 2, name: "Chuột Logitech G102", price: 400000 },
  { id: 3, name: "Màn hình Dell Ultrasharp", price: 5500000 },
];

export default function ProductList() {
  const { dispatch } = useContext(CartContext);

  const handleAdd = (product) => {
    // TODO 5: Dispatch action "ADD_TO_CART" với payload là object product
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  
  return (
    <div style={{ padding: 20 }}>
      <h3>🛒 Danh sách sản phẩm</h3>
      <div style={{ display: "flex", gap: "15px" }}>
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <h4>{product.name}</h4>
            <p>Giá: {product.price.toLocaleString()}đ</p>
            <button onClick={() => handleAdd(product)}>Thêm vào giỏ</button>
          </div>
        ))}
      </div>
    </div>
  );
}
