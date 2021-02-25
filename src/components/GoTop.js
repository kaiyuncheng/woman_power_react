import React, { useState, useEffect } from 'react';

const GoTop = () => {

  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 200 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]); 

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <>
      <button onClick={scrollToTop}
      type="button"
      className={`${
        top && 'hidden opacity-0'
      } fixed animate-bounce z-50 right-3 bottom-0 group bg-opacity-60 hover:opacity-100 py-5 px-3 rounded-full outline-none border border-primary-dark bg-secondary-bg hover:bg-primary-dark focus:outline-none duration-500`}
    >
      <svg
        className="stroke-current text-primary-dark group-hover:text-white transform rotate-90 transition-translate duration-500 translate-y-0 group-hover:-translate-y-2 w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25.213 25.213"
      >
        <g
          id="Icon_feather-arrow-down-right"
          data-name="Icon feather-arrow-down-right"
          transform="translate(38.063 12.607) rotate(135)"
        >
          <path
            id="Path_69"
            data-name="Path 69"
            d="M10.5,10.5l15,15"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            id="Path_70"
            data-name="Path 70"
            d="M25.5,10.5v15h-15"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </button>
  
    </>
  );
};

export default GoTop;