import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/contact/Contact";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer/Footer";
function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
