import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Women_page from "./Pages/Women_Page"
import Men_page from "./Pages/Men_page";
import Combos from "./Pages/Combos";
import Joggers from "./Pages/Joggers";




function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:productId" element={<Product/>} />
          <Route path="/women" element={<Women_page/>} />
          <Route path="/men" element={<Men_page/>} />
          <Route path="/combos" element={<Combos/>} />
          <Route path="/joggers" element={<Joggers/>} />
        </Routes>
     </Router>
    </>
  );
}

export default App;
