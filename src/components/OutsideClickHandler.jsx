import React, { useRef, useEffect } from 'react';

const OutsideClickHandler = ({ children, onOutsideClick }) => {
  const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      // onOutsideClick();
    }
  };

  useEffect(() => {
    // Attach the event listener on mount
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideClickHandler;