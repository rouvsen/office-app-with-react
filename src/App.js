// App bileşeninizin kodu
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageComponents from "../src/components/MainPageComponents";
import CategoryComponents from "../src/components/CategoryComponents";
import "./base.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageComponents />} />
        <Route path="/categorySupplies" element={<CategoryComponents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
