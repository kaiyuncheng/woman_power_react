import Slider from "react-slick";
import React, { useState, useEffect } from "react";

function SamplePrevArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="prev block absolute left-2 md:left-20 lg:left-24 xl:left-28 z-40 top-1/2 transform -translate-y-1/2 group lg:p-4 p-3 rounded-full border border-primary-dark bg-secondary-bg hover:bg-primary-dark focus:outline-none transition-colors duration-500"
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
      className="next block absolute right-2 md:right-20 lg:right-24 xl:right-28 z-40 top-1/2 transform -translate-y-1/2 group lg:p-4 p-3 rounded-full border border-primary-dark bg-secondary-bg hover:bg-primary-dark focus:outline-none transition-colors duration-500"
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

const SliderVideo = ({ data, setTopic }) => {
  const [pages, setPages] = useState({ currentSlide: 0 });

  useEffect(() => {
    setTopic(data[pages.currentSlide]);
  });


  let settingsMobile = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: "20px",
    slidesToScroll: 1,
    slidesToShow: 1,
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

  let settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: "100px",
    slidesToScroll: 1,
    slidesToShow: 1,
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
      <div className="block sm:hidden px-0 mx-auto">
        <Slider {...settingsMobile}>
        {data && data.map((item, i)=>{
        return <div key={`id_${i}`} className="video_item focus:outline-none">
        <div className="video_image rounded-2xl overflow-hidden shadow-md mx-1 sm:mx-2 md:mx-5 lg:mx-8 2xl:mx-10">
              <iframe
                title="This is a unique title"
                className="w-full h-full"
                src={item.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        })}
        </Slider>
      </div>

      <div className="hidden sm:block px-0 mx-auto">
        
        
        <Slider {...settings}>

        {data && data.map((item, i)=>{
        return <div key={`id_${i}`} className="video_item focus:outline-none">
             <div className="video_image rounded-2xl overflow-hidden shadow-md sm:mx-2 md:mx-3 lg:mx-8">
              <iframe
                title="This is a unique title"
                className="w-full h-full"
                src={item.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        })}
       </Slider>
      </div>
    </>
  );
};

export default SliderVideo;
