import frame39 from "../../public/img/New Arrivals/Frame 39.png";
import frame40 from "../../public/img/New Arrivals/Frame 40.png";
import frame41 from "../../public/img/New Arrivals/Frame 41.png";
import frame42 from "../../public/img/New Arrivals/Frame 42.png";

const TopSelling = () => {
  const NEWARRIVALS = [
    {
      id: 1,
      name: "VERTICAL STRIPED SHIRT",
      image: frame39,
      starts: 5,
      price: "212",
      priceWithReduction: "232",
      reductionPercentage: "20",
    },
    {
      id: 2,
      name: "COURAGE GRAPHIC T-SHIRT",
      image: frame40,
      starts: 4,
      price: "145",
      priceWithReduction: null,
      reductionPercentage: null,
    },
    {
      id: 3,
      name: "LOOSE FIT BERMUDA SHORTS",
      image: frame41,
      starts: 3,
      price: "80",
      priceWithReduction: null,
      reductionPercentage: null,
    },
    {
      id: 4,
      name: "FADED SKINNY JEANS",
      image: frame42,
      starts: 4.5,
      price: "120",
      priceWithReduction: null,
      reductionPercentage: null,
    },
  ];

  return (
    <div className="py-8 px-4 md:px-12">
      <div className="flex justify-center mb-8">
        <h1 className="text-4xl font-bold" id="TOPSELLING">
          TOP SELLING
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {NEWARRIVALS.map((product) => (
          <div
            key={product.id}
            className=" p-4 rounded-lg shadow-lg bg-[#f0f0f0] hover:scale-105 duration-300 transition-all"
          >
            <div className="text-center mb-4">
              <img
                src={product.image} 
                alt={product.name}
                className="mx-auto mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
            </div>
            <div className="flex justify-center items-center space-x-1 mb-2">
              <span className="text-yellow-400 text-xl">
                {"★".repeat(Math.floor(product.starts))}
              </span>
              <span>{product.starts}/5</span>
            </div>
            <div className="flex justify-center items-center mb-2">
              {product.priceWithReduction ? (
                <>
                  <span className="text-black font-bold mr-2">
                    ${product.priceWithReduction}
                  </span>
                  <span className="line-through text-[#00000060] mr-2">
                    ${product.price}
                  </span>
                </>
              ) : (
                <span className="text-black font-bold">${product.price}</span>
              )}
              {product.reductionPercentage && (
                <span className="bg-red-500 text-white rounded-full px-2 py-1 ml-2 text-xs">
                  {product.reductionPercentage}% OFF
                </span>
              )}
            </div>
            <button className="w-full bg-black text-white rounded-3xl py-2 mt-4 hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <a
          href="#"
          className=" text-xl  border-2 border-black  font-extralight text-[#000] rounded-full  w-full lg:w-36 text-center p-2"
        >
          View All
        </a>
      </div>
    </div>
  );
};

export default TopSelling;
