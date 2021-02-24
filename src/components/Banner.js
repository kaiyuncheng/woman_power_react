import banner from '../images/banner_970x250.jpg'
const Banner = () => {
  return (
    <>
      <div className="relative section w-full py-10 md:py-20 mb-18">
        <div className="max-w-screen-2xl mx-auto px-3 lg:px-6 flex justify-center">
          <div className="banner w-4/5 shadow-md">
            <img className="w-full" src={banner} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
