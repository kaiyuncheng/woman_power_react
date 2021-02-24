import bgHero from '../images/bg_orange_01.png';
import HeroAnimation from './HeroAnimation';


const Hero = () => (
  <>
    <div
      className="section hero w-full -mt-20 pt-20 md:pt-20 lg:pt-20 overflow-hidden bg-right-bottom bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <div className="relative w-full h-full max-w-screen-2xl mx-auto px-3 lg:px-6 flex flex-col justify-center items-center">
        <HeroAnimation />

        <div className="btn mb-14">
          <button
            type="button"
            className="animate-bounce scroll_btn relative group text-brown-dark inline-flex items-center hover:text-primary-dark focus:outline-none"
          >
            <span className="font-semibold italic mr-4 transform translate-y-0 transition-all duration-500 group-hover:translate-y-2">
              SCROLL DOWN
            </span>
            <svg
              className="fill-current text-transparent stroke-1 transform transition-all duration-500 translate-y-0 group-hover:translate-y-4 group-hover:stroke-0 group-hover:text-primary-dark"
              xmlns="http://www.w3.org/2000/svg"
              width="23.493"
              height="15.527"
              viewBox="0 0 23.493 15.527"
            >
              <path
                id="Icon_awesome-angle-down"
                data-name="Icon awesome-angle-down"
                stroke="#4C4948"
                d="M10.055,24.771.492,15.209a1.681,1.681,0,0,1,0-2.384l1.589-1.589a1.681,1.681,0,0,1,2.384,0l6.778,6.778,6.778-6.778a1.681,1.681,0,0,1,2.384,0l1.589,1.589a1.681,1.681,0,0,1,0,2.384l-9.562,9.562a1.672,1.672,0,0,1-2.377,0Z"
                transform="translate(0.503 -10.24)"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </>
);

export default Hero;
