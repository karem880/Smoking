import React from "react";

import "animate.css/animate.min.css";

const data = [
  { id: 1, name: "مصحة الشفاء", location: "اسوان, مصر", phone: "555-1234" },

  { id: 2, name: "مصحة الرضا", location: "الدقهليه، مصر", phone: "555-5878" },

  { id: 3, name: "مصحة الخير", location: "القاهرة، مصر", phone: "555-9912" },

  { id: 4, name: "مصحة البركه", location: "القاهرة، مصر", phone: "555-3456" },
  { id: 5, name: "مصحة النقاء", location: "القاهرة، مصر", phone: "555-7890" },
  { id: 6, name: "مصحة السعاده", location: "القاهرة، مصر", phone: "555-2345" },
  { id: 7, name: "مصحة علاوي", location: "القاهرة، مصر", phone: "555-6789" },
  { id: 8, name: "مصحة القوه", location: "القاهرة، مصر", phone: "555-1234" },
  {
    id: 9,
    name: "مصحه النخيل",
    location: "القاهره المنصوره",
    phone: "555-5678",
  },
  { id: 10, name: "مصحه الرم ", location: "االغريه طنطا", phone: "555-9012" },
];

const Table = () => {
  return (
    <div
      className="container mx-auto mt-[250px] animate__animated animate__fadeInDown
    "
    >
      <table className="min-w-full bg-gray-800 text-white border border-gray-700 shadow-md rounded-md overflow-hidden">
        <thead>
          <tr className="bg-gray-700">
            <th className="px-4 py-2 text-center">Name</th>
            <th className="px-4 py-2 text-center">Address</th>
            <th className="px-4 py-2 text-center">Phone Number</th>
            <th className="px-4 py-2 text-center">Contact</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="animate__animated animate__fadeIn hover:bg-slate-700 hover:border-gray-800"
            >
              <td className="px-4 py-2 text-center">{item.name}</td>
              <td className="px-4 py-2 text-center">{item.location}</td>
              <td className="px-4 py-2 text-center">{item.phone}</td>
              <td className="px-4 py-2 text-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:scale-125 duration-1000 hover:bg-blue-600">
                  Contact
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

// tbody: يستخدم لتعريف جسم الجدول.
// data.map((item) => ...): يقوم بتكرار عناصر المصفوفة data لإنشاء صف لكل مصحة.
// key={item.id}: يُعين مفتاحًا فريدًا لكل صف.
// animate__animated animate__fadeIn: تأثير الظهور لكل صف.
// hover:bg-slate-700 hover:border-gray-800: تأثير عند تحويل الماوس يُظهر لون الصف بشكل مختلف.
// الأعمدة (<td>) تظهر معلومات المصحة.
// الزر "Contact" يُظهر زرًا للتواصل ويظهر تأثيرًا عند التحويل باستخدام Tailwind CSS classes.
// تم استخدام Tailwind CSS classes لتحديد نمط الجدول.
// min-w-full: يجعل الجدول يأخذ عرض كامل.
// bg-gray-800: خلفية الجدول.
// text-white: لون النص داخل الجدول.
// border: يُضيف حدودًا للجدول.
// border-gray-700: لون الحدود الرمادي الداكن.
// shadow-md: يضيف ظل للجدول.
// rounded-md: يُضيف حواف مدورة للجدول.
// overflow-hidden: يخفي أي محتوى يتجاوز حاوية الجدول.
// ترويسة الجدول (<thead>...</thead>):

// jsx

// thead: يُستخدم لتعريف ترويسة الجدول.
// يتم تحديد سطر (<tr>) لعناوين الأعمدة.
// bg-gray-700: خلفية سطر العناوين باللون الرمادي الداكن.
// جسم الجدول (<tbody>...</tbody>):

// jsx
