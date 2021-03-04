import Fade from "react-reveal/Fade";
import logo from '../assets/images/dreamsbrows_logo.png';
import title from '../assets/images/title_04.png'
const Corporation = () => {
  return (
    <>
      <div id="合作夥伴" className="relative section w-full pt-40 mb-10">
        <div className="max-w-screen-2xl mx-auto px-3 lg:px-6 flex flex-col">
          <div className="title_image -mt-9 mr-4 h-8 absolute left-1/4 ml-4">
            <Fade bottom>
            <img
              className="h-full w-auto object-contain object-left-top"
              src={title}
              alt="合作夥伴"
            />
            </Fade>
          </div>

          <div className="direction absolute left-0 w-1/4 h-1 -mt-6 bg-gradient-to-l from-primary-medium to-secondary-dark"></div>
          <Fade bottom>
          <div className="logo_group flex justify-center flex-wrap mx-3 my-20 sm:my-32 lg:mx-20 lg:my-28">
            <a href="https://dreamsbrows.com/" className="co_logo w-full sm:w-2/3 md:w-1/3 px-6 pb-10 pt-8 sm:px-8 sm:pb-8 sm:pt-6 rounded-xl transition-all duration-300  hover:shadow-inner hover:bg-primary-light">
              <img className="w-full" src={logo} alt="DREAM’S BROWS logo" />
            </a>
             </div>
          </Fade>        
        </div>
      </div>
    </>
  );
};

export default Corporation;
