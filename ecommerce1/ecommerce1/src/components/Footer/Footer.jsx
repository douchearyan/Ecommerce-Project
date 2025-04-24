import React from "react";
import Subscribe1 from "../../images1/subsribe.png";
import Shopsylogo from "../../images/shopsylogo.png";
import FooterImage from "../../images1/footerimage.png";
import { FaInstagram, FaLocationArrow, FaMobileAlt,FaFacebook,FaTwitter } from "react-icons/fa";

const Footer = () => {
  const BannerImg = {
    backgroundImage: `url(${FooterImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };
  const FooterLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#About",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Blog",
      link: "/#Blog",
    },
  ];
  return (
    <div style={BannerImg} className=" text-white mb-1">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-54 pt-5">
          <div className="py-8 px-4">
            <h1 className=" text-2xl sm:text-4xl font-semibold mb-3 flex items-center gap-2">
              <img src={Shopsylogo} alt="" className="max-w-[50px]"></img>Shopsy
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              fugit cum molestias excepturi earum quibusdam?
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="flex gap-3">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-300"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-300"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a>
                  <FaFacebook className="text-3xl" />
                </a>
                <a>
                  <FaTwitter className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                    <FaLocationArrow/>
                    <p>Pauri-Garhwal,Uttrakhand</p>

                </div>
                <div className="flex items-center gap-3">
                    <FaMobileAlt/>
                    <p>+91-1234567892</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
