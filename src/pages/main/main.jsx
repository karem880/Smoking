import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../../component/sideBar/sideBar';

const Main = () => {
  return (
    <>
      <main className="flex flex-col lg:flex-row w-full">
        {/* جزء الشريط الجانبي */}
        <div className='lg:fixed'>
          <Sidebar />
        </div>
        
        <div className='lg:w-[200px]'></div>
        
        {/* جزء الصفحة الرئيسي */}
        <section className="w-full md:w-[90%] mx-auto h-full">
          {/* Outlet يعرض المحتوى الذي يتغير بحسب المسار */}
          <Outlet />
        </section>
      </main>
    </>
  );
};


export default Main;
