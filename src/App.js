// App bileşeninizin kodu
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageComponents from "../src/components/MainPageComponents";
import CategoryComponents from "../src/components/CategoryComponents";
import AboutUs from "../src/components/AboutUs";
import ContactUs from "../src/components/ContactUs";
import "./base.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageComponents />} />
        <Route path="/categorySupplies" element={<CategoryComponents />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
