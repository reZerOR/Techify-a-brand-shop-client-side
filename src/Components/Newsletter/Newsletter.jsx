import banner from "../../assets/blob-scene-haikei.png";

const Newsletter = () => {
  return (
    <div
      className="hero max-w-7xl mx-auto h-[550px] my-10 rounded-lg"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="text-center w-[400px] text-white">
        <div className="">
          <h1 className="mb-6 text-5xl font-bold">
            Subscribe to our <br />
            <span className="text-yellow-400"> Newsletter </span>
          </h1>
          <div className="flex">
            <input
              className="w-full rounded-bl-xl p-4 b"
              type="text"
              placeholder="email"
            />
            <button className="p-4 rounded-r-xl bg-yellow-400 text-black font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
