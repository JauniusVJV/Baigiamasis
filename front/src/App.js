import "./App.css";

import { useState } from "react";
import MainContext from "./context/MainContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Toolbar from "./comps/Toolbar";

import LoginPage from "./Pages/LoginPage";

import CreatePostPage from "./Pages/CreatePostPage";
import SingleProductPage from "./Pages/SingleProductPage";
import MainPage from "./Pages/MainPage";
import CartPage from "./Pages/CartPage";

function App() {
  const [activePage, setActivePage] = useState([]);
  const [loggedIn, setLoggedIn] = useState([false]);

  const [allProducts, setProducts] = useState([]);
  const [getCart, setCart] = useState([]);

  return (
    <MainContext.Provider
      value={{
        getCart,
        setCart,
        activePage,
        setActivePage,
        setLoggedIn,
        loggedIn,
      }}
    >
      <BrowserRouter>
        <Toolbar />
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage />
              //   <MainPage allProducts={allProducts} setProducts={setProducts} />
            }
          />

          <Route
            path="/"
            element={
              <MainPage allProducts={allProducts} setProducts={setProducts} />
            }
          />
          <Route path="/create" element={<CreatePostPage />} />
          <Route
            path="/product/:id"
            element={<SingleProductPage getCart={getCart} setCart={setCart} />}
          />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;

// create application where user can upload products
// user should add product info in front-end and send data to back-and to upload it in mongodb
// in back and create separate router file and controllers file, also validator file
// validator should validate if fields not empty (validator should be middleware)
// when product is uploaded, user can see all data from database in main page
// user can click on single product and redirect to single product page (get product info by database its id)
// also in single product page create "delete product" functionality
// also user should be able to add products to shopping cart
// in cart user can add quantity or remove
// in cart should be number which shows total price of all products
// also cart button on toolbar should show total number of different products in cart
// shopping cart login and state should be managed in app.js (using context)
