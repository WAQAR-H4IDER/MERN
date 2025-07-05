
import { Link } from "react-router-dom";
import Rating from "../Components/Rating.jsx";
import Loader from "../Components/Loader.jsx";
import Message from "../Components/Message.jsx";
import { useGetProductsQuery } from "../slices/productsApiSlice.js";

// Home Screen
export default function HomeScreen() {
   const { data: products, isLoading, error } = useGetProductsQuery()
    

  return (
    <>  
        { isLoading ? (
            <Loader/>
        ) : error ? (
            <Message variant='danger'>{error?.data?.message || error.error}</Message>
        ) : (<>
            <h1 className="px-12 font-medium text-2xl p-5  ">Latest Products</h1>
        <div className="flex flex-wrap justify-center gap-10 mx-10">
            {products.map((product) => (
                <Link to={`/product/${product.id}`}>
                <div  key={product.id}
                className="p-3 hover:shadow-2xl duration-300 rounded-2xl border w-96 h-[450px]">
                 <div className="h-8/12 ">
                    <img className="w-full h-full object-cover rounded-2xl shadow-2xl bg-amber-100"
                      src={product.image}
                      alt={product.name}
                      />
                 </div>

                 <h2 className="text-lg font-semibold">
                    {product.name}
                 </h2>

                <p className="text-sm text-gray-600">
                    {product.description}
                </p>
                <div>
                    <Rating value={product.ratting} text={`${product.numReviews} reviews`}/>
                </div>
                <p className="mt-2 text-blue-600 font-bold">
                    {product.price}
                </p>
            

            </div>
            </Link>

           ))}
        </div>
        </>) }
        
    </>
  )
}
