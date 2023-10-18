import banner from "../../assets/blurry-gradient-haikei.png";
import sideimg from "../../assets/mobile-testing-flatline.png";

const Banner = () => {
  return (
    <div
      className="bg-cover py-52"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col">
            <h1 className="mb-5 text-5xl text-black text-center lg:text-left font-bold leading-[60px]">
              Empowering Your <span className="text-white">Digital World.</span>
            </h1>
            <p className="max-w-md text-center mx-auto lg:mx-0 lg:text-left font-medium mb-5 leading-8">
              Discover cutting-edge technology and gadgets at our one-stop tech
              haven. From smartphones to laptops, smart home solutions to gaming
              gear, we've got your tech needs covered. Explore the future, one
              device at a time.
            </p>
          </div>
          <div>
            <img className="w-full md:max-w-xl" src={sideimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
