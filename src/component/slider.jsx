import React from 'react';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomSlider = () => {
  const settings = {
    dots: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const slideContent = [
    {
      image: "./assets/hos2.jpg",
      caption: "جو دافئ ومريح للمرضى",
      buttonText: "Learn More",
      link: "/hospital1",
    },
    {
      image: "./assets/hos1.jpg",
      caption: "مستشفى نظيف ومرتب",
      buttonText: "Explore",
      link: "/hospital2",
    },
    {
      image: "./assets/hos3.jpg",
      caption: "تجهيزات طبية حديثة وفريق طبي متخصص",
      buttonText: "Discover",
      link: "/hospital3",
    },
    {
      image: "./assets/stuf.jpg",
      caption: "طاقم طبي متعاون",
      buttonText: "Visit Now",
      link: "/hospital4",
    },
  ];

  return (
    <NavLink className="w-[100%] mx-52">
      <Slider {...settings} className="mt-10">
        {slideContent.map((slide, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden border-none outline-none none">
            <img
              src={slide.image}
              alt={`Image ${index + 1}`}
              className="w-full h-[500px] md:h-[700px] object-cover transition-transform transform  hover:scale-105 duration-1000"
            />
            <div className="absolute inset-0 flex flex-col  justify-end items-center   p-16 text-white">
              <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
              <h1 className="md:text-4xl text-lg font-extrabold mb-4 z-10 relative">{slide.caption}</h1>
              <a href='#hos' >
                <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full z-10 relative">
                  {slide.buttonText}
                </button>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </NavLink>
  );
};

export default CustomSlider;
