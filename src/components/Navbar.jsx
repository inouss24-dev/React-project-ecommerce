import { BiUser } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <div className="lg:mt-4 mb-4 lg:mx-20 mt-2 mx-2 flex justify-between items-center bg-[#ffff]">
      <div className="flex items-center">
        {!menuIsOpen && (
          <IoMdMenu
            className="md:hidden text-4xl cursor-pointer"
            onClick={handleMenu}
          />
        )}
        <a href="#" className="text-3xl font-bold uppercase">
          shop.co
        </a>
      </div>

      {/* NAVIGATION - ALIGNEMENT OPTIMISÉ */}
      <div className="hidden lg:flex items-center gap-x-8 font-light text-[#000]">
        <a href="#" className="text-md">
          Shop
        </a>
        <a href="#TOPSELLING" className="text-md">
          On Sale
        </a>
        <a href="#NEWARRIVALS" className="text-md">
          New Arrivals
        </a>
        <a href="#" className="text-md">
          Brands
        </a>
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

      {/* Menu Burger Trigger...*/}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#000] opacity-90 flex flex-col items-center justify-center space-y-6 py-6 shadow-md transition-transform duration-500 ease-in-out md:hidden ${
          menuIsOpen ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <a
          href="#HOME"
          className="text-[#28a7e9] font-bold text-lg"
          onClick={closeMenu}
        >
          Shop
        </a>
        <a
          href="#FEATURES"
          className="hover:text-[#28a7e9] text-[#ffff] font-bold text-lg"
          onClick={closeMenu}
        >
          On Sale
        </a>
        <a
          href="#PRICING"
          className="hover:text-[#28a7e9] text-[#ffff] font-bold text-lg"
          onClick={closeMenu}
        >
          New Arrivals
        </a>
        <a
          href="#DOWNLOAD"
          className="hover:text-[#28a7e9] text-[#ffff] font-bold text-lg"
          onClick={closeMenu}
        >
          Brands
        </a>
        <a
          href="#CONTACT"
          className="hover:text-[#28a7e9] text-[#ffff] font-bold text-lg"
          onClick={closeMenu}
        >
          CONTACT
        </a>
        {/* Bouton Close */}
        <span
          className="bg-[#28a7e9] p-2 rounded-full cursor-pointer"
          onClick={handleMenu}
        >
          <IoMdClose className="text-4xl text-white" />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
