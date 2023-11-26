// Hospital.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import CustomSlider from '../component/slider';
import { FaArrowAltCircleDown } from 'react-icons/fa';



function Hospital() {
  const hospitals = [
    {
        id:1,
      name: 'مصحة الشفاء',
      location: 'القاهرة، مصر',
      mindescription: 'مصحة متخصصة في علاج إدمان المخدرات والكحول.',
      maxdesc:"egffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      img:"../../public/assets/hos2.jpg"
    },
    {
        id:2,
      name: 'مصحة الشفاء',
      location: 'القاهرة، مصر',
      mindescription: 'مصحة متخصصة في علاج إدمان المخدرات والكحول.',
      maxdesc:"egffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      img:"../../public/assets/hos1.jpg"
    },
    {
        id:3,
      name: 'مصحة الشفاء',
      location: 'القاهرة، مصر',
      mindescription: 'مصحة متخصصة في علاج إدمان المخدرات والكحول.',
      maxdesc:"egffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      img:"../../public/assets/hos3.jpg"
    },
    {
        id:4,
      name: 'مصحة الشفاء',
      location: 'القاهرة، مصر',
      mindescription: 'مصحة متخصصة في علاج إدمان المخدرات والكحول.',
      maxdesc:"egffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      img:"../../public/assets/hos2.jpg"
    },
    {
        id:5,
      name: 'مصحة الشفاء',
      location: 'القاهرة، مصر',
      mindescription: 'مصحة متخصصة في علاج إدمان المخدرات والكحول.',
      maxdesc:"egffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      img:"../../public/assets/hos1.jpg"
    },
    {
        id:6,
      name: 'مصحة الشفاء',
      location: 'القاهرة، مصر',
      mindescription: 'مصحة متخصصة في علاج إدمان المخدرات والكحول.',
      maxdesc:"egffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      img:"../../public/assets/hos3.jpg"
    },
    {
        id:7,
      name: 'مصحة الشفاء',
      location: 'القاهرة، مصر',
      mindescription: 'مصحة متخصصة في علاج إدمان المخدرات والكحول.',
      maxdesc:"egffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      img:"../../public/assets/hos2.jpg"
    },
    {
        id:8,
      name: 'مصحة الشفاء',
      location: 'القاهرة، مصر',
      mindescription: 'مصحة متخصصة في علاج إدمان المخدرات والكحول.',
      maxdesc:"egffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      img:"../../public/assets/hos1.jpg"
    },

    
   
    // إضافة المزيد من بيانات مصحات العلاج هنا
  ];

  return (
    <div>
         <div className='w-full md:w-[80%] mx-auto'>
        <CustomSlider />
      </div>
      <div className="container mx-auto p-0 md:px-0 px-0 py-12 ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-around md:gap-60 h-[100vh]" dir='rtl'>
          <div className="w-[90%] mx-auto md:w-[70%] flex flex-col items-center md:items-center md:justify-center md:gap-10 mb-8 md:mb-0 text-slate-600 font-medium ">
            <h1 className="text-3xl animationt md:text-5xl font-extrabold mb-4 mt-6 w-full text-center md:text-start text-slate-700">
              مصحات العلاج من الإدمان في مصر
            </h1>

            <p className="animationl">
              تعتبر مصحات العلاج من الإدمان في مصر أحد الحلول الفعّالة للأفراد الذين يعانون من التحديات
              الناجمة عن إدمان المخدرات أو الكحول. تقدم هذه المصحات برامج شاملة وفريق طبي متخصص
              لدعم الأفراد في رحلتهم نحو التعافي.
            </p>

            <p className="animationr">
              يهدف مركزنا إلى توفير بيئة آمنة وداعمة للمدمنين، حيث يمكنهم الحصول على العلاج اللازم
              وتعلم استراتيجيات التغلب على الإدمان. يتميز فريقنا الطبي بالخبرة والتفاني في مساعدة
              الأفراد على استعادة حياتهم.
            </p>

            <p className="animationl">
              إذا كنت أو أحد أفراد عائلتك يعاني من مشاكل الإدمان، فلا تتردد في الاتصال بنا. نحن هنا
              لدعمك وتقديم المساعدة التي تحتاجها. سواء كنت بحاجة إلى استشارة أولية أو تحديد
              برنامج علاج مناسب، فإننا نقدم خدماتنا بكفاءة وسرية تامة.
            </p>

            <p className="animationr">
              تعاون مع مصحات العلاج من الإدمان في مصر هو خطوة هامة نحو بناء حياة أفضل والتغلب على
              التحديات. نحن هنا لدعم رحلتك نحو التعافي وتحقيق التحول الإيجابي في حياتك.
            </p>

            <div className="flex flex-col md:flex-row mt-4 gap-5 mb-20 w-full">
              <a
                href="#hos"
                className="bg-blue-500 animationb text-white px-6 py-3 rounded-full w-[70%] mx-auto md:w-[40%] flex items-center justify-center  mb-4 md:mr-4 md:mb-0 hover:bg-blue-600 transition duration-300"
              >
                عرض المصحات
              </a>
              <a
                href="#hos"
                className=" px-6 py-3 rounded-full w-[70%] mx-auto md:w-[40%] flex items-center justify-center text-5xl"
              >
                <FaArrowAltCircleDown className='move text-blue-500'/>
              </a>
            </div>
          </div>

          <div className="w-full mt-96 md:mt-0 md:w-[40%]">
            <img
              src="./assets/doctor.png"
              className="w-[80%] animationb  object-contain rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>

     

      <div className='mt-[450px] md:mt-90 flex items-center justify-center gap-8  flex-wrap  animationr ' id='hos'>
        {hospitals.map((item) => (
          <div key={item.id} className="bg-white shadow-md w-[80%] md:w-[350px] h-[500px] flex items-center justify-start flex-col rounded-tr-[50px] rounded-br-none rounded-bl-[50px] overflow-hidden " dir='rtl'>
            <img src={item.img} alt="Rehab Center" className="w-full h-[60%] object-cover mb-4 rounded-md" />
            <h3 className="text-lg font-semibold mb-2"> {item.name}</h3>
            <p className="text-sm text-gray-600 mb-2">الموقع:{item.location}</p>
            <p className="text-sm text-gray-700 mb-4">   {item.mindescription}  </p>
            <div className="flex justify-center gap-5 w-full" >
           
              <a href="#contact" className="bg-green-500 text-white px-4 py-2 w-[80%] rounded-tl-none rounded-tr-2xl rounded-br-none rounded-bl-2xl flex items-center justify-center hover:bg-green-600 transition duration-300">
                تواصل
              </a>
            </div>
          </div>
        ))}
      </div>
<section className='mt-32'></section>

      {/* <footer className="bg-gray-800 w-[95%] mx-auto mt-52 text-white w- p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">اسم الموقع</h1>
          <p className="text-gray-400">وصف قصير للموقع</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">روابط سريعة</h2>
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#">الرئيسية</a>
            </li>
            <li>
              <a href="#">المصحات</a>
            </li>
            <li>
              <a href="#">اتصل بنا</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">تواصل معنا</h2>
          <p className="text-gray-400">العنوان، المدينة</p>
          <p className="text-gray-400">info@example.com</p>
        </div>
      </div>
    </footer> */}
    </div>
  );
}

export default Hospital;
