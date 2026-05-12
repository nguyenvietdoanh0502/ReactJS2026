import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { CartProvider } from "./contexts/CartContext";

export default function App() {
  return (
    <CartProvider>
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-6 sm:px-6 lg:py-8">
        <Navbar />
        <ProductList />
      </main>
    </CartProvider>
  );
}
