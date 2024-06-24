import { FaRegStar, FaStar } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { RiShoppingBag4Line } from "react-icons/ri";

export const SmallProductCard = () => {
  return (
    <>
      <div className="flex col-span-1 flex-col w-full">
        <img
          className="w-full h-[196px] object-cover"
          src="https://s3-alpha-sig.figma.com/img/0e4b/7f5e/fa1dc027cd72032ec60cbc781951d7ae?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gwT59pkK7m-wkizP3uiSbFxHJUWlvNTtYXQAItHdcSGpkAJ4d6doYwPqAqHfRZTFdHps0bZW4oobEyyo8Si~MEHawxHLnnAcs6DAAzXFTJYhTDOtvSCj3OtbSY3NarqAH2DMWjL~WZBUe88pyUAFSL7xleRFwRnP19pczkcUolm1fNFF0PB4es2VNPJfGqwZ1u-HWS-O2W2sC~6Kq2KCJgNTsQlsZB9pKi79Yf74LYvLtUIheETelR~1s6mMEN2zX06QBEV54APIrtMA8zhGJNIbtel2OUu1EQlBD-IIJh9oDEUKLK~chOypfdwJL6LBQY~bdDgGNysyJ6yNQCnouw__"
          alt=""
        />
        <div className="mt-2">
          <p className="text-md font-semibold">Nike Sportswear Futura Luxe</p>
        </div>
        <div className="flex gap-2 items-center text-sm mt-2">
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
        <div className="mt-1 flex justify-between items-center">
          <p className="text-xl font-semibold">130 TMT</p>
          <button className="py-2 px-4 text-sm rounded-md bg-blue-600 text-white flex items-center gap-2">
              <RiShoppingBag4Line />
              Add
            </button>
        </div>
          <div className="flex items-center gap-2">
            <FaShop />
            <p className="text-sm underline">Go to Kümüş's shop</p>
          </div>
      </div>
    </>
  );
};
