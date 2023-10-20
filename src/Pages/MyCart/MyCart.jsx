import { useLoaderData } from "react-router-dom";
import CurtCard from "../../Components/CurtCard/CurtCard";
import { useState } from "react";
import Footer from "../../Components/Footer/Footer";

const MyCart = () => {
  const curtsLoaded = useLoaderData();
  const [curts, setCurts] = useState(curtsLoaded);
  return (
    <>
      <div className="max-w-7xl dark:text-black mx-auto">
        <h2 className="text-5xl font-bold text-center dark:text-white my-20">
          Your Curt
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 place-items-center">
          {curts.map((item) => (
            <CurtCard
              key={item._id}
              curt={item}
              curts={curts}
              setCurts={setCurts}
            ></CurtCard>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MyCart;
