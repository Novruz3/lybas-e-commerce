import { FiArrowRight } from "react-icons/fi";
import { BlogCard } from "./BlogCard";

export const BlogsHome = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-8">
        <p className="text-xl font-semibold">Blogs</p>
        <div className="flex items-center gap-1 text-sm text-blue-600">
          <p>View all</p>
          <FiArrowRight />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-2 mt-4 mb-16">
        <BlogCard />
        <BlogCard />
      </div>
    </>
  );
};
