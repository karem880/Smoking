import { NavLink } from 'react-router-dom'; // استيراد NavLink من مكتبة react-router-dom لإنشاء روابط ملاحة
import { FiPhone, FiSettings, FiUser } from 'react-icons/fi'; // استيراد أيقونات من مكتبة react-icons/fi
import { IoPersonOutline, IoLogOutOutline, IoSchoolOutline, IoArrowUp, IoPencil, } from 'react-icons/io5'; // استيراد أيقونات من مكتبة react-icons/io5
import { CiViewTimeline } from 'react-icons/ci'; // استيراد أيقونة من مكتبة react-icons/ci
import { RxDashboard } from 'react-icons/rx'; // استيراد أيقونة من مكتبة react-icons/rx
import { useState, useEffect } from 'react'; // استخدام useState و useEffect من React Hooks
import "./sideBar.css" // استيراد ملف CSS لتنسيق الشريط الجانبي
import { AiOutlinePlus, AiOutlineMinus, AiOutlineInfoCircle, AiFillHome, AiOutlineQuestion } from 'react-icons/ai'; // استيراد أيقونات من مكتبة react-icons/ai
import { FaShieldAlt } from 'react-icons/fa'; // استيراد أيقونة من مكتبة react-icons/fa
import { IoIosMedkit } from 'react-icons/io'; // استيراد أيقونة من مكتبة react-icons/io

// تعريف مكون (Component) الشريط الجانبي
const Sidebar = () => {
  const [iscollapsed, setIsCollapsed] = useState(true); // حالة تتحكم في انهيار أو فتح الشريط الجانبي

  return (
    // تعريف عنصر الشريط الجانبي
    <aside className={`  ${iscollapsed ? 'sideBarAnimation items-center' : 'sideBarAnimationR items-start'} bg-white drop-shadow-lg lg:w-[200px] lg:h-[100vh]  lg:fixed   font-semibold  text-slate-500  flex flex-col  items-center  relative dark:bg-slate-700 dark:text-white`}>

      <div className='absolute top-2 right-2 text-lg z-[2] cursor-pointer' onClick={() => setIsCollapsed(!iscollapsed)}>
        {iscollapsed ? <AiOutlinePlus /> : <AiOutlineMinus />}
      </div>

      <header className='w-full capitalize  '>
        <div className=" flex flex-col  items-center justify-center   m-auto  lg:w-full w-max bg-white   overflow-hidden   dark:bg-slate-700 dark:text-white mt-5">
          <div className="flex   justify-center lg:mt-4 border-2 border-main m-auto rounded-full  h-16 w-16 overflow-hidden ">
            <img src='./assets/logo.png' className={` ${iscollapsed ? 'lg:text-3xl text-lg' : 'lg:text-6xl text-xl'} text-gray-200   w-full h-full`} />
          </div>
          <h1 className='font-black mt-5'>hospital</h1>
        </div>
      </header>

      <main className={`  ${iscollapsed ?  '' : 'flex-col h-max' }  items-start lg:mt-10 my-3 uppercase flex lg:flex-col  h-full  gap-y-8 p-2`}>
        <MenuItem to={"/"} icon={<AiFillHome  />} title={"الرئيسية "} iscollapsed={iscollapsed} />
        <MenuItem to={"hospital"} icon={<IoIosMedkit  />} title={"المصحات"} iscollapsed={iscollapsed} />
        <MenuItem to={"quistions"} icon={<AiOutlineQuestion  />} title={"اعرف اكثر"} iscollapsed={iscollapsed} />
        <MenuItem to={"advice"} icon={<FaShieldAlt />} title={"  الوقاية"} iscollapsed={iscollapsed} />
        <MenuItem to={"contact"} icon={<FiPhone   />} title={"تواصل "} iscollapsed={iscollapsed} />
      </main>
    </aside>
  );
}

// تصدير الشريط الجانبي كمكون رئيسي
export default Sidebar;

// تعريف مكون (Component) العنصر الفرعي للقائمة
const MenuItem = ({ icon, title, iscollapsed ,to }) => {
  return (
    // استخدام NavLink بدلاً من الرابط العادي لإنشاء روابط الملاحة
    <NavLink to={to} className="flex items-center  gap-x-0 lg:gap-x-2 text-lg hover:bg-[#0077ff] rounded p-2 hover:text-white  lg:h-max h-full    w-full cd client">
      {icon}
      {!iscollapsed && <h1>{title}</h1>}
    </NavLink>
  );
}
