import Link from "next/link"
import ProductImage from "./ProductImage"


type Props = {
  product: Product
}


const Product = ({ product }: Props) => {
  
  return (
    <Link href={`/product/${product.id}`} className="h-80 flex flex-col p-3 border border-[#444] transition-transform ease-out duration-200 group rounded hover:scale-105">
       
      {/*-----Image-----*/}
      <div className="relative max-h-92 flex-1">
        <ProductImage product={product} fill />
      </div>

      {/*-----Title-----*/}
      <div className='flex justify-between font-semibold'>
        <h2 className='w-44 truncate'>{product.title}</h2>
        <span>${product.price}</span>
      </div>

      {/*-----Description-----*/}
      <p className=' text-sm line-clamp-2 mt-4 text-gray-300'>
        {product.description}
      </p>

    </Link>
  )
}

export default Product