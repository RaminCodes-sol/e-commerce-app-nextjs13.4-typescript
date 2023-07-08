'use client'
import Image from 'next/image'
import { useState } from 'react'


type Props = {
  product: Product,
  fill?: boolean
}


const ProductImage = ({ product, fill }: Props) => {
  const [loading, setLoading] = useState(true)

  return (
    <div>
      {
        fill 
         ? (
              <Image 
                src={product.image} 
                alt='img' 
                fill
                className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${loading ? "scale-105 blur-sm grayscale" : "scale-100 blur-0 grayscale-0"}`} 
                onLoadingComplete={() => setLoading(false)}
              />
          )
         : (
              <Image 
                src={product.image} 
                alt='img' 
                width={400}
                height={1000} 
                className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${loading ? "scale-105 blur-sm grayscale" : "scale-100 blur-0 grayscale-0"}`} 
                onLoadingComplete={() => setLoading(false)}
              />
          )
      }
    </div>
  )
}

export default ProductImage