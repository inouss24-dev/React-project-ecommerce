import { BiUser } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

function Navbar() {
    return (
      <>
        <div className="lg:mt-4 mb-4 lg:mx-20 mt-2 mx-2 flex justify-between items-center bg-[#ffff] space-x-4">
          <div className="flex space-x-0.5 items-center">
            <IoMdMenu className="md:hidden text-4xl" />
            <a href="#" className="text-3xl font-bold uppercase">
              shop.co
            </a>
          </div>
          <div className="hidden lg:block space-x-4 font-light text-[#000]">
            <a href="#" className="text-md">Shop</a>
            <a href="#TOPSELLING" className="text-md">On Sale</a>
            <a href="#NEWARRIVALS" className="text-md">New Arrivals</a>
            <a href="#" className="text-md">Brands</a>
          </div>
          <div className="hidden lg:block">
            <input
              type="text"
              className="bg-[#f0f0f0] p-2 rounded-2xl w-lg"
              placeholder="🔍 Search for products.."
            />
          </div>
          <div className="flex items-center space-x-4 text-[#000] text-3xl md:text-md">
            <CiSearch className="lg:hidden" />
            <CiShoppingCart />
            <BiUser />
          </div>
        </div>
      </>
    );
  }

export default Navbar;
