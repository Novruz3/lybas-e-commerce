import { t } from 'i18next';
import React, { useEffect } from 'react';

function MobileSlide({ children, open, setOpen, title }) {
  return (
    <>
      <div onClick={() => setOpen(false)} className={"mobile-slide_background fixed md:hidden z-[14] left-0 top-0 w-full bg-black transition-opacity " + (open ? 'opacity-50 h-full' : 'opacity-0 h-0')}></div>
      <div className={"mobile-slide_foreground fixed md:hidden z-[14] left-0 bottom-0 rounded-t-lg w-full bg-white transition-all " + (open ? 'h-[90vh]' : 'h-0')}>
        <button onClick={() => setOpen(false)} className="mobile-slide_foreground_gray-line block w-full py-4">
          <div className='w-10 h-1 mx-auto bg-lybas-gray rounded-full'></div>
        </button>
        <div className="mobile-slide_header flex justify-between items-center px-5">
          <div className='w-[24px]'></div>
          <div className='font-semibold text-lg'>{t(title)}</div>
          <button onClick={() => setOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="#0B1527" />
            </svg>
          </button>
        </div>
        <div className='slide-scroll overflow-auto h-[80vh]'>
          {children}
        </div>
      </div>
    </>
  );
}

export default MobileSlide;
