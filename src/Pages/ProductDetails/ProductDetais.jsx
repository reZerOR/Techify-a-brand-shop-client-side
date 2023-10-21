import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../Components/Footer/Footer";

const ProductDetais = () => {
  const product = useLoaderData();
  const { name, image, type, price, rating, brand_name, description } = product;
  const curt = { name, image, type, price, rating, brand_name };
  console.log(curt);

  const handleCurt = () => {
    fetch("https://brand-shop-server-one-virid.vercel.app/curt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(curt),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added to the database",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <>
      <div className="flex dark:text-black justify-center my-20">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{name}</h2>
            <p className="font-semibold">{brand_name}</p>
            <p>{description}</p>
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
              <button
                onClick={handleCurt}
                className="btn w-full font-bold btn-primary"
              >
                Add To Curt
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProductDetais;
