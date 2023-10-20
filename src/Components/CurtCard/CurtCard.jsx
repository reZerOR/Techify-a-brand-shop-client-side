import Swal from "sweetalert2";

const CurtCard = ({ curt, curts, setCurts }) => {
  const { _id, name, image, type, price, rating, brand_name } = curt;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // DELETE FROM DATABASE
        fetch(`http://localhost:5000/curt/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = curts.filter((item) => item._id !== id);
              setCurts(remaining);
            }
          });
      }
    });
  };
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
          <button
            onClick={() => handleDelete(_id)}
            className="btn font-bold w-full btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurtCard;
