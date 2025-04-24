import React from "react";

import image_2 from "../images/image_2.png";
import image_1 from "../images/image_1.png";
import image_3 from "../images/image_3.png";
import Slider from "react-slick";
const Hero = () => {
  const ImageList = [
    {
      img: image_2,
      title: "WELCOME TO SHOPSY",
      description:
        "Shopsy is a leading e-commerce platform that offers a wide range of products at competitive prices.",
    },
    {
      img: image_1,
      title: "YOUR BRAND FAVS",
      description:
        "Shopsy is a leading e-commerce platform that offers a wide range of products at competitive prices.",
    },
    {
      img: image_3,
      title: "CHOOSE YOUR STYLE",
      description:
        "Shopsy is a leading e-commerce platform that offers a wide range of products at competitive prices.",
    },
  ];
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div
      className="relative overflow-hidden min-h-[550px]
     sm:min-h-[650px] bg-gray-100 dark:bg-zinc-500 flex 
     justify-center items-center 
     dark:bg-gray-950 dark:text-white"
    >
      <div
        className="h-[700px] w-[700px] bg-orange-200 absolute -top-1/2 
      right-0 rounded-3xl rotate-45 z-9"
      ></div>
      {/* {"this is hero section"} */}
      <div className="container pb-8 sm:pb-0 z-10 ">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 ">
                {/* textcontentsection */}
                <div
                  className="flex flex-col justify-center gap-4 pt-12
           sm:pt-0 sm:text-left order-2 sm:order-1 relative z-10"
                >
                  <div className="pl-12">
                    <h1  data-aos="zoom-in"
                    data-aos-once="true" data-aos-duration="500" className=" text-5xl sm:6xl lg:7xl font-serif font:bold mb-3">
                      {data.title}
                    </h1>
                    <p data-aos="fade-up"
                    data-aos-delay="100" data-aos-duration="500">{data.description}</p>
                    <div 
                    data-aos="fade-up"
                    data-aos-delay="200" data-aos-duration="500">
                      <button className="bg-[orange] rounded-full text-white px-4 py-2">
                        order Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h=[300px] sm:h-[450px] w=[450px] sm:scale-125 lg:scale-120 object-contain mx-auto"
                    ></img>
                  </div>
                </div>
                {/* text content section */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
