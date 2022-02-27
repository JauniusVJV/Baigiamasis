import "./App.css";

import { useState } from "react";
import MainContext from "./context/MainContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Toolbar from "./comps/Toolbar";

import MainPage1 from "./Pages/MainPage1";
import RegisterUser from "./Pages/RegisterUser";

// import CreatePostPage from "./Pages/CreatePostPage";
// import SingleProductPage from "./Pages/SingleProductPage";
// import MainPage from "./Pages/MainPage";
// import CartPage from "./Pages/CartPage";
import About from "./Pages/About";
import DashBoard from "./Pages/DashBoard";

function App() {
  const [activePage, setActivePage] = useState("login");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  // const [allProducts, setProducts] = useState([]);
  // const [getCart, setCart] = useState([]);

  return (
    <MainContext.Provider
      value={{ activePage, setActivePage, setLoggedIn, loggedIn, user, setUser }}
    >
      <BrowserRouter>
        <Toolbar />
        <Routes>
          <Route path="/" element={<MainPage1 />} />
          <Route path="/registerUser" element={<RegisterUser />} />
          <Route path="/dash" element={<DashBoard />} />
          <Route path="/about" element={<About />} />
          {/* <Route
            path="/"
            element={<MainPage allProducts={allProducts} setProducts={setProducts} />}
          /> */}

          {/* <Route path="/create" element={<CreatePostPage />} /> */}

          {/* <Route
            path="/product/:id"
            element={<SingleProductPage getCart={getCart} setCart={setCart} />}
          /> */}

          {/* <Route path="/cart" element={<CartPage />} /> */}
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
