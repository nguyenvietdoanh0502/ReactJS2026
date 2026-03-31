const defaultProduct = {
  img: "https://cdn.tgdd.vn/Products/Images/42/329149/samsung-galaxy-s24-ultra-grey-thumbnew-600x600.jpg",
  category: "\u0110I\u1ec6N THO\u1ea0I",
  name: "Samsung Galaxy S24 Ultra",
  price: "31.990.000 \u0111",
};

function ProductCard({ product = defaultProduct , add, white }) {
    const imageSrc = product.images || product.img;
    const productTitle = product.title || product.name;
        
    return (
        <article
          className={`flex w-[240px] flex-col rounded-[14px] border px-4 pb-4 pt-3 shadow-[0_6px_18px_rgba(15,23,42,0.12)] ${
            white
              ? 'border-slate-200 bg-white'
              : 'border-[#3a3b3c] bg-[#242526]'
          }`}
        >
        <div
          className={`flex min-h-[158px] items-center justify-center rounded-[12px] px-3 py-2 ${
            white ? 'bg-[#f8fafc]' : 'bg-[#3a3b3c]'
          }`}
        >
            <img
            src={imageSrc}
            alt={productTitle}
            className="h-[142px] w-auto object-contain"
            />
        </div>

        <div className="mt-5 flex flex-1 flex-col space-y-2.5">
            <p
              className={`text-[11px] font-semibold uppercase tracking-[0.08em] ${
                white ? 'text-slate-500' : 'text-[#b0b3b8]'
              }`}
            >
            {product.category}
            </p>
            <h3
              className={`min-h-[42px] text-[15px] font-semibold leading-[1.35] ${
                white ? 'text-slate-900' : 'text-[#e4e6eb]'
              }`}
            >
            {productTitle}
            </h3>
            <p className="text-[15px] font-bold text-[#0a6cff]">{product.price} $</p>
        </div>

        <button
            type="button"
            className={`mt-4 flex h-[38px] w-full items-center justify-center gap-1.5 rounded-[10px] border text-[12px] font-semibold transition-colors duration-200 ${
              white
                ? 'border-[#0a6cff] bg-white text-[#0a6cff] hover:bg-[#eff6ff]'
                : 'border-[#3a3b3c] bg-[#3a3b3c] text-[#e4e6eb] hover:bg-[#4e4f50]'
            }`}
            onClick={() => add(product)}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
            aria-hidden="true"
            >
            <path d="M3 4h2l1.2 7.2a2 2 0 0 0 2 1.8h7.9a2 2 0 0 0 2-1.6L19 6H7" />
            <circle cx="10" cy="19" r="1.5" />
            <circle cx="17" cy="19" r="1.5" />
            </svg>
            <span>Thêm vào giỏ hàng</span>
        </button>
        </article>
    )
}

export default ProductCard
