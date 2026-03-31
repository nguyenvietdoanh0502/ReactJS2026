import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import ProductSection from './components/home/ProductSection'
import CartSection from './components/home/CartSection'

function App() {
  const [white, setWhite] = useState(true)
  const [product, setProduct] = useState(null)
  const [cart, setCart] = useState([])
  const handleAddToCart = (selectedItem)=>{
    setCart((prevCart)=>{
      const isExist = prevCart.find((item)=>item.id === selectedItem.id)
      if(isExist){
        return prevCart.map((item)=>{
          if(item.id===selectedItem.id){
            return {...item,quantity:item.quantity+1}
          }
          return item
        })
      }
      return [...prevCart,{...selectedItem,quantity:1}]
    })
  }
  const handleRemove = (selectedItem)=>{
    const isConfirm = window.confirm("Xóa sản phẩm này?");
    if(isConfirm){
      setCart((prevCart)=>{
        return prevCart.filter((item)=>item.id !== selectedItem.id)
      })
    }
    
  }
  const handleReduce = (selectedItem)=>{
    if(selectedItem.quantity!=1){
      setCart((prevCart)=>{
        return prevCart.map((item)=>{
          if(item.id === selectedItem.id){
            return {...item, quantity: item.quantity-1}
          }
        })
      })
    }
  }
  const handlePlus = (selectedItem)=>{
    setCart((prevCart)=>{
      return prevCart.map((item)=>{
        if(item.id === selectedItem.id){
          return {...item, quantity: item.quantity+1}
        }
      })
    })
  }
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error))
  }, [])

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-[400ms] ${
        white ? 'bg-white text-slate-900' : 'bg-[#18191a] text-[#e4e6eb]'
      }`}
    >
      <Header active={white} onToggle={() => setWhite(!white)} />
      <main className="mx-auto mt-10 flex max-w-[1500px] flex-col gap-8 px-8 xl:px-10 2xl:px-12 lg:flex-row lg:items-start lg:gap-4 lg:justify-start">
        <ProductSection products={product?.products} add={handleAddToCart} white={white}/>
        <CartSection cart={cart} pay={()=>setCart([])} remove={handleRemove} plus={handlePlus} reduce={handleReduce} white={white}/>
      </main>
    </div>
  )
}

export default App
