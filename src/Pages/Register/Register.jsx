import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Provider/Provider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, googleLogin, setUser } = useContext(authContext);
  const [passerror, setPasserror] = useState("");
  const navigate = useNavigate();

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Coffee added to the database",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const specialCharRegex = /(?=.*[-#$.%&@!+=<>*])/;
    setPasserror("");

    if (password.length < 6) {
      setPasserror("Password should be 6 or more character long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasserror("Password should have a capital letter");
      return;
    } else if (!specialCharRegex.test(password)) {
      setPasserror("Password should have a spacial character");
      return;
    }

    // createUser(email, password, displayName).then(() => {
    //   swal("Good job!", "Successfully Logged In", "success");
    //   Navigate("/");
    // });

    createUser(email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: name,
        })
          .then(() => {
            setUser(res.user);
          })
          .catch();

        Swal.fire({
          title: "Success!",
          text: "Coffee added to the database",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/");

        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen">
      <div className="mt-28 bg-white text-black shadow-xl max-w-xl mx-auto rounded-xl">
        <h2 className="text-5xl text-center font-bold pt-10">
          Please Register!
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control mt-6">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            {passerror && <p className="text-red-600">{passerror}</p>}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Register</button>
          </div>
          <h2 className="mt-4">
            Already have an account?{" "}
            <Link to={"/login"} className="text-primary font-medium">
              Login
            </Link>
          </h2>
        </form>
        <div className="flex flex-col items-center -mt-4">
          <h2 className="divider mb-2">or</h2>
          <button
            onClick={handleGoogle}
            className="px-6 py-2 border border-neutral rounded-lg btn-neutral btn-outline mb-8"
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
