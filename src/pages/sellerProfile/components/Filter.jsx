import { t } from 'i18next';
import React, { useEffect, useRef } from 'react';

function Filter({ children, open, setOpen }) {
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className='relative'>
      <button onClick={() => setOpen(!open)} className="filter flex items-center py-2 px-4 rounded-lg border">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.774297 1.8272C0.890363 1.57705 1.14107 1.41699 1.41684 1.41699H15.5835C15.8593 1.41699 16.11 1.57705 16.226 1.8272C16.3421 2.07736 16.3024 2.37214 16.1244 2.58271L10.6252 9.08551V14.8753C10.6252 15.1208 10.4981 15.3488 10.2892 15.4779C10.0804 15.6069 9.81964 15.6187 9.60006 15.5089L6.76673 14.0922C6.52676 13.9722 6.37517 13.727 6.37517 13.4587V9.08551L0.875977 2.58271C0.697904 2.37214 0.658231 2.07736 0.774297 1.8272ZM2.94351 2.83366L7.62437 8.36877C7.7325 8.49664 7.79184 8.65869 7.79184 8.82616V13.0209L9.2085 13.7292V8.82616C9.2085 8.65869 9.26784 8.49664 9.37598 8.36877L14.0568 2.83366H2.94351Z" fill="#64748B" />
        </svg>
        <span className='ml-2 text-lybas-gray'>{t('filter')}</span>
      </button>
      <div className={"absolute z-10 top-12 right-0 bg-white rounded-lg shadow-lybas-1 transition-all origin-top " + (open ? 'scale-y-1' : 'scale-y-0')}>
        {children}
      </div>
    </div>
  );
}

export default Filter;
