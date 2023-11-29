import React from "react";
import { Link } from "react-router-dom";

function Quistions() {
    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        ":root{\n::-webkit-scrollbar{height:10px;width:10px}::-webkit-scrollbar-track{background:#efefef;border-radius:6px}::-webkit-scrollbar-thumb{background:#d5d5d5;border-radius:6px}::-webkit-scrollbar-thumb:hover{background:#c4c4c4}",
                }}
            />
            {/*Header*/}
            <div className="w-full m-0 p-0 bg-cover bg-bottom"></div>

            {/*Container*/}
            <div className="container px-4 md:px-0 max-w-9xl mx-auto mt-32">
                <div className="mx-0 sm:mx-6">
                    <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
                        {/*Lead Card*/}
                        <div className="flex flex-col animationr md:flex-row h-full md:h-[700px] bg-white rounded overflow-hidden shadow-lg ">
                            <div className="w-full md:w-2/3 rounded-t">
                                <img
                                    src="./assets/doctor.png"
                                    className="h-full w-full shadow object-contain "
                                />
                            </div>
                            <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                                <div
                                    className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"
                                    dir="rtl"
                                >
                                    <p className="w-full text-gray-600 text-lg md:text-2xl font-bold pt-6 px-6">
                                        {" "}
                                        أضرار المخدرات
                                    </p>
                                    <div className="w-full font-bold text-xl text-gray-900 px-6 mt-5 ">
                                        فتنة خطيرة تستحق الوعي والتوعية
                                    </div>
                                    <p className="text-gray-800 font-semiblod text-base px-6 mb-5 mt-3 text-2xl py-5">
                                        <p>
                                            المخدرات، تلك الوسيلة الخطرة التي تشكل تحديًا كبيرًا للفرد
                                            والمجتمع. في هذا المقال، سنلقي نظرة عميقة على أضرار
                                            المخدرات وكيف يمكن أن تؤثر على حياة الأفراد والمحيط
                                            الاجتماعي بشكل كبير.
                                        </p>
                                        <p className="py-5">
                                            يبدو أن الإغراءات المرتبطة بتعاطي المخدرات تجذب الكثيرين،
                                            ولكن هل فكرنا أو وعينا بالتأثيرات الضارة التي يمكن أن
                                            تخلفها؟ دعونا نتسلح بالمعرفة ونكشف عن الخيوط الخفية لهذا
                                            العالم المظلم.
                                        </p>
                                        <p className="py-5">
                                            الصور اللتي ستعرض في الاسفل توضح بعض اشهر انواع المخدرات
                                            هيا . انغمسوا معنا في هذا الرحيل لاستكشاف الأضرار وراء هذه
                                            الجدران الظاهرية، ولنتعلم كيف يمكننا تشجيع بيئة خالية من
                                            المخدرات وتحفيز حياة صحية وإيجابية.
                                        </p>{" "}
                                    </p>
                                </div>
                                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                                    <div className="flex items-center justify-between">
                                        <img
                                            className="w-8 h-8 rounded-full mr-4 avatar"
                                            data-tippy-content="Author Name"
                                            src="./assets/Health_Logo.svg.png"
                                            alt="Avatar of Author"
                                        />
                                        <p className="text-gray-600 text-xs md:text-sm">
                                            1 MIN READ
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/*/Lead Card*/}
                        {/*Posts Container*/}
                        <div className="flex flex-wrap justify-between pt-12 mx-6 ">
                            {/*1/3 col */}
                            <div
                                className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink animationl"
                                dir="rtl"
                            >
                                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                                    <a
                                        href="#"
                                        className="flex flex-wrap  no-underline hover:no-underline"
                                    >
                                        <img
                                            src="./assets/حشيش.jpeg"
                                            className="h-64 w-full rounded-t pb-6"
                                        />
                                        <p className="w-full text-gray-900 text-xs md:text-xl font-blod px-6">
                                            الحشيش
                                        </p>
                                        <div className="w-full font-semiblod text-sm text-gray-900 px-6">
                                            هو مخدر يستخرج من القنب الهندي (Cannabis Sativa) والتي يتم
                                            زراعتها في المناطق الاستوائية والمناطق المعتدلة. والحشيش
                                            هو السائل المجفف من المادة الصمغية بينما الماريغوانا
                                            تستهلك بشكل عشب{" "}
                                        </div>

                                        <span className="text-red-500 w-full  text-xs md:text-2xl font-exterablod mt-2 mb-2 px-6">
                                            اضراره
                                        </span>
                                        <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                            <ul
                                                className="list-disc  font-semiblod flex flex-col gap-3"
                                                style={{ fontSize: "17px" }}
                                            >
                                                <li>
                                                    يتم الشعور ببداية التأثيرات في غضون دقائق عند التدخين،
                                                    وحوالي 30 إلى 60 دقيقة عند تناولها بالفم.
                                                </li>
                                                <li>
                                                    تغييرات في الإدراك؛ بما في ذلك الشعور بالإسترخاء،
                                                    السعادة (النشوة)
                                                </li>
                                                <li>ضعف الذاكرة قصيرة المدى</li>
                                                <li>
                                                    تغير الإحساس بالوقت والمكان (الشعور ان الزمن بطيء
                                                    والمسافات أطول)
                                                </li>
                                                <li>أحمرار العينين (انخفاض ضغط العين)</li>
                                                <li>
                                                    هبوط الضغط الإنتصابي (حدوث انخفاض في الضغط عند الوقوف)
                                                </li>
                                                <li>خفقان القلب (سرعة نبضات القلب)</li>
                                            </ul>
                                        </p>
                                    </a>
                                </div>
                                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                                    <div className="flex items-center justify-between">
                                        <img
                                            className="w-8 h-8 rounded-full mr-4 avatar"
                                            data-tippy-content="Author Name"
                                            src="./assets/Health_Logo.svg.png"
                                            alt="Avatar of Author"
                                        />
                                        <p className="text-gray-600 text-xs md:text-sm">
                                            1 MIN READ
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/*1/3 col */}
                            <div
                                className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink  animationb"
                                dir="rtl"
                            >
                                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                                    <a
                                        href="#"
                                        className="flex flex-wrap  no-underline hover:no-underline"
                                    >
                                        <img
                                            src="./assets/كوكايين.jpeg"
                                            className="h-64 w-full rounded-t pb-6"
                                        />
                                        <p className="w-full text-gray-900 text-xs md:text-xl font-blod px-6">
                                            الكوكايين
                                        </p>
                                        <div className="w-full font-semiblod text-sm text-gray-900 px-6">
                                            يعتبر أشد المنشطات الطبيعية. ويستخلص من أوراق نبات الكوكة
                                            الذي ينمو في أمريكا الجنوبية حيث يمضغه الأهالي وهو معروف
                                            لديهم منذ 5000 عام خاصة بوليفيا وبيرو أو يضعونه مع الشاي
                                            ويشربونه للانتعاش والتغلب على التعب.{" "}
                                        </div>

                                        <span className="text-red-500 w-full  text-xs md:text-2xl font-exterablod mt-2 mb-2 px-6">
                                            اضراره
                                        </span>
                                        <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                            <ul
                                                className="list-disc  font-semiblod flex flex-col gap-3"
                                                style={{ fontSize: "17px" }}
                                            >
                                                <li>
                                                    يعمل الكوكايين على زيادة مستوى الدوبامين وهي مادة
                                                    كيميائية طبيعية في الدماغ تتحكم بالمتعة والحركة.{" "}
                                                </li>
                                                <li>
                                                    عادة ما يطلق الجسم الدوبامين نتيجة لأمور جيدة مثل
                                                    رائحة الطعام الجيد.
                                                </li>
                                                <li>
                                                    يتم عادة إعادة تدوير الدوبامين في الخلايا التي اطلقته.
                                                </li>
                                                <li>
                                                    يعمل الكوكايين على منع الدوبامين من إعادة التدوير مما
                                                    يؤدي إلى تراكم كميات كبيرة بين الخلايا العصبية
                                                    وبالتالي يسبب عرقلة في اتصال الدماغ الطبيعي وذلك
                                                    لارتفاع كمية الكوكايين.
                                                </li>
                                                <li>الشعور بالقلق والتهيج.</li>
                                                <li>
                                                    آلام البطن والإحساس بالغثيان. :اقرا المزيد من خلال
                                                    موقع الطبي
                                                </li>
                                                <li>الانفعال والسلوكيات العنيفة والعدوانية.</li>
                                            </ul>
                                        </p>
                                    </a>
                                </div>
                                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                                    <div className="flex items-center justify-between">
                                        <img
                                            className="w-8 h-8 rounded-full mr-4 avatar"
                                            data-tippy-content="Author Name"
                                            src="./assets/Health_Logo.svg.png"
                                            alt="Avatar of Author"
                                        />
                                        <p className="text-gray-600 text-xs md:text-sm">
                                            1 MIN READ
                                        </p>
                                    </div>
                                </div>
                            </div>









                            {/*1/3 col */}
                            <div
                                className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink animationr"
                                dir="rtl"
                            >
                                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                                    <a
                                        href="#"
                                        className="flex flex-wrap  no-underline hover:no-underline"
                                    >
                                        <img
                                            src="./assets/هيروين.jpeg"
                                            className="h-64 w-full rounded-t pb-6"
                                        />
                                        <p className="w-full text-gray-900 text-xs md:text-xl font-blod px-6">
                                            الهيروين
                                        </p>
                                        <div className="w-full font-semiblod text-sm text-gray-900 px-6">
                                            وهو أهم شبه قلوي مستخرج من الخشخاش المنوم. مخدر قوي للجهاز العصبي المركزي ويسبب إدمانا جسميا ونفسيا قويا. في الغرب، يصنف مع المخدرات.
                                        </div>

                                        <span className="text-red-500 w-full  text-xs md:text-2xl font-exterablod mt-2 mb-2 px-6">
                                            اضراره
                                        </span>
                                        <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                            <ul
                                                className="list-disc  font-semiblod flex flex-col gap-3"
                                                style={{ fontSize: "17px" }}
                                            >
                                                <li>
                                                    خطورة الإصابة بعدوى خاصةً عند مشاركة الحقن، قد يصاب المدمن بمرض نقص المناعة المكتسبة (الإيدز) أو التهاب الكبد الوبائي.

                                                </li>
                                                <li>
                                                    مشاكل في الجلد بسبب تكرار الحقن كالدمامل والكدمات.



                                                </li>
                                                <li>
                                                    خسارة في الوزن.




                                                </li>
                                                <li>
                                                    تلف حاجز وأغشية الأنف بسبب استنشاق الهيروين.



                                                </li>
                                                <li>
                                                    أمراض في القلب ومشاكل في ضغط الدم.


                                                </li>
                                                <li>
                                                    مشاكل في العلاقات الاجتماعية؛ حيث يصبح المدمن عدوانياً وغير عقلانياً بسبب الإدمان مما يدمر علاقاته الإجتماعية، إضافةً إلى استعداده لارتكاب جريمة ليستطيع تأمين حاجته من الهيروين.


                                                </li>
                                                <li>
                                                    خفقان القلب (سرعة نبضات القلب)
                                                </li>
                                            </ul>
                                        </p>
                                    </a>
                                </div>
                                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                                    <div className="flex items-center justify-between">
                                        <img
                                            className="w-8 h-8 rounded-full mr-4 avatar"
                                            data-tippy-content="Author Name"
                                            src="./assets/Health_Logo.svg.png"
                                            alt="Avatar of Author"
                                        />
                                        <p className="text-gray-600 text-xs md:text-sm">
                                            1 MIN READ
                                        </p>
                                    </div>
                                </div>
                            </div>










                            {/*1/2 col */}
                            <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg" dir="rtl">
                                    <a
                                        href="#"
                                        className="flex flex-wrap no-underline hover:no-underline"
                                    >
                                        <img
                                            src="./assets/ميثا.jpeg"
                                            className="h-full w-full rounded-t pb-6"
                                        />
                                      <p className="w-full text-gray-900 text-xs md:text-xl font-blod px-6">
                                      الميثامفيتامين                                         </p>
                                        <div className="w-full font-semiblod text-sm text-gray-900 px-6">
                                        منبه قوي جدا للجهاز العصبي المركزي ينتمي أساسًا إلى العقارات الترفيهية ويُستخدم على نحو أقل ضمن علاجات الخط الثاني لاضطراب نقص الانتباه مع فرط النشاط وفي حالات السمنة.                                        </div>

                                        <span className="text-red-500 w-full  text-xs md:text-2xl font-exterablod mt-2 mb-2 px-6">
                                            اضراره
                                        </span>
                                        <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                            <ul
                                                className="list-disc  font-semiblod flex flex-col gap-3"
                                                style={{ fontSize: "17px" }}
                                            >
                                                <li>
                                                يؤثر الميثامفيتامين على مواد كيميائية محدّدة في الدماغ والجهاز العصبي بشكل مباشر، موهماً الشخص بالشعور بالطاقة الجسدية والنشاط والسعادة والثقة بالنفس، يقع المتعاطون للميثامفيتامين في حبائل الإدمان بسرعة، ويحتاجون إلى جرعات أكبر في كل مرة، وتتضمن الآثار الصحية المتباينة اضطراب دقات القلب وارتفاع ضغط الدم ومجموعة من المشاكل النفسية. وتشوهات في الوجه والشيخوخة المبكرة.
                                                </li>
                                        
                                            </ul>
                                        </p>
                                    </a>
                                </div>
                                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                                    <div className="flex items-center justify-between">
                                        <img
                                            className="w-8 h-8 rounded-full mr-4 avatar"
                                            data-tippy-content="Author Name"
                                            src="./assets/Health_Logo.svg.png"
                                            alt="Avatar of Author"
                                        />
                                        <p className="text-gray-600 text-xs md:text-sm">
                                            1 MIN READ
                                        </p>
                                    </div>
                                </div>
                            </div>






                            {/*1/2 col */}
                            <div className="w-full md:w-1/2 p-6  flex flex-col flex-grow flex-shrink" dir="rtl">
                                <div className="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                                    <a
                                        href="#"
                                        className="flex flex-wrap no-underline hover:no-underline"
                                    >
                                        <img
                                            src="./assets/طلاء.jpg"
                                            className="h-full w-full rounded-t pb-6"
                                        />
                                        <p className="w-full text-gray-900 text-xs md:text-xl font-blod px-6">
                                        المذيبات                                         </p>
                                        <div className="w-full font-semiblod text-sm text-gray-900 px-6">
                                        تشمل المذيبات المستحضرات الموجودة بمعظم المنازل، مثل الصموغ، ومخفف الطلاء (التينر)، ومزيل طلاء الأظافر (الأسيتون)، ووقود الولاعات، وبخاخات الرذاذ مثل مزيلات العرق. ، 
                                        </div>

                                        <span className="text-red-500 w-full  text-xs md:text-2xl font-exterablod mt-2 mb-2 px-6">
                                            اضراره
                                        </span>
                                        <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                            <ul
                                                className="list-disc  font-semiblod flex flex-col gap-3"
                                                style={{ fontSize: "17px" }}
                                            >
                                                <li>
قد يولد استنشاق المذيبات شعوراً بالنشوة أو ’دفعة إثارة‘ تشبه ما يشعر به الشخص المخمور. وعادة ما تزول تأثيرات المذيب بعد حوالي نصف ساعة. وقد تبدو مخموراً تعتريك حالة من تداخل الكلام، والترنح، وإصدار ضحكات هيستيرية، وعدم قدرة على السيطرة على نفسك،وربما تشعر بعد ذلك بنعاس.                                                </li>
                                        
                                            </ul>
                                        </p>
                                    </a>
                                </div>
                                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                                    <div className="flex items-center justify-between">
                                        <img
                                            className="w-8 h-8 rounded-full mr-4 avatar"
                                            data-tippy-content="Author Name"
                                            src="./assets/Health_Logo.svg.png"
                                            alt="Avatar of Author"
                                        />
                                        <p className="text-gray-600 text-xs md:text-sm">
                                            1 MIN READ
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*2/3 col */}
                         
                        </div>
                        {/*/ Post Content*/}
                    </div>
                    {/*Subscribe*/}
                    <div className="container font-sans bg-green-100 rounded mt-8 p-4 md:p-24 text-center" dir="ltr">
                        <h2 className="font-bold  text-2xl md:text-4xl mb-5">
ارسال رساله لصاحب الموقع او دعمه
                        </h2>
                        <h3 className="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">
قم بادخال رسالتك هنا                        </h3>
                        <div className="w-full text-center pt-4 h-[46px]">
                            <form action="# " className="flex item-center justify-center gap-2 mx-auto w-full md:w-[50%]">

                                <input type="text" className="bg-white border-gray-300 rounded-lg  p-3 h-[50px] outline-none w-[70%]" placeholder="ادخل رسالتك هنا" />
<button className="bg-green-500 text-white border-gray-300 rounded-lg p-3 h-[50px] w-[20%]">ارسال</button>
                              
                            </form>
                        </div>
                    </div>
                    {/* /Subscribe*/}
                    {/*Author*/}
                    <div className="flex w-full items-center font-sans p-8 md:p-24">
                        <img
                            className="w-10 h-10 rounded-full mr-4"
                            src="./assets/logo.png"
                            alt="Avatar of Author"
                        />
                        <div className="flex-1">
                            <p className="text-base font-bold text-base md:text-xl leading-none">
Hospital                            </p>
                            <p className="text-gray-600 text-xs md:text-base">
معا لمكافحة الادمان 
                                <a
                                    className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                                    href="#"
                                >
Hospital.com                                </a>
                            </p>
                        </div>
                        <div className="justify-end">
                            <Link to={"/"}
                                href="post.html"
                                className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full"
                            >
الرئيسيه
                            </Link>
                        </div>
                    </div>
                    {/*/Author*/}
                </div>
            </div>
            {/* <footer className="bg-gray-900">
                <div className="container max-w-6xl mx-auto flex items-center px-2 py-8">
                    <div className="w-full mx-auto flex flex-wrap items-center">
                        <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                            <a
                                className="text-gray-900 no-underline hover:text-gray-900 hover:no-underline"
                                href="#"
                            >
                                {" "}
                                <span className="text-base text-gray-200"> Hospital</span>
                            </a>
                        </div>
                        <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                            <ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
                                <li>
                                    <Link to={"/"}
                                        className="inline-block py-2 px-3 text-white no-underline"
                                        href="#"
                                    >
                                        home
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"hospital"}
                                        className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3"
                                        href="#"
                                    >
                                        Hospitals
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/"}                                        className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3"
                                    >
                                        DEVELOPER
                                        
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </footer> */}
        </>
    );
}

export default Quistions;
