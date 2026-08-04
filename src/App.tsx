import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import About from "./pages/About";
import Test from "./pages/Test";
import Projects from "./pages/Projects";
import Cursor from "./components/motions/cursor";
import CursorCircle from "./components/motions/cursor";

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        <CursorCircle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/more-about-me" element={<About />} />
          <Route path="/test" element={<Test />} />
          <Route path="/projects" element={<Projects />} />
          {/* You can add more routes here as needed */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
