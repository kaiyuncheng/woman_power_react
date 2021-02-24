import title from "../images/title_01.png";
import shapeTop from "../images/shape_top.svg";
import shapeBottom from "../images/shape_bottom.svg";
import divide from "../images/divide.png";
import SliderTop from "./SliderTop";
import SliderBottom from "./SliderBottom";


const SliderFirst = ({topTopics, bottomTopics}) => {
  return (
    <>
      <div className="section w-full pt-24 mb-18">
        <div className="relative max-w-screen-2xl mx-auto px-3 lg:px-6">
          <div className="title_group flex justify-center">
            <div className="title_image relative -mt-8 h-8">
              <img
                className="h-full w-auto object-contain object-left-top"
                src={title}
                alt="title"
              />
              <div className="direction absolute bottom-0 -right-14 w-1 h-56 bg-gradient-to-b transition-all duration-500 from-primary-medium to-secondary-dark"></div>
            </div>
          </div>

          <div className="sliders">
            <div
              className="slider_top relative py-16 px-0 mx-auto bg-contain bg-center-right bg-no-repeat"
              style={{ backgroundImage: `url(${shapeTop})` }}
            >
              <div className="absolute bottom-0">
                <img src={divide} alt="" />
              </div>
              <SliderTop topics={topTopics} />
            </div>

            <div
              className="slider_bottom relative py-16 px-0 mx-auto"
              style={{
                background: `left 40px bottom 40px / 300px no-repeat url(${shapeBottom})`,
              }}
            >
             <SliderBottom topics={bottomTopics} />
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderFirst;
