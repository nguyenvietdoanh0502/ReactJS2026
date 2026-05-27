import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../features/shop/shopSlice";
import { selectCartTotalItems, selectCartTotalPrice } from "../features/shop/shopSelectors";




export default function Cart() {
  const dispatch = useDispatch();
  
  const cart = useSelector((state) => state.shop.cart);
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])
  // TODO 18: Tính tổng số lượng sản phẩm trong giỏ bằng reduce
  const totalItems = useSelector(selectCartTotalItems)


  // TODO 19: Tính tổng tiền = price * quantity của từng item
  const totalPrice = useSelector(selectCartTotalPrice)

  if (cart.length === 0) {
    return (
      <aside className="sticky top-5 m-5 rounded-lg border border-dashed border-emerald-200 bg-gradient-to-br from-white to-emerald-50 p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-bold text-zinc-950">Giỏ hàng</h2>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-100">
            0 sản phẩm
          </span>
        </div>
        <div className="mt-6 rounded-lg bg-white p-5 text-center ring-1 ring-emerald-100">
          <p className="text-sm font-semibold text-zinc-700">Chưa có sản phẩm nào.</p>
          <p className="mt-1 text-xs text-zinc-500">Thêm sản phẩm để bắt đầu giỏ hàng.</p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="sticky top-5 m-5 overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-lg shadow-zinc-200/70">
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-5 text-white">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-bold">Giỏ hàng</h2>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold ring-1 ring-white/25">
            {totalItems} sản phẩm
          </span>
        </div>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-emerald-50">Tổng tiền</p>
        <p className="mt-1 text-3xl font-bold">{totalPrice.toLocaleString()} USD</p>
      </div>

      <div className="divide-y divide-zinc-100 p-4">
        {cart.map((item) => (
          <div key={item.id} className="py-4 first:pt-0 last:pb-0">
            <div className="flex gap-3">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-zinc-50 p-2 ring-1 ring-zinc-100">
                <img src={item.image} alt={item.title} className="max-h-12 w-full object-contain" />
              </div>

              <div className="min-w-0 flex-1">
                <strong className="block text-sm font-semibold leading-5 text-zinc-900">{item.title}</strong>
                <p className="mt-1 text-xs font-medium text-zinc-500">
                  {item.price.toLocaleString()} USD x {item.quantity}
                </p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-bold text-zinc-950">{(item.price * item.quantity).toLocaleString()} USD</p>

              <div className="flex items-center gap-1.5">
                <div className="flex items-center rounded-md border border-zinc-200 bg-zinc-50 p-1">
                  {/* TODO 20: Gắn dispatch decreaseQuantity(item.id) */}
                  <button
                    className="flex size-7 items-center justify-center rounded bg-white text-sm font-bold text-zinc-700 shadow-sm transition hover:bg-emerald-50 hover:text-emerald-700"
                    onClick={() => {dispatch(decreaseQuantity(item.id))}}
                  >
                    -
                  </button>

                  <span className="min-w-7 text-center text-sm font-bold text-zinc-800">{item.quantity}</span>

                  {/* TODO 21: Gắn dispatch increaseQuantity(item.id) */}
                  <button
                    className="flex size-7 items-center justify-center rounded bg-white text-sm font-bold text-zinc-700 shadow-sm transition hover:bg-emerald-50 hover:text-emerald-700"
                    onClick={() => {dispatch(increaseQuantity(item.id))}}
                  >
                    +
                  </button>
                </div>

                {/* TODO 22: Gắn dispatch removeFromCart(item.id) */}
                <button
                  className="rounded-md px-2.5 py-1.5 text-xs font-bold text-red-600 transition hover:bg-red-50"
                  onClick={() => {dispatch(removeFromCart(item.id))}}
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* TODO 23: Gắn dispatch clearCart() */}
      <div className="border-t border-zinc-100 bg-zinc-50 p-4">
        <button
          className="w-full rounded-md bg-red-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm shadow-red-200 transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          onClick={() => {dispatch(clearCart())}}
        >
          Xóa toàn bộ giỏ hàng
        </button>
      </div>
    </aside>
  );
}
