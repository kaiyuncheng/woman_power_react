import Slider from "react-slick";
import React, { useState } from "react";

function SamplePrevArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="prev block absolute left-0 top-32 z-30 sm:-left-16 sm:top-1/2 transform sm:-translate-y-1/2 group lg:p-4 p-3 rounded-full bg-primary-dark hover:bg-secondary-dark focus:outline-none transition-colors duration-500"
    >
      <span className="animate-ping absolute left-0 top-0 inline-flex h-full w-full rounded-full bg-primary-dark opacity-50"></span>
      <svg
        className="fill-current text-white transform transition-all duration-500 translate-x-0 group-hover:-translate-x-2 lg:group-hover:-translate-x-3 lg:w-6 lg:h-6 w-5 h-5"
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
            stroke="#fbf8f8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            id="Path_70"
            data-name="Path 70"
            d="M25.5,10.5v15h-15"
            fill="none"
            stroke="#fbf8f8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </button>
  );
}
function SampleNextArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="next block absolute right-0 top-32 z-30 sm:-right-16 sm:top-1/2 transform sm:-translate-y-1/2 group lg:p-4 p-3 rounded-full bg-primary-dark hover:bg-secondary-dark focus:outline-none transition-colors duration-500"
    >
      <span className="animate-ping absolute left-0 top-0 inline-flex h-full w-full rounded-full bg-primary-dark opacity-50"></span>
      <svg
        className="fill-current text-white transform rotate-180 transition-all duration-500 translate-x-0 group-hover:translate-x-2 lg:group-hover:translate-x-3 lg:w-6 lg:h-6 w-5 h-5"
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
            stroke="#fbf8f8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            id="Path_70"
            data-name="Path 70"
            d="M25.5,10.5v15h-15"
            fill="none"
            stroke="#fbf8f8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </button>
  );
}

const SliderTop = ({ topics, isReverse }) => {
  const [pages, setPages] = useState({ currentSlide: 0 });

  let settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setPages({ currentSlide: next });
    },
    customPaging: (i) => {
      return (
        <div
          className={`${
            i === pages.currentSlide ? "bg-primary-dark" : "bg-primary-light"
          } h-3 w-3 mx-2 my-4 border border-primary-dark rounded-full hover:bg-primary-dark`}
        ></div>
      );
    },
  };

  return (
    <>
      <div className="px-0 sm:px-16 mx-auto">
        <Slider {...settings}>
          {topics &&
            topics.map((item, i) => {
              return (
                <div
                  key={`id_${i}`}
                  className="slider_item focus:outline-none px-1"
                >
                  <div
                    className={`flex flex-col space-y-4 lg:space-y-0 lg:flex-row ${
                      !isReverse && "lg:space-x-5"
                    } ${isReverse && "lg:space-x-0"}`}
                  >
                    <div className="slider_image w-full h-72 md:h-96 lg:w-1/2 lg:h-auto overflow-hidden">
                      <img
                        className="block rounded-2xl shadow-md w-full h-full object-cover"
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                    <div
                      className={`slider_text w-full lg:w-1/2 flex flex-col justify-between ${
                        isReverse && "lg:pr-4 order-last lg:order-first"
                      }`}
                    >
                      <div className="text-group">
                        <h3 className="relative flex text-xl md:text-1xl font-bold text-brown-dark mb-3 lg:mb-4 leading-relaxed">
                          <span className="inline-block decoration w-1 h-8 mr-3 bg-secondary-dark"></span>
                          {item.title}
                        </h3>

                        {item.contents && item.contents.map((content, i) => {
                          return(<p key={`content${i}`} className="flex text-md font-normal text-brown-dark mb-4 ">
                          <span className="mr-4"></span>
                          {content}
                        </p>);
                        })}
                      </div>

                      <a
                        href={item.link} target="_blank" rel="noreferrer"
                        className="self-end group border border-primary-dark text-primary-dark inline-flex items-center bg-white py-1 px-10 rounded-full hover:text-white hover:bg-primary-dark focus:outline-none transition-colors duration-500"
                      >
                        <span className="font-medium mr-2">閱讀更多</span>
                        <svg
                          className="fill-current text-transparent stroke-1 transform -rotate-90 transition-all duration-500 translate-x-0 group-hover:translate-x-4 group-hover:stroke-0 group-hover:text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 23.493 15.527"
                        >
                          <path
                            id="Icon_awesome-angle-down"
                            data-name="Icon awesome-angle-down"
                            stroke="#FF398D"
                            d="M10.055,24.771.492,15.209a1.681,1.681,0,0,1,0-2.384l1.589-1.589a1.681,1.681,0,0,1,2.384,0l6.778,6.778,6.778-6.778a1.681,1.681,0,0,1,2.384,0l1.589,1.589a1.681,1.681,0,0,1,0,2.384l-9.562,9.562a1.672,1.672,0,0,1-2.377,0Z"
                            transform="translate(0.503 -10.24)"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </>
  );
};

export default SliderTop;
