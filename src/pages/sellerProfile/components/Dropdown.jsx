import React, { useContext, useState, useRef, useEffect } from 'react';
import { AppContext } from '../../../App';

function useOutsideClickHandler(ref, callback) {
  

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Unbind the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

function Dropdown() {
  const { changeLanguage, lang } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const handleOutsideClick = () => {
    // Handle the outside click here
    setOpen(false);
  };

  useOutsideClickHandler(wrapperRef, handleOutsideClick);

  return (
    <div className='relative' ref={wrapperRef}>
      <button onClick={()=>setOpen(!open)} id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className="text-lybas-gray hover:bg-lybas-light-gray focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">
        {
          lang === 'en' ?
            <svg className='mr-2' width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_700_8514)">
                <path d="M22.7865 0H0V12H22.7865V0Z" fill="#B22234" />
                <path d="M0 1.38462H22.7865H0ZM22.7865 3.23077H0H22.7865ZM0 5.07692H22.7865H0ZM22.7865 6.92308H0H22.7865ZM0 8.76923H22.7865H0ZM22.7865 10.6154H0H22.7865Z" fill="black" />
                <path fillRule="evenodd" clipRule="evenodd" d="M22.7865 1.84615H0V0.923077H22.7865V1.84615ZM0 2.76923H22.7865V3.69231H0V2.76923ZM22.7865 5.53846H0V4.61538H22.7865V5.53846ZM0 6.46154H22.7865V7.38461H0V6.46154ZM22.7865 9.23077H0V8.30769H22.7865V9.23077ZM0 10.1538H22.7865V11.0769H0V10.1538Z" fill="white" />
                <path d="M9.11461 0H0V6.46154H9.11461V0Z" fill="#3C3B6E" />
                <path d="M0.759643 0.276924L0.976543 0.944869L0.408691 0.532056H1.11059L0.542743 0.944869L0.759643 0.276924Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_700_8514">
                  <rect width="22.7865" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg> : ''
        }
        {
          lang === 'ru' ?
            <svg className='mr-2' width="23" height="12" viewBox="0 0 256 158" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
              <rect width="256" height="158" fill="url(#pattern0)" />
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use href="#image0_1110_3" transform="matrix(0.00390625 0 0 0.00632911 0 -0.310127)" />
                </pattern>
                <image id="image0_1110_3" width="256" height="256" href="data:image/png;base64,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" />
              </defs>
            </svg> : ''
        }
        {
          lang === 'tm' ?
            <img src={require('../../../assets/images/turkmen.png')} className='h-3 mr-2' alt="" /> : ''
        }

        {lang === 'en' ? 'English' : ''}
        {lang === 'ru' ? 'Русский' : ''}
        {lang === 'tm' ? 'Türkmençe' : ''}
        <svg className={"w-2.5 h-2.5 ml-2.5 "+(open ? 'rotate-180' : '')} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      <div id="dropdownDivider" className={"z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "+(!open ? 'hidden' :'')}>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
          {
            lang !== 'en' ?
              <li>
                <button onClick={() => { changeLanguage('en') }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-lybas-gray">English</button>
              </li> : ''
          }
          {
            lang !== 'ru' ?
              <li>
                <button onClick={() => { changeLanguage('ru') }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-lybas-gray">Русский</button>
              </li> : ''
          }
          {
            lang !== 'tm' ?
              <li>
                <button onClick={() => { changeLanguage('tm') }} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-lybas-gray">Türkmençe</button>
              </li> : ''
          }
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
