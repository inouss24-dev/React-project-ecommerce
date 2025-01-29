import frame32 from "../../public/img/New Arrivals/Frame 32.png"
import frame33 from "../../public/img/New Arrivals/Frame 33.png"
import frame34 from "../../public/img/New Arrivals/Frame 34.png"
import frame38 from "../../public/img/New Arrivals/Frame 38.png"



const NewArrivals = () => {
    const NEWARRIVALS = [
      {
        id: 1,
        name: "T-SHIRT WITH TAPE DETAILS",
        image : frame32,
        starts: 4.5,
        price: "120",
        priceWithReduction: null,
        reductionPercentage: null,
      },
      {
        id: 2,
        name: "SKINNY FIT JEANS",
        image : frame33,
        starts: 3.5,
        price: "240",
        priceWithReduction: "260",
        reductionPercentage: "20",
      },
      {
        id: 3,
        name: "CHECKERED SHIRT",
        image : frame34,
        starts: 4.5,
        price: "180",
        priceWithReduction: null,
        reductionPercentage: null,
      },
      {
        id: 4,
        name: "SLEEVE STRIPED T-SHIRT",
        image : frame38,
        starts: 4.5,
        price: "130",
        priceWithReduction: "160",
        reductionPercentage: "30",
      },
    ];
  
    return (
      <div className="py-8 px-4 md:px-12 mb-8">
        <div className="flex justify-center mb-8">
          <h1 className="text-4xl font-bold" id="NEWARRIVALS">NEW ARRIVALS</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {NEWARRIVALS.map((product) => (
            <div key={product.id} className=" p-4 rounded-lg shadow-lg bg-[#f0f0f0] hover:scale-105 duration-300 transition-all">
              <div className="text-center mb-4">
                <img
                  src={product.image} // Example placeholder image
                  alt={product.name}
                  className="mx-auto mb-4 rounded-md"
                />
                <h3 className="text-xl font-semibold">{product.name}</h3>
              </div>
              <div className="flex justify-center items-center space-x-1 mb-2">
                <span className="text-yellow-400 text-xl">{'★'.repeat(Math.floor(product.starts))}</span>
                <span>{product.starts}/5</span>
              </div>
              <div className="flex justify-center items-center mb-2">
                {product.priceWithReduction ? (
                  <>
                    <span className="text-black font-bold mr-2">${product.priceWithReduction}</span>
                    <span className="line-through text-[#00000060] mr-2">${product.price}</span>
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
  
  export default NewArrivals;
  