


import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: 20,
        alignItems: "start",
      }}
    >
      <ProductList />
      <Cart />
    </main>
  );
}