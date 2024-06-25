export const BreadCrumb = () => {
  return (
    <nav className="flex mt-4 text-lg" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            Home
          </a>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <p>/</p>
            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
              Dresses
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};
