import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  fetchProducts,
  removeFromCart,
} from "./features/shop/shopSlice";

function App() {
  const dispatch = useDispatch();
  const { products, cart, status, error } = useSelector((state) => state.shop);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: 24 }}>
      <h1 style={{ marginBottom: 20 }}>Shop Demo (Redux Toolkit)</h1>

      <section style={{ marginBottom: 28 }}>
        <h2>Danh sach san pham</h2>

        {status === "loading" && <p>Dang tai du lieu...</p>}
        {status === "failed" && <p>Loi: {error}</p>}

        {status === "succeeded" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            {products.map((product) => (
              <article
                key={product.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: 8,
                  padding: 12,
                  textAlign: "left",
                  background: "#fff",
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: 160,
                    objectFit: "contain",
                    marginBottom: 8,
                  }}
                />
                <h3 style={{ fontSize: 16, minHeight: 48 }}>{product.title}</h3>
                <p style={{ fontWeight: 600 }}>${product.price}</p>
                <button onClick={() => dispatch(addToCart(product))}>
                  Them vao gio
                </button>
              </article>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2>
          Gio hang ({totalItems} san pham) - ${totalPrice.toFixed(2)}
        </h2>

        {cart.length === 0 ? (
          <p>Chua co san pham trong gio hang.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #eee",
                  padding: "10px 0",
                }}
              >
                <span>
                  {item.title} x {item.quantity}
                </span>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Xoa
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
