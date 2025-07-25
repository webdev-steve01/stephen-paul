import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import About from "./pages/About";
import Test from "./pages/Test";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/more-about-me" element={<About />} />
        <Route path="/test" element={<Test />} />
        {/* You can add more routes here as needed */}
      </Routes>
    </>
  );
}

export default App;
