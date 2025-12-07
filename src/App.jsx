import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import Contact from "./pages/contact/Contact";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
