import { useParams } from "react-router-dom"
import Rating from "../Components/Rating.jsx"
import { Link } from "react-router-dom"
import { useGetProductDetailsQuery } from "../slices/productsApiSlice.js"
import Loader from "../Components/Loader.jsx"
import Message from "../Components/Message.jsx"


export default function ProductScreen() {
 
    const {id: productId} = useParams()

    const {data:product, isLoading, error} = useGetProductDetailsQuery(productId)


   
    
  return (
    <>

    <div className="p-7 px-20">
         <Link to="/"> 
            <button className="bg-gray-500 text-amber-50 rounded-1xl m-3  p-1">Go Back</button>
        </Link>
        
         
         {isLoading ? (
          <Loader/>
         ) : error ? (
          <Message variant='danger'>{error?.data?.message || error.error}</Message>
         ) : (
            <div className="flex gap-3">
              <img className="w-[500px] h-[250px] bg-amber-400" src={product.image} alt={product.name} />
            <div className="px-5 pt-2">
              <h3 className="mb-6">{product.name}</h3>
              <div className="h-[50px] border-y-2 border-gray-200 flex items-center justify-center text-[11px]">
                <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
             </div>
             <p className="h-[50px] border-b-2 border-gray-200 flex items-center justify-center text-[13px]">Price: ${product.price}</p>
             <p className="text-gray-400 flex items-center justify-center text-[13px]">Description: {product.description}</p>
             <button className="bg-amber-950 flex justify-center align-baseline text-amber-50 rounded-1xl p-1 text-1xl" disabled={product.countInStock === 0}>Add To Cart</button>
           </div>
         </div>
      )}
   </div>   
  </>
  )
}
