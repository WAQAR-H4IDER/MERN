import { FaShoppingCart, FaUser } from "react-icons/fa";
import IconWithLabel from "./Partials/IconWithLabel";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full bg-[#1b1c1c] text-amber-50 flex items-center justify-between px-8 py-3  " >
      <Link to='/'>
        <h5>ProShop</h5>
      </Link>
        <div className="flex items-center justify-center gap-4">
          <Link to="/cart">
           <IconWithLabel icon={<FaShoppingCart/>} label={"Cart"}/>
          </Link>
          <Link to='/sign in'>
           <IconWithLabel icon={<FaUser/>} label={"Sign In"}/>
          </Link>
           
        </div>
    </div>
  )
}