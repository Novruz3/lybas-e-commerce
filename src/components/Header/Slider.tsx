export const Slider = () => {
  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-[calc(100vh-2*56px)]">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://s3-alpha-sig.figma.com/img/f4b7/948e/124e20f5cbbcbe4483b2cd905d98737e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OT4V0Tlhm5lLduQbxIX7yYiB~zLMqWXo2RoyW9USAxjJKL9vVmOPT2ru-BRm4grMhGBwiqYIN8BuniwPCXmgrPAuC2LjOYIeyWmlbqNu-qIVIRgVYJI5spzGIvnQ2KQs8heZRhv3Mgued-WAY7l6rjtMkdX6rzqS9R7L5hvp~TIY1XWpFjwX7yqI8lmX~9h5ZVF5ZiAOcnoXYbRi9ijFmW5jyiPkM71uXcLIOPHcKfbZkUF-wE7pAlhhb8IsTxkN9YPXN-kkDqkLZw1HyDNg2MuRvwIB0~ATjfI5~QFYGtkaDiEqDgTn2bA~646aFV7OkS7bvn177mDh09oHAvY2Lg__"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://s3-alpha-sig.figma.com/img/f4b7/948e/124e20f5cbbcbe4483b2cd905d98737e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OT4V0Tlhm5lLduQbxIX7yYiB~zLMqWXo2RoyW9USAxjJKL9vVmOPT2ru-BRm4grMhGBwiqYIN8BuniwPCXmgrPAuC2LjOYIeyWmlbqNu-qIVIRgVYJI5spzGIvnQ2KQs8heZRhv3Mgued-WAY7l6rjtMkdX6rzqS9R7L5hvp~TIY1XWpFjwX7yqI8lmX~9h5ZVF5ZiAOcnoXYbRi9ijFmW5jyiPkM71uXcLIOPHcKfbZkUF-wE7pAlhhb8IsTxkN9YPXN-kkDqkLZw1HyDNg2MuRvwIB0~ATjfI5~QFYGtkaDiEqDgTn2bA~646aFV7OkS7bvn177mDh09oHAvY2Lg__"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://s3-alpha-sig.figma.com/img/f4b7/948e/124e20f5cbbcbe4483b2cd905d98737e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OT4V0Tlhm5lLduQbxIX7yYiB~zLMqWXo2RoyW9USAxjJKL9vVmOPT2ru-BRm4grMhGBwiqYIN8BuniwPCXmgrPAuC2LjOYIeyWmlbqNu-qIVIRgVYJI5spzGIvnQ2KQs8heZRhv3Mgued-WAY7l6rjtMkdX6rzqS9R7L5hvp~TIY1XWpFjwX7yqI8lmX~9h5ZVF5ZiAOcnoXYbRi9ijFmW5jyiPkM71uXcLIOPHcKfbZkUF-wE7pAlhhb8IsTxkN9YPXN-kkDqkLZw1HyDNg2MuRvwIB0~ATjfI5~QFYGtkaDiEqDgTn2bA~646aFV7OkS7bvn177mDh09oHAvY2Lg__"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};
