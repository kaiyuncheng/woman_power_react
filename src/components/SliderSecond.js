import Fade from "react-reveal/Fade";

import SliderTop from "./SliderTop";
import bgSlider from "../assets/images/bg_orange_02.png";
import shapeTop from "../assets/images/shape_top_pink.png";

import SliderBottom from "./SliderBottom";
import shapeBottom from "../assets/images/shape_bottom.svg";
import divide from "../assets/images/divide_2.png";

const SliderSecond = ({ title, titleID, topTopics, bottomTopics }) => {
  const isReverse = true;

  return (
    <>
      <div
        id={titleID}
        className="section relative w-full pt-40 pb-24 mb-18 bg-small lg:bg-full bg-right-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${bgSlider})` }}
      >
        <div className="max-w-screen-2xl mx-auto px-3 lg:px-6">
          <div className="title_group flex justify-center">
            <div className="title_image -mt-10 mr-4 h-8 absolute right-1/4">
              <Fade bottom>
                <img
                  className="h-full w-auto object-contain object-left-top"
                  src={title}
                  alt={titleID}
                />
              </Fade>
            </div>
            <div className="direction absolute right-0 w-1/4 h-1 -mt-6 bg-gradient-to-l transition-all duration-500 from-primary-medium to-secondary-dark"></div>
          </div>

          <div className="sliders">
            <Fade bottom>
              <div
                className="slider_top relative py-16 px-0 mx-auto bg-contain bg-center-right bg-no-repeat"
                style={{ backgroundImage: `url(${shapeTop})` }}
              >
                <div className="divide absolute bottom-0 -left-20 sm:-left-80 w-4/5">
                  <img src={divide} alt="divider" />
                </div>
                <SliderTop topics={topTopics} isReverse={isReverse} />
              </div>
            </Fade>

            <Fade bottom>
              <div
                className="slider_bottom relative py-16 px-0 mx-auto"
                style={{
                  background: `right 40px bottom 40px / 300px no-repeat url(${shapeBottom})`,
                }}
              >
                <SliderBottom topics={bottomTopics} isReverse={isReverse} />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderSecond;
