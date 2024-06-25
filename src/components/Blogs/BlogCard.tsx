import { LuArrowUpRight } from "react-icons/lu";

export const BlogCard = () => {
  return (
    <>
      <div className="w-full group">
        <div>
          <img
            className="w-full h-[236px] object-cover"
            src="https://s3-alpha-sig.figma.com/img/21ca/d713/edaf03ca3fefb67bd5fcbd6c379549ef?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IY5iAnDKkAMfFjFAJ1pfiRlEF8C46O4PNwgeBaxKdl1nX~9DWgKCbYjUUPLURd0BI8B6mFHqHHfBVAw8ijP1cHgRWD33hOJhYL2RpM45SzXMDkiwuCcsArCqXhZiQLCbnKZUHG0hf6iXlH-S3SJlBGpuX8uWcVaQd-ZSHJGsHPYukSW8oEetayl8Ovg9EeV4Vvv6P5AxklZ8o2mDk51XEClan7U3equ3BzFPC3PiMxYAoVQsTWwitYcetH7~60C5isGb1xySpb6V4iy58OD6H56ymgHqDfnrQ9Xt9d8V94fDSLtar5WVdQX1cl3JLupLGkk5rG7MuKFh62Z8A7TOTw__"
            alt=""
          />
        </div>
        <div className="text-sm text-gray-400 font-thin mt-4">
          <p>18 August 2023 </p>
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold text-black mt-2">
              Nike Sportswear Futura Luxe
            </p>
            <div className="group-hover:opacity-100 lg:opacity-0">
              <button className="py-2 mt-2 px-4 text-sm w-full md:w-auto justify-center  rounded-md bg-blue-600 text-white flex items-center gap-2">
                <LuArrowUpRight className="text-lg" />
                More
              </button>
            </div>
          </div>
          <p className="mt-2">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </>
  );
};
