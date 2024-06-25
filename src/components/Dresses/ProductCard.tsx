import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { RiShoppingBag4Line } from "react-icons/ri";

export const ProductCard = () => {
  return (
    <>
      <div className="flex col-span-1 flex-col w-full relative group">
        <img
          className="w-full h-[296px] object-cover "
          src="https://s3-alpha-sig.figma.com/img/0e4b/7f5e/fa1dc027cd72032ec60cbc781951d7ae?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gwT59pkK7m-wkizP3uiSbFxHJUWlvNTtYXQAItHdcSGpkAJ4d6doYwPqAqHfRZTFdHps0bZW4oobEyyo8Si~MEHawxHLnnAcs6DAAzXFTJYhTDOtvSCj3OtbSY3NarqAH2DMWjL~WZBUe88pyUAFSL7xleRFwRnP19pczkcUolm1fNFF0PB4es2VNPJfGqwZ1u-HWS-O2W2sC~6Kq2KCJgNTsQlsZB9pKi79Yf74LYvLtUIheETelR~1s6mMEN2zX06QBEV54APIrtMA8zhGJNIbtel2OUu1EQlBD-IIJh9oDEUKLK~chOypfdwJL6LBQY~bdDgGNysyJ6yNQCnouw__"
          alt=""
        />
        <div className="lg:hidden bg-black rounded-md w-8 h-8 text-white absolute top-2 right-2 items-center justify-center lg:group-hover:flex flex">
          <FaRegHeart />
        </div>
        <div className="lg:hidden bg-red-600 rounded-md w-12 h-8 text-white absolute top-2 left-2 items-center justify-center lg:group-hover:flex flex">
          <p className="text-sm">50 %</p>
        </div>
        <div className="mt-2">
          <p className="text-lg font-semibold">Nike Sportswear Futura Luxe</p>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <div className="flex text-yellow-400 gap-1 ">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
          <div className="flex items-center">
            <p className="text-sm">(218)</p>
          </div>
          <div>
            <p className=" text-gray-400 text-sm">Ashgabat</p>
          </div>
        </div>
        <div className="mt-1">
          <p className="text-2xl font-semibold">130 TMT</p>
        </div>
        <div className="flex items-center justify-between lg:opacity-0 lg:group-hover:opacity-100">
          <div className="flex items-center gap-2">
            <FaShop />
            <p className=" underline">Go to Kümüş's shop</p>
          </div>
          <button className="py-2 px-6 text-sm rounded-md bg-blue-600 text-white flex items-center gap-2">
            <RiShoppingBag4Line />
            Add
          </button>
        </div>
      </div>
    </>
  );
};
