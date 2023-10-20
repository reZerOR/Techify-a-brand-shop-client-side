import { useLoaderData } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import { useEffect, useState } from "react";
import Product from "../../Components/Product/Product";

const BrandProduct = () => {
  const [products, setProducts] = useState([]);

  const sliderImages = useLoaderData();
  useEffect(() => {
    fetch(`http://localhost:5000/products/${sliderImages.brand_name}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <Slider sliderImages={sliderImages}></Slider>
      {products.length !== 0 ? (
        <div className="my-10 grid grid-cols-1 lg:grid-cols-3 gap-6 place-items-center">
          {products.map((item) => (
            <Product key={item._id} product={item}></Product>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-5xl my-20 font-bold text-center">
            Oops sorry! <br /> There is no products to show
          </h2>
        </div>
      )}
    </div>
  );
};

export default BrandProduct;
