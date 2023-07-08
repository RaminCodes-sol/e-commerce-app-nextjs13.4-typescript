import Product from "@/components/Product"
import getProducts from "@/lib/getProducts"



export default async function Home() {
  const productsData: Promise<Product[]> = getProducts()
  const products = await productsData


  return (
    <main>

      <section className="w-full max-w-[1200px] mx-auto mt-11 p-3">
        <h1 className="text-center py-6 text-3xl text-purple-600">Products</h1>
        <div className='grid grid-cols-fluid gap-4'>
          {
            products.map((product: Product) => <Product key={product.id} product={product} />)
          }
        </div>
      </section>

    </main>
  )
}
