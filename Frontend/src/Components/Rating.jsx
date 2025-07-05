import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"


export default function Rating({value, text}) {
  return (
    <div className="flex items-center justify-start gap-1 text-amber-300">
        <span>
            {value >=1 ? <FaStar/> : value >=0.5 ? <FaStarHalfAlt/> : <FaRegStar/> }
        </span>
         <span>
            {value >=2 ? <FaStar/> : value >=1.5 ? <FaStarHalfAlt/> : <FaRegStar/> }
        </span>
         <span >
            {value >=3 ? <FaStar/> : value >=2.5 ? <FaStarHalfAlt/> : <FaRegStar/> }
        </span>
         <span>
            {value >=4 ? <FaStar/> : value >=3.5 ? <FaStarHalfAlt/> : <FaRegStar/> }
        </span>
         <span>
            {value >=5 ? <FaStar/> : value >=4.5 ? <FaStarHalfAlt/> : <FaRegStar/> }
        </span>
        <span className="text-black ">
            {text && text}
        </span>
    </div>
  )
}
