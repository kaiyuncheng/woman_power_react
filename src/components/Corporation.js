import logo from '../images/co_logo01.png';
import title from '../images/title_04.png'
const Corporation = () => {
  return (
    <>
      <div class="relative section w-full pt-24 mb-18">
        <div class="max-w-screen-2xl mx-auto px-3 lg:px-6 flex flex-col">
          <div class="title_image -mt-9 mr-4 h-8 absolute left-1/4 ml-4">
            <img
              class="h-full w-auto object-contain object-left-top"
              src={title}
              alt=""
            />
          </div>

          <div class="direction absolute left-0 w-1/4 h-1 -mt-6 bg-gradient-to-l transition-all duration-500 from-primary-medium to-secondary-dark"></div>

          <div class="logo_group flex justify-between flex-wrap mx-3 my-20 lg:m-20">
            <div class="co_logo w-1/2 md:w-1/4 p-4 sm:p-8">
              <img class="w-full" src={logo} alt="" />
            </div>
            <div class="co_logo w-1/2 md:w-1/4 p-4 sm:p-8">
              <img class="w-full" src={logo} alt="" />
            </div>
            <div class="co_logo w-1/2 md:w-1/4 p-4 sm:p-8">
              <img class="w-full" src={logo} alt="" />
            </div>
            <div class="co_logo w-1/2 md:w-1/4 p-4 sm:p-8">
              <img class="w-full" src={logo} alt="" />
            </div>
            <div class="co_logo w-1/2 md:w-1/4 p-4 sm:p-8">
              <img class="w-full" src={logo} alt="" />
            </div>
            <div class="co_logo w-1/2 md:w-1/4 p-4 sm:p-8">
              <img class="w-full" src={logo} alt="" />
            </div>
            <div class="co_logo w-1/2 md:w-1/4 p-4 sm:p-8">
              <img class="w-full" src={logo} alt="" />
            </div>
            <div class="co_logo w-1/2 md:w-1/4 p-4 sm:p-8">
              <img class="w-full" src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Corporation;
