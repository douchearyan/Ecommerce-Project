import React from "react";
import Subscribe1 from "../../images1/subsribe.png";
const Subscribe = () => {
  const BannerImg = {
    backgroundImage: `url(${Subscribe1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };

  return (
    <div
      data-aos="zoom-in"
      className="bg-gray-100 dark:bg-gray-700 text-white mb-10"
      style={BannerImg}
    >
      <div className="space-y-6 max-w-xl mx-auto" >
        <div className="container backdrop-blur-sm py-10">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold mb-3">get notified about products</h1>
          <input data-aos="fade-up"type="text" placeholder="enter your email" className="w-full bg-white text-gray-700 p-3"/>
        </div>

      </div>
    </div>
  );
};

export default Subscribe;
