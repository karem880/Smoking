import React from 'react';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';

import 'slick-carousel/slick/slick.css'; // استيراد نمط الأساسي لمكتبة slick
import 'slick-carousel/slick/slick-theme.css'; // استيراد نمط الثيم لمكتبة slick

// تعريف مكون السلايدر المخصص
const CustomSlider = () => {
  // تحديد إعدادات السلايدر
  const settings = {
    dots: true, // إظهار نقاط التنقل
    speed: 2000, // سرعة الانتقال بين الشرائح بالميللي ثانية
    slidesToShow: 1, // عدد الشرائح المرئية في كل مرة
    slidesToScroll: 1, // عدد الشرائح التي يتم التمرير إليها في كل مرة
    autoplay: true, // تشغيل التشغيل التلقائي
    autoplaySpeed: 5000, // سرعة التشغيل التلقائي بالميللي ثانية
  };

  // تعريف محتوى الشرائح
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
    // إنشاء مرفق للروابط والسلايدر
    <NavLink className="w-[100%] mx-52">
      <Slider {...settings} className="mt-10">
        {slideContent.map((slide, index) => (
          // إنشاء شريحة واحدة
          <div key={index} className="relative rounded-xl overflow-hidden border-none outline-none none">
            {/* إظهار الصورة */}
            <img
              src={slide.image}
              alt={`Image ${index + 1}`}
              className="w-full h-[500px] md:h-[700px] object-cover transition-transform transform  hover:scale-105 duration-1000"
            />
            {/* إظهار النص والزرار */}
            <div className="absolute inset-0 flex flex-col  justify-end items-center   p-16 text-white">
              <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
              <h1 className="md:text-4xl text-lg font-extrabold mb-4 z-10 relative">{slide.caption}</h1>
              <a href={slide.link} >
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
