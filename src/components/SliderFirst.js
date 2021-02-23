import title from '../images/title_04.png';
import shapeTop from '../images/shape_top.svg'
import shapeBottom from '../images/shape_bottom.svg';
import picture from '../images/picture1.jpeg'
import SliderSecond from './SliderSecond';
const SliderFirst = () => {
  return (
    <>
      <div class="section w-full pt-24 mb-18">
        <div class="relative max-w-screen-2xl mx-auto px-3 lg:px-6">
          <div class="sliders flex flex-col items-center">
            <div class="title_image relative -mt-8 h-8">
              <img
                class="h-full w-auto object-contain object-left-top"
                src={title}
                alt=""
              />
              <div class="direction absolute bottom-0 -right-14 w-1 h-56 bg-gradient-to-b transition-all duration-500 from-primary-medium to-secondary-dark"></div>
            </div>
            <SliderSecond />
            <div
              class="slider_top relative py-16 lg:px-20 md:px-16 sm:px-14 px-12 mx-auto bg-contain bg-center-right bg-no-repeat"
              style={{ backgroundImage: `url(${shapeTop})` }}
            >
              <div class="navigation">
                <button
                  type="button"
                  class="prev absolute left-0 top-1/2 transform -translate-y-1/2 group lg:p-4 p-3 rounded-full bg-primary-dark hover:bg-secondary-dark focus:outline-none transition-colors duration-500"
                >
                  <span class="animate-ping absolute left-0 top-0 inline-flex h-full w-full rounded-full bg-primary-dark opacity-50"></span>
                  <svg
                    class="fill-current text-white transform transition-all duration-500 translate-x-0 group-hover:-translate-x-2 lg:group-hover:-translate-x-3 lg:w-6 lg:h-6 w-5 h-5"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <path
                        id="Path_70"
                        data-name="Path 70"
                        d="M25.5,10.5v15h-15"
                        fill="none"
                        stroke="#fbf8f8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </g>
                  </svg>
                </button>

                <button
                  type="button"
                  class="next absolute right-0 top-1/2 transform -translate-y-1/2 group lg:p-4 p-3 rounded-full bg-primary-dark hover:bg-secondary-dark focus:outline-none transition-colors duration-500"
                >
                  <svg
                    class="fill-current text-white transform rotate-180 transition-all duration-500 translate-x-0 group-hover:translate-x-2 lg:group-hover:translate-x-3 lg:w-6 lg:h-6 w-5 h-5"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <path
                        id="Path_70"
                        data-name="Path 70"
                        d="M25.5,10.5v15h-15"
                        fill="none"
                        stroke="#fbf8f8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </g>
                  </svg>
                </button>
              </div>
              <div class="slider_item flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-5">
                <div class="slider_image w-full md:h-72 lg:w-1/2 lg:h-auto overflow-hidden">
                  <img
                    class="rounded-2xl shadow-md w-full h-full object-cover"
                    src={picture}
                    alt="picture"
                  />
                </div>

                <div class="slider_text w-full lg:w-1/2 flex flex-col justify-between">
                  <div class="text-group">
                    <h3 class="text-lg font-medium text-brown-dark mb-3 lg:mb-4 leading-relaxed">
                      從台灣到矽谷、中東
                      她們推動全球女性職涯發展全球女性職涯發展全球女性職涯發展
                    </h3>
                    <p class="md:text-base text-sm font-light text-brown-dark mb-4 leading-relaxed">
                      即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的17
                      Arabic創辦人蕭潔蓮，還是大五的學生，為了實踐夢想遠走陌生異鄉。即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的，為了實踐夢想遠走陌生異鄉。
                    </p>
                  </div>

                  <button
                    type="button"
                    class="self-end group border border-primary-dark text-primary-dark inline-flex items-center bg-white py-1 px-10 rounded-full hover:text-white hover:bg-primary-dark focus:outline-none transition-colors duration-500"
                  >
                    <span class="font-medium mr-2">閱讀更多</span>
                    <svg
                      class="fill-current text-transparent stroke-1 transform -rotate-90 transition-all duration-500 translate-x-0 group-hover:translate-x-4 group-hover:stroke-0 group-hover:text-white"
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
                  </button>
                </div>
              </div>

              <div class="absolute bottom-0">
                <img src="./images/divide.png" alt="" />
              </div>
            </div>

            <div
              class="slider_bottom relative py-16 lg:px-20 md:px-16 sm:px-14 px-12 mx-auto"
              style={{
                background: `left 40px bottom 40px / 300px no-repeat url(${shapeBottom})`,
              }}
            >
              <div class="navigation">
                <button
                  type="button"
                  class="prev absolute bg-white left-0 top-1/2 transform -translate-y-1/2 group lg:p-4 p-3 rounded-full border border-secondary-dark bg-transparent hover:bg-secondary-dark focus:outline-none transition-colors duration-500"
                >
                  <svg
                    class="stroke-current text-secondary-dark group-hover:text-white transform transition-all duration-500 translate-x-0 group-hover:-translate-x-2 lg:group-hover:-translate-x-3 lg:w-6 lg:h-6 w-5 h-5"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <path
                        id="Path_70"
                        data-name="Path 70"
                        d="M25.5,10.5v15h-15"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </g>
                  </svg>
                </button>

                <button
                  type="button"
                  class="prev absolute bg-white right-0 top-1/2 transform -translate-y-1/2 group lg:p-4 p-3 rounded-full border border-secondary-dark bg-transparent hover:bg-secondary-dark focus:outline-none transition-colors duration-500"
                >
                  <svg
                    class="stroke-current text-secondary-dark transform rotate-180 transition-all duration-500 translate-x-0 group-hover:text-white group-hover:translate-x-2 lg:group-hover:translate-x-3 lg:w-6 lg:h-6 w-5 h-5"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <path
                        id="Path_70"
                        data-name="Path 70"
                        d="M25.5,10.5v15h-15"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </g>
                  </svg>
                </button>
              </div>
              <div class="slider_item flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
                <div class="slider_text w-full lg:w-2/3 flex flex-col justify-between">
                  <div class="text_group mt-5">
                    <h3 class="relative flex items-center text-lg font-medium text-brown-dark mb-3 lg:mb-4 leading-relaxed">
                      <span class="inline-block decoration w-1 h-8 mr-3 bg-secondary-dark"></span>
                      從台灣到矽谷、中東 她們推動全球女性職涯發展
                    </h3>
                    <p class="md:text-base text-sm font-light text-brown-dark mb-4 leading-relaxed">
                      即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的，為了實踐夢想遠走陌生異鄉。
                    </p>
                  </div>

                  <button
                    type="button"
                    class="self-end group border border-primary-dark text-primary-dark inline-flex items-center bg-white py-1 px-10 rounded-full hover:text-white hover:bg-primary-dark focus:outline-none transition-colors duration-500"
                  >
                    <span class="font-medium mr-2">閱讀更多</span>
                    <svg
                      class="fill-current text-transparent stroke-1 transform -rotate-90 transition-all duration-500 translate-x-0 group-hover:translate-x-4 group-hover:stroke-0 group-hover:text-white"
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
                  </button>
                </div>
                <div class="slider_image w-full md:h-72 lg:w-1/3 lg:h-auto order-first lg:order-last">
                  <img
                    class="rounded-2xl shadow-md w-full h-full object-cover"
                    src={picture}
                    alt="picture"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderFirst;
