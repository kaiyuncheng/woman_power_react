
import heroBgLg from "../../images/hero_big_title_lg.png";
import heroBgMd from "../../images/hero_big_title_md.png";
import heroBgSm from "../../images/hero_big_title_sm.png";

const HeroAnimation = () => (
  <>
      <div className="hero_animation2 relative w-full h-full flex justify-center items-center">
          <div className="flex justify-center items-center">
            <div className="relative title h-full w-full">
              <img
                className="hidden sm:hidden md:hidden lg:block h-full w-full object-contain"
                src={heroBgLg}
                alt="Hero Background position large"
              />
              <img
                  className="hidden sm:hidden md:block lg:hidden h-full w-full object-contain"
                  src={heroBgMd}
                  alt=""
                />
                <img
                  className="block sm:block md:hidden lg:hidden h-full w-full object-contain"
                  src={heroBgSm}
                  alt=""
                />

            </div>
          </div>
        </div>

  </>
);

export default HeroAnimation;