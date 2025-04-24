import React from "react";
import BannerImage from "../../images1/banner.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          <div data-aos="zoom-in">
            <img
              src={BannerImage}
              alt=""
              className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[-10px_8px_8px_rgba(0,0,0,1)] object-cover "
            ></img>
          </div>
          <div className="flex flex-col justify-center items-start gap-4 text-left">
            <h1 className="text-3xl sm:4-xl font-bold">
              Summer Sales Upto 50% Off
            </h1>
            <p className="text-sm text-gray-500 tracking-wide leading-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              dignissimos perspiciatis molestiae voluptatum modi
            </p>
            <div data-aos="fade-up"className=" flex flex-col gap-4 sm:flex-row sm:gap-10 mt-4">
            <div className="flex items-center gap-2">
              <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-200
              dark:bg-violet-350 "/>
              <p>Quality Products</p>
            </div>
            <div className="flex items-center gap-2">
              <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-200 dark:bg-orange-350" />
              <p>Fast Delivery</p>
            </div>
          </div>    
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
