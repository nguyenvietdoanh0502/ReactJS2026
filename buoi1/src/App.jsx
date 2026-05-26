// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addToCart,
//   fetchProducts,
//   giam,
//   removeFromCart,
//   tang,
// } from "./features/shop/shopSlice";

// function App() {
//   const dispatch = useDispatch();
//   const { products, cart, status, error } = useSelector((state) => state.shop);

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchProducts());
//     }
//   }, [dispatch, status]);

//   const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0,
//   );

//   return (
//     <main className="min-h-screen bg-stone-50 text-slate-900">
//       <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
//         <header className="mb-8 flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
//           <div>
//             <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
//               Redux Toolkit
//             </p>
//             <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
//               Shop Demo
//             </h1>
//           </div>

//           <div className="rounded-lg border border-slate-200 bg-white px-5 py-3 shadow-sm">
//             <p className="text-sm font-medium text-slate-500">Tong gio hang</p>
//             <p className="mt-1 text-2xl font-bold text-slate-950">
//               ${totalPrice.toFixed(2)}
//             </p>
//           </div>
//         </header>

//         <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
//           <section>
//             <div className="mb-5 flex items-center justify-between gap-4">
//               <h2 className="text-xl font-bold text-slate-950">
//                 Danh sach san pham
//               </h2>
//               <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
//                 {products.length} san pham
//               </span>
//             </div>

//             {status === "loading" && (
//               <p className="rounded-lg border border-slate-200 bg-white p-5 text-slate-600 shadow-sm">
//                 Dang tai du lieu...
//               </p>
//             )}
//             {status === "failed" && (
//               <p className="rounded-lg border border-rose-200 bg-rose-50 p-5 font-medium text-rose-700">
//                 Loi: {error}
//               </p>
//             )}

//             {status === "succeeded" && (
//               <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
//                 {products.map((product) => (
//                   <article
//                     key={product.id}
//                     className="group flex min-h-full flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
//                   >
//                     <div className="mb-4 flex aspect-square items-center justify-center rounded-lg bg-slate-50 p-5">
//                       <img
//                         src={product.image}
//                         alt={product.title}
//                         className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
//                       />
//                     </div>
//                     <h3 className="line-clamp-2 min-h-12 text-base font-semibold leading-6 text-slate-900">
//                       {product.title}
//                     </h3>
//                     <div className="mt-auto flex items-center justify-between gap-3 pt-5">
//                       <p className="text-lg font-bold text-emerald-700">
//                         ${product.price}
//                       </p>
//                       <button
//                         onClick={() => dispatch(addToCart(product))}
//                         className="rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 active:scale-[0.98]"
//                       >
//                         Them vao gio
//                       </button>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             )}
//           </section>

//           <section className="rounded-lg border border-slate-200 bg-white shadow-sm lg:sticky lg:top-6">
//             <div className="border-b border-slate-200 p-5">
//               <h2 className="text-xl font-bold text-slate-950">Gio hang</h2>
//               <p className="mt-1 text-sm text-slate-500">
//                  {totalItems} san pham - ${totalPrice.toFixed(2)}
//               </p>
//             </div>

//             {cart.length === 0 ? (
//               <p className="p-5 text-sm text-slate-500">
//                 Chua co san pham trong gio hang.
//               </p>
//             ) : (
//               <ul className="divide-y divide-slate-100">
//                 {cart.map((item) => (
//                   <li key={item.id} className="flex items-center gap-4 p-5">
//                     <div className="min-w-0 flex-1">
//                       <p className="line-clamp-2 text-sm font-semibold text-slate-900">
//                         {item.title}
//                       </p>
//                       <div className="mt-3 flex flex-wrap items-center gap-3">
//                         <p className="text-sm font-medium text-slate-500">
//                           So luong:
//                         </p>
//                         <div className="inline-flex items-center overflow-hidden rounded-md border border-slate-200 bg-slate-50">
//                           <button
//                             onClick={() => dispatch(giam(item))}
//                             className="flex h-8 w-8 items-center justify-center text-base font-bold text-slate-600 transition hover:bg-rose-50 hover:text-rose-700 active:scale-95"
//                           >
//                             -
//                           </button>
//                           <p className="min-w-10 border-x border-slate-200 bg-white px-3 text-center text-sm font-bold text-slate-950">
//                             {item.quantity}
//                           </p>
//                           <button
//                             onClick={() => dispatch(tang(item))}
//                             className="flex h-8 w-8 items-center justify-center text-base font-bold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700 active:scale-95"
//                           >
//                             +
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => dispatch(removeFromCart(item.id))}
//                       className="rounded-md border border-rose-200 px-3 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-50 active:scale-[0.98]"
//                     >
//                       Xoa
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default App;
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