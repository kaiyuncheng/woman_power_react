import bgVideo from '../images/bg_orange_03.png'
import SliderVideo from "./SliderVideo";
import picture from "../images/picture1.jpeg";


const topics = [
  {
    image: picture,
    link:
      "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
    title:
      "1 from data從台灣到矽谷、中東她們推動全球女性職涯發展全球女性職涯發展全球女性職涯發展",
    contents:
      "即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的Arabic創辦人蕭潔蓮，還是大五的學生，為了實踐夢想遠走陌生異鄉。即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的，為了實踐夢想遠走陌生異鄉。",
  },
  {
    image: picture,
    link:
      "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
    title:
      "2從台灣到矽谷、中東她們推動全球女性職涯發展全球女性職涯發展全球女性職涯發展",
    contents:
      "即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的Arabic創辦人蕭潔蓮，還是大五的學生，為了實踐夢想遠走陌生異鄉。即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的，為了實踐夢想遠走陌生異鄉。",
  },
  {
    image: picture,
    link:
      "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
    title:
      "3從台灣到矽谷、中東她們推動全球女性職涯發展全球女性職涯發展全球女性職涯發展",
    contents:
      "即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的Arabic創辦人蕭潔蓮，還是大五的學生，為了實踐夢想遠走陌生異鄉。即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的，為了實踐夢想遠走陌生異鄉。",
  },
];

const VideoSection = () => {

  return (
    <>
      <div
        className="relative section w-full pt-28 pb-20 md:pt-40 md:pb-40 mb-18 bg-small lg:bg-full bg-center-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${bgVideo})` }}
      >

            <div>
              <SliderVideo topics={topics} />
            </div>


        <div className="max-w-screen-2xl mx-auto px-3 lg:px-6">
            
          <div className="sliders flex flex-col items-center">
            
            <div className="title_btns flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
              <button
                type="button"
                className="group border border-primary-dark text-primary-dark bg-secondary-light py-2 px-12 rounded-full hover:text-white hover:bg-primary-dark hover:border-secondary-light active:bg-primary-dark focus:outline-none transition-colors duration-500"
              >
                <span className="font-medium text-lg">靚麗人生提案</span>
              </button>
              <button
                type="button"
                className="group border border-primary-dark text-primary-dark bg-secondary-light py-2 px-12 rounded-full hover:text-white hover:bg-primary-dark hover:border-secondary-light focus:outline-none transition-colors duration-500"
              >
                <span className="font-medium text-lg">城市女力柔光</span>
              </button>
            </div>

            <div className="slider_video relative py-16 lg:px-20 md:px-16 sm:px-14 px-12 mx-auto">
              <div className="navigation">
                <button
                  type="button"
                  className="prev absolute bg-white left-0 top-1/2 transform -translate-y-1/2 group lg:p-4 p-3 rounded-full border border-primary-dark bg-transparent hover:bg-primary-dark focus:outline-none transition-colors duration-500"
                >
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

                <button
                  type="button"
                  className="prev absolute right-0 top-1/2 transform -translate-y-1/2 bg-white group lg:p-4 p-3 rounded-full border border-primary-dark bg-transparent hover:bg-primary-dark focus:outline-none transition-colors duration-500"
                >
                  <svg
                    className="stroke-current text-primary-dark transform rotate-180 transition-all duration-500 translate-x-0 group-hover:text-white group-hover:translate-x-2 lg:group-hover:translate-x-3 lg:w-6 lg:h-6 w-5 h-5"
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
              </div>
              <div className="slider_item flex flex-col space-y-10">
                <div className="slider_text w-full flex flex-col justify-between">
                  <div className="text_group">
                    <h3 className="relative flex items-center text-lg font-medium text-secondary-dark mb-3 leading-relaxed">
                      <span className="inline-block decoration w-1 h-8 mr-3 bg-white"></span>
                      從台灣到矽谷、中東 她們推動全球女性職涯發展
                    </h3>
                    <p className="md:text-base text-sm font-light text-white mb-4 leading-relaxed">
                      即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的，為了實踐夢想遠走陌生異鄉。
                    </p>
                  </div>

                  <button
                    type="button"
                    className="self-end group border border-white text-white inline-flex items-center py-1 px-10 rounded-full hover:text-primary-dark hover:bg-white hover:border-primary-dark focus:outline-none transition-colors duration-500"
                  >
                    <span className="font-medium mr-2">閱讀更多</span>
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
                  </button>
                </div>
                <div className="video_image w-full rounded-2xl overflow-hidden shadow-md">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
