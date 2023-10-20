import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Provider/Provider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useContext(authContext);
  const [errors, setErrors] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    setErrors("");

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          title: "Success!",
          text: "Coffee added to the database",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        setErrors("Invalid email or worng password");
      });
  };
  return (
    <div className="mt-28">
      <h2 className="text-5xl text-center font-bold">Please Login!</h2>
      <form
        onSubmit={handleLogin}
        className="card-body mx-auto shadow-xl rounded-xl max-w-xl"
      >
        {errors && <h2 className="text-red-600">{errors}</h2>}
        <div className="form-control mt-6">
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral">Login</button>
        </div>
        <h2 className="mt-4">
          Dont have an account?{" "}
          <Link to={"/register"} className="text-primary font-medium">
            Register
          </Link>
        </h2>
      </form>
    </div>
  );
};

export default Login;
