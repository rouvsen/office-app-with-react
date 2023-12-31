import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageComponents from "../src/components/MainPageComponents";
import CategoryComponents from "../src/components/CategoryComponents";
import AboutUs from "../src/components/AboutUs";
import ContactUs from "../src/components/ContactUs";
import Delivery from "./components/Delivery";

import "./base.css";

function App() {

  const salesTypes = ['corporative', 'office']

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageComponents />} />
        <Route path="/corporativeSupplies" element={<CategoryComponents />} />
        <Route path="/officeSupplies" element={<CategoryComponents />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
