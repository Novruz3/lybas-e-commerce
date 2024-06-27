import { FaRegStar, FaStar } from "react-icons/fa";
import { BreadCrumbProduct } from "../components/BreadCrumb/BreadCrumbProduct";

export const Product = () => {
  return (
    <div className="lg:px-36 px-4">
      <BreadCrumbProduct />
      <div className="grid grid-cols-5 mt-4">
        <div className="grid grid-cols-2 col-span-4">
          <div className="flex col-span-1 w-full p-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/f4b7/948e/124e20f5cbbcbe4483b2cd905d98737e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OT4V0Tlhm5lLduQbxIX7yYiB~zLMqWXo2RoyW9USAxjJKL9vVmOPT2ru-BRm4grMhGBwiqYIN8BuniwPCXmgrPAuC2LjOYIeyWmlbqNu-qIVIRgVYJI5spzGIvnQ2KQs8heZRhv3Mgued-WAY7l6rjtMkdX6rzqS9R7L5hvp~TIY1XWpFjwX7yqI8lmX~9h5ZVF5ZiAOcnoXYbRi9ijFmW5jyiPkM71uXcLIOPHcKfbZkUF-wE7pAlhhb8IsTxkN9YPXN-kkDqkLZw1HyDNg2MuRvwIB0~ATjfI5~QFYGtkaDiEqDgTn2bA~646aFV7OkS7bvn177mDh09oHAvY2Lg__"
              alt=""
            />
          </div>
          <div className="flex col-span-1 flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold">Nike Sportswear Futura Luxe</p>
              <div className="flex items-center gap-4">
                <p className="text-lg font-bold">150TMT</p>
                <p className="text-red-600">350TMT</p>
              </div>
              <div className="flex items-center gap-2 ">
                <p>
                  Rating: <span className="font-bold">4.0</span>{" "}
                </p>
                <div className="flex text-yellow-400 gap-1 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
                <div className="flex items-center">
                  <p className="font-semibold">In Stock</p>
                </div>
              </div>
              <p>
                Ashgabat{" "}
                <span className="text-red-600">
                  (Beyleki welayatlara 2-5 gun)
                </span>
              </p>
            </div>
            <div className="w-full h-[1px] bg-gray-200" />
            <div className="flex flex-col">
              <div>
                <p className="text-sm text-gray-500">Fabric name:</p>
                <div className="flex items-center gap-8 mt-2">
                  <button className="py-1 px-4 border-blue-600 rounded-lg border text-blue-600">
                    Pombarh
                  </button>
                  <div className="flex items-center text-blue-600">
                    <p>icon</p>
                    <p>size chart</p>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500">Size:</p>
                <div className="flex items-center gap-4 mt-2">
                  <button className="py-1 px-4 border-blue-600 rounded-lg border text-blue-600">
                    XS(34)
                  </button>
                  <button className="py-1 px-4 border-blue-600 rounded-lg border text-blue-600">
                    M(38)
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500">Color:</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="w-8 h-8 border-2 border-blue-600 bg-white rounded-full p-1">
                    <div className="w-full h-full bg-red-600 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-200" />
            <div>
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et
              </p>
            </div>
          </div>
        </div>
        <div className="flex col-span-1">
          <div className="border-2 w-full border-gray-400 rounded-lg p-2">
            <p className="font-bold">Add to card</p>
            <div className="flex gap-4 items-center">
              <p className="text-sm text-gray-400">Numbers:</p>
              <div className="border-2 border-gray-400 rounded-lg w-24">
                - jdiejdij +
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-200" />
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">Total:</p>
              <p>150TMT</p>
            </div>
            <button className="bg-blue-600 w-full rounded-lg py-2 px-8 text-white">Order it</button>
            <button className="bg-white w-full border-2 rounded-lg py-2 px-8 text-blue-600">Add to card</button>
          </div>
        </div>
      </div>
    </div>
  );
};
