import Swal from "sweetalert2";
import Footer from "../../Components/Footer/Footer";

const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand_name = form.brand_name.value;
    const type = form.type.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const price = form.price.value;
    const newProduct = {
      name,
      brand_name,
      image,
      type,
      rating,
      price,
      description,
    };
    console.log(newProduct);

    fetch("https://brand-shop-server-one-virid.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
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
      <div className="bg-[#f4f3f0] dark:text-black max-w-7xl mx-auto p-24">
        <h2 className="font-bold text-3xl">Add Poduct</h2>
        <form onSubmit={handleSubmit} className="space-y-6 ">
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
                  placeholder="Image"
                  className="input w-full"
                />
              </label>
            </div>
          </div>
          {/* description */}
          <div className="gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <textarea
                  className="w-full"
                  name="description"
                  placeholder="Description"
                  id=""
                  cols="10"
                  rows="5"
                ></textarea>
              </label>
            </div>
          </div>
          <input
            className="font-medium cursor-pointer w-full py-2 bg-[#D2B48C] text-xl border-2 border-black rounded-xl"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>

      <Footer></Footer>
    </>
  );
};

export default AddProduct;
