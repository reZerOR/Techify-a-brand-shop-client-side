import { useLoaderData } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";

const BrandProduct = () => {
  const sliderImages = useLoaderData();
  console.log(sliderImages);
  return (
    <div className="max-w-7xl mx-auto">
      <Slider sliderImages={sliderImages}></Slider>
    </div>
  );
};

export default BrandProduct;
