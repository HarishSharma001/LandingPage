import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home/Home.jsx";
import Products from "./components/Products";
import Contact from "./components/Contact";

import Page404 from "./components/Page404";
import Navbars from "./components/Home/Navbars.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbars />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/*" element={<Page404 />} />
      </Routes>
      {/* you can nested route in navbar components */}
    </>
  );
};
export default App;
