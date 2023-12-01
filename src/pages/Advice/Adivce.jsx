import React from 'react'; // أول حاجة، بناخد مكتبة React

// بنستورد المكونات اللي هنستخدمها في الصفحة
import Main from './Main'; // Main يتضمن المحتوى الرئيسي
import "./advice.css"; // ملف الستايلات الخاص بالصفحة

function Adivce() {
    return (
        <>
            {/* <Header/> */}
            <Main />
            {/* <Footer/> */}
        </>
    );
}

export default Adivce;
