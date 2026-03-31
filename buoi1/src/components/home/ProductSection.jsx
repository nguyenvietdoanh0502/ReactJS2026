import ProductCard from './ProductCard'

function ProductSection({ products,add, white }) {
  return (
    <section className="min-w-0 flex-1 lg:max-w-[1008px]">
      <h1 className="text-2xl font-bold">Danh sách sản phẩm</h1>
      <div className="mt-6 grid justify-start gap-4 [grid-template-columns:repeat(auto-fit,minmax(240px,240px))] xl:[grid-template-columns:repeat(4,240px)]">
        {products?.map((item) => {
          return <ProductCard key={item.id} product={item} add={add} white={white}/>
        })}
      </div>
    </section>
  )
}

export default ProductSection
