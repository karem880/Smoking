import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <>
      <div className="container mx-auto p-0 md:px-0 px-0 py-12 " dir='rtl'>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center h-[100vh]">
          <div className="w-[90%] mx-auto md:w-[60%] flex flex-col items-center md:items-center md:justify-center md:gap-10 mb-8 md:mb-0 text-slate-600 font-medium ">
            <h1 className="text-3xl animationt md:text-5xl font-extrabold  mb-4 mt-6 w-full text-center md:text-start text-slate-700">
مرحبا بكم في موقعنا!!
            </h1>
            <ul className=" flex items-start justify-start gap-3 text-lg flex-col">
            <li className="animationl">
   المكان الذي يسعى إلى نشر الوعي والمعرفة حول مشكلة الإدمان والمخدرات. نؤمن بأهمية فهم تأثيرات هذه الظاهرة الخطيرة على الفرد والمجتمع، ونعمل بجد لتوجيه الأنظار نحو الحلول والدعم.
</li>

<li className="animationr">
  في موقعنا، نسعى لتوفير مصادر موثوقة ومعلومات شاملة حول أخطار تعاطي المخدرات وتأثيراتها على الصحة البدنية والنفسية. نقدم نصائح وإرشادات حول كيفية التعرف على علامات الإدمان والخطوات اللازمة للتعافي.
</li>

<li className="animationl">
  هدفنا هو تمكين الأفراد بالمعرفة وتقديم الدعم الذي يحتاجونه للتغلب على التحديات التي قد تنشأ نتيجة لتعاطي المخدرات. نحن نشجع على المشاركة المجتمعية وتبادل الخبرات لبناء مجتمع أكثر صحة وعافية.
</li>

<li className="animationr">
  انضموا إلينا في رحلتنا لمكافحة الإدمان وتعزيز ثقافة التوعية. من خلال توفير المعلومات والدعم، نطمح في خلق بيئة تشجع على اتخاذ قرارات صحية وتحفيز الأفراد للابتعاد عن التعاطي والمساهمة في بناء مستقبل أفضل.
</li>

<li className="animationl">
  شكرًا لزيارتكم لموقعنا، ونتطلع إلى العمل المشترك لنرسم صورة أفضل للمستقبل.
</li>

</ul>


            <div className="flex flex-col md:flex-row mt-4 gap-5 mb-20 w-full">
              <Link
                to="/explore"
                className="bg-blue-500 animationb text-white px-6 py-3 rounded-full w-[70%] mx-auto md:w-[40%] flex items-center justify-center  mb-4 md:mr-4 md:mb-0 hover:bg-blue-600 transition duration-300"
              >
استكشف المصحات
              </Link>
              <Link
                to="/learn-more"
                className="bg-gray-700 animationb text-white px-6 py-3 rounded-full w-[70%] mx-auto md:w-[40%] flex items-center justify-center hover:bg-gray-800 transition duration-300"
              >
اعرف اكثر!              </Link>
            </div>
          </div>
          <div className="w-full mt-96 md:mt-0 md:w-1/2">
            <img
              src="./assets/hero.png"
              className="w-full animationl rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className='mt-[150px] md:mt-0'></div>
    </>
  );
}

export default Home;
