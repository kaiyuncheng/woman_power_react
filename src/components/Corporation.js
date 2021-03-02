import Fade from "react-reveal/Fade";
import logo from '../assets/images/co_logo01.png';
import title from '../assets/images/title_04.png'
const Corporation = () => {
  return (
    <>
      <div id="合作夥伴" className="relative section w-full pt-24 mb-18">
      
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

          <div className="direction absolute left-0 w-1/4 h-1 -mt-6 bg-gradient-to-l transition-all duration-500 from-primary-medium to-secondary-dark"></div>
          <Fade bottom>
          <div className="logo_group flex justify-between flex-wrap mx-3 my-20 lg:m-20">
            <div className="co_logo w-1/2 md:w-1/4 p-4 sm:p-8">
              <img className="w-full" src={logo} alt="" />
            </div>
            <div className="co_logo w-1/2 md:w-1/4 p-4 sm:p-8">
              <img className="w-full" src={logo} alt="" />
            </div>
            <div className="co_logo w-1/2 md:w-1/4 p-4 sm:p-8">
              <img className="w-full" src={logo} alt="" />
            </div>
            <div className="co_logo w-1/2 md:w-1/4 p-4 sm:p-8">
              <img className="w-full" src={logo} alt="" />
            </div>
            <div className="co_logo w-1/2 md:w-1/4 p-4 sm:p-8">
              <img className="w-full" src={logo} alt="" />
            </div>
            <div className="co_logo w-1/2 md:w-1/4 p-4 sm:p-8">
              <img className="w-full" src={logo} alt="" />
            </div>
            <div className="co_logo w-1/2 md:w-1/4 p-4 sm:p-8">
              <img className="w-full" src={logo} alt="" />
            </div>
            <div className="co_logo w-1/2 md:w-1/4 p-4 sm:p-8">
              <img className="w-full" src={logo} alt="" />
            </div>
          </div>
          </Fade>        
        </div>
      </div>
    </>
  );
};

export default Corporation;
