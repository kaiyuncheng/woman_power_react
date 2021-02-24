import bgSlider from '../images/bg_orange_02.png'
import title from "../images/title_01.png";
import shapeTop from "../images/shape_top_pink.png";
import shapeBottom from "../images/shape_bottom.svg";
import divide from "../images/divide_2.png";
import SliderTop from "./SliderTop";
import SliderBottom from "./SliderBottom";

const SliderSecond = ({topTopics, bottomTopics}) => {
  const isReverse = true;

  return (
    <>
      <div className="section relative w-full pt-40 pb-24 mb-18 bg-small lg:bg-full bg-right-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${bgSlider})` }}
      >
        <div className="max-w-screen-2xl mx-auto px-3 lg:px-6">
          <div className="title_group flex justify-center">
          <div className="title_image -mt-9 mr-4 h-8 absolute right-1/4 mr-4">
              <img
                className="h-full w-auto object-contain object-left-top"
                src={title}
                alt="title"
              />
            </div>
            <div
              className="direction absolute right-0 w-1/4 h-1 -mt-6 bg-gradient-to-l transition-all duration-500 from-primary-medium to-secondary-dark"
            ></div>
          </div>

          <div className="sliders">
            <div
              className="slider_top relative py-16 px-0 mx-auto bg-contain bg-center-right bg-no-repeat"
              style={{ backgroundImage: `url(${shapeTop})` }}
            >
              <div className="divide absolute bottom-0 -left-20 sm:-left-80 w-4/5">
                <img src={divide} alt="" />
              </div>
              <SliderTop topics={topTopics} isReverse={isReverse} />
            </div>

            <div
              className="slider_bottom relative py-16 px-0 mx-auto"
              style={{
                background: `right 40px bottom 40px / 300px no-repeat url(${shapeBottom})`,
              }}
            >
             <SliderBottom topics={bottomTopics} isReverse={isReverse} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderSecond;
