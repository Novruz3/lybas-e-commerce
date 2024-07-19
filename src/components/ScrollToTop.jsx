import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  function scrollToElement(element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if(window.location.hash === '#contacts'){
      const element = document.getElementById("contacts");
      scrollToElement(element);
    }

  }, [pathname,window.location.hash]);

  return null;
}

export default ScrollToTop;
