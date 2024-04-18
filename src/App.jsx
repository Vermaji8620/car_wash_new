import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div>
      {/* ******************* */}
      {/* <div className="first_section h-12"></div> */}
      {/* **************** */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
