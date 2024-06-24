import { FiArrowRight } from "react-icons/fi";
import { SmallProductCard } from "./SmallProductCard";

export const MostPopular = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-8">
        <p className="text-xl font-semibold">Most Popular</p>
        <div className="flex items-center gap-1 text-sm text-blue-600">
          <p>View all</p>
          <FiArrowRight />
        </div>
      </div>
      <div className=" items-center gap-4 grid md:grid-cols-5 grid-cols-2 mt-4 sm:grid-cols-3">
        <SmallProductCard/>
        <SmallProductCard/>
        <SmallProductCard/>
        <SmallProductCard/>
        <SmallProductCard/>
      </div>
    </>
  );
};
