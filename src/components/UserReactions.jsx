import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const UserReactions = () => {
  const USERREPORT = [
    {
      id: 1,
      name: "Sarah M.",
      description: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      starts : 4
    },
    {
      id: 2,
      name: "Kevin H.",
      description: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
      starts : 4
    },
    {
      id: 3,
      name: "Kyrie I.",
      description: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
      starts : 5
    },
  ];
  return (
    <div className="m-10">
      <div>
        <h1 className=" text-5xl font-bold text-center lg:text-start uppercase">Our Happy Customers</h1>
      </div>
      <div className=" hidden lg:flex lg:justify-end lg:items-center space-x-4 pr-10 ">
        <FaArrowLeftLong className=" text-2xl" />
        <FaArrowRight className=" text-2xl" />
      </div>
      <div className="  flex flex-col items-center lg:flex-row space-x-10 mt-4">
        {USERREPORT.map((report) => (
            <div
                key={report.id}
                className=" p-4 my-2 lg:mt-0 rounded-2xl border-2 border-[#f0f0f0] space-y-1"
            >
                <p className="text-yellow-400 text-2xl">
                    {"★".repeat(Math.floor(report.starts))}
                </p>
                <h2>
                    {report.name} ✅
                </h2>
                <p>
                    {report.description}
                </p>

            </div>
        ) )}
      </div>
    </div>
  );
};

export default UserReactions;
