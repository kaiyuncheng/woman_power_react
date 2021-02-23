import banner from '../images/banner_970x250.jpg'
const Banner = () => {
  return (
    <>
      <div class="relative section w-full py-10 md:py-20 mb-18">
        <div class="max-w-screen-2xl mx-auto px-3 lg:px-6 flex justify-center">
          <div class="banner w-4/5 shadow-md">
            <img class="w-full" src={banner} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
