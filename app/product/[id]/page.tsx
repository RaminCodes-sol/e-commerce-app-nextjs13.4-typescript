import ProductImage from "@/components/ProductImage"
import getProduct from "@/lib/getProduct"
import getProducts from "@/lib/getProducts"
import type { Metadata } from "next"
import { notFound } from 'next/navigation'


type Props = {
    params: {
        id: string
    }
}


/*------Generate-Metadata-----*/
export const generateMetadata = async ({ params: { id }}: Props): Promise<Metadata> => {
    const getProductData: Promise<Product> = getProduct(id)
    const product = await getProductData
    
    if (!product.id) {
        return {
            title: 'Product Not Found!'
        }
    }

    return {
        title: product.title,
        description: `This is the page of ${product.title}`
    }
}



/*--------Product-Page--------*/
const ProductPage = async ({ params: { id } }: Props) => {
    const getProductData: Promise<Product> = getProduct(id)
    const product = await getProductData


    if (!product.id) return <h1 className="text-center mt-24">Loading...</h1>
    

    return (
        <section className='mt-40 max-w-5xl mx-auto flex flex-col gap-8 md:flex-row items-center px-6 py-10'>
            
            {/*-------Image------*/}
            <ProductImage product={product} />
            
            {/*-------Details------*/}
            <div className='divide-y'>
                <div className="space-y-2 pb-8">
                    <h2 className='text-2xl md:text-3xl font-bold'>{product.title}</h2>
                    <h3 className="text-gray-300 font-bold text-xl md:text-2xl">${product.price}</h3>
                </div>
                
                <div className="pt-8">
                    <p className='text-xs md:text-sm leading-5'>{product.description}</p>
                </div>
            </div>

        </section>
    )

}

export default ProductPage


/*-----Generate-Static-Params-----*/
export const generateStaticParams = async () => {
    const productsData: Promise<Product[]> = getProducts()
    const products = await productsData
    
    return products.map(product => ({
        id: product.id.toString()
    }))
}
