import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import Footer from "../../Components/Footer/Footer";
import Newsletter from "../../Components/Newsletter/Newsletter";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <WhyChooseUs></WhyChooseUs>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
