const Product = ({ product }) => {
  const { name, image, type, price, rating, brand_name } = product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{name}</h2>
        <p className="font-semibold">{brand_name}</p>
        <p className="font-medium">
          <span className="font-bold">Type:</span> {type}
        </p>
        <p className="font-medium">
          <span className="font-bold">Price:</span> {price}$
        </p>
        <p className="font-medium">
          <span className="font-bold">Rating:</span> {rating}/5
        </p>
        <div className="card-actions justify-end">
          <button className="btn font-bold w-full btn-info">Details</button>
          <button className="btn w-full font-bold btn-primary">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
