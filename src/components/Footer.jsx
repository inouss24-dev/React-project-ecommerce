import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Visa from "../../public/img/Footer Logo/visa-svgrepo-com.svg";
import Mastercard  from "../../public/img/Footer Logo/mastercard-svgrepo-com.svg";
import Paypal from "../../public/img/Footer Logo/paypal-svgrepo-com.svg";
import ApplePay from "../../public/img/Footer Logo/apple-pay-svgrepo-com.svg";
import GooglePay from "../../public/img/Footer Logo/google-pay-svgrepo-com.svg";

const Footer = () => {
  return (
    <>
      <div className="mt-14 bg-[#f0f0f0] p-10 flex flex-col md:flex-row md:justify-between gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">SHOP.CO</h1>
          <span>We have clothes that suits your style</span>
          <br />
          <span>and wich you're proud to wear.</span>
          <br />
          <span>From women to men.</span>
          <div className="flex justify-center md:justify-start items-center space-x-3 mt-4">
            <FaFacebookF className="text-2xl" />
            <FaInstagram className="text-2xl" />
            <FaXTwitter className="text-2xl" />
            <FaGithub className="text-2xl" />
          </div>
        </div>

        {/* Suppression de la div englobante */}
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h1 className="text-xl mb-4">Company</h1>
          <a href="#" className="text-[gray]">
            About
          </a>
          <a href="#" className="text-[gray]">
            Features
          </a>
          <a href="#" className="text-[gray]">
            Works
          </a>
          <a href="#" className="text-[gray]">
            Career
          </a>
        </div>
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h1 className="text-xl mb-4">Help</h1>
          <a href="#" className="text-[gray]">
            Customer Support
          </a>
          <a href="#" className="text-[gray]">
            Delivery Details
          </a>
          <a href="#" className="text-[gray]">
            Terms & Conditions
          </a>
          <a href="#" className="text-[gray]">
            Privacy Policy
          </a>
        </div>
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h1 className="text-xl mb-4">FAQ</h1>
          <a href="#" className="text-[gray]">
            Account
          </a>
          <a href="#" className="text-[gray]">
            Manage Deliveries
          </a>
          <a href="#" className="text-[gray]">
            Orders
          </a>
          <a href="#" className="text-[gray]">
            Payments
          </a>
        </div>
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h1 className="text-xl mb-4">RESSOURCES</h1>
          <a href="#" className="text-[gray]">
            Free eBooks
          </a>
          <a href="#" className="text-[gray]">
            Development Tutorial
          </a>
          <a href="#" className="text-[gray]">
            How to - Blog
          </a>
          <a href="#" className="text-[gray]">
            Youtube Playlist
          </a>
        </div>
      </div>
      <div className="bg-[#f0f0f0] p-10">
        <div className="w-full">
            <hr className=" text-[gray] w-full"/>
        </div>
        <div className=" flex flex-col items-center lg:flex-row lg:justify-between  mt-2">
            <p className="text-sm lg:text-lg">Shop.co 2000-2023. All Rights Reserved</p>
            <p className=" flex space-x-4 mt-2 lg:mt-0">
                <img 
                    src={Visa}
                    width={30}
                />
                <img 
                    src={Mastercard}
                    width={30}
                />
                <img 
                    src={Paypal}
                    width={30}
                />
                <img 
                    src={ApplePay}
                    width={30}
                />
                <img 
                    src={GooglePay}
                    width={30}
                />

            </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
