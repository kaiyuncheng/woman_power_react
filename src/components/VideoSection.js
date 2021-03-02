import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import bgVideo from "../assets/images/bg_orange_03.png";
import videoImage from "../assets/images/video_dreamsbrows.jpg"
// import SliderVideo from "./SliderVideo";

const topicsVideo = [
  {
    name: "靚麗人生提案",
    topics: [
      {
        title:
          "以「DREAM’S BROWS」為名，美麗要從「頭」開始",
        contents:
          "Cherry老師專精紋繡多年，技藝精湛，並專精皮膚管理，頭皮點藝等等多項技術！讓你享受蛻變後的美麗！想紋繡的你，擔心找不到好的老師嗎？來到Dream’s Brows你會發現原來夢想距離你這麼近！",
        video: "https://www.youtube.com/embed/MlQQR9wsxeY",
        link: "http://dreamsbrows.com/",
      },
      {
        title: "2靚麗人生提案影音標題二、中東她們推動全球女性職涯發展",
        contents:
          "B即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的，為了實踐夢想遠走陌生異鄉。",
        video: "https://www.youtube.com/embed/i9vuRWa59XI",
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
      },
      {
        title: "3靚麗人生提案影音標提三、中東她們推動全球女性職涯發展",
        contents:
          "C即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的，為了實踐夢想遠走陌生異鄉。",
        video: "https://www.youtube.com/embed/2aAt7rpzWUo",
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
      },
    ],
  },
  {
    name: "城市女力柔光",
    topics: [
      {
        title: "L1城市女力柔光從台灣到矽谷、中東她們推動全球女性職涯發展",
        contents:
          "1即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的，為了實踐夢想遠走陌生異鄉。",
        video: "https://www.youtube.com/embed/2aAt7rpzWUo",
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
      },
      {
        title: "L2城市女力柔光從台灣到矽谷、中東她們推動全球女性職涯發展",
        contents:
          "2即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的，為了實踐夢想遠走陌生異鄉。",
        video: "https://www.youtube.com/embed/2aAt7rpzWUo",
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
      },
      {
        title: "L3城市女力柔光從台灣到矽谷、中東她們推動全球女性職涯發展",
        contents:
          "3即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的，為了實踐夢想遠走陌生異鄉。",
        video: "https://www.youtube.com/embed/2aAt7rpzWUo",
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
      },
    ],
  },
];

const VideoSection = () => {
  const [data, setData] = useState(topicsVideo[0].topics);
  const [topic, setTopic] = useState(data[0]);
  const [isActive, setIsActive] = useState(true);

  const handleData = (i) => () => {
    if (i === 0) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    setData(topicsVideo[i].topics);
  };

  return (
    <>
      <div id="靚麗人生提案"
        className="relative section w-full pt-28 pb-20 md:pt-40 md:pb-40 mb-18 bg-small lg:bg-full bg-center-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${bgVideo})` }}
      >
        <Fade bottom>
          <div className="max-w-screen-2xl mx-auto px-3 lg:px-6">
            <div className="sliders flex flex-col items-center">
              <div className="title_buttons flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
                <button
                  onClick={handleData(0)}
                  type="button"
                  className={`group border ${
                    !isActive &&
                    "bg-secondary-light text-primary-dark border-primary-dark"
                  } ${
                    isActive &&
                    "bg-primary-dark text-white border-secondary-light shadow-lg"
                  } py-2 px-12 rounded-full hover:text-white hover:bg-primary-dark hover:border-secondary-light focus:outline-none transition-colors duration-500`}
                >
                  <span className="font-medium text-lg">靚麗人生提案</span>
                </button>
                <button
                  onClick={handleData(1)}
                  type="button"
                  className={`group border ${
                    isActive &&
                    "bg-secondary-light text-primary-dark border-primary-dark"
                  } ${
                    !isActive &&
                    "bg-primary-dark text-white border-secondary-light shadow-lg"
                  } py-2 px-12 rounded-full hover:text-white hover:bg-primary-dark hover:border-secondary-light focus:outline-none transition-colors duration-500`}
                >
                  <span className="font-medium text-lg">城市女力柔光</span>
                </button>
              </div>

              <div className="relative py-16 lg:px-20 md:px-16 sm:px-14 px-2 mx-auto">
                <div className="slider_text w-full flex flex-col justify-between mb-20">
                  <div className="text_group">
                    <h3 className="relative flex items-center text-lg font-medium text-secondary-dark mb-3 leading-relaxed">
                      <span className="inline-block decoration w-1 h-8 mr-3 bg-white"></span>
                      {topic.title}
                    </h3>
                    <p className="md:text-base text-sm font-light text-white mb-4 leading-relaxed">
                      {topic.contents}
                    </p>
                  </div>
                  <a
                    href={topic.link}
                    className="self-end cursor-pointer group border border-white text-white inline-flex items-center py-1 px-10 rounded-full hover:text-primary-dark hover:bg-white hover:border-primary-dark focus:outline-none transition-colors duration-500"
                  >
                    <span className="font-medium mr-2">前往了解</span>
                    <svg
                      className="fill-current text-transparent stroke-1 transform -rotate-90 transition-all duration-500 translate-x-0 group-hover:translate-x-4 group-hover:stroke-0 group-hover:text-primary-dark"
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 23.493 15.527"
                    >
                      <path
                        id="Icon_awesome-angle-down"
                        data-name="Icon awesome-angle-down"
                        stroke="#FFFFFF"
                        d="M10.055,24.771.492,15.209a1.681,1.681,0,0,1,0-2.384l1.589-1.589a1.681,1.681,0,0,1,2.384,0l6.778,6.778,6.778-6.778a1.681,1.681,0,0,1,2.384,0l1.589,1.589a1.681,1.681,0,0,1,0,2.384l-9.562,9.562a1.672,1.672,0,0,1-2.377,0Z"
                        transform="translate(0.503 -10.24)"
                      />
                    </svg>
                  </a>
                </div>

                <div
                  class="video_image w-full rounded-2xl overflow-hidden shadow-md"
                >
                  <img src={videoImage} alt="Dream’s Brows 職人手工美學" class="w-full block"/>
                </div>
                
              
              </div>
            </div>
          </div>

          {/* <div className="relative max-w-screen-2xl mx-auto pt-1">
            <SliderVideo data={data} setTopic={setTopic} />
            <div className="2xl:block hidden overflow-hidden bg-gradient-to-b from-transparent via-secondary-medium h-full w-1 transform scale-y-110 absolute top-0 -left-1"></div>
            <div className="2xl:block hidden overflow-hidden bg-gradient-to-b from-transparent via-secondary-medium h-full w-1 transform scale-y-110 absolute top-0 -right-1"></div>
          </div> */}
        </Fade>
      </div>
    </>
  );
};

export default VideoSection;
