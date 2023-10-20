import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../Components/Footer/Footer";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, name, image, type, price, rating, brand_name } = product;
  console.log(product);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand_name = form.brand_name.value;
    const type = form.type.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const updateProduct = {
      name,
      brand_name,
      image,
      type,
      rating,
      price,
    };
    console.log(updateProduct);

    fetch(`http://localhost:5000/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated to the database",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <>
      <div className="bg-[#f4f3f0] max-w-7xl mx-auto p-24">
        <h2 className="font-bold text-3xl">Update Poduct</h2>
        <form onSubmit={handleUpdate} className="space-y-6 ">
          {/*name and brand name*/}
          <div className="md:flex gap-4">
            <div className="form-control  md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  defaultValue={name}
                  className="input w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="brand_name"
                  placeholder="Brand Name"
                  defaultValue={brand_name}
                  className="input  w-full"
                />
              </label>
            </div>
          </div>
          {/* type and rating*/}
          <div className="md:flex gap-4">
            <div className="form-control  md:w-1/2">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="type"
                  placeholder="Type"
                  defaultValue={type}
                  className="input w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  defaultValue={rating}
                  className="input  w-full"
                />
              </label>
            </div>
          </div>
          {/* price and image*/}
          <div className="md:flex gap-4">
            <div className="form-control  md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  defaultValue={price}
                  className="input w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="image"
                  defaultValue={image}
                  placeholder="Image"
                  className="input w-full"
                />
              </label>
            </div>
          </div>

          <input
            className="font-medium cursor-pointer w-full py-2 bg-[#D2B48C] text-xl border-2 border-black rounded-xl"
            type="submit"
            value="Update Product"
          />
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default UpdateProduct;
