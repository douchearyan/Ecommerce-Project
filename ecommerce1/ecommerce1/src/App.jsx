import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import AOS from "aos"
import "aos/dist/aos.css";
function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
      offset: 200,
    });AOS.refresh();
  },[]);
  return (

    <div>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Hero />
        <Products />
        <TopProducts/>
        <Banner/>
        <Subscribe/>
        <Testimonial/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
