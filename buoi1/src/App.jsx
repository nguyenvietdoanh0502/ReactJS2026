
import { useCallback, useMemo, useState } from 'react'
import CheckoutButton from './components/common/CheckoutButton'

const hugeArray = Array.from({ length: 10000 }, (_, i) => i + 1);
function App() {
  const [keyword, setKeyword] = useState('');
  const [cartCount,setCartCount] = useState(0)
  const handleCheckout = useCallback(() => {
    alert(`Đã thanh toán :${cartCount} sản phẩm`)
    setCartCount(0)
  }, [cartCount]);
  const testFilter = useMemo(() => {
    console.log("Đang chạy vòng lặp 10000 lần...")
    const evens = hugeArray.filter((num) => num % 2 === 0)
    return evens.length
  }, []);
  
  
  return (
    <>
      <input className="mx-auto mt-16 block w-full max-w-md rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" value={keyword} onChange={(e) => setKeyword(e.target.value)}></input>
      <h1 className="mt-8 text-center text-5xl font-black tracking-tight text-slate-800">{keyword} + {cartCount}</h1>
      <h1 className="mt-8 text-center text-5xl font-black tracking-tight text-slate-800">{testFilter}</h1>
      <button className="mx-auto mt-6 block rounded-2xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition duration-200 hover:bg-emerald-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 active:scale-[0.98]" onClick={() => setCartCount(cartCount + 1)}>Thêm vào giỏ</button>
      <CheckoutButton onCheckout={handleCheckout}/>
    </>
  )
}

export default App


