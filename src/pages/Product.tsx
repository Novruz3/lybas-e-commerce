import { FaRegStar, FaStar } from "react-icons/fa";
import { BreadCrumbProduct } from "../components/BreadCrumb/BreadCrumbProduct";
import { FaShop } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";
import { Comment } from "../components/Comments/Comment";
import { SimilarGoods } from "../components/Dresses/SimilarGoods";
import { Button } from "flowbite-react";

export const Product = () => {
  return (
    <div className="pb-4">
      <BreadCrumbProduct />
      <div className="grid grid-cols-5 mt-4 gap-4">
        <div className="flex flex-col xl:col-span-4 col-span-5 gap-4">
          <div className="md:grid md:grid-cols-2 flex-col">
            <div className="flex col-span-1 w-96 h-96 flex-col">
              <img
                src="https://s3-alpha-sig.figma.com/img/f4b7/948e/124e20f5cbbcbe4483b2cd905d98737e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OT4V0Tlhm5lLduQbxIX7yYiB~zLMqWXo2RoyW9USAxjJKL9vVmOPT2ru-BRm4grMhGBwiqYIN8BuniwPCXmgrPAuC2LjOYIeyWmlbqNu-qIVIRgVYJI5spzGIvnQ2KQs8heZRhv3Mgued-WAY7l6rjtMkdX6rzqS9R7L5hvp~TIY1XWpFjwX7yqI8lmX~9h5ZVF5ZiAOcnoXYbRi9ijFmW5jyiPkM71uXcLIOPHcKfbZkUF-wE7pAlhhb8IsTxkN9YPXN-kkDqkLZw1HyDNg2MuRvwIB0~ATjfI5~QFYGtkaDiEqDgTn2bA~646aFV7OkS7bvn177mDh09oHAvY2Lg__"
                alt=""
              />
              <div className="flex xl:hidden">
                <button className="py-2 px-4 w-full rounded-lg text-white mt-8 bg-blue-600">Add to cart</button>
              </div>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-200" />
          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-semibold">Comments</p>
            <div className="flex items-center gap-1 text-sm text-blue-600">
              <p>View all</p>
              <FiArrowRight />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Comment />
            <Comment />
          </div>
          <SimilarGoods />
        </div>
        <div className="xl:flex col-span-1 xl:flex-col hidden">
          <div className="border-2 w-full border-gray-400 rounded-lg p-4 mt-4">
            <p className="font-bold">Add to card</p>
            <div className="flex gap-4 items-center mt-2">
              <p className="text-sm text-gray-400">Numbers:</p>
              <Button.Group className="flex items-center">
                <Button size="xs" color="gray">-</Button>
                <Button size="xs" color="gray">1</Button>
                <Button size="xs" color="gray">+</Button>
              </Button.Group>
            </div>
            <div className="w-full h-[1px] bg-gray-200 mt-4" />
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-gray-400">Total:</p>
              <p className="font-bold">150TMT</p>
            </div>
            <button className="bg-blue-600 w-full rounded-lg py-2 px-8 text-white mt-2">
              Order it
            </button>
            <button className="bg-white w-full border-2 rounded-lg py-2 px-8 mt-2 text-blue-600">
              Add to card
            </button>
          </div>
          <div className="border-2 w-full border-gray-400 rounded-lg p-4 mt-4">
            <p className="font-bold">Seller</p>
            <div className="flex items-center gap-2">
              <div className="bg-gray-600 rounded-md text-white text-2xl p-4">
                <FaShop />
              </div>
              <div className="text-sm">
                <p className="font-bold">Kumus.G</p>
                <p className="text-gray-400">105 types of dresses</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <GoLocation className="text-blue-500 text-xl" />
              <p className="font-bold text-sm">Ashgabat</p>
            </div>
            <button className="bg-blue-600 w-full rounded-lg py-2 px-8 text-white mt-4">
              More
            </button>
            <button className="bg-gray-200 text-sm w-full rounded-lg py-2 mt-2 text-gray-400">
              Remind me when in stock
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
