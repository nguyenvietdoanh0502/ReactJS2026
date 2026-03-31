function CartItemCard({ product, remove,plus, reduce, white }) {
    const imageSrc = product?.images || product?.img;
    const productTitle = product?.title || product?.name;
    return (
        <article className={`flex w-full items-start gap-3 rounded-[12px] px-0 py-1 ${white ? 'bg-white' : 'bg-[#242526]'}`}>
        <div
          className={`flex h-[50px] w-[50px] shrink-0 items-center justify-center overflow-hidden rounded-[8px] ${
            white ? 'bg-[#f8fafc]' : 'bg-[#3a3b3c]'
          }`}
        >
            <img
            src={imageSrc}
            alt={productTitle}
            className="h-full w-full object-contain"
            />
        </div>

        <div className="flex min-w-0 flex-1 items-start justify-between gap-3">
            <div className="min-w-0">
            <h3 className={`truncate text-[13px] font-semibold leading-tight ${white ? 'text-slate-800' : 'text-[#e4e6eb]'}`}>
                {productTitle}
            </h3>
            <p className={`mt-0.5 text-[11px] font-medium ${white ? 'text-slate-500' : 'text-[#b0b3b8]'}`}>
                {product?.price} $
            </p>

            <div
              className={`mt-2 inline-flex h-[28px] items-center overflow-hidden rounded-[5px] border ${
                white ? 'border-slate-200 bg-white' : 'border-[#3a3b3c] bg-[#3a3b3c]'
              }`}
            >
                <button onClick={()=>reduce(product)}
                type="button"
                className={`flex h-full w-[26px] items-center justify-center text-[14px] transition-colors ${
                  white ? 'text-slate-600 hover:bg-slate-50' : 'text-[#e4e6eb] hover:bg-[#4e4f50]'
                }`}
                >
                -
                </button>
                <span
                  className={`flex h-full min-w-[32px] items-center justify-center border-x px-2 text-[14px] font-semibold ${
                    white
                      ? 'border-slate-200 text-slate-800'
                      : 'border-[#4e4f50] text-[#e4e6eb]'
                  }`}
                >
                {product?.quantity ?? 1}
                </span>
                <button
                type="button"
                className={`flex h-full w-[26px] items-center justify-center text-[14px] transition-colors ${
                  white ? 'text-slate-600 hover:bg-slate-50' : 'text-[#e4e6eb] hover:bg-[#4e4f50]'
                }`}
                onClick={()=>plus(product)}>
                +
                </button>
            </div>
            </div>

            <button onClick={()=>remove(product)}
            type="button"
            className={`pt-0.5 text-[12px] font-medium transition-colors ${
              white ? 'text-slate-400 hover:text-slate-600' : 'text-[#b0b3b8] hover:text-[#e4e6eb]'
            }`}
            >
            Xóa
            </button>
        </div>
        </article>
    )
}

export default CartItemCard
