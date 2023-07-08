'use client'
import { useEffect, useState } from "react"
import ProductImage from "@/components/ProductImage"
import getProduct from "@/lib/getProduct"
import { useParams, useRouter } from "next/navigation"
import { AiFillStar } from "react-icons/ai";
import { TiStarOutline } from "react-icons/ti"




const Modal = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [product, setProduct] = useState<Product>()
    const { id } = useParams()
    const router = useRouter()


    /*-------Fetch-Product-------*/
    useEffect(() => {
        const fetchProduct = async () => {
            const productData: Promise<Product> = getProduct(id)
            const product = await productData
            setProduct(product)
        }
        fetchProduct()

    }, [id])


    /*-------Back-To-HomePage-------*/
    useEffect(() => {
        const mouseClick = (e: MouseEvent) => {
            const targetElement = e.target as HTMLElement
            if (targetElement.dataset.state === "product-wrapper" || targetElement.classList.contains("__className_0ec1f4")) {
                setIsOpen(false)
                router.back()
            }
        }

        document.body.addEventListener('click', mouseClick)
        return () => document.body.removeEventListener('click', mouseClick)
    }, [])


    /*-------Loading------*/
    if (!product?.id) return <h1 className="text-center mt-24">Loading...</h1>



  return (
   <>
        {
            isOpen && (
                <section className='w-full max-w-[700px] mx-auto h-screen flex justify-center items-center text-white' data-state="product-wrapper">

                    <div className="flex w-full h-auto gap-4 items-center border-2 border-purple-700 rounded-md p-3" data-state='product-container'>

                        {/*-------Image------*/}
                        { product?.image && 
                            <div className="relative w-[800px] h-96  hidden md:inline">
                                <ProductImage product={product} fill />
                            </div> 
                        }

                        {/*-------Details------*/}
                        <div>
                            <h1 className="text-2xl font-bold">{product?.title}</h1>

                            <span className="mt-2 mb-4">${product?.price}</span>

                            <div className="flex mt-3">
                                { 
                                    product?.rating.rate !== undefined && 
                                        Array.from({length: Math.floor(product.rating.rate)}, (_, i) => (<AiFillStar key={i} className="w-4 h-4 text-yellow-500" />))  
                                }
                                {
                                    product?.rating.rate !== undefined &&
                                        Array.from({length: 5 - Math.floor(product?.rating.rate)}, (_, i) => (<TiStarOutline key={i} className="w-4 h-4 text-yellow-500" />))
                                }
                            </div>

                            <p className="text-sm mt-8">{product?.description}</p>

                            <div className='flex flex-col gap-3 mt-4 text-sm'>
                                <button className="p-2 bg-purple-700 transition-colors hover:bg-purple-800">Add to bag</button>
                                <button onClick={() => {
                                    setIsOpen(false)
                                    window.location.reload()
                                }} className="p-2 border border-purple-700 transition-colors hover:bg-purple-700">View full details</button>
                            </div>
                        </div>

                    </div>

                </section>
            )
        }
   </>
  )
}

export default Modal