import Slider from "react-slick";
import React, { useState } from "react";
import picture from "../images/picture1.jpeg";

function SamplePrevArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="prev hidden sm:block absolute left-28 z-40 top-1/2 transform -translate-y-1/2 group lg:p-4 p-3 rounded-full border border-primary-dark bg-secondary-bg hover:bg-primary-dark focus:outline-none transition-colors duration-500"
    >
      <span className="animate-ping absolute left-0 top-0 inline-flex h-full w-full rounded-full bg-primary-light opacity-20 "></span>
      <svg
        className="stroke-current text-primary-dark group-hover:text-white transform transition-all duration-500 translate-x-0 group-hover:-translate-x-2 lg:group-hover:-translate-x-3 lg:w-6 lg:h-6 w-5 h-5"
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
  );
}
function SampleNextArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="next hidden sm:block absolute right-28 z-40 top-1/2 transform -translate-y-1/2 group lg:p-4 p-3 rounded-full border border-primary-dark bg-secondary-bg hover:bg-primary-dark focus:outline-none transition-colors duration-500"
    >
      <span className="animate-ping absolute left-0 top-0 inline-flex h-full w-full rounded-full bg-primary-light opacity-20 "></span>
      <svg
        className="stroke-current text-primary-dark group-hover:text-white transform rotate-180 transition-all duration-500 translate-x-0 group-hover:translate-x-2 lg:group-hover:translate-x-3 lg:w-6 lg:h-6 w-5 h-5"
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
  );
}

const SliderVideo = ({ topics, isReverse }) => {
  const [pages, setPages] = useState({ currentSlide: 0 });

  let settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: "500px",
    responsive: [
        {
          breakpoint: 992,
          settings: {
              
            centerMode: true,
            centerPadding: "100px",
          }
        },
        
      ],
    
    slidesToScroll: 1,
    slidesToShow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      // here to detect slide change
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
      <div className="px-0 mx-auto border border-red-500">
        <Slider {...settings}>
          <div className="video_item border border-green-500">
              <div className="video_image rounded-2xl overflow-hidden shadow-md mx-10">
                <iframe
                  title="This is a unique title"
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/i9vuRWa59XI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
          </div>
          <div className="video_item border border-green-500">
              <div className="video_image rounded-2xl overflow-hidden shadow-md mx-10">
                <iframe
                  title="This is a unique title"
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/i9vuRWa59XI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
          </div>
          <div className="video_item border border-green-500">
              <div className="video_image rounded-2xl overflow-hidden shadow-md mx-10">
                <iframe
                  title="This is a unique title"
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/i9vuRWa59XI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
          </div>

          {/* {topics && topics.map((item, i)=>{
            return <div key={`id_${i}`} className="slider_item focus:outline-none px-1">
            <div className={`flex flex-col space-y-4 lg:space-y-0 lg:flex-row ${!isReverse && 'lg:space-x-5'} ${isReverse && 'lg:space-x-0'}`}>
              <div className="slider_image w-full md:h-72 lg:w-1/2 lg:h-auto overflow-hidden">
                <img
                  className="rounded-2xl shadow-md w-full h-full object-cover"
                  src={item.image}
                  alt="section woman"
                />
              </div>
              <div className={`slider_text w-full lg:w-1/2 flex flex-col justify-between ${isReverse && 'lg:pr-4 order-last lg:order-first'}`}>
                <div className="text-group">
                  <h3 className="relative flex text-lg font-medium text-brown-dark mb-3 lg:mb-4 leading-relaxed">
                  <span className="inline-block decoration w-1 h-8 mr-3 bg-secondary-dark"></span>
                  {item.title}
                  </h3>

                  <p className="flex md:text-base text-sm font-light text-brown-dark mb-4 leading-relaxed">
                  <span className="mr-4"></span>
                  {item.contents}</p>
                </div>

                <a href={item.link}
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
          
          })} */}
        </Slider>
      </div>
    </>
  );
};

export default SliderVideo;
