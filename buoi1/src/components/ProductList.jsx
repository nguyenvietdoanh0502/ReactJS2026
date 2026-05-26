import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProducts } from "../features/shop/shopSlice";

export default function ProductList() {
  const dispatch = useDispatch();

  // TODO 14: Lấy products, status, error từ state.shop bằng useSelector
  const { products, status, error } = useSelector((state) => state.shop);
  useEffect(() => {
    // TODO 15: Nếu status là "idle", dispatch(fetchProducts())
    if(status == 'idle'){
        dispatch(fetchProducts())
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <p>Đang tải sản phẩm...</p>;
  }

  if (status === "failed") {
    return <p style={{ color: "red" }}>Lỗi: {error}</p>;
  }

  return (
    <section style={{ padding: 20 }}>
      <h2>Danh sách sản phẩm</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 16,
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: 160, objectFit: "contain" }}
            />
            <h3>{product.title}</h3>
            <p>{product.price.toLocaleString()} USD</p>

            {/* TODO 16: Dispatch addToCart(product) khi bấm nút */}
            <button onClick={() => {dispatch(addToCart(product))}}>Thêm vào giỏ</button>
          </div>
        ))}
      </div>
    </section>
  );
}