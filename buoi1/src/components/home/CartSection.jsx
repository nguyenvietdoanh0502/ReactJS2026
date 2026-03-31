import CartItemCard from './CartItemCard'

function CartSection({ cart =[],pay,remove,plus, reduce, white}) {
    const totalPrice = cart.reduce((total, item) => {
      return total + item.price * (item.quantity ?? 1)
    }, 0)
    function handlePay(){
      alert("Thanh toán thành công: "+totalPrice+"$")
      pay()

    }
    return (
      <section
        className={`cartitem w-full max-w-[360px] shrink-0 overflow-hidden rounded-[18px] border shadow-[0_10px_24px_rgba(15,23,42,0.08)] lg:sticky lg:top-[84px] ${
          white ? 'border-slate-200 bg-white' : 'border-[#3a3b3c] bg-[#242526]'
        }`}
      >
        <div className={`border-b px-5 py-5 ${white ? 'border-slate-200' : 'border-[#3a3b3c]'}`}>
          <p className={`text-[20px] font-bold leading-none ${white ? 'text-slate-800' : 'text-[#e4e6eb]'}`}>
            Giỏ hàng của bạn
          </p>
        </div>

        <div
          className={`min-h-[140px] max-h-[320px] overflow-y-auto border-b px-5 py-5 ${
            white ? 'border-slate-200' : 'border-[#3a3b3c]'
          }`}
        >
          {cart.length === 0 ? (
            <p className={`text-[14px] ${white ? 'text-slate-400' : 'text-[#b0b3b8]'}`}>Giỏ hàng trống</p>
          ) : (
            cart.map((item) => {
              return <CartItemCard key={item.id} product={item} remove={remove} plus={plus} reduce={reduce} white={white}/>
            })
          )}
        </div>

        <div className="px-5 pb-5 pt-5">
          <div className="flex items-end justify-between gap-4">
            <p className={`text-[18px] font-bold ${white ? 'text-slate-900' : 'text-[#e4e6eb]'}`}>Tổng tiền:</p>
            <p className="text-[18px] font-bold text-[#0a6cff]">
              {totalPrice.toLocaleString()} $
            </p>
          </div>

          <button
            type="button"
            className={`mt-4 h-[48px] w-full rounded-[10px] text-[15px] font-bold uppercase text-white transition-colors duration-200 ${
              white ? 'bg-[#1976e9] hover:bg-[#1669cf]' : 'bg-[#2374e1] hover:bg-[#2d88ff]'
            }`}
          onClick={handlePay}>
            Thanh toán ngay
          </button>
        </div>
      </section>
    )
}

export default CartSection
