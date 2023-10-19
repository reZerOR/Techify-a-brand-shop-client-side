import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { brand_name, brand_img } = brand;
  return (
    <Link to={`/brandproduct/${brand_name}`}>
      <div className="card border w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-64" src={brand_img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand_name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Brand;
