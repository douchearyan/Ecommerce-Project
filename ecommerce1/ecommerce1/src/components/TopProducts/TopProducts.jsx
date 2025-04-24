import React from "react";
import tshirt1 from "../../images1/tshirt1.png";
import tshirt2 from "../../images1/tshirt2.png";
import shoe1 from "../../images1/shoe1.png";
import { FaStar } from "react-icons/fa";
const TopProducts = () => {
  const ProductsData = [
    {
      id: 1,
      img: tshirt1,
      title: "Product 1",
      description: "lorem ipsum dolor sit amet this is a very great product ",
    },
    {
      id: 2,
      img: tshirt2,
      title: "Product 2",
      description:
        "lorem ipsum dolor these products are of premium quality and they are imported brands ",
    },
    {
      id: 3,
      img: shoe1,
      title: "Product 3",
      description:
        "lorem ipsum donor this product is a very good quality shoe and this is a unique color famous among our users one of our top products ",
    },
  ];
  return (
    <div>
      <div>
        {/* headersection */}
        <div className="text-left w-max-[600px] ml-6 mb-24">
          <p className=" text-[#FF6A00] text-sm font-[500]">
            Top Rated Products
          </p>
          <h1 className="font-bold text-3xl ">Best Products</h1>
          <p className="text-gray-400 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* bodysection */}
        <div className="grid grid-cols-1 gap-5 place-items-center md:grid-cols-3  md:gap-6 ">
          {ProductsData.map((product) => (
            <div
              className=" rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-orange-300 hover:text-white relative shadow-xl duration-high
                group max-w-[300px]"
            >
              <div>
                <img
                  src={product.img}
                  alt=""
                  className="max-w-[250px] block mx-auto transform -translate-y-10 group-hover:scale-125 duration-300 drop-shadow-md"
                />
              </div>
              <div className="flex items-center justify-center">
                <FaStar className="text-yellow-300 ml-2 mt-2" />
                <FaStar className="text-yellow-300 ml-2 mt-2" />
                <FaStar className="text-yellow-300 ml-2 mt-2" />
                <FaStar className="text-yellow-300 ml-2 mt-2" />
              </div>
              <div className="flex flex-col items-center justify-center text-center mt-4 mb-4">
                <h1 className="text-xl font-bold">{product.title}</h1>
                <p className="text-gray-400  group-hover:text-white duration-300 text-sm line-clamp-2">
                  {product.description}
                </p>
                <button className="bg-orange-300 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-orange-300">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
