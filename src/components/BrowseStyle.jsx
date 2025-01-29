import Casual from "../../public/img/BackgroundImage/Frame 60.png";
import Formal from "../../public/img/BackgroundImage/Frame 62.png";
import Gym from "../../public/img/BackgroundImage/Frame 63.png";
import Party from "../../public/img/BackgroundImage/Frame 64.png";

const BrowseStyle = () => {
  return (
    <div className="bg-[#F0F0F0] rounded-xl m-10 px-6 sm:px-12 lg:px-20 py-12">
      {/* Section Titre */}
      <div className="flex justify-center mb-12">
        <h1 className="text-2xl sm:text-4xl font-bold uppercase text-center">
          Browse by dress style
        </h1>
      </div>

      {/* Section Images */}
      <div className="flex flex-col gap-6">
        {/* Première Ligne */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/5 w-full p-4 md:p-6 bg-white rounded-lg shadow">
            <img
              src={Casual}
              alt="Casual Picture"
              className="w-full h-full object-cover rounded-lg md:rounded-xl"
            />
          </div>
          <div className="lg:w-3/5 w-full p-4 md:p-6 bg-white rounded-lg shadow">
            <img
              src={Formal}
              alt="Formal Picture"
              className="w-full h-full object-cover rounded-lg md:rounded-xl"
            />
          </div>
        </div>

        {/* Deuxième Ligne */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-3/5 w-full p-4 md:p-6 bg-white rounded-lg shadow">
            <img
              src={Party}
              alt="Party Picture"
              className="w-full h-full object-cover rounded-lg md:rounded-xl"
            />
          </div>
          <div className="lg:w-2/5 w-full p-4 md:p-6 bg-white rounded-lg shadow">
            <img
              src={Gym}
              alt="Gym picture"
              className="w-full h-full object-cover rounded-lg md:rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseStyle;
