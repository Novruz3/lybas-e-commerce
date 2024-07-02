import { FaRegStar, FaStar } from "react-icons/fa";

export const Comment = () => {
  return (
    <>
      <div className="flex bg-gray-200 rounded-md pb-2 pr-2 ">
        <div className="p-4 w-24 ">
          <img
            className="w-12 h-12 rounded-full"
            src="https://s3-alpha-sig.figma.com/img/f4b7/948e/124e20f5cbbcbe4483b2cd905d98737e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OT4V0Tlhm5lLduQbxIX7yYiB~zLMqWXo2RoyW9USAxjJKL9vVmOPT2ru-BRm4grMhGBwiqYIN8BuniwPCXmgrPAuC2LjOYIeyWmlbqNu-qIVIRgVYJI5spzGIvnQ2KQs8heZRhv3Mgued-WAY7l6rjtMkdX6rzqS9R7L5hvp~TIY1XWpFjwX7yqI8lmX~9h5ZVF5ZiAOcnoXYbRi9ijFmW5jyiPkM71uXcLIOPHcKfbZkUF-wE7pAlhhb8IsTxkN9YPXN-kkDqkLZw1HyDNg2MuRvwIB0~ATjfI5~QFYGtkaDiEqDgTn2bA~646aFV7OkS7bvn177mDh09oHAvY2Lg__"
            alt=""
          />
        </div>
        <div className="w-full mt-4 flex flex-col space-y-1">
          <div className="flex justify-between">
            <p className="font-semibold">Aygul Sulyanowa</p>
            <p className="text-sm text-gray-500">22.09.2023</p>
          </div>
          <div className="flex text-yellow-400 gap-1 ">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
          <p className="text-sm">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          <div className="flex gap-2">
          <img className="w-10 h-10 rounded-md" src="https://s3-alpha-sig.figma.com/img/f4b7/948e/124e20f5cbbcbe4483b2cd905d98737e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OT4V0Tlhm5lLduQbxIX7yYiB~zLMqWXo2RoyW9USAxjJKL9vVmOPT2ru-BRm4grMhGBwiqYIN8BuniwPCXmgrPAuC2LjOYIeyWmlbqNu-qIVIRgVYJI5spzGIvnQ2KQs8heZRhv3Mgued-WAY7l6rjtMkdX6rzqS9R7L5hvp~TIY1XWpFjwX7yqI8lmX~9h5ZVF5ZiAOcnoXYbRi9ijFmW5jyiPkM71uXcLIOPHcKfbZkUF-wE7pAlhhb8IsTxkN9YPXN-kkDqkLZw1HyDNg2MuRvwIB0~ATjfI5~QFYGtkaDiEqDgTn2bA~646aFV7OkS7bvn177mDh09oHAvY2Lg__" alt="" />
          <img className="w-10 h-10 rounded-md" src="https://s3-alpha-sig.figma.com/img/f4b7/948e/124e20f5cbbcbe4483b2cd905d98737e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OT4V0Tlhm5lLduQbxIX7yYiB~zLMqWXo2RoyW9USAxjJKL9vVmOPT2ru-BRm4grMhGBwiqYIN8BuniwPCXmgrPAuC2LjOYIeyWmlbqNu-qIVIRgVYJI5spzGIvnQ2KQs8heZRhv3Mgued-WAY7l6rjtMkdX6rzqS9R7L5hvp~TIY1XWpFjwX7yqI8lmX~9h5ZVF5ZiAOcnoXYbRi9ijFmW5jyiPkM71uXcLIOPHcKfbZkUF-wE7pAlhhb8IsTxkN9YPXN-kkDqkLZw1HyDNg2MuRvwIB0~ATjfI5~QFYGtkaDiEqDgTn2bA~646aFV7OkS7bvn177mDh09oHAvY2Lg__" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
