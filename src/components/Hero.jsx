import HeroImage from "../../public/img/Hero right img.png";
import versaceLogo from "../../public/img/Versace.png";
import gucciLogo from "../../public/img/Gucci.png";
import pradaLogo from "../../public/img/Prada.png";
import zaraLogo from "../../public/img/Zara.png";
import calvinKleinLogo from "../../public/img/CalvinKlein.png";

const Hero = () => {
  const BRANDLOGO = [
    {
      id: 1,
      name: "Zara",
      logo: zaraLogo,
    },
    {
      id: 2,
      name: "Gucci",
      logo: gucciLogo,
    },
    {
      id: 3,
      name: "Prada",
      logo: pradaLogo,
    },
    {
      id: 4,
      name: "Calvin Klein",
      logo: calvinKleinLogo,
    },
    {
      id: 5,
      name: "Versace",
      logo: versaceLogo,
    },
  ];

  return (
    <>
      <div className="bg-[#f0f0f0] w-full px-2 py-6 lg:px-24 lg:py-20 flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <div className="space-y-4 lg:w-1/2 w-full text-center lg:text-left">
          {/* Headline */}
          <div className="text-2xl lg:text-6xl font-bold uppercase space-y-2">
            <h1>Find clothes</h1>
            <h1>That Matches</h1>
            <h1>Your Style</h1>
          </div>

          {/* Subtext */}
          <div className="text-[#00000060] text-sm lg:text-lg">
            <p>
              Browse through our diverse range of meticulously crafted garments,
            </p>
            <p>
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
          </div>

          {/* Button */}
          <div className="w-full lg:w-48 mx-auto lg:mx-0">
            <button className="bg-[#000] rounded-3xl text-[#fff] py-2 text-lg lg:text-xl text-center w-full cursor-pointer hover:bg-[#333] transition">
              Shop Now
            </button>
          </div>

          {/* Statistics */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-6">
            <div className="text-center">
              <span className="text-2xl lg:text-5xl font-bold">200+</span>
              <p className="text-[#00000060] text-sm lg:text-base">
                International Brands
              </p>
            </div>
            <div className="text-center">
              <span className="text-2xl lg:text-5xl font-bold">2,000+</span>
              <p className="text-[#00000060] text-sm lg:text-base">
                Unique Products
              </p>
            </div>
            <div className="text-center">
              <span className="text-2xl lg:text-5xl font-bold">30,000+</span>
              <p className="text-[#00000060] text-sm lg:text-base">
                Satisfied Customers
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-6 lg:mt-0">
          <img
            src={HeroImage}
            alt="Hero Image Presentation"
            className="object-contain rounded-xl w-full sm:w-3/4 lg:w-auto"
            loading="lazy"
          />
        </div>
      </div>
      <div className="bg-[#000] flex items-center justify-evenly p-2 flex-wrap mb-12">
        {BRANDLOGO.map((brand) => (
          <div
            key={brand.id}
            className="flex justify-center items-center mb-2 sm:mb-0"
          >
            <img
              src={brand.logo}
              alt="Brand Logo"
              className="max-w-[100px] sm:max-w-[120px] lg:max-w-[150px] w-full"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
