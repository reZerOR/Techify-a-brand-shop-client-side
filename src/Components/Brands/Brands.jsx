import React, { useEffect, useState } from "react";
import Brand from "../Brand/Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="dark:text-black">
      <h2 className="text-5xl dark:text-white font-bold text-center my-10">
        Our{" "}
        <span
          style={{ letterSpacing: "4px" }}
          className="uppercase  text-violet-700"
        >
          Brands
        </span>
      </h2>
      <div className="max-w-7xl mx-auto place-items-center gap-6 my-10 grid grid-cols-1 lg:grid-cols-3">
        {brands.map((item) => (
          <Brand key={item._id} brand={item}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;
