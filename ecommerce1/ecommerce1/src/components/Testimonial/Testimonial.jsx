import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import pfp1 from "../../images1/pfp1.jpg";
import pfp2 from "../../images1/pfp2.jpg";
import pfp3 from "../../images1/pfp3.jpg";
const Testimonial = () => {
  const TestimonialData = [
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      img: pfp1,
    },
    {
      id: 2,
      name: "Alice jhonson",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      img: pfp3,
    },
    {
      id: 3,
      name: "Jane smith",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      img: pfp2,
    },
  ];
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center w-max-[600px] mb-10 ">
          <p data-aos="fade-up" className=" text-gray-600 text-sm font-[500]">
            what our customers say
          </p>
          <h1
            data-aos="fade-up"
            className="font-bold text-[#FF6A00] text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Testimonial
          </h1>
          <p data-aos="fade-up" className="text-gray-600 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-4">
                <div
                  key={data.id}
                  className="flex flex-col gap-8 shadow-lg py-8 px-6 mx-4  rounded-xl bg-orange-200 
                dark:bg-gray-800 relative "
                >
                  <div className="">
                    <img
                      src={data.img}
                      alt=""
                      className="w-24 h-24 rounded-full"
                    ></img>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-gray-500 text-xs">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ;
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
