import { LuArrowUpRight } from "react-icons/lu";

export const DressMakersCard = () => {
  return (
    <div className="flex-col w-full relative group">
      <div className="border ">
        <img
          className="w-full h-[196px] object-contain"
          src="https://s3-alpha-sig.figma.com/img/3378/e99f/654b699cc2fe63aa2590c6dce75d2e3c?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K0Fm3US~IEYx4tU00AVb8KmsCbkLxXdOWr~45o8HE1jX8yuIXI1CljaVToiswyt48PJyAvzVYB64sBz-Q6tFA7vnLit~OsdxKMzi1HZz~4yCfcunjCBEFAmtFrG3AljyieUitO7TL9vQAwTwcs0MHNsi9m0hyDDgZtcoHAqZT7FguxSvF6HF6o77n2F6gBzdVfF-klTlEPx2CoUPqkoPtSK7B-YGevtCGV9r6KShK0VLsempO0u9dnup3Vfy9ufwLbLNLpEpkCdFZ6Rz8elOoRUERCJXeWu0NgKIFUvM5-8mK2L-h1a6Coa-oLym8fh125ggqSpmXZG2~jmGN7DZQA__"
          alt=""
        />
      </div>
      <div className="absolute top-36 right-2 opacity-0 lg:group-hover:opacity-100">
        <button className="py-2 mt-2 px-4 text-sm w-full md:w-auto justify-center  rounded-md bg-blue-600 text-white flex items-center gap-2">
          <LuArrowUpRight className="text-lg" />
          Profile
        </button>
      </div>
      <div className="text-center px-1 mt-2">
        <p className=" font-semibold">Nike Sportswear Futura Luxe</p>
        <p className="text-sm text-gray-500">Ashgabat</p>
        <p className="lg:hidden font-bold">95 Products</p>
        <button className="py-2 mt-2 px-4 text-sm w-full justify-center lg:hidden  rounded-md bg-blue-600 text-white flex items-center gap-2">
          <LuArrowUpRight className="text-lg" />
          More
        </button>
      </div>
    </div>
  );
};
