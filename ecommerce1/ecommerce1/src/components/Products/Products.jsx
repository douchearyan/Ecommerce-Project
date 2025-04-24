import React from 'react'
import w_ethnic from "../../assets/w_ethnic.png"
import w_western from "../../assets/w_western.jpg"
import m_goggles from "../../assets/m_goggles.jpg"
import m_printedtshirt from "../../assets/m_printedtshirt.jpg"
import m_tshirt from "../../assets/m_tshirt.jpg"
import { FaStar } from 'react-icons/fa'

const Products = () => {
    const ProductsData = [
        {
            id: 1,
            img:w_ethnic,
            title:"women_ethnic",
            rating:5.0,
            color:"orange",
            aosDelay:"0",
        },
        {
            id: 2,
            img:w_western,
            title:"women_western",
            rating:5.0,
            color:"blue",
            aosDelay:"300",
    
    
        },
        {
            id: 3,
            img:m_goggles,
            title:"goggles",
            rating:5.0,
            color:"blue",
            aosDelay:"350",
        },
        {
            id: 4,
            img:m_printedtshirt,
            title:"printed_tshirt",
            rating:5.0,
            color:"green",
            aosDelay:"350",
        },
        {
            id: 5,
            img:m_tshirt,
            title:"fashion_tshirt",
            rating:5.0,
            color:"pink",
            aosDelay:"400",
        },
    ];
    
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center w-max-[600px] mb-10 ">
            <p data-aos="fade-up" className=" text-[#FF6A00] text-sm font-[500]">
                Products for you
            </p>
            <h1 data-aos="fade-up" className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Products
            </h1>
            <p data-aos="fade-up" className="text-gray-600 text-xs">
            Lorem ipsum dolor sit
             amet consectetur adipisicing elit.
            </p>
        </div>
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 mt-10">
                {ProductsData.map((data) => (
                    <div 
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    key={data.id}
                    className="space-y-3">
                        <img src={data.img} alt="" className="h-[220px] w-[150px] object-cover rounded-md"/>
                        <div>
                            <h3 className="font-semibold">
                                {data.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {data.color}
                            </p>
                            <div className="flex items-center gap-1">
                                <FaStar className="text-yellow-300"/>
                                <span> {data.rating}</span>
                            </div>
                        </div>
                    </div>


                ))}
            </div>
        </div>

      </div>
    </div>
  )
}

export default Products
