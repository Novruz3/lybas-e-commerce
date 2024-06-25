import { FiArrowRight } from "react-icons/fi";
import { ProductCard } from "./ProductCard";

export const RecomendedDresses = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-8">
        <p className="text-xl font-semibold">Recommended Dresses</p>
        <div className="flex items-center gap-1 text-sm text-blue-600">
          <p>View all</p>
          <FiArrowRight />
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 sm:grid md:grid-cols-3 sm:grid-cols-2 grid-rows-1 mt-4">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </>
  );
};
