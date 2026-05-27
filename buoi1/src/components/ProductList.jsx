import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProducts } from "../features/shop/shopSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  // TODO 14: Lấy products, status, error từ state.shop bằng useSelector
  const { products, status, error } = useSelector((state) => state.shop);
  useEffect(() => {
    // TODO 15: Nếu status là "idle", dispatch(fetchProducts())
    if(status == 'idle'){
        dispatch(fetchProducts())
    }
  }, [status, dispatch]);
  function search(value){
    setKeyword(value);
  }

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
  );
  if (status === "loading") {
    return (
      <section className="p-5">
        <div className="mb-5 h-8 w-56 animate-pulse rounded-md bg-zinc-200" />
        <div className="flex flex-wrap gap-5">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="w-full rounded-lg border border-zinc-200 bg-white p-4 shadow-sm sm:w-[calc(50%-0.625rem)] xl:w-[calc(33.333%-0.875rem)] 2xl:w-[calc(25%-0.9375rem)]"
            >
              <div className="h-44 animate-pulse rounded-md bg-zinc-100" />
              <div className="mt-4 h-4 w-4/5 animate-pulse rounded bg-zinc-200" />
              <div className="mt-3 h-4 w-1/3 animate-pulse rounded bg-zinc-200" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (status === "failed") {
    return (
      <section className="p-5">
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          Lỗi: {error}
        </p>
      </section>
    );
  }

  return (
    <section className="p-5">

      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-emerald-600">Fake Store</p>
          <h2 className="mt-1 text-3xl font-bold text-zinc-950">Danh sách sản phẩm</h2>
          <input
            className="mt-4 w-full max-w-sm rounded-md border border-zinc-200 px-3 py-2 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            placeholder="Tìm sản phẩm..."
            type="text"
            value={keyword}
            onChange={(event) => search(event.target.value)}
          />
        </div>
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
          {filteredProducts.length} sản phẩm
        </span>
      </div>

      <div className="flex flex-wrap gap-5">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group flex min-h-[360px] w-full flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm shadow-zinc-200/70 transition duration-200 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100 sm:w-[calc(50%-0.625rem)] xl:w-[calc(33.333%-0.875rem)] 2xl:w-[calc(25%-0.9375rem)]"
          >
            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-zinc-50 via-white to-emerald-50 p-5">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-40 w-full object-contain transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-4">
              <h3 className="min-h-10 text-sm font-semibold leading-5 text-zinc-900">{product.title}</h3>
              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="text-lg font-bold text-emerald-700">{product.price.toLocaleString()} USD</p>
                <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-700 ring-1 ring-amber-100">
                  Sale
                </span>
              </div>

              {/* TODO 16: Dispatch addToCart(product) khi bấm nút */}
              <button
                className="mt-auto rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm shadow-emerald-200 transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                onClick={() => {dispatch(addToCart(product))}}
              >
                Thêm vào giỏ
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
