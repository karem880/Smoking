import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import "./index.css";
import Main from "./pages/main/main";
import NotFound from './pages/NotFound';
import Hospital from "./pages/Hospital";
import Quistions from "./pages/quistions";
import Adivce from "./pages/Advice/Adivce";
import Table from "./pages/contact";

function App() {
  return (
    <main className="w-screen overflow-x-hidden">
      {/* قم بتعريف مسارات التطبيق باستخدام مكون <Routes> في React Router */}
      <Routes>
        {/* المسار الرئيسي للتطبيق بأكمله */}
        <Route path="/" element={<Main />}>
          {/* مسارات متداخلة تحت "/main" */}
          {/* مسار الصفحة الرئيسية */}
          <Route path="/" element={<Home />} />
          {/* مسار الصفحة "hospital" */}
          <Route path="hospital" element={<Hospital />} />
          {/* مسار الصفحة "quistions" */}
          <Route path="quistions" element={<Quistions />} />
          {/* مسار الصفحة "advice" */}
          <Route path="advice" element={<Adivce />} />
          {/* مسار الصفحة "contact" */}
          <Route path="contact" element={<Table />} />
        </Route>

        {/* مسار للتعامل مع أي مسارات غير معروفة (404 Not Found) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
