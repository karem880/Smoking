import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import "./index.css";
import Main from "./pages/main/main";
import NotFound from './pages/NotFound';
import Hospital from "./pages/Hospital";
import Quistions from "./pages/quistions";
import Adivce from "./pages/Advice/Adivce";

function App() {
  return (
    <main className="w-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Main />}>
          {/* Nested routes under "/main" */}
          <Route path="/" element={<Home />} />
          <Route path="hospital" element={<Hospital />} />
          <Route path="quistions" element={<Quistions />} />
          <Route path="advice" element={<Adivce />} />

        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
