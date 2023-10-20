import { useLoaderData } from "react-router-dom";
import CurtCard from "../../Components/CurtCard/CurtCard";
import { useState } from "react";

const MyCart = () => {
  const curtsLoaded = useLoaderData();
  const [curts, setCurts] = useState(curtsLoaded);
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center my-20">Your Curt</h2>
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
  );
};

export default MyCart;
